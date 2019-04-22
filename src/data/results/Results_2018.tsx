import { TournamentList } from "../Tournaments";
import { Game, GameType } from "../Games";
import { Teams } from "../Teams";

const GAMES_BICI_2018: Game[] = [];

const GAMES_PEC_2018: Game[] = [
  {
    opponent: Teams.WILDFIRE,
    date: "July 7, 2018 8:00AM MST",
    score_us: 13,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.SHOWDOWN,
    date: "July 7, 2018 10:00AM MST",
    score_us: 13,
    score_them: 7,
    type: GameType.POOL
  },
  {
    opponent: Teams.RIOT,
    date: "July 7, 2018 2:00PM MST",
    score_us: 8,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.SCHWA,
    date: "July 8, 2018 7:45AM MST",
    score_us: 13,
    score_them: 9,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.MOLLYBROWN,
    date: "July 8, 2018 8:55AM MST",
    score_us: 10,
    score_them: 12,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.TRAFFIC,
    date: "July 8, 2018 10:40AM MST",
    score_us: 10,
    score_them: 11,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.HEIST,
    date: "July 8, 2018 12:25PM MST",
    score_us: 10,
    score_them: 11,
    type: GameType.CONSOLATION
  }
];

const GAMES_USO_2018: Game[] = [
  {
    opponent: Teams.POP,
    date: "Aug 3, 2018 10:45AM CST",
    score_us: 7,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.OZONE,
    date: "Aug 3, 2018 1:00PM CST",
    score_us: 5,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.SCANDAL,
    date: "Aug 3, 2018 3:15PM CST",
    score_us: 8,
    score_them: 12,
    type: GameType.POOL
  },
  {
    opponent: Teams.BRUTESQUAD,
    date: "Aug 4, 2018 8:30AM CST",
    score_us: 9,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.NEMESIS,
    date: "Aug 4, 2018 10:45AM CST",
    score_us: 9,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.SIEGE,
    date: "Aug 4, 2018 3:15PM CST",
    score_us: 15,
    score_them: 10,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.POP,
    date: "Aug 5, 2018 10:45AM CST",
    score_us: 14,
    score_them: 8,
    type: GameType.CONSOLATION
  }
];

const GAMES_ESC_2018: Game[] = [
  {
    opponent: Teams.IVY,
    date: "Aug 18, 2018 10:35AM EST",
    score_us: 13,
    score_them: 1,
    type: GameType.POOL
  },
  {
    opponent: Teams.WICKED,
    date: "Aug 18, 2018 1:45PM EST",
    score_us: 13,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.SIXERS,
    date: "Aug 18, 2018 4:55PM EST",
    score_us: 13,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.PHOENIX,
    date: "Aug 19, 2018 8:30AM EST",
    score_us: 11,
    score_them: 13,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.HEIST,
    date: "Aug 19, 2018 10:05AM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.CONSOLATION
  }
];

const GAMES_REGIONALS_2018: Game[] = [
  {
    opponent: Teams.HELIX,
    date: "Sep 22, 2018 9:00AM CST",
    score_us: 13,
    score_them: 1,
    type: GameType.POOL
  },
  {
    opponent: Teams.AUTONOMOUS,
    date: "Sep 22, 2018 10:45AM CST",
    score_us: 13,
    score_them: 0,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "Sep 22, 2018 12:30PM CST",
    score_us: 13,
    score_them: 9,
    type: GameType.POOL
  },
  {
    opponent: Teams.INDYROGUE,
    date: "Sep 22, 2018 2:30PM CST",
    score_us: 15,
    score_them: 8,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.NEMESIS,
    date: "Sep 23, 2018 10:55AM CST",
    score_us: 14,
    score_them: 15,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.DISH,
    date: "Sep 23, 2018 12:50AM CST",
    score_us: 15,
    score_them: 4,
    type: GameType.BRACKET
  }
];

const GAMES_NATIONALS_2018: Game[] = [
  {
    opponent: Teams.RIOT,
    date: "Oct 18, 2018 9:00AM EST",
    score_us: 6,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.OZONE,
    date: "Oct 18, 2018 1:30PM EST",
    score_us: 8,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.POP,
    date: "Oct 18, 2018 3:45PM EST",
    score_us: 15,
    score_them: 9,
    type: GameType.POOL
  },
  {
    opponent: Teams.SIXERS,
    date: "Oct 19, 2018 9:00AM EST",
    score_us: 12,
    score_them: 15,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.POP,
    date: "Oct 19, 2018 11:45AM EST",
    score_us: 14,
    score_them: 15,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.TRAFFIC,
    date: "Oct 19, 2018 2:00PM EST",
    score_us: 15,
    score_them: 9,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.PHOENIX,
    date: "Oct 20, 2108 9:00AM EST",
    score_us: 15,
    score_them: 13,
    type: GameType.CONSOLATION
  }
];

export const TOURNAMENTS_2018: TournamentList = {
  "2018-bici": {
    id: "2018-bici",
    name: "Beachfront Invitational",
    location: {
      city: "Joliet",
      state: "IL",
      mapsLink: ""
    },
    date: {
      start: "",
      end: ""
    },
    link: "",
    result: undefined,
    sanctioned: false,
    games: GAMES_BICI_2018
  },
  "2018-pec": {
    id: "2018-pec",
    name: "Pro Elite Challenge",
    location: {
      city: "Aurora",
      state: "CO",
      mapsLink: ""
    },
    date: {
      start: "July 7, 2018",
      end: "July 8, 2018"
    },
    link: "https://play.usaultimate.org/events/TCT-Pro-Elite-Challenge-2018/",
    result: 8,
    sanctioned: true,
    games: GAMES_PEC_2018
  },
  "2018-uso": {
    id: "2018-uso",
    name: "US Open",
    location: {
      city: "Blaine",
      state: "MN",
      mapsLink: ""
    },
    date: {
      start: "August 3, 2018",
      end: "August 6, 2018"
    },
    link:
      "https://play.usaultimate.org/events/2018-US-Open-Club-Championships/",
    result: 9,
    sanctioned: true,
    games: GAMES_USO_2018
  },
  "2018-esc": {
    id: "2018-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Columbus",
      state: "OH",
      mapsLink: ""
    },
    date: {
      start: "August 18, 2018",
      end: "August 19, 2018"
    },
    link:
      "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2018/",
    result: 3,
    sanctioned: true,
    games: GAMES_ESC_2018
  },
  "2018-regionals": {
    id: "2018-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "Aurora",
      state: "IL",
      mapsLink: ""
    },
    date: {
      start: "September 22, 2018",
      end: "September 23, 2018"
    },
    link:
      "https://play.usaultimate.org/events/Great-Lakes-Womens-Regional-Championship-2018/",
    result: 2,
    sanctioned: true,
    games: GAMES_REGIONALS_2018
  },
  "2018-nationals": {
    id: "2018-nationals",
    name: "National Championships",
    location: {
      city: "San Diego",
      state: "CA",
      mapsLink: ""
    },
    date: {
      start: "October 18, 2018",
      end: "October 21, 2018"
    },
    link:
      "https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2018/",
    result: 13,
    sanctioned: true,
    games: GAMES_NATIONALS_2018
  }
};
