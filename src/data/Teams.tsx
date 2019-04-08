// tslint:disable:max-line-length

export interface Team {
  name: string;
  location: string;
  logo?: string;
}

export enum Teams {
  SIXERS = "6ixers",
  BACKHANDED = "backhanded",
  BELLE = "belle",
  BRUTESQUAD = "brutesquad",
  DAYTON = "dayton",
  DISH = "dish",
  ELEVATE = "elevate",
  ENCORE = "encore",
  FLO = "flo",
  FRENZY = "frenzy",
  GREENMEANSGO = "greenmeansgo",
  HEISTX = "heist-x",
  HEISTY = "heist-y",
  HEIST = "heist",
  HELIX = "helix",
  HOTMETAL = "hotmetal",
  INDYROGUE = "indyrogue",
  JACKWAGON = "jackwagon",
  MAEVE = "maeve",
  MOLLYBROWN = "mollybrown",
  NEMESIS = "nemesis",
  NOTOROIOUSCLE = "notoriouscle",
  OZONE = "ozone",
  PHOENIX = "phoenix",
  POP = "pop",
  PPF = "ppf",
  REVOLOUTION = "revoloution",
  SIEGE = "siege",
  SCANDAL = "scandal",
  SCHWA = "schwa",
  SHOWDOWN = "showdown",
  SMALLBATCH = "smallbatch",
  SNAP = "snap",
  SPICYTUNA = "spicytuna",
  STELLA = "stella",
  SURESHOT = "sureshot",
  TRAFFIC = "traffic",
  UNDERGROUND = "underground",
  VIVA = "viva",
  WICKED = "wicked",
  WILDFIRE = "wildfire"
}

export const TEAMS: { [key in Teams]: Team } = {
  "6ixers": { name: "6ixers", location: "Toronto, Canada", logo: "" },

  backhanded: { name: "Backhanded", location: "Baltimore/DC", logo: "" },
  belle: { name: "Belle", location: "Cincinnati, OH", logo: "" },
  brutesquad: { name: "Brute Squad", location: "Boston, MA", logo: "" },

  dayton: { name: "Dayton Kraken", location: "Dayton, OH", logo: "" },
  dish: { name: "Dish", location: "Chicago, IL", logo: "" },
  elevate: { name: "Elevate", location: "Salt Lake City, UT", logo: "" },
  encore: { name: "Encore", location: "Nashville, TN", logo: "" },

  flo: { name: "Flo", location: "Cincinnati, OH", logo: "" },
  frenzy: { name: "Frenzy", location: "Chicago, IL", logo: "" },
  greenmeansgo: {
    name: "Green Means Go",
    location: "Philadelphia, PA",
    logo: ""
  },

  "heist-x": { name: "Heist X", location: "Madison, WI", logo: "" },
  "heist-y": { name: "Heist Y", location: "Madison, WI", logo: "" },
  heist: { name: "Heist", location: "Madison, WI", logo: "" },
  helix: { name: "Helix", location: "Chicago, IL", logo: "" },
  hotmetal: { name: "Hot Metal", location: "Pittsburgh, PA", logo: "" },

  indyrogue: { name: "Indy Rogue", location: "Indianapolis, IN", logo: "" },
  jackwagon: { name: "Jackwagon", location: "Boulder/Denver, CO", logo: "" },

  maeve: { name: "Maeve", location: "Dallas, TX", logo: "" },
  // "mistikue": {name: "MistiKuE", location: "", logo: ""},
  mollybrown: { name: "Molly Brown", location: "Denver/Boulder, CO", logo: "" },
  nemesis: { name: "Nemesis", location: "Chicago, IL", logo: "" },
  notoriouscle: {
    name: "Notorious C.L.E.",
    location: "Cleveland, OH",
    logo: ""
  },
  ozone: { name: "Ozone", location: "Atlanta, GA", logo: "" },

  phoenix: { name: "Phoenix", location: "Durham, NC", logo: "" },
  pop: { name: "Pop", location: "Minneapolis, MN", logo: "" },
  ppf: { name: "PPF", location: "Kitchener-Waterloo, CAN", logo: "" },
  revoloution: { name: "RevoLOUtion", location: "", logo: "" },

  siege: { name: "Siege", location: "Boston, MA", logo: "" },
  scandal: { name: "Scandal", location: "Washington D.C.", logo: "" },
  schwa: { name: "Schwa", location: "Portland, OR", logo: "" },
  showdown: { name: "Showdown", location: "Texas City, TX", logo: "" },
  smallbatch: { name: "Small Batch", location: "Denver, Colorado", logo: "" },
  snap: { name: "Snap", location: "Minneapolis, MN", logo: "" },
  spicytuna: { name: "Spicy Tuna", location: "Chicago, IL", logo: "" },
  stella: { name: "Stella", location: "Ottawa, CAN", logo: "" },
  sureshot: { name: "Sureshot", location: "Cincinnati, OH", logo: "" },

  traffic: { name: "Traffic", location: "Vancouver, Canada", logo: "" },

  underground: { name: "Underground", location: "Seattle, WA", logo: "" },
  viva: { name: "Viva", location: "Los Angeles, CA", logo: "" },

  // "winnipeg-mint": {name: "Winnipeg Mint", location: "", logo: ""},
  wicked: { name: "Wicked", location: "Kansas City, KS", logo: "" },
  wildfire: { name: "Wildfire", location: "San Diego, CA", logo: "" }
};
