// tslint:disable:object-literal-key-quotes

export interface Player {
  name: { first: string; last: string; nickname?: string };
  jersey?: number;
  position: Position;
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
  ZHU = "zhu"
}

export enum Position {
  CUTTER = "Cutter",
  HANDLER = "Handler",
  COACH = "Coach"
}

export const PLAYERS: { [key in Players]: Player } = {
  backus: {
    name: { first: "Katie", last: "Backus", nickname: "Zeus" },
    jersey: 12,
    position: Position.CUTTER
  },
  ball: { name: { first: "DeAnna", last: "Ball" }, position: Position.COACH },
  barlow: {
    name: { first: "Molly", last: "Barlow" },
    jersey: 3,
    position: Position.CUTTER
  },
  barth: {
    name: { first: "Talia", last: "Barth" },
    jersey: 22,
    position: Position.HANDLER
  },
  bova: {
    name: { first: "Daniela", last: "Bova" },
    jersey: 15,
    position: Position.CUTTER
  },
  butts: {
    name: { first: "Sarah", last: "Butts" },
    jersey: 4,
    position: Position.CUTTER
  },

  chu: {
    name: { first: "Vivian", last: "Chu", nickname: "Viv" },
    jersey: 32,
    position: Position.HANDLER
  },
  colavincenzo: {
    name: { first: "Emma", last: "Colavincenzo", nickname: "Bubba" },
    jersey: 13,
    position: Position.CUTTER
  },
  craycraft: {
    name: { first: "Sarah", last: "Craycraft", nickname: "Jules" },
    jersey: 16,
    position: Position.CUTTER
  },
  // "delave": { name: {first: "Kelsey", last: "DeLave"}, jersey: 0},
  denney: {
    name: { first: "Grace", last: "Denney" },
    jersey: 44,
    position: Position.CUTTER
  },
  duffy: {
    name: { first: "Meg", last: "Duffy" },
    jersey: 42,
    position: Position.HANDLER
  },
  esposito: {
    name: { first: "Tia", last: "Esposito" },
    jersey: 66,
    position: Position.HANDLER
  },

  fazekas: {
    name: { first: "Mack", last: "Fazekas" },
    jersey: 30,
    position: Position.HANDLER
  },
  ficek: {
    name: { first: "Lauren", last: "Ficek", nickname: "Monty" },
    jersey: 28,
    position: Position.CUTTER
  },
  franke: {
    name: { first: "Lauren", last: "Franke" },
    jersey: 17,
    position: Position.CUTTER
  },
  griffith: {
    name: { first: "Mal", last: "Griffith" },
    jersey: 21,
    position: Position.CUTTER
  },
  harley: {
    name: { first: "Caitlin", last: "Harley" },
    jersey: 18,
    position: Position.HANDLER
  },
  haskell: {
    name: { first: "Nancy", last: "Haskell" },
    jersey: 2,
    position: Position.CUTTER
  },
  henkin: {
    name: { first: "Hannah", last: "Henkin", nickname: "Hank" },
    jersey: 37,
    position: Position.HANDLER
  },
  janjic: {
    name: { first: "Nina", last: "Janjic", nickname: "Ninja" },
    jersey: 4,
    position: Position.HANDLER
  },
  javersak: {
    name: { first: "Iris", last: "Javersak" },
    jersey: 99,
    position: Position.CUTTER
  },
  jezierski: {
    name: { first: "Sadie", last: "Jezierski" },
    jersey: 1,
    position: Position.HANDLER
  },

  knowles: {
    name: { first: "Sophie", last: "Knowles" },
    jersey: 20,
    position: Position.CUTTER
  },
  kwee: {
    name: { first: "Nichole", last: "Kwee" },
    jersey: 23,
    position: Position.HANDLER
  },
  leyden: {
    name: { first: "Ashley", last: "Leyden" },
    jersey: 2,
    position: Position.CUTTER
  },
  lin: {
    name: { first: "Austine", last: "Lin" },
    jersey: 75,
    position: Position.HANDLER
  },
  lo: {
    name: { first: "Tracey", last: "Lo", nickname: "T-Lo" },
    jersey: 11,
    position: Position.HANDLER
  },
  longmire: {
    name: { first: "Elizabeth", last: "Longmire", nickname: "Gg" },
    jersey: 27,
    position: Position.CUTTER
  },

  mast: {
    name: { first: "Jess", last: "Mast" },
    jersey: 12,
    position: Position.HANDLER
  },
  mccloskey: {
    name: { first: "Jodi", last: "McCloskey" },
    jersey: 30,
    position: Position.HANDLER
  },
  miller: {
    name: { first: "Stevie", last: "Miller" },
    jersey: 5,
    position: Position.HANDLER
  },
  moore: {
    name: { first: "Becky", last: "Moore", nickname: "Tots" },
    jersey: 8,
    position: Position.CUTTER
  },

  nitz: {
    name: { first: "Sara", last: "Nitz" },
    jersey: 7,
    position: Position.CUTTER
  },
  noonan: {
    name: { first: "Amanda", last: "Noonan" },
    jersey: 77,
    position: Position.CUTTER
  },
  perry: {
    name: { first: "Jenny", last: "Perry" },
    jersey: 38,
    position: Position.CUTTER
  },
  pruitt: {
    name: { first: "Corinn", last: "Pruitt", nickname: "Champ" },
    jersey: 6,
    position: Position.HANDLER
  },

  ramsey: {
    name: { first: "Catelen", last: "Ramsey", nickname: "Rams" },
    jersey: 2,
    position: Position.HANDLER
  },
  runzo: {
    name: { first: "Dani", last: "Runzo" },
    jersey: 21,
    position: Position.HANDLER
  },

  // "san pedro": { name: {first: "Sarah", last: "San Pedro"}, jersey: 0},
  scott: {
    name: { first: "Sara", last: "Scott" },
    jersey: 31,
    position: Position.CUTTER
  },
  simon: {
    name: { first: "Isabel", last: "Simon" },
    jersey: 33,
    position: Position.HANDLER
  },
  smiach: {
    name: { first: "Kristen", last: "Smiach" },
    jersey: 10,
    position: Position.CUTTER
  },
  steva: {
    name: { first: "Kristi", last: "Steva", nickname: "ChemE" },
    jersey: 22,
    position: Position.CUTTER
  },

  // "taylor": { name: {first: "Michelle", last: "Taylor", nickname: "Mosh"}, jersey: 0},
  theiss: { name: { first: "Andy", last: "Theiss" }, position: Position.COACH },
  torvinen: {
    name: { first: "Bailey", last: "Torvinen" },
    jersey: 27,
    position: Position.HANDLER
  },
  turner: {
    name: { first: "Mary", last: "Turner" },
    jersey: 21,
    position: Position.CUTTER
  },

  walker: {
    name: { first: "Janine", last: "Walker" },
    jersey: 9,
    position: Position.HANDLER
  },
  // used to be jersey number 20 -- need to solve for this case
  weinert: {
    name: { first: "Julia", last: "Weinert" },
    jersey: 24,
    position: Position.CUTTER
  },
  wetli: {
    name: { first: "Alaine", last: "Wetli", nickname: "Shakes" },
    jersey: 3,
    position: Position.HANDLER
  },
  wright: {
    name: { first: "Brittany", last: "Wright" },
    jersey: 15,
    position: Position.CUTTER
  },

  zettner: {
    name: { first: "Theresa", last: "Zettner", nickname: "TZ" },
    jersey: 14,
    position: Position.CUTTER
  },
  zhu: {
    name: { first: "Chelsea", last: "Zhu" },
    jersey: 23,
    position: Position.HANDLER
  }
};
