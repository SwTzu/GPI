

BASIC_ITEM: set[str] = {"BFSword","ChainVest","GiantsBelt","NeedlesslyLargeRod",
                            "NegatronCloak","RecurveBow","SparringGloves","Spatula",
                            "TearoftheGoddess"}

COMBINED_ITEMS: set[str] = {"DryadEmblem","FatedEmblem","GhostlyEmblem","HeavenlyEmblem",
                            "MythicEmblem","PorcelainEmblem","StoryweaverEmblem","UmbralEmblem",
                            "AdaptiveHelm","ArchangelsStaff","Bloodthirster","BlueBuff",
                            "BrambleVest","Crownguard","Deathblade","DragonsClaw",
                            "EdgeofNight","Evenshroud","GargoyleStoneplate","GiantSlayer",
                            "Guardbreaker","GuinsoosRageblade","HandofJustice","HextechGunblade",
                            "InfinityEdge","IonicSpark","JeweledGauntlet","LastWhisper",
                            "Morellonomicon","NashorsTooth","ProtectorsVow","Quicksilver",
                            "RabadonsDeathcap","RedBuff","Redemption","RunaansHurricane",
                            "SpearofShojin","StatikkShiv","SteadfastHeart","SteraksGage",
                            "SunfireCape","TacticiansCrown","ThiefsGloves","TitansResolve",
                            "WarmogsArmor"}

SUPPORT_ITEM: set[str] = {"AccomplicesGloves","AegisoftheLegion","BansheesVeil","ChaliceofPower",
                            "CrestofCinders","LocketoftheIronSolari","NeedlesslyBigGem","ObsidianCleaver",
                            "RanduinsOmen","ShroudofStillness","VirtueoftheMartyr","ZekesHerald",
                            "Zephyr","ZzRotPortal"}

NON_CRAFTABLE_ITEMS: set[str] = {"AltruistEmblem","ArcanistEmblem","BehemothEmblem","BruiserEmblem",
                                    "DragonlordEmblem","DuelistEmblem","Exaltedemblem","FortuneEmblem",
                                    "InkshadowEmblem","InvokerEmblem","ReaperEmblem","SageEmblem",
                                    "ScrollofForce","ScrollofHaste","SniperEmblem","TalismanofAid",
                                    "TalismanofMight","TalismanofSpeed","TattooofBombardement","TattooofForce",
                                    "TattooofFury","TattooofProtection","TattooofToxin","TattooofVitality",
                                    "TomeofMending","TomeofPower","TomeofSwiftness","Wardenemblem"}

ORNN_ITEMS: set[str] = {"AnimaVisage","BlacksmithsGloves","DeathfireGrasp","DeathsDefiance",
                        "DiamondHands","EternalWinter","GamblersBlade","GoldCollector",
                        "GoldmancersStaff","Hullcrusher","InfinityForce","Manazane",
                        "MogulsMail","Rocket-PropelledFist","SnipersFocus","TrickstersGlass",
                        "ZhonyasParadox"}

ITEMS: set[str] = BASIC_ITEM.union(COMBINED_ITEMS).union(SUPPORT_ITEM).union(NON_CRAFTABLE_ITEMS).union(ORNN_ITEMS)

TRAITS: set[str] = {"Celestial", "Dríade", "Duelista", "caca", "Dragonlord", "Exalted", "Fortune", "Guardian"}

CHAMPIONS = {
    "Aatrox":{"Gold":2,"Board Size":1,"Traits":["Bruiser", "Ghostly", "Inkshadow"]},
    "Ahri":{"Gold":1,"Board Size":1,"Traits":["Arcanist", "Fated"]},
    "Alune":{"Gold":3,"Board Size":1,"Traits":["Invoker", "Umbral"]},
    "Amumu":{"Gold":3,"Board Size":1,"Traits":["Warden", "Porcelain"]},
    "Annie":{"Gold":4,"Board Size":1,"Traits":["Invoker", "Fortune"]},
    "Aphelios":{"Gold":3,"Board Size":1,"Traits":["Sniper", "Fated"]},
    "Ashe":{"Gold":4,"Board Size":1,"Traits":["Sniper", "Porcelain"]},
    "Azir":{"Gold":5,"Board Size":1,"Traits":["Invoker", "Dryad"]},
    "Bard":{"Gold":3,"Board Size":1,"Traits":["Trickshot", "Mythic"]},
    "Caitlyn":{"Gold":1,"Board Size":1,"Traits":["Sniper", "Ghostly"]},
    "Chogath":{"Gold":1,"Board Size":1,"Traits":["Behemoth", "Mythic"]},
    "Darius":{"Gold":1,"Board Size":1,"Traits":["Duelist", "Umbral"]},
    "Diana":{"Gold":3,"Board Size":1,"Traits":["Sage", "Dragonlord"]},
    "Galio":{"Gold":4,"Board Size":1,"Traits":["Bruiser", "Storyweaver"]},
    "Garen":{"Gold":1,"Board Size":1,"Traits":["Warden", "Storyweaver"]},
    "Gnar":{"Gold":2,"Board Size":1,"Traits":["Warden", "Dryad"]},
    "Hwei":{"Gold":5,"Board Size":1,"Traits":["Artist", "Mythic"]},
    "Illaoi":{"Gold":3,"Board Size":1,"Traits":["Arcanist", "Warden", "Ghostly"]},
    "Irelia":{"Gold":5,"Board Size":1,"Traits":["Duelist", "Storyweaver"]},
    "Janna":{"Gold":2,"Board Size":1,"Traits":["Invoker", "Dragonlord"]},
    "Jax":{"Gold":1,"Board Size":1,"Traits":["Warden", "Inkshadow"]},
    "KaiSa":{"Gold":4,"Board Size":1,"Traits":["Trickshot", "Inkshadow"]},
    "Kayn":{"Gold":4,"Board Size":1,"Traits":["Reaper", "Ghostly"]},
    "Khazix":{"Gold":1,"Board Size":1,"Traits":["Reaper", "Heavenly"]},
    "Kindred":{"Gold":2,"Board Size":1,"Traits":["Reaper", "Fated", "Dryad"]},
    "Kobuko":{"Gold":1,"Board Size":1,"Traits":["Bruiser", "Fortune"]},
    "KogMaw":{"Gold":1,"Board Size":1,"Traits":["Sniper", "Invoker", "Mythic"]},
    "LeeSin":{"Gold":4,"Board Size":1,"Traits":["Duelist", "Dragonlord"]},
    "Lillia":{"Gold":4,"Board Size":1,"Traits":["Invoker", "Mythic"]},
    "Lissandra":{"Gold":5,"Board Size":1,"Traits":["Arcanist", "Porcelain"]},
    "Lux":{"Gold":2,"Board Size":1,"Traits":["Arcanist", "Porcelain"]},
    "Malphite":{"Gold":1,"Board Size":1,"Traits":["Behemoth", "Heavenly"]},
    "Morgana":{"Gold":4,"Board Size":1,"Traits":["Sage", "Ghostly"]},
    "Nautilus":{"Gold":4,"Board Size":1,"Traits":["Warden", "Mythic"]},
    "Neeko":{"Gold":2,"Board Size":1,"Traits":["Arcanist", "Heavenly", "Mythic"]},
    "Ornn":{"Gold":4,"Board Size":1,"Traits":["Behemoth", "Dryad"]},
    "Qiyana":{"Gold":2,"Board Size":1,"Traits":["Duelist", "Heavenly"]},
    "RekSai":{"Gold":1,"Board Size":1,"Traits":["Bruiser", "Dryad"]},
    "Riven":{"Gold":2,"Board Size":1,"Traits":["Bruiser", "Altruist", "Storyweaver"]},
    "Senna":{"Gold":2,"Board Size":1,"Traits":["Sniper", "Inkshadow"]},
    "Sett":{"Gold":5,"Board Size":1,"Traits":["Warden", "Umbral", "Fated"]},
    "Shen":{"Gold":2,"Board Size":1,"Traits":["Behemoth", "Ghostly"]},
    "Sivir":{"Gold":1,"Board Size":1,"Traits":["Trickshot", "Storyweaver"]},
    "Soraka":{"Gold":3,"Board Size":1,"Traits":["Altruist", "Heavenly"]},
    "Sylas":{"Gold":4,"Board Size":1,"Traits":["Bruiser", "Umbral"]},
    "Syndra":{"Gold":4,"Board Size":1,"Traits":["Arcanist", "Fated"]},
    "TahmKench":{"Gold":3,"Board Size":1,"Traits":["Bruiser", "Mythic"]},
    "Teemo":{"Gold":2,"Board Size":1,"Traits":["Trickshot", "Fortune"]},
    "Thresh":{"Gold":3,"Board Size":1,"Traits":["Behemoth", "Fated"]},
    "Tristana":{"Gold":3,"Board Size":1,"Traits":["Duelist", "Fortune"]},
    "Udyr":{"Gold":5,"Board Size":1,"Traits":["Behemoth", "SpiritWalker", "Inkshadow"]},
    "Volibear":{"Gold":3,"Board Size":1,"Traits":["Duelist", "Inkshadow"]},
    "Wukong":{"Gold":5,"Board Size":1,"Traits":["Sage", "Great", "Heavenly"]},
    "XayahRakan":{"Gold":5,"Board Size":1,"Traits":["Trickshot", "Lovers", "Dragonlord"]},
    "Yasuo":{"Gold":1,"Board Size":1,"Traits":["Duelist", "Fated"]},
    "Yone":{"Gold":3,"Board Size":1,"Traits":["Reaper", "Umbral"]},
    "Yorick":{"Gold":2,"Board Size":1,"Traits":["Behemoth", "Umbral"]},
    "Zoe":{"Gold":3,"Board Size":1,"Traits":["Arcanist", "Fortune", "Storyweaver"]},
    "Zyra":{"Gold":2,"Board Size":1,"Traits":["Sage", "Storyweaver"]}
}



ROUNDS: set[str] = {"1-1", "1-2", "1-3", "1-4",
                    "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8",
                    "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8",
                    "4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8",
                    "5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "5-7", "5-8",
                    "6-1", "6-2", "6-3", "6-4", "6-5", "6-6", "6-7", "6-8",
                    "7-1", "7-2", "7-3", "7-4", "7-5", "7-6", "7-7", "7-8"}

SECOND_ROUND: set[str] = {"1-2"}

CAROUSEL_ROUND: set[str] = {"1-1", "2-4", "3-4", "4-4", "5-4", "6-4", "7-4"}

PVE_ROUND: set[str] = {"1-3", "1-4", "2-7", "3-7", "4-7", "5-7", "6-7", "7-7"}

PVP_ROUND: set[str] = {"2-1", "2-2", "2-3", "2-5", "2-6",
                       "3-1", "3-2", "3-3", "3-5", "3-6",
                       "4-1", "4-2", "4-3", "4-5", "4-6",
                       "5-1", "5-2", "5-3", "5-5", "5-6",
                       "6-1", "6-2", "6-3", "6-5", "6-6",
                       "7-1", "7-2", "7-3", "7-5", "7-6"}

PICKUP_ROUNDS: set[str] = {"2-1", "3-1", "4-1", "5-1", "6-1", "7-1"}

ANVIL_ROUNDS: set[str] = {"2-1", "2-5", "3-1", "3-5", "4-1", "4-5", "5-1", "5-5", "6-1", "6-5", "7-1", "7-5"}

AUGMENT_ROUNDS: set[str] = {"2-1", "3-2", "4-2"}

ITEM_PLACEMENT_ROUNDS: set[str] = {"2-2", "3-2", "4-2", "5-2",
                                   "6-2", "7-2", "2-5", "3-5", "4-5", "5-5", "6-5", "7-5"}

ENCOUNTER_ROUNDS: set[str] = {"0-0"}

FINAL_COMP_ROUND = "4-5"

FULL_ITEMS = {"DryadEmblem":("Spatula","GiantsBelt"),
                "FatedEmblem":("Spatula","NeedlesslyLargeRod"),
                "GhostlyEmblem":("Spatula","BFSword"),
                "HeavenlyEmblem":("Spatula","NegatronCloak"),
                "MythicEmblem":("Spatula","TearoftheGoddess"),
                "PorcelainEmblem":("Spatula","RecurveBow"),
                "StoryweaverEmblem":("Spatula","ChainVest"),
                "UmbralEmblem":("Spatula","SparringGloves"),
                "AdaptiveHelm":("TearoftheGoddess","NegatronCloak"),
                "ArchangelsStaff":("TearoftheGoddess","NeedlesslyLargeRod"),
                "Bloodthirster":("BFSword","NegatronCloak"),
                "BlueBuff":("TearoftheGoddess","TearoftheGoddess"),
                "BrambleVest":("ChainVest","ChainVest"),
                "Crownguard":("NeedlesslyLargeRod","ChainVest"),
                "Deathblade":("BFSword","BFSword"),
                "DragonsClaw":("NegatronCloak","NegatronCloak"),
                "EdgeofNight":("BFSword","ChainVest"),
                "Evenshroud":("NegatronCloak","GiantsBelt"),
                "GargoyleStoneplate":("ChainVest","NegatronCloak"),
                "GiantSlayer":("BFSword","RecurveBow"),
                "Guardbreaker":("GiantsBelt","SparringGloves"),
                "GuinsoosRageblade":("NeedlesslyLargeRod","RecurveBow"),
                "HandofJustice":("SparringGloves","TearoftheGoddess"),
                "HextechGunblade":("BFSword","NeedlesslyLargeRod"),
                "InfinityEdge":("BFSword","SparringGloves"),
                "IonicSpark":("NeedlesslyLargeRod","NegatronCloak"),
                "JeweledGauntlet":("SparringGloves","NeedlesslyLargeRod"),
                "LastWhisper":("RecurveBow","SparringGloves"),
                "Morellonomicon":("NeedlesslyLargeRod","GiantsBelt"),
                "NashorsTooth":("RecurveBow","GiantsBelt"),
                "ProtectorsVow":("ChainVest","TearoftheGoddess"),
                "Quicksilver":("NegatronCloak","SparringGloves"),
                "RabadonsDeathcap":("NeedlesslyLargeRod","NeedlesslyLargeRod"),
                "RedBuff":("RecurveBow","RecurveBow"),
                "Redemption":("TearoftheGoddess","GiantsBelt"),
                "RunaansHurricane":("RecurveBow","NegatronCloak"),
                "SpearofShojin":("BFSword","TearoftheGoddess"),
                "StatikkShiv":("TearoftheGoddess","RecurveBow"),
                "SteadfastHeart":("SparringGloves","ChainVest"),
                "SteraksGage":("BFSword","GiantsBelt"),
                "SunfireCape":("ChainVest","GiantsBelt"),
                "TacticiansCrown":("Spatula","Spatula"),
                "ThiefsGloves":("SparringGloves","SparringGloves"),
                "TitansResolve":("ChainVest","RecurveBow"),
                "WarmogsArmor":("GiantsBelt","GiantsBelt")
            }

def champion_board_size(champion: str) -> int:
    """Takes a string (champion name) and returns board size of champion"""
    return CHAMPIONS[champion]["Board Size"]


def champion_gold_cost(champion: str) -> int:
    """Takes a string (champion name) and returns gold of champion"""
    return CHAMPIONS[champion]["Gold"]
