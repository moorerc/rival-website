import { TournamentList } from "../Tournaments";
import { Game, GameType } from "../Games";
import { Teams } from "../Teams";

const GAMES_BICI_2016: Game[] = [];

const GAMES_ESC_2016: Game[] = [
  {
    opponent: Teams.GREENMEANSGO,
    date: "July 9, 2016 9:00AM EST",
    score_us: 11,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.SMALLBATCH,
    date: "July 9, 2016 10:45AM EST",
    score_us: 12,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.OZONE,
    date: "July 9, 2016 12:30PM EST",
    score_us: 6,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.HEIST,
    date: "July 9, 2016 4:15PM EST",
    score_us: 6,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.NEMESIS,
    date: "July 10, 2016 9:00AM EST",
    score_us: 13,
    score_them: 8,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.HOTMETAL,
    date: "July 10, 2016 10:45AM EST",
    score_us: 9,
    score_them: 13,
    type: GameType.CONSOLATION
  }
];

const GAMES_CHC_2016: Game[] = [
  {
    opponent: Teams.JACKWAGON,
    date: "July 23, 2016 10:30AM CST",
    score_us: 15,
    score_them: 3,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "July 23, 2016 12:30PM CST",
    score_us: 15,
    score_them: 5,
    type: GameType.POOL
  },
  {
    opponent: Teams.SIEGE,
    date: "July 24, 2016 8:00AM CST",
    score_us: 14,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.PPF,
    date: "July 24, 2016 11:45AM CST",
    score_us: 12,
    score_them: 6,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "July 24, 2016 1:30PM CST",
    score_us: 11,
    score_them: 4,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.HEIST,
    date: "July 24, 2016 3:15PM CST",
    score_us: 11,
    score_them: 13,
    type: GameType.BRACKET
  }
];

const GAMES_SFI_2016: Game[] = [
  {
    opponent: Teams.ELEVATE,
    date: "Aug 13, 2016 9:00AM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.SNAP,
    date: "Aug 13, 2016 10:40AM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.ENCORE,
    date: "Aug 13, 2016 12:20PM EST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.WICKED,
    date: "Aug 14, 2016 8:00AM EST",
    score_us: 12,
    score_them: 2,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.POP,
    date: "Aug 14, 2016 9:40AM EST",
    score_us: 11,
    score_them: 10,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.SIXERS,
    date: "Aug 14, 2016 11:20AM EST",
    score_us: 10,
    score_them: 11,
    type: GameType.BRACKET
  }
];

const GAMES_SECTIONALS_2016: Game[] = [
  {
    opponent: Teams.SURESHOT,
    date: "Aug 27, 2016 9:00AM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.DAYTON,
    date: "Aug 27, 2016 10:50AM EST",
    score_us: 13,
    score_them: 0,
    type: GameType.POOL
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Aug 27, 2016 12:40PM EST",
    score_us: 10,
    score_them: 7,
    type: GameType.POOL
  }
];

const GAMES_REGIONALS_2016: Game[] = [
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Sep 10, 2016 9:30AM CST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.NEMESIS,
    date: "Sep 10, 2016 11:15AM CST",
    score_us: 12,
    score_them: 8,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "Sep 10, 2016 1:00PM CST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL
  },
  {
    opponent: Teams.SURESHOT,
    date: "Sep 10, 2016 2:45PM CST",
    score_us: 12,
    score_them: 1,
    type: GameType.POOL
  },
  {
    opponent: Teams.FRENZY,
    date: "Sep 11, 2016 9:00AM CST",
    score_us: 13,
    score_them: 3,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "Sep 11, 2016 11:00AM CST",
    score_us: 15,
    score_them: 3,
    type: GameType.POOL
  },
  {
    opponent: Teams.NEMESIS,
    date: "Sep 11, 2016 1:00PM CST",
    score_us: 15,
    score_them: 10,
    type: GameType.POOL
  }
];

const GAMES_NATIONALS_2016: Game[] = [
  {
    opponent: Teams.WILDFIRE,
    date: "Sep 29, 2016 11:15AM CST",
    score_us: 15,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.BRUTESQUAD,
    date: "Sep 29, 2016 1:30PM CST",
    score_us: 5,
    score_them: 15,
    type: GameType.POOL
  },
  {
    opponent: Teams.SHOWDOWN,
    date: "Sep 29, 2016 3:45PM CST",
    score_us: 14,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.TRAFFIC,
    date: "Sep 30, 2016 9:00AM CST",
    score_us: 11,
    score_them: 15,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.GREENMEANSGO,
    date: "Sep 30, 2016 11:45AM CST",
    score_us: 14,
    score_them: 10,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.HEIST,
    date: "Sep 30, 2016 4:15PM CST",
    score_us: 10,
    score_them: 14,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.PHOENIX,
    date: "Oct 1, 2016 9:00AM CST",
    score_us: 11,
    score_them: 15,
    type: GameType.CONSOLATION
  }
];

export const TOURNAMENTS_2016: TournamentList = {
  "2016-bici": {
    id: "2016-bici",
    name: "Beachfront Invitational",
    location: {
      city: "Joliet",
      state: "IL",
      mapsLink: "https://goo.gl/maps/cXdAiVMp5iz"
    },
    date: {
      start: "June 4, 2016",
      end: "June 5, 2016"
    },
    link: "http://www.bfpultimate.com/tournament.html",
    result: undefined,
    sanctioned: false,
    games: GAMES_BICI_2016
  },
  "2016-esc": {
    id: "2016-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Joliet",
      state: "IL",
      mapsLink: "https://goo.gl/maps/cXdAiVMp5iz"
    },
    date: {
      start: "June 4, 2016",
      end: "June 5, 2016"
    },
    link:
      "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2016-Oshadega-Invite/",
    result: 10,
    sanctioned: true,
    games: GAMES_ESC_2016
  },
  "2016-chc": {
    id: "2016-chc",
    name: "Chicago Heavyweights",
    location: {
      city: "Loves Park",
      state: "IL",
      mapsLink: "https://goo.gl/maps/fXpLRVUijSw"
    },
    date: {
      start: "July 23, 2016",
      end: "June 24, 2016"
    },
    link: "https://play.usaultimate.org/events/Heavyweights-2016/",
    result: 2,
    sanctioned: true,
    games: GAMES_CHC_2016
  },
  "2016-sfi": {
    id: "2016-sfi",
    name: "Select Flight Invite",
    location: {
      city: "Westfield",
      state: "IN",
      mapsLink: "https://goo.gl/maps/2YMzesnjqFo"
    },
    date: {
      start: "August 13, 2016",
      end: "August 14, 2016"
    },
    link: "https://play.usaultimate.org/events/TCT-Select-Flight-Invite-2016/",
    result: 2,
    sanctioned: true,
    games: GAMES_SFI_2016
  },
  "2016-sectionals": {
    id: "2016-sectionals",
    name: "East Plains Sectionals",
    location: {
      city: "Versailles",
      state: "OH",
      mapsLink: "https://goo.gl/maps/GGrE4y45piJ2"
    },
    date: {
      start: "August 27, 2016",
      end: "August 28, 2016"
    },
    link:
      "https://play.usaultimate.org/events/East-Plains-Womens-Sectionals-2016/",
    result: 1,
    sanctioned: true,
    games: GAMES_SECTIONALS_2016
  },
  "2016-regionals": {
    id: "2016-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "Rockford",
      state: "IL",
      mapsLink: "https://goo.gl/maps/5mwkVHyj7Ls"
    },
    date: {
      start: "September 10, 2016",
      end: "September 11, 2016"
    },
    link:
      "https://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2016/",
    result: 1,
    sanctioned: true,
    games: GAMES_REGIONALS_2016
  },
  "2016-nationals": {
    id: "2016-nationals",
    name: "National Championships",
    location: {
      city: "Rockford",
      state: "IL",
      mapsLink: "https://goo.gl/maps/5mwkVHyj7Ls"
    },
    date: {
      start: "September 29, 2016",
      end: "October 2, 2016"
    },
    link:
      "https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2016/",
    result: 12,
    sanctioned: true,
    games: GAMES_NATIONALS_2016
  }
};
