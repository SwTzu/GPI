from difflib import SequenceMatcher
import threading
from PIL import ImageGrab
import numpy as np
import requests
import screen_coords
import ocr
import game_assets
from vec4 import Vec4
import json
import settings
from urllib3.exceptions import InsecureRequestWarning
from urllib3 import disable_warnings

disable_warnings(InsecureRequestWarning)
def get_level() -> int:
    try:
        response = requests.get(
            "https://127.0.0.1:2999/liveclientdata/allgamedata",
            timeout=10,
            verify=False,
        )
        return int(response.json()["activePlayer"]["level"])
    except (requests.exceptions.ConnectionError, KeyError):
        return 1


def get_health() -> int:
    try:
        response = requests.get(
            "https://127.0.0.1:2999/liveclientdata/allgamedata",
            timeout=10,
            verify=False,
        )
        return int(response.json()["activePlayer"]["championStats"]["currentHealth"])
    except (requests.exceptions.ConnectionError, KeyError):
        return -1


def get_gold() -> int:
    gold: str = ocr.get_text(
        screenxy=screen_coords.GOLD_POS.get_coords(),
        scale=3,
        psm=7,
        whitelist="0123456789",
    )
    try:
        return int(gold)
    except ValueError:
        return 0


def valid_champ(champ: str) -> str:
    if champ in game_assets.CHAMPIONS:
        return champ
    
    return next(
        (
            champion
            for champion in game_assets.CHAMPIONS
            if SequenceMatcher(a=champion, b=champ).ratio() >= 0.7
        ),
        "",
    )


def get_champ(screen_capture, name_pos, shop_pos, shop_array):
    champ_image = screen_capture.crop(name_pos.get_coords())
    champ_name = ocr.get_text_from_image(image=champ_image, whitelist=ocr.ALPHABET_WHITELIST)
    valid_name = valid_champ(champ_name)
    
    if valid_name:
        champ_data = game_assets.CHAMPIONS.get(valid_name)  # Assuming CHAMPIONS is a dictionary
        
        if champ_data:
            champ_info = {
                "Shop Position": shop_pos,
                "Name": valid_name,
                "Gold": champ_data.get("Gold"),
                "Board Size": champ_data.get("Board Size"),
                "Traits": champ_data.get("Traits"),
                "is_recommended": False,
            }
            
            shop_array.append(champ_info)
        else:
            pass
    else:
        pass



from PIL import ImageGrab


import pyautogui
import time

def get_screen_and_save(filename):
    # Capturar la pantalla en las coordenadas especificadas
    screen_img = ImageGrab.grab(bbox=(320, 120, 1920, 1200))

    # Guardar la imagen en un archivo con el nombre especificado
    screen_img.save(filename)
    print(f"Imagen guardada como {filename}")

import os
import cv2
def get_bancard():
    # Capturar la pantalla y guardar la imagen como "banco.png"
    x_start = 620
    y_start = 830
    width = 1200
    height = 270
    screen_img = ImageGrab.grab(bbox=(x_start, y_start, x_start + width, y_start + height))
    screen_img.save("banco.png")


    # Cargar las imágenes de campeones desde el directorio
    champ_dir = "champs_img/in_board/"
    champ_images = []
    champ_names = []
    for filename in os.listdir(champ_dir):
        img_path = os.path.join(champ_dir, filename)
        champ_img = cv2.imread(img_path)
        champ_images.append(champ_img)
        champ_names.append(os.path.splitext(filename)[0])

    # Convertir la imagen de pantalla a escala de grises
    gray_screen = cv2.cvtColor(np.array(screen_img), cv2.COLOR_RGB2GRAY)

    # Inicializar el detector de características SIFT
    sift = cv2.SIFT_create()

    # Encontrar los puntos clave y descriptores de la imagen de pantalla
    kp_screen, des_screen = sift.detectAndCompute(gray_screen, None)

    # Inicializar el matcher de fuerza bruta
    bf = cv2.BFMatcher()

    # Comparar cada imagen de campeón con la imagen de pantalla
    matching_champions = []
    for champ_img, champ_name in zip(champ_images, champ_names):
        # Convertir la imagen de campeón a escala de grises
        gray_champ = cv2.cvtColor(champ_img, cv2.COLOR_BGR2GRAY)

        # Encontrar los puntos clave y descriptores de la imagen de campeón
        kp_champ, des_champ = sift.detectAndCompute(gray_champ, None)

        # Aplicar el matcher de fuerza bruta y encontrar las coincidencias
        matches = bf.knnMatch(des_champ, des_screen, k=2)

        # Filtrar las coincidencias usando la relación de distancia
        good_matches = []
        for m, n in matches:
            if m.distance < 0.75 * n.distance:
                good_matches.append(m)

        # Si hay suficientes buenas coincidencias, consideramos que el campeón está presente
        if len(good_matches) > 10:
            matching_champions.append(champ_name)
    
    print(matching_champions)
    return matching_champions


def get_trait_presence(screen_capture, trait_name, trait_index, traits_array):
    """Check if a trait is present in the screen capture"""
    if trait_index % 2 == 1:
        traits_array.append(trait_name)

def get_shop() -> list:
    """Returns the list of champions in the shop"""
    screen_capture = ImageGrab.grab(bbox=screen_coords.SHOP_POS.get_coords())
    shop_array = []
    thread_list = []
    
    for shop_index, name_pos in enumerate(screen_coords.CHAMP_NAME_POS):
        thread = threading.Thread(
            target=get_champ, args=(screen_capture, name_pos, shop_index, shop_array)
        )
        thread_list.append(thread)
    
    for thread in thread_list:
        thread.start()
    
    for thread in thread_list:
        thread.join()
    
    # Sorting shop_array based on 'Shop Position'
    shop_array.sort(key=lambda x: x.get("Shop Position", 0))
    
    return shop_array