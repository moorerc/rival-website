// tslint:disable:max-line-length

import { Players } from "./Players";

export interface RosterList {
  coaches: Players[];
  players: Players[];
  captains: Players[];
  link: string;
  displayName: string;
  id: string;
  results: {
    wins: number;
    losses: number;
    finish: string;
  };
  highlights: string[];
  rosterAnnounceLink?: string;
  year: number;
}

export const RIVAL_2015: RosterList = {
  displayName: "Rival 2015",
  id: "rival-2015",
  coaches: [Players.BALL, Players.THEISS],
  players: [
    Players.RAMSEY,
    Players.WETLI,
    Players.BUTTS,
    Players.MILLER,
    Players.PRUITT,
    Players.MOORE,
    Players.WALKER,
    Players.SMIACH,
    Players.LO,
    Players.BACKUS,
    Players.ZETTNER,
    Players.BOVA,
    Players.CRAYCRAFT,
    Players.FRANKE,
    Players.HARLEY,
    Players.WEINERT,
    Players.TURNER,
    Players.STEVA,
    Players.TORVINEN,
    Players.SCOTT,
    Players.SIMON,
    Players.HENKIN
  ],
  captains: [Players.HARLEY, Players.MOORE, Players.WALKER],
  link:
    "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=5HEbMP7FF%2beI%2b8Jwythe%2bk1LQ%2fpfrWWQZ5xdAk4rIZE%3d",
  results: {
    wins: 20,
    losses: 5,
    finish: "2nd Regionals"
  },
  highlights: ["we exist!"],
  year: 2015
};

export const RIVAL_2016: RosterList = {
  displayName: "Rival 2016",
  id: "rival-2016",
  coaches: [Players.BALL, Players.THEISS],
  players: [
    Players.JEZIERSKI,
    Players.LEYDEN,
    Players.WETLI,
    Players.BUTTS,
    Players.MILLER,
    Players.PRUITT,
    Players.MOORE,
    Players.WALKER,
    Players.SMIACH,
    Players.LO,
    Players.BACKUS,
    Players.ZETTNER,
    Players.WRIGHT,
    Players.CRAYCRAFT,
    Players.HARLEY,
    Players.KNOWLES,
    Players.RUNZO,
    Players.BARTH,
    Players.TORVINEN,
    Players.FICEK,
    Players.MCCLOSKEY,
    Players.SCOTT,
    Players.HENKIN,
    Players.NOONAN
  ],
  captains: [Players.HARLEY, Players.MOORE, Players.WALKER],
  link:
    "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=bvrS626rQi8ySt8ItZU73985TuQ2WS7CBQ8bTnVGuCo%3d",
  results: {
    wins: 23,
    losses: 6,
    finish: "12th Nationals"
  },
  highlights: [
    "first year qualifying for nationals",
    "first qualification for top select flight",
    "nationals team spirit award recipients"
  ],
  year: 2016
};

export const RIVAL_2017: RosterList = {
  displayName: "Rival 2017",
  id: "rival-2017",
  coaches: [Players.BALL, Players.THEISS],
  players: [
    Players.JANJIC,
    Players.MILLER,
    Players.PRUITT,
    Players.NITZ,
    Players.MOORE,
    Players.WALKER,
    Players.SMIACH,
    Players.LO,
    Players.BACKUS,
    Players.COLAVINCENZO,
    Players.ZETTNER,
    Players.WRIGHT,
    Players.HARLEY,
    Players.KNOWLES,
    Players.BARTH,
    Players.ZHU,
    Players.LONGMIRE,
    Players.FAZEKAS,
    Players.SCOTT,
    Players.CHU,
    Players.HENKIN,
    Players.PERRY
  ],
  captains: [Players.HARLEY, Players.MOORE, Players.WALKER],
  link:
    "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=YEuqlS%2fJ5lH0T%2fIKyERLvU%2bboao7c%2bwIggBop%2fT13KA%3d",
  results: {
    wins: 18,
    losses: 12,
    finish: "T9th Nationals"
  },
  highlights: ["first qualification for elite flight"],
  rosterAnnounceLink: "https://youtu.be/VyMhGNYJQjw",
  year: 2017
};

export const RIVAL_2018: RosterList = {
  displayName: "Rival 2018",
  id: "rival-2018",
  coaches: [Players.BALL],
  players: [
    Players.HASKELL,
    Players.BARLOW,
    // Players.MILLER,
    Players.PRUITT,
    Players.NITZ,
    Players.MOORE,
    Players.WALKER,
    Players.SMIACH,
    Players.LO,
    Players.MAST,
    Players.ZETTNER,
    Players.WRIGHT,
    Players.CRAYCRAFT,
    Players.HARLEY,
    Players.KNOWLES,
    Players.GRIFFITH,
    Players.BARTH,
    Players.KWEE,
    Players.WEINERT,
    Players.FAZEKAS,
    Players.SCOTT,
    Players.PERRY,
    Players.DUFFY,
    Players.DENNEY,
    Players.ESPOSITO,
    Players.LIN,
    Players.JAVERSAK
  ],
  captains: [Players.HARLEY, Players.MOORE, Players.LO, Players.FAZEKAS],
  link:
    "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=Tyo0%2bTFcy7zK3lgzm4jE8sdaaKVa9pEkG6GzfiLpO2Q%3d",
  results: {
    wins: 17,
    losses: 15,
    finish: "13th Nationals"
  },
  highlights: [],
  rosterAnnounceLink: "https://youtu.be/UZMtA0p_E00",
  year: 2018
};

export const RIVAL_2019: RosterList = {
  displayName: "Rival 2019",
  id: "rival-2019",
  coaches: [Players.BALL],
  players: [
    Players.SOPER,
    Players.BENDER,
    Players.CONERLY,
    Players.MILLER,
    Players.PRUITT,
    Players.NITZ,
    Players.MOORE,
    Players.WALKER,
    Players.SMIACH,
    Players.LO,
    Players.FLEMING,
    Players.YEE,
    Players.WRIGHT,
    Players.MENDOZA,
    Players.HARLEY,
    Players.SOTER,
    Players.KNOWLES,
    Players.LEHMAN,
    Players.GORDON,
    Players.SCHRODER,
    Players.FAZEKAS,
    Players.SCOTT,
    Players.PAINE,
    Players.PERRY,
    Players.DUFFY,
    Players.HECHT,
    Players.JAVERSAK
  ],
  captains: [Players.PRUITT, Players.WALKER, Players.WRIGHT, Players.FAZEKAS],
  link:
    "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=1whbAH5IJ0aIw05oRZf5pJnmjoIXrRSBXE6WZhbExiQ%3d",
  results: {
    wins: 21,
    losses: 11,
    finish: "2nd Regionals"
  },
  highlights: [],
  rosterAnnounceLink: "http://www.rivalultimate.com/roster2019",
  year: 2019
};

export const RIVAL_ROSTERS: RosterList[] = [
  RIVAL_2015,
  RIVAL_2016,
  RIVAL_2017,
  RIVAL_2018,
  RIVAL_2019
];
