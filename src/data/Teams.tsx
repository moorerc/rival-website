// tslint:disable:max-line-length

export interface Team {
  name: string;
  location: {
    city: string;
    state: string;
  };
  logo?: string;
  displayNameOverride?: string;
}

export enum Teams {
  SIXERS = "6ixers",
  AUTONOMOUS = "autonomous",
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
  IVY = "ivy",
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
  RIOT = "riot",
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
  "6ixers": {
    name: "6ixers",
    location: { city: "Toronto", state: "Canada" },
    logo: ""
  },

  autonomous: {
    name: "Autonomous",
    location: { city: "Detroit", state: "MI" },
    logo: ""
  },
  backhanded: {
    name: "Backhanded",
    location: { city: "Baltimore/DC", state: "" },
    logo: ""
  },
  belle: {
    name: "Belle",
    location: { city: "Cincinnati", state: "OH" },
    logo: ""
  },
  brutesquad: {
    name: "Brute Squad",
    location: { city: "Boston", state: "MA" },
    logo: ""
  },

  dayton: {
    name: "Dayton Kraken",
    location: { city: "Dayton", state: "OH" },
    logo: "",
    displayNameOverride: "Dayton Kraken"
  },
  dish: { name: "Dish", location: { city: "Chicago", state: "IL" }, logo: "" },
  elevate: {
    name: "Elevate",
    location: { city: "Salt Lake City", state: "UT" },
    logo: ""
  },
  encore: {
    name: "Encore",
    location: { city: "Nashville", state: "TN" },
    logo: ""
  },

  flo: { name: "Flo", location: { city: "Cincinnati", state: "OH" }, logo: "" },
  frenzy: {
    name: "Frenzy",
    location: { city: "Chicago", state: "IL" },
    logo: ""
  },
  greenmeansgo: {
    name: "Green Means Go",
    location: { city: "Philadelphia", state: "PA" },
    logo: ""
  },

  "heist-x": {
    name: "Heist X",
    location: { city: "Madison", state: "WI" },
    logo: ""
  },
  "heist-y": {
    name: "Heist Y",
    location: { city: "Madison", state: "WI" },
    logo: ""
  },
  heist: {
    name: "Heist",
    location: { city: "Madison", state: "WI" },
    logo: ""
  },
  helix: {
    name: "Helix",
    location: { city: "Chicago", state: "IL" },
    logo: ""
  },
  hotmetal: {
    name: "Hot Metal",
    location: { city: "Pittsburgh", state: "PA" },
    logo: ""
  },

  indyrogue: {
    name: "Indy Rogue",
    location: { city: "Indianapolis", state: "IN" },
    logo: "",
    displayNameOverride: "Indy Rogue"
  },
  ivy: { name: "Ivy", location: { city: "Portland", state: "OR" }, logo: "" },
  jackwagon: {
    name: "Jackwagon",
    location: { city: "Boulder/Denver", state: "CO" },
    logo: "",
    displayNameOverride: "Denver Jackwagon"
  },

  maeve: { name: "Maeve", location: { city: "Dallas", state: "TX" }, logo: "" },
  // "mistikue": {name: "MistiKuE", location: "", logo: ""},
  mollybrown: {
    name: "Molly Brown",
    location: { city: "Denver/Boulder", state: "CO" },
    logo: "",
    displayNameOverride: "Denver Molly Brown"
  },
  nemesis: {
    name: "Nemesis",
    location: { city: "Chicago", state: "IL" },
    logo: ""
  },
  notoriouscle: {
    name: "Notorious C.L.E.",
    location: { city: "Cleveland", state: "OH" },
    logo: ""
  },
  ozone: {
    name: "Ozone",
    location: { city: "Atlanta", state: "GA" },
    logo: ""
  },

  phoenix: {
    name: "Phoenix",
    location: { city: "Durham", state: "NC" },
    logo: "",
    displayNameOverride: "North Carolina Phoenix"
  },
  pop: {
    name: "Pop",
    location: { city: "Minneapolis", state: "MN" },
    logo: ""
  },
  ppf: {
    name: "PPF",
    location: { city: "Kitchener-Waterloo", state: "CAN" },
    logo: ""
  },
  revoloution: {
    name: "RevoLOUtion",
    location: { city: "St. Louis", state: "MO" },
    logo: ""
  },
  riot: {
    name: "Riot",
    location: { city: "Seattle", state: "WA" },
    logo: ""
  },

  siege: {
    name: "Siege",
    location: { city: "Boston", state: "MA" },
    logo: ""
  },
  scandal: {
    name: "Scandal",
    location: { city: "Washington D.C.", state: "" },
    logo: ""
  },
  schwa: {
    name: "Schwa",
    location: { city: "Portland", state: "OR" },
    logo: ""
  },
  showdown: {
    name: "Showdown",
    location: { city: "Texas City", state: "TX" },
    logo: "",
    displayNameOverride: "Texas Showdown"
  },
  smallbatch: {
    name: "Small Batch",
    location: { city: "Denver", state: "CO" },
    logo: ""
  },
  snap: {
    name: "Snap",
    location: { city: "Minneapolis", state: "MN" },
    logo: ""
  },
  spicytuna: {
    name: "Spicy Tuna",
    location: { city: "Chicago", state: "IL" },
    logo: ""
  },
  stella: {
    name: "Stella",
    location: { city: "Ottawa", state: "CAN" },
    logo: ""
  },
  sureshot: {
    name: "Sureshot",
    location: { city: "Cincinnati", state: "OH" },
    logo: ""
  },

  traffic: {
    name: "Traffic",
    location: { city: "Vancouver", state: "CAN" },
    logo: ""
  },

  underground: {
    name: "Underground",
    location: { city: "Seattle", state: "WA" },
    logo: ""
  },
  viva: {
    name: "Viva",
    location: { city: "Los Angeles", state: "CA" },
    logo: ""
  },

  // "winnipeg-mint": {name: "Winnipeg Mint", location: "", logo: ""},
  wicked: {
    name: "Wicked",
    location: { city: "Kansas City", state: "KS" },
    logo: ""
  },
  wildfire: {
    name: "Wildfire",
    location: { city: "San Diego", state: "CA" },
    logo: ""
  }
};
