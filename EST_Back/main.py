import multiprocessing
from ui import UI
from game import Game
import settings

def game_loop(ui_queue: multiprocessing.Queue) -> None:
    while True:
        Game(ui_queue)

def start_main():
    if settings.LEAGUE_CLIENT_PATH is None:
        raise ValueError("No league client path specified. Please set the path in settings.py")
    message_queue = multiprocessing.Queue()
    overlay = UI(message_queue)
    game_thread = multiprocessing.Process(target=game_loop, args=(message_queue,))

    print("Iniciando Back")
    game_thread.start()
    overlay.ui_loop()

if __name__ == "__main__":
    start_main()
