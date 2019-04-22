import { TournamentList } from "../Tournaments";
import { Game, GameType } from "../Games";
import { Teams } from "../Teams";

const GAMES_BICI_2015: Game[] = [];

const GAMES_ESC_2015: Game[] = [
  {
    opponent: Teams.NEMESIS,
    date: "July 11 2015 10:45AM EST",
    score_us: 7,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.HOTMETAL,
    date: "July 11 2015 12:30PM EST",
    score_us: 7,
    score_them: 11,
    type: GameType.POOL
  },
  {
    opponent: Teams.UNDERGROUND,
    date: "July 11 2015 2:15PM EST",
    score_us: 9,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "July 11 2015 4:00PM EST",
    score_us: 11,
    score_them: 10,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.MAEVE,
    date: "July 12 2015 12:30PM EST",
    score_us: 9,
    score_them: 6,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.ENCORE,
    date: "July 12 2015 2:15PM EST",
    score_us: 11,
    score_them: 10,
    type: GameType.CONSOLATION
  }
];

const GAMES_MOTOWN_2015: Game[] = [
  {
    opponent: Teams.BELLE,
    date: "July 25 2015 10:40AM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "July 25 2015 12:20PM EST",
    score_us: 13,
    score_them: 1,
    type: GameType.POOL
  },
  {
    opponent: Teams.REVOLOUTION,
    date: "July 25 2015 2:00PM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL
  },
  {
    opponent: Teams.REVOLOUTION,
    date: "July 26 2015 9:00AM EST",
    score_us: 15,
    score_them: 5,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "July 26 2015 11:00AM EST",
    score_us: 15,
    score_them: 5,
    type: GameType.BRACKET
  }
];

const GAMES_HEAVYWEIGHTS_2015: Game[] = [
  {
    opponent: Teams.SNAP,
    date: "August 8, 2015 10:45AM CST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "August 8, 2015 12:30PM CST",
    score_us: 12,
    score_them: 8,
    type: GameType.POOL
  },
  {
    opponent: Teams.REVOLOUTION,
    date: "August 8, 2015 2:15PM CST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.HEIST,
    date: "August 8, 2015 4:00PM CST",
    score_us: 6,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "August 9, 2015 9:00AM CST",
    score_us: 15,
    score_them: 1,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.NEMESIS,
    date: "August 9, 2015 11:00AM CST",
    score_us: 10,
    score_them: 15,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.SMALLBATCH,
    date: "August 9, 2015 1:00PM CST",
    score_us: 10,
    score_them: 15,
    type: GameType.CONSOLATION
  }
];

const GAMES_SECTIONALS_2015: Game[] = [
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "August 29, 2015 10:50AM EST",
    score_us: 13,
    score_them: 5,
    type: GameType.POOL
  },
  {
    opponent: Teams.BELLE,
    date: "August 29, 2015 12:40PM EST",
    score_us: 13,
    score_them: 7,
    type: GameType.POOL
  },
  {
    opponent: Teams.DAYTON,
    date: "August 29, 2015 2:30PM EST",
    score_us: 13,
    score_them: 1,
    type: GameType.POOL
  },
  {
    opponent: Teams.FLO,
    date: "August 29, 2015 4:20PM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL
  }
];

const GAMES_REGIONALS_2015: Game[] = [
  {
    opponent: Teams.FRENZY,
    date: "Sept 12, 2015 9:00AM EST",
    score_us: 13,
    score_them: 0,
    type: GameType.POOL
  },
  {
    opponent: Teams.SPICYTUNA,
    date: "Sept 12, 2015 10:45AM EST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.NEMESIS,
    date: "Sept 12, 2015 12:30PM EST",
    score_us: 8,
    score_them: 12,
    type: GameType.POOL
  },
  {
    opponent: Teams.DISH,
    date: "Sept 12, 2015 4:00PM EST",
    score_us: 13,
    score_them: 9,
    type: GameType.POOL
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Sept 13, 2015 9:45AM EST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.BELLE,
    date: "Sept 13, 2015 11:30AM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL
  }
];

export const TOURNAMENTS_2015: TournamentList = {
  "2015-bici": {
    id: "2015-bici",
    name: "Beachfront Invitational",
    location: {
      city: "Joliet",
      state: "IL",
      mapsLink: "https://goo.gl/maps/uMbDC2MsxYA2"
    },
    date: {
      start: "June 6, 2015",
      end: "June 7, 2015"
    },
    link:
      "http://play.usaultimate.org/events/Beachfront-Instant-Classic-Invitational/",
    result: undefined,
    sanctioned: false,
    games: GAMES_BICI_2015
  },
  "2015-esc": {
    id: "2015-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Hilliard",
      state: "OH",
      mapsLink: "https://goo.gl/maps/66xTaQsLBUP2"
    },
    date: {
      start: "July 11, 2015",
      end: "July 12, 2015"
    },
    link: "http://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2015/",
    result: 13,
    sanctioned: true,
    games: GAMES_ESC_2015
  },
  "2015-motown": {
    id: "2015-motown",
    name: "Motown Throwdown",
    location: {
      city: "Sylvania",
      state: "OH",
      mapsLink: "https://goo.gl/maps/AcU6m9TtzYr"
    },
    date: {
      start: "July 25, 2015",
      end: "July 26, 2015"
    },
    link: "http://play.usaultimate.org/events/Motown-Throwdown-2015/",
    result: 1,
    sanctioned: true,
    games: GAMES_MOTOWN_2015
  },
  "2015-chc": {
    id: "2015-chc",
    name: "Chicago Heavyweights",
    location: {
      city: "Rockford",
      state: "IL",
      mapsLink: "https://goo.gl/maps/MEFQUCpBvRS2"
    },
    date: {
      start: "August 8, 2015",
      end: "August 9, 2015"
    },
    link: "http://play.usaultimate.org/events/Heavyweights-2015/",
    result: 4,
    sanctioned: true,
    games: GAMES_HEAVYWEIGHTS_2015
  },
  "2015-sectionals": {
    id: "2015-sectionals",
    name: "East Plains Sectionals",
    location: {
      city: "Versailles",
      state: "OH",
      mapsLink: "https://goo.gl/maps/QMYj1jWz4gJ2"
    },
    date: {
      start: "August 29, 2015",
      end: "August 30, 2015"
    },
    link:
      "http://play.usaultimate.org/events/East-Plains-Womens-Sectionals-2015/",
    result: 1,
    sanctioned: true,
    games: GAMES_SECTIONALS_2015
  },
  "2015-regionals": {
    id: "2015-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "West Chester",
      state: "OH",
      mapsLink: "https://goo.gl/maps/cLzrgMRDEuA2"
    },
    date: {
      start: "September 12, 2015",
      end: "September 13, 2015"
    },
    link:
      "http://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2015/",
    result: 2,
    sanctioned: true,
    games: GAMES_REGIONALS_2015
  }
};
