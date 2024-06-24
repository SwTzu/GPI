from time import sleep
from PIL import ImageGrab
import screen_coords
import ocr
import game_assets

def get_round() -> list[str, int]:
    screen_capture = ImageGrab.grab(bbox=screen_coords.ROUND_POS.get_coords())
    round_three = screen_capture.crop(screen_coords.ROUND_POS_THREE.get_coords())
    game_round: str = ocr.get_text_from_image(image=round_three, whitelist=ocr.ROUND_WHITELIST)
    if game_round in game_assets.ROUNDS:
        return [game_round, 3]

    round_two = screen_capture.crop(screen_coords.ROUND_POS_TWO.get_coords())
    game_round: str = ocr.get_text_from_image(image=round_two, whitelist=ocr.ROUND_WHITELIST)
    if game_round in game_assets.ROUNDS:
        return [game_round, 2]

    round_one = screen_capture.crop(screen_coords.ROUND_POS_ONE.get_coords())
    game_round: str = ocr.get_text_from_image(image=round_one, whitelist=ocr.ROUND_WHITELIST)
    if game_round in game_assets.ROUNDS:
        return [game_round, 1]
    return ["999-999",0]


def check_alive() -> bool:
    if ocr.get_text(screenxy=screen_coords.EXIT_NOW_POS.get_coords(), scale=3, psm=7) == 'EXIT NOW':
        return False
    return (
        ocr.get_text(
            screenxy=screen_coords.VICTORY_POS.get_coords(), scale=3, psm=7
        )
        != 'CONTINUE'
    )
