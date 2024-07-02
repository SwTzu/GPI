from time import sleep, perf_counter
import random
import multiprocessing
import importlib
import requests
from win32con import BM_CLICK
import win32gui
import settings
import arena_functions
import game_assets
import game_functions
from arena import Arena
from vec4 import Vec4
from vec2 import Vec2
import arena_functions

class Game:
    def __init__(self, message_queue: multiprocessing.Queue) -> None:
        importlib.reload(game_assets)
        self.message_queue = message_queue
        self.arena = Arena(self.message_queue)
        self.round: list[str, int] = ["0-0", 0]
        self.time: None = None
        self.forfeit_time: int = settings.FORFEIT_TIME + random.randint(50, 150)
        self.found_window = False
        self.game_hwnd = None
        self.shop = []
        self.initTft = False
        self.selectedStrat = []
        self.health = 999
        self.level = 999

        print("\n[!] Buscando partida")
        while not self.found_window:
            win32gui.EnumWindows(self.callback, None)
            sleep(1)
        self.loading_screen()

    def callback(self, hwnd, extra) -> None:
        if "League of Legends (TM) Client" not in win32gui.GetWindowText(hwnd):
            return

        rect = win32gui.GetWindowRect(hwnd)
        x_pos = rect[0]
        y_pos = rect[1]
        width = rect[2] - x_pos
        height = rect[3] - y_pos

        if width < 200 or height < 200:
            return

        print(f"  Window {win32gui.GetWindowText(hwnd)} found")
        print(f"    Ubicacion (x,y): ({x_pos}, {y_pos})")
        print(f"    Dimensiones:     ({width}, {height})")
        Vec4.setup_screen(x_pos, y_pos, width, height)
        Vec2.setup_screen(x_pos, y_pos, width, height)
        self.found_window = True
        try:
            response = requests.put(settings.IS_OPEN, json={"League_is_open": True})
            if response.status_code == 200:
                pass
            else:
                pass
        except Exception as e:
            pass
        self.game_hwnd = hwnd

    def loading_screen(self) -> None:
        self.start_time: float = perf_counter()
        self.game_loop()

    def check_failed_to_connect_window(self) -> bool:
        hwnd = win32gui.FindWindow(None, "fallo al conectar")
        if hwnd:
            print(' Se encontró la ventana "Error al conectar", intentando salir y reconectarse')
            if reconnect_button := win32gui.FindWindowEx(hwnd, 0, "Button", None):
                if cancel_button := win32gui.FindWindowEx(
                    hwnd, reconnect_button, "Button", None
                ):
                    print("  Saliendo del juego.")
                    win32gui.SendMessage(cancel_button, BM_CLICK, 0, 0)
                    return True
                print("  Boton de cancelar no encontrado.")
            else:
                print("  Boton de reconectar no encontrado.")
        return False

    def send_data_to_api(self, data: dict) -> None:
        try:
            response = requests.put(settings.API_ENDPOINT, json=data)
            if response.status_code == 200:
                pass
            else:
                print(f"Failed to send data. Status code: {response.status_code}")
        except Exception as e:
            print(f"Error sending data to API: {e}")

    def is_window_in_foreground(self) -> bool:
        """Check if the game window is in the foreground"""
        foreground_hwnd = win32gui.GetForegroundWindow()
        return foreground_hwnd == self.game_hwnd

    def game_loop(self) -> None:
        ran_round: str = None
        while True:
            self.round = game_functions.get_round()
            if(self.round[0] != "999-999"):
                if (
                    settings.FORFEIT
                    and perf_counter() - self.start_time > self.forfeit_time
                ):
                    game_functions.forfeit()
                    continue

                # Analizar comandos de voz
                try:
                    response = requests.get('http://127.0.0.1:5000/api/get_voice_command')
                    if response.status_code == 200:
                        command_data = response.json()
                        if command_data.get('command'):
                            self.process_command(command_data['command'])
                except Exception as e:
                    print(f"Error fetching voice command: {e}")

                # print(arena_functions.get_traits())
                url = 'http://127.0.0.1:5000/api/get_composition'
                response = requests.get(url)
                composicion = response.json()
                cleanSelectedStratUnits = []
                if composicion:
                    selectedStratUnits = composicion.get('selectedStratUnits', [])
                    if selectedStratUnits:
                        cleanSelectedStratUnits = [unit.split('_')[1] for unit in selectedStratUnits]
              
                self.selectedStrat = cleanSelectedStratUnits

                
                if self.is_window_in_foreground():
                    self.health = arena_functions.get_health()
                    self.gold = arena_functions.get_gold()
                    self.level = arena_functions.get_level()
                    # arena_functions.get_bancard()
                    self.shop = arena_functions.get_shop()
                    if(self.round[0] != "0-0" and self.round[0] != "1-1" or self.round[0] in game_assets.SECOND_ROUND or self.round[0] in game_assets.ENCOUNTER_ROUNDS or self.round[0] in game_assets.CAROUSEL_ROUND or self.round[0] != ran_round):
                        for champion in cleanSelectedStratUnits:
                            for item in self.shop:
                                if item['Name'] == champion:
                                    item['is_recommended'] = True
                                
                        data = {
                            "level": self.level,
                            "health": self.health,
                            "round": self.round,
                            "shop": {item['Shop Position']: {
                                "Board Size": item["Board Size"],
                                "Gold": item["Gold"],
                                "Name": item["Name"],
                                "Traits": item["Traits"],
                                "is_recommended": item["is_recommended"]
                            } for item in self.shop},
                            "gold": self.gold
                            }
                        if(self.round[0] in game_assets.SECOND_ROUND or self.round[0] in game_assets.ENCOUNTER_ROUNDS or self.round[0] in game_assets.CAROUSEL_ROUND or self.round[0] != ran_round):
                            self.send_data_to_api(data)
                
                 #no esta en primer plano #actualizar los recomendados para mostrar en la pagina si cambio la estrategia
                    # if(self.round[0] != "0-0" and self.round[0] != "1-1" or self.round[0] in game_assets.SECOND_ROUND or self.round[0] in game_assets.ENCOUNTER_ROUNDS or self.round[0] in game_assets.CAROUSEL_ROUND or self.round[0] != ran_round):
                for item in self.shop:
                    if item['Name'] in self.selectedStrat:
                        item['is_recommended'] = True
                    else:
                        item['is_recommended'] = False

                data = {
                    "level": self.level,
                    "health": self.health,
                    "round": self.round,
                    "shop": {item['Shop Position']: {
                            "Board Size": item["Board Size"],
                            "Gold": item["Gold"],
                            "Name": item["Name"],
                            "Traits": item["Traits"],
                            "is_recommended": item["is_recommended"]
                        } for item in self.shop},
                        "gold": self.gold
                    }
                self.send_data_to_api(data)