from time import sleep
import screen_coords
from champion import Champion
import arena_functions


class Arena:

    # pylint: disable=too-many-instance-attributes,too-many-public-methods
    def __init__(self, message_queue) -> None:
        self.message_queue = message_queue
        self.board_size = 0
        self.bench: list[None] = [None] * 9
        self.anvil_free: list[bool] = [False] * 9
        self.board: list = []
        self.board_unknown: list = []
        self.board_names: list = []
        self.items: list = []
        self.final_comp = False
        self.level = 0
        self.augment_roll = True
        self.spam_roll = False
    



    def spend_gold(self) -> None:
        shop: list = arena_functions.get_shop()
        print(f"  Shop: {shop}")

    def check_health(self) -> None:
        health: int = arena_functions.get_health()
        if health > 0:
            print(f"  Vida: {health}")
        else:
            print("  No ha sido posible recuperar la vida")

    def get_label(self) -> None:
        labels: list = [
            (f"{slot.name}", slot.coords)
            for slot in self.bench
            if isinstance(slot, Champion)
        ]
        for slot in self.board:
            if isinstance(slot, Champion):
                labels.append((f"{slot.name}", slot.coords))

        labels.extend(
            (slot, screen_coords.BOARD_LOC[self.unknown_slots[index]].get_coords())
            for index, slot in enumerate(self.board_unknown)
        )
        self.message_queue.put(("LABEL", labels))
