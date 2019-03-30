// tslint:disable:object-literal-key-quotes

export interface Player {
    name: {first: string, last: string, nickname?: string};
    jersey?: number;
}

export enum Players {
    BALL = "ball", // coach
    BACKUS = "backus",
    BARLOW = "barlow",
    BARTH = "barth",
    BOVA = "bova",
    BUTTS = "butts",
    CHU = "chu",
    COLAVINCENZO = "colavincenzo",
    CRAYCRAFT = "craycraft",
    // DELAVE = "delave",
    DENNEY = "denney",
    DUFFY = "duffy",
    ESPOSITO = "esposito",
    FAZEKAS = "fazekas",
    FICEK = "ficek",
    FRANKE = "franke",
    GRIFFITH = "griffith",
    HARLEY = "harley",
    HASKELL = "haskell",
    HENKIN = "henkin",
    JANJIC = "janjic",
    JAVERSAK = "javersak",
    JEZIERSKI = "jezierski",
    KNOWLES = "knowles",
    KWEE = "kwee",
    LEYDEN = "leyden",
    LIN = "lin",
    LO = "lo",
    LONGMIRE = "longmire",
    MAST = "mast",
    MCCLOSKEY = "mccloskey",
    MILLER = "miller",
    MOORE = "moore",
    NITZ = "nitz",
    NOONAN = "noonan",
    PERRY = "perry",
    PRUITT = "pruitt",
    RAMSEY = "ramsey",
    RUNZO = "runzo",
    // SANPEDRO = "san pedro",
    SCOTT = "scott",
    SIMON = "simon",
    SMIACH = "smiach",
    STEVA = "steva",
    // TAYLOR = "taylor",
    THEISS = "theiss", // coach
    TORVINEN = "torvinen",
    TURNER = "turner",
    WALKER = "walker",
    WEINERT = "weinert",
    WETLI = "wetli",
    WRIGHT = "wright",
    ZETTNER = "zettner",
    ZHU = "zhu",
}

export const PLAYERS: {[key in Players]: Player} = {

    "backus": { name: {first: "Katie", last: "Backus", nickname: "Zeus"}, jersey: 12},
    "ball": { name: {first: "DeAnna", last: "Ball"}},
    "barlow": { name: {first: "Molly", last: "Barlow"}, jersey: 3 },
    "barth": { name: {first: "Talia", last: "Barth"}, jersey: 22},
    "bova": { name: {first: "Daniela", last: "Bova"}, jersey: 15},
    "butts": { name: {first: "Sarah", last: "Butts"}, jersey: 4},

    "chu": { name: {first: "Vivian", last: "Chu", nickname: "Viv"}, jersey: 32},
    "colavincenzo": { name: {first: "Emma", last: "Colavincenzo", nickname: "Bubba"}, jersey: 13},
    "craycraft": { name: {first: "Sarah", last: "Craycraft", nickname: "Jules"}, jersey: 16},
    // "delave": { name: {first: "Kelsey", last: "DeLave"}, jersey: 0},
    "denney": { name: {first: "Grace", last: "Denney"}, jersey: 44},
    "duffy": { name: {first: "Meg", last: "Duffy"}, jersey: 42},
    "esposito": { name: {first: "Tia", last: "Esposito"}, jersey: 66},

    "fazekas": { name: {first: "Mack", last: "Fazekas"}, jersey: 30},
    "ficek": { name: {first: "Lauren", last: "Ficek", nickname: "Monty"}, jersey: 28},
    "franke": { name: {first: "Lauren", last: "Franke"}, jersey: 17},
    "griffith": { name: {first: "Mal", last: "Griffith"}, jersey: 21},
    "harley": { name: {first: "Caitlin", last: "Harley"}, jersey: 18},
    "haskell": { name: {first: "Nancy", last: "Haskell"}, jersey: 2},
    "henkin": { name: {first: "Hannah", last: "Henkin", nickname: "Hank"}, jersey: 37},
    "janjic": { name: {first: "Nina", last: "Janjic", nickname: "Ninja"}, jersey: 4},
    "javersak": { name: {first: "Iris", last: "Javersak"}, jersey: 99},
    "jezierski": { name: {first: "Sadie", last: "Jezierski"}, jersey: 1},

    "knowles": { name: {first: "Sophie", last: "Knowles"}, jersey: 20},
    "kwee": { name: {first: "Nichole", last: "Kwee"}, jersey: 23},
    "leyden": { name: {first: "Ashley", last: "Leyden"}, jersey: 2},
    "lin": { name: {first: "Austine", last: "Lin"}, jersey: 75},
    "lo": { name: {first: "Tracey", last: "Lo", nickname: "T-Lo"}, jersey: 11},
    "longmire": { name: {first: "Elizabeth", last: "Longmire", nickname: "Gg"}, jersey: 27},

    "mast": { name: {first: "Jess", last: "Mast"}, jersey: 12},
    "mccloskey": { name: {first: "Jodi", last: "McCloskey"}, jersey: 30},
    "miller": { name: {first: "Stevie", last: "Miller"}, jersey: 5},
    "moore": { name: {first: "Becky", last: "Moore", nickname: "Tots"}, jersey: 8},

    "nitz": { name: {first: "Sara", last: "Nitz"}, jersey: 7},
    "noonan": { name: {first: "Amanda", last: "Noonan"}, jersey: 77},
    "perry": { name: {first: "Jenny", last: "Perry"}, jersey: 38},
    "pruitt": { name: {first: "Corinn", last: "Pruitt", nickname: "Champ"}, jersey: 6},

    "ramsey": { name: {first: "Catelen", last: "Ramsey", nickname: "Rams"}, jersey: 2},
    "runzo": { name: {first: "Dani", last: "Runzo"}, jersey: 21},

    // "san pedro": { name: {first: "Sarah", last: "San Pedro"}, jersey: 0},
    "scott": { name: {first: "Sara", last: "Scott"}, jersey: 31},
    "simon": { name: {first: "Isabel", last: "Simon"}, jersey: 33},
    "smiach": { name: {first: "Kristen", last: "Smiach"}, jersey: 10},
    "steva": { name: {first: "Kristi", last: "Steva", nickname: "ChemE"}, jersey: 22},

    // "taylor": { name: {first: "Michelle", last: "Taylor", nickname: "Mosh"}, jersey: 0},
    "theiss": { name: {first: "Andy", last: "Theiss"}},
    "torvinen": { name: {first: "Bailey", last: "Torvinen"}, jersey: 27},
    "turner": { name: {first: "Mary", last: "Turner"}, jersey: 21},

    "walker": { name: {first: "Janine", last: "Walker"}, jersey: 9},
    // used to be jersey number 20 -- need to solve for this case
    "weinert": { name: {first: "Julia", last: "Weinert"}, jersey: 24},
    "wetli": { name: {first: "Alaine", last: "Wetli", nickname: "Shakes"}, jersey: 3},
    "wright": { name: {first: "Brittany", last: "Wright"}, jersey: 15},

    "zettner": { name: {first: "Theresa", last: "Zettner", nickname: "TZ"}, jersey: 14},
    "zhu": { name: {first: "Chelsea", last: "Zhu"}, jersey: 23},
};