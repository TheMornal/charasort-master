dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Books and CDs", key: "book" },
      { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" },
      { name: "Violet Detector", tooltip: "16.5 - Hifuu Nightmare Diary", key: "VD" },
      { name: "Wily Beast and Weakest Creature", tooltip: "17 - Kikeijuu", key: "WBaWC" },
      { name: "Unconnected Marketeers", tooltip: "18 - Kouryuudou", key: "UM" },
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Hollow Knight",
    },
    {
        name: "Kid Icarus",
    },
    {
        name: "Kid Icarus Uprising",
    },
    {
        name: "Portal",
    },
    {
        name: "Portal 2",
    },
    {
        name: "Team Fortress 2",
    },
    {
        name: "Persona 5 Royal",
    },
    {
        name: "Persona 5 Scramble",
    },
    {
        name: "BlazBlue CrossTag Battle",
    },
    {
        name: "Inscryption",
    },
    {
        name: "SUPERHOT",
    },
    {
        name: "Ape Out",
    },
    {
        name: "Slay the Spire",
    },
    {
        name: "Stanley Parable",
    },
    {
        name: "HADES",
    },
    {
        name: "Celeste",
    },
    {
        name: "Cuphead",
    },
    {
        name: "Minecraft",
    },
    {
        name: "DDLC",
    },
    {
        name: "Overwatch",
    },
    {
        name: "Mario Bros",
    },
    {
        name: "Super Mario Bros",
    },
    {
        name: "Super Mario Bros: The Lost Levels",
    },
    {
        name: "Super Mario Bros 2",
    },
    {
        name: "Super Mario Bros 3",
    },
    {
        name: "Super Mario Bros Wonder",
    },
    {
        name: "Super Mario World",
    },
    {
        name: "New Super Mario Bros",
    },
    {
        name: "New Super Mario Bros Wii",
    },
    {
        name: "New Super Mario Bros U",
    },
    {
        name: "New Super Luigi U",
    },
    {
        name: "Super Mario Land",
    },
    {
        name: "Super Mario Land 2",
    },
    {
        name: "Super Mario 35",
    },
    {
        name: "Super Mario 64",
    },
    {
        name: "Super Mario 64 DS",
    },
    {
        name: "Super Mario Sunshine",
    },
    {
        name: "Super Mario Galaxy",
    },
    {
        name: "Super Mario Galaxy 2",
    },
    {
        name: "Super Mario 3D Land",
    },
    {
        name: "Super Mario 3D World",
    },
    {
        name: "Captain Toad Treasure Tracker",
    },
    {
        name: "Bowser's Fury",
    },
    {
        name: "Super Mario Odyssey",
    },
    {
        name: "Super Mario Maker",
    },
    {
        name: "Super Mario Maker 2",
    },
    {
        name: "Super Mario RPG",
    },
    {
        name: "Super Mario Kart",
    },

    {
        name: "Yoshi's Island",
    },
    {
        name: "Yoshi's Island DS",
    },
    {
        name: "Yoshi's Wolly World",
    },
    {
        name: "Paper Mario",
    },
    {
        name: "Paper Mario: The Thousand Year Door",
    },
    {
        name: "Super Paper Mario",
    },
    {
        name: "Paper Mario: Sticker Star",
    },
    {
        name: "Paper Mario: The Origami King",
    },
    {
        name: "Mario & Luigi: Superstar Saga",
    },
    {
        name: "Mario & Luigi: Bowser's Inside Story",
    },
    {
        name: "Mario & Luigi: Dream Team",
    },
    {
        name: "Mario & Luigi: Paper Jam",
    },
    {
        name: "Mario Kart 64",
    },
    {
        name: "Mario Kart Super Circuit",
    },
    {
        name: "Mario Kart DS",
    },
    {
        name: "Mario Kart Wii",
    },
    {
        name: "Mario Kart 7",
    },
    {
        name: "Mario Kart 8 Deluxe",
    },
    {
        name: "Mario Party DS",
    },
    {
        name: "Mario Party 8",
    },
    {
        name: "Mario Party Island Tour",
    },
    {
        name: "Mario Party 10",
    },
    {
        name: "Mario Party Superstars",
    },
    {
        name: "Mario Hoops 3 on 3",
    },
    {
        name: "Mario Golf: World Tour",
    },
    {
        name: "Mario Super Sluggers",
    },
    {
        name: "Mario vs Donkey Kong",
    },
    {
        name: "Mario vs Donkey Kong 2: Mini's on the Move",
    },
    {
        name: "Mario vs Donkey Kong: Mini's March Again",
    },
    {
        name: "Mario + Rabbids: Kingdom Battle",
    },
    {
        name: "Dr. Mario",
    },
    {
        name: "Dr. Luigi",
    },
    {
        name: "WarioWare Gold",
    },
    {
        name: "WarioWare Inc",
    },
    {
        name: "Game and Wario",
    },
    {
        name: "Wario Land: Shake It",
    },
    {
        name: "Luigi's Mansion",
    },
    {
        name: "Luigi's Mansion 2",
    },
    {
        name: "Luigi's Mansion 3",
    },
    {
        name: "The Legend of Zelda",
    },
    {
        name: "The Legend of Zelda: A Link to the Past",
    },
    {
        name: "The Legend of Zelda: A Link Between Worlds",
    },
    {
        name: "The Legend of Zelda: Four Swords Adventures",
    },
    {
        name: "The Legend of Zelda: Ocarina of Time (3D)",
    },
    {
        name: "The Legend of Zelda: Majora's Mask",
    },
    {
        name: "The Legend of Zelda: Wind Waker",
    },
    {
        name: "The Legend of Zelda: Phantom Hourglass",
    },
    {
        name: "The Legend of Zelda: Spirit Tracks",
    },
    {
        name: "The Legend of Zelda: Breath of the Wild",
    },
    {
        name: "The Legend of Zelda: Tears of the Kingdom",
    },
    {
        name: "Drawn to Life: Spongebob Edition",
    },
    {
        name: "Brain Age",
    },
    {
        name: "Big Brain Academy",
    },
    {
        name: "Excite Truck",
    },
    {
        name: "Star Wars: The Force Unleashed",
    },
    {
        name: "Lego Star Wars: The Original Trilogy (DS)",
    },
    {
        name: "Sonic 1",
    },
    {
        name: "Sonic 2",
    },
    {
        name: "Sonic 3 & Knuckles",
    },
    {
        name: "Sonic 4",
    },
    {
        name: "Sonic 4 P2",
    },
    {
        name: "Sonic Rush",
    },
    {
        name: "Sonic Mania Plus",
    },
    {
        name: "Sonic Adventure DX",
    },
    {
        name: "Sonic Adventure 2",
    },
    {
        name: "Sonic Heroes",
    },
    {
        name: "Sonic Unleashed",
    },
    {
        name: "Sonic Generations",
    },
    {
        name: "Sonic Lost World",
    },
    {
        name: "Sonic Forces",
    },
    {
        name: "Sonic Frontiers",
    },
    {
        name: "Sonic and the Secret Rings",
    },
    {
        name: "Sonic and the Black Knight",
    },
    {
        name: "Sonic the Fighters",
    },
    {
        name: "Sonic Chronicles",
    },
    {
        name: "The Murder of Sonic the Hedgehog",
    },
    {
        name: "Infamous",
    },
    {
        name: "Infamous 2",
    },
    {
        name: "Infamous 2: Festival of Blood",
    },
    {
        name: "Infamous: Second Son",
    },
    {
        name: "CoD: Modern Warfare",
    },
    {
        name: "CoD: Modern Warfare 2",
    },
    {
        name: "CoD: Modern Warfare 3",
    },
    {
        name: "CoD: Black Ops",
    },
    {
        name: "Punch Out",
    },
    {
        name: "Punch Out Wii",
    },
    {
        name: "Doc Louis's Punch Out",
    },
    {
        name: "Donkey Kong",
    },
    {
        name: "Donkey Kong Jungle Climber",
    },
    {
        name: "Donkey Kong Country",
    },
    {
        name: "Donkey Kong Country Returns",
    },
    {
        name: "Donkey Kong Country: Tropical Freeze",
    },
    {
        name: "Arkham Asylum",
    },
    {
        name: "Arkham City",
    },
    {
        name: "Arkham Origins",
    },
    {
        name: "Arkham Origins: Blackgate",
    },
    {
        name: "Arkham Knight",
    },
    {
        name: "Telltale Batman",
    },
    {
        name: "Telltale Batman: The Enemy Within",
    },
    {
        name: "Ape Escape",
    },
    {
        name: "Ape Escape 2",
    },
    {
        name: "Starfox 64",
    },
    {
        name: "Banjo Kazooie",
    },
    {
        name: "Banjo Tooie",
    },
    {
        name: "Kirby's Dreamland",
    },
    {
        name: "Kirby's Dreamland 3",
    },
    {
        name: "Kirby's Dream Course",
    },
    {
        name: "Kirby: Nightmare in Dreamland",
    },
    {
        name: "Kirby 64",
    },
    {
        name: "Kirby and the Amazing Mirror",
    },
    {
        name: "Kirby Squeak Squad",
    },
    {
        name: "Kirby SuperStar Ultra",
    },
    {
        name: "Kirby's Return to Dreamland Deluxe",
    },
    {
        name: "Kirby Triple Deluxe",
    },
    {
        name: "Kirby Planet Robobot",
    },
    {
        name: "Kirby: Star Allies",
    },
    {
        name: "Kirby and the Forgotten Land",
    },
    {
        name: "Kirby Rainbow Curse",
    },
    {
        name: "Kirby Fighters DX",
    },
    {
        name: "Kirby Fighters 2",
    },
    {
        name: "Kirby Battle Royale",
    },
    {
        name: "Kirby Air Ride",
    },
    {
        name: "Kirby's Epic Yarn",
    },
    {
        name: "Megaman 1-10",
    },
    {
        name: "Megaman 11",
    },
    {
        name: "Megaman X",
    },
    {
        name: "Megaman X8",
    },
    {
        name: "Megaman Battle Network",
    },
    {
        name: "Castlevania",
    },
    {
        name: "Castlevania 4",
    },
    {
        name: "F-Zero",
    },
    {
        name: "Earthbound",
    },
    {
        name: "Mother 3",
    },
    {
        name: "Fire Emblem: Three Houses",
    },
    {
        name: "Fire Emblem Warriors",
    },
    {
        name: "Hyrule Warriors",
    },
    {
        name: "Hyrule Warriors: Age of Calamity",
    },
    {
        name: "Steamworld Dig",
    },
    {
        name: "Steamworld Dig 2",
    },
    {
        name: "Kingdom Hearts",
    },
    {
        name: "Kingdom Hearts: Chain of Memories",
    },
    {
        name: "Kingdom Hearts 2",
    },
    {
        name: "Kingdom Hearts 358/2",
    },
    {
        name: "Kingdom Hearts: Birth by Sleep",
    },
    {
        name: "Kingdom Hearts: Dream Drop Distance",
    },
    {
        name: "Kingdom Hearts 2.8",
    },
    {
        name: "Kingdom Hearts 3",
    },
    {
        name: "Rhythm Heaven Megamix",
    },
    {
        name: "Wii Sports",
    },
    {
        name: "Wii Sports Club",
    },
    {
        name: "Wii Fit",
    },
    {
        name: "Wii Music",
    },
    {
        name: "Wii Play",
    },
    {
        name: "Pokemon FireRed",
    },
    {
        name: "Pokemon HeartGold",
    },
    {
        name: "Pokemon Shining Pearl",
    },
    {
        name: "Pokemon Emerald",
    },
    {
        name: "Pokemon Black",
    },
    {
        name: "Pokemon X",
    },
    {
        name: "Pokemon Sun",
    },
    {
        name: "Pokemon Battle Revolution",
    },
    {
        name: "Pokemon Battle Trozei",
    },
    {
        name: "Pokemon Art Academy",
    },
    {
        name: "Pokemon Mystery Dungeon: Rescue Team",
    },
    {
        name: "Pokemon Mystery Dungeon: Explorers",
    },
    {
        name: "Pokemon Mystery Dungeon: Gates to Infinity",
    },
    {
        name: "Pokemon Super Mystery Dungeon",
    },
    {
        name: "Pokepark Wii",
    },
    {
        name: "Pokepark 2",
    },
    {
        name: "Splatoon",
    },
    {
        name: "Splatoon 3",
    },
    {
        name: "Pikmin 1",
    },
    {
        name: "Pikmin 2",
    },
    {
        name: "Pikmin 3",
    },
    {
        name: "Nintendo Land",
    },
    {
        name: "NES Remix",
    },
    {
        name: "NES Remix 2",
    },
    {
        name: "Scribblenauts",
    },
    {
        name: "Super Scribblenauts",
    },
    {
        name: "Scribblenauts Unlimited",
    },
    {
        name: "Scribblenauts Unmasked",
    },
    {
        name: "Poker Night",
    },
    {
        name: "Poker Night 2",
    },
    {
        name: "Picross Touch",
    },
    {
        name: "Mario's Picross",
    },
    {
        name: "Twilight Princess Picross",
    },
    {
        name: "Injustice: Gods Among Us",
    },
    {
        name: "Helltaker",
    },
    {
        name: "Half Life: Black Mesa",
    },
    {
        name: "Half Life 2",
    },
    {
        name: "Halo",
    },
    {
        name: "Halo 2",
    },
    {
        name: "Halo 3",
    },
    {
        name: "Halo 4",
    },
    {
        name: "Halo Reach",
    },
    {
        name: "Halo Wars",
    },
    {
        name: "Super Smash Bros.",
    },
    {
        name: "Super Smash Bros. Melee",
    },
    {
        name: "Super Smash Bros. Brawl",
    },
    {
        name: "Super Smash Bros. 3DS",
    },
    {
        name: "Super Smash Bros. Wii U",
    },
    {
        name: "Super Smash Bros. Ultimate",
    },
    {
        name: "Phoenix Wright: Ace Attorney",
    },
    {
        name: "Phoenix Wright: Ace Attorney – Justice For All",
    },
    {
        name: "Phoenix Wright: Ace Attorney – Trials and Tribulations",
    },
    {
        name: "Apollo Justice: Ace Attorney",
    },
    {
        name: "Ace Attorney Investigations",
    },
    {
        name: "Ace Attorney Investigations 2",
    },
    {
        name: "Great Ace Attorney 1",
    },
    {
        name: "Great Ace Attorney 2",
    },
    {
        name: "Phoenix Wright: Ace Attorney – Dual Destinies",
    },
    {
        name: "Phoenix Wright: Ace Attorney – Spirit of Justice",
    },
    {
        name: "Professor Layton vs. Phoenix Wright: Ace Attorney",
    },
    {
        name: "Tomodachi Life",
    },
    {
        name: "Miitopia",
    },
    {
        name: "Animal Crossing New Leaf",
    },
    {
        name: "Animal Crossing New Horizons",
    },
    {
        name: "Undertale",
    },
    {
        name: "Deltarune",
    },
    {
        name: "Dark Souls 2",
    },
    {
        name: "Dark Souls 3",
    },
    {
        name: "BloodBorne",
    },
    {
        name: "DOOM (90s)",
    },
    {
        name: "DOOM 2016",
    },
    {
        name: "DOOM Eternal",
    },
    {
        name: "Metroid",
    },
    {
        name: "Metroid 2: Return of Samus",
    },
    {
        name: "Metroid Samus Returns",
    },
    {
        name: "Super Metroid",
    },
    {
        name: "Medtroid Fusion",
    },
    {
        name: "Metroid Prime",
    },
    {
        name: "Metroid Prime 2",
    },
    {
        name: "Metroid Prime 3",
    },
    {
        name: "Metroid Other M",
    },
    {
        name: "Metroid Dread",
    },
    {
        name: "Uncharted",
    },
    {
        name: "Uncharted 2",
    },
    {
        name: "Uncharted 3",
    },
    {
        name: "Uncharted 4",
    },
    {
        name: "Marvel's Spider-Man",
    },
    {
        name: "Marvel's Spider-Man: Miles Morales",
    },
    {
        name: "Danganronpa",
    },
    {
        name: "Danganronpa 2",
    },
    {
        name: "Danganronpa v3",
    },
    {
        name: "Danganronpa: Another Episode",
    },
    {
        name: "Doodlejump",
    },
    {
        name: "Epic Mickey",
    },
    {
        name: "Lego Batman 2",
    },
    {
        name: "Gunman Clive",
    },
    {
        name: "Mirror's Edge",
    },
    {
        name: "Omori",
    },
    {
        name: "JermaSlots",
    },
    {
        name: "Bug Fables",
    },
    {
        name: "Baba is You",
    },
    {
        name: "Surgeon Simulator",
    },
    {
        name: "Superliminal",
    },
    {
        name: "Strong Bad's Cool Game for Attractive People",
    },
    {
        name: "God of War (PS4)",
    },
    {
        name: "OneShot",
    },
    {
        name: "Needy Girl Overdose",
    },
    {
        name: "Minit",
    },
    {
        name: "Castle Crashers",
    },
    {
        name: "OFF",
    },
    {
        name: "Among Us",
    },
    {
        name: "Bastion",
    },
    {
        name: "Pac-Pix",
    },
    {
        name: "PacNRoll",
    },
    {
        name: "Pac-Man World",
    },
    {
        name: "Pac Attack",
    },
    {
        name: "Pac Man",
    },
    {
        name: "Ms. Pac Man",
    },
    {
        name: "Galaga",
    },
    {
        name: "Pac Man Arrangement",
    },
    {
        name: "Pac Mania",
    },
    {
        name: "Assassin's Creed: Brotherhood",
    },
    {
        name: "Assassin's Creed: Revelation",
    },
    {
        name: "Assassin's Creed 3",
    },
    {
        name: "Tetris",
    },
    {
        name: "Missile Command",
    },
    {
        name: "Nintendogs",
    },
    {
        name: "Dr. Langeskov",
    },
    {
        name: "Henry Stickmin Collection",
    },
    {
        name: "Rolling Sun",
    },
    {
        name: "Pixplode",
    },
    {
        name: "Westerado",
    },
    {
        name: "Wonderful 101",
    },
    {
        name: "Spark the Electric Jester",
    },
    {
        name: "Moon Chronicles",
    },
    {
        name: "Ice Climber",
    },
    {
        name: "It’s time to get out from the solar system",
    },
    {
        name: "Baldur's Gate 3",
    },
    {
        name: "Duck Hunt",
    },
    {
        name: "Steven Universe: Attack the Light",
    },
    {
        name: "Metal Gear Solid 2",
    },
    {
        name: "Metal Gear Solid 3",
    },
    {
        name: "Metal Gear Solid Peace Walker",
    },
    {
        name: "Metal Gear Solid 5: Ground Zeroes",
    },
    {
        name: "Metal Gear Solid 5: The Phantom Pain",
    },
    {
        name: "Streetpass Mii Plaza",
    },
];
