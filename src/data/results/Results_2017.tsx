import { TournamentList } from "../Tournaments";
import { Game, GameType } from "../Games";
import { Teams } from "../Teams";

const GAMES_BICI_2017: Game[] = [];

const GAMES_PEC_2017: Game[] = [
  {
    opponent: Teams.MOLLYBROWN,
    date: "July 8, 2017 8:00AM MST",
    score_us: 6,
    score_them: 3,
    type: GameType.POOL
  },
  {
    opponent: Teams.HEIST,
    date: "July 8, 2017 10:00AM MST",
    score_us: 11,
    score_them: 10,
    type: GameType.POOL
  },
  {
    opponent: Teams.SIEGE,
    date: "July 8, 2017 12:00PM MST",
    score_us: 9,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.SCHWA,
    date: "July 8, 2017 4:00PM MST",
    score_us: 13,
    score_them: 11,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.WILDFIRE,
    date: "July 9, 2017 12:00PM MST",
    score_us: 13,
    score_them: 12,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.POP,
    date: "July 9, 2017 2:00PM MST",
    score_us: 11,
    score_them: 12,
    type: GameType.CONSOLATION
  }
];

const GAMES_SFI_2017: Game[] = [
  {
    opponent: Teams.BACKHANDED,
    date: "July 29, 2017 8:00AM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.VIVA,
    date: "July 29, 2017 10:00AM EST",
    score_us: 12,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.STELLA,
    date: "July 29, 2017 12:00PM EST",
    score_us: 13,
    score_them: 3,
    type: GameType.POOL
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "July 30, 2017 8:00AM EST",
    score_us: 13,
    score_them: 5,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.SIXERS,
    date: "July 30, 2017 10:00AM EST",
    score_us: 13,
    score_them: 12,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.NEMESIS,
    date: "July 30, 2017 12:00PM EST",
    score_us: 13,
    score_them: 9,
    type: GameType.BRACKET
  }
];

const GAMES_ESC_2017: Game[] = [
  {
    opponent: Teams.SMALLBATCH,
    date: "Aug 19, 2017 8:00AM CST",
    score_us: 13,
    score_them: 5,
    type: GameType.POOL
  },
  {
    opponent: Teams.NEMESIS,
    date: "Aug 19, 2017 10:00AM CST",
    score_us: 10,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.SHOWDOWN,
    date: "Aug 19, 2017 2:00PM CST",
    score_us: 8,
    score_them: 9,
    type: GameType.POOL
  },
  {
    opponent: Teams.UNDERGROUND,
    date: "Aug 19, 2017 4:00PM CST",
    score_us: 10,
    score_them: 12,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.WICKED,
    date: "Aug 20, 2017 8:00AM CST",
    score_us: 13,
    score_them: 4,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.PHOENIX,
    date: "Aug 20, 2017 10:00AM CST",
    score_us: 10,
    score_them: 11,
    type: GameType.CONSOLATION
  }
];

const GAMES_REGIONALS_2017: Game[] = [
  {
    opponent: Teams.DISH,
    date: "Sep 23, 2017 9:00AM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL
  },
  {
    opponent: Teams.HELIX,
    date: "Sep 23, 2017 10:45AM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL
  },
  {
    opponent: Teams.INDYROGUE,
    date: "Sep 23, 2017 12:30PM EST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Sep 23, 2017 2:15PM EST",
    score_us: 15,
    score_them: 4,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.NEMESIS,
    date: "Sep 24, 2017 11:00AM EST",
    score_us: 15,
    score_them: 11,
    type: GameType.BRACKET
  }
];

const GAMES_NATIONALS_2017: Game[] = [
  {
    opponent: Teams.OZONE,
    date: "Oct 19, 2017 11:15AM EST",
    score_us: 12,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.BRUTESQUAD,
    date: "Oct 19, 2017 1:30PM EST",
    score_us: 5,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.POP,
    date: "Oct 19, 2017 3:45PM EST",
    score_us: 12,
    score_them: 14,
    type: GameType.POOL
  },
  {
    opponent: Teams.SHOWDOWN,
    date: "Oct 20, 2017 9:00AM EST",
    score_us: 12,
    score_them: 13,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.POP,
    date: "Oct 20, 2017 11:45AM EST",
    score_us: 12,
    score_them: 9,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.UNDERGROUND,
    date: "Oct 20, 2017 4:15PM EST",
    score_us: 12,
    score_them: 7,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.SCANDAL,
    date: "Oct 21, 2107 10:00AM EST",
    score_us: 9,
    score_them: 13,
    type: GameType.CONSOLATION
  }
];

export const TOURNAMENTS_2017: TournamentList = {
  "2017-bici": {
    id: "2017-bici",
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
    games: GAMES_BICI_2017
  },
  "2017-pec": {
    id: "2017-pec",
    name: "Pro Elite Challenge",
    location: {
      city: "Aurora",
      state: "CO",
      mapsLink: ""
    },
    date: {
      start: "July 8, 2017",
      end: "July 9, 2017"
    },
    link: "https://play.usaultimate.org/events/TCT-Pro-Elite-Challenge-2017/",
    result: 13,
    sanctioned: true,
    games: GAMES_PEC_2017
  },
  "2017-sfi": {
    id: "2017-sfi",
    name: "Select Flight Invite",
    location: {
      city: "Columbus",
      state: "OH",
      mapsLink: ""
    },
    date: {
      start: "July 29, 2017",
      end: "July 30, 2017"
    },
    link: "https://play.usaultimate.org/events/TCT-Select-Flight-Invite-2017/",
    result: 1,
    sanctioned: true,
    games: GAMES_SFI_2017
  },
  "2017-esc": {
    id: "2017-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Appleton",
      state: "WI",
      mapsLink: ""
    },
    date: {
      start: "August 19, 2017",
      end: "August 20, 2017"
    },
    link:
      "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2017/",
    result: 10,
    sanctioned: true,
    games: GAMES_ESC_2017
  },
  "2017-regionals": {
    id: "2017-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "West Chester",
      state: "OH",
      mapsLink: ""
    },
    date: {
      start: "September 23, 2017",
      end: "September 24, 2017"
    },
    link:
      "https://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2017/",
    result: 1,
    sanctioned: true,
    games: GAMES_REGIONALS_2017
  },
  "2017-nationals": {
    id: "2017-nationals",
    name: "National Championships",
    location: {
      city: "Sarasota",
      state: "FL",
      mapsLink: ""
    },
    date: {
      start: "October 19, 2017",
      end: "October 22, 2017"
    },
    link:
      "https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2017/",
    result: 9,
    sanctioned: true,
    games: GAMES_NATIONALS_2017
  }
};
