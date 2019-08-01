import { TournamentList } from "../Tournaments";
import { Game, GameType } from "../Games";
import { Teams } from "../Teams";

const GAMES_PEC_2019: Game[] = [
  {
    opponent: Teams.SIXERS,
    date: "July 13, 2019 8:00AM MST",
    score_us: 8,
    score_them: 13,
    type: GameType.POOL
  },
  {
    opponent: Teams.OZONE,
    date: "July 13, 2019 10:00AM MST",
    score_us: 13,
    score_them: 10,
    type: GameType.POOL
  },
  {
    opponent: Teams.WICKED,
    date: "July 13, 2019 12:00PM MST",
    score_us: 13,
    score_them: 8,
    type: GameType.POOL
  },
  {
    opponent: Teams.GRIT,
    date: "July 14, 2019 7:40AM MST",
    score_us: 13,
    score_them: 6,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.SCHWA,
    date: "July 14, 2019 9:00AM MST",
    score_us: 9,
    score_them: 10,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.PHOENIX,
    date: "July 14, 2019 10:45AM MST",
    score_us: 9,
    score_them: 13,
    type: GameType.CONSOLATION
  },
  {
    opponent: Teams.SHOWDOWN,
    date: "July 14, 2019 12:30PM MST",
    score_us: 8,
    score_them: 7,
    type: GameType.CONSOLATION
  }
];

const GAMES_SFI_EAST_2019: Game[] = [
  {
    opponent: Teams.INDYROGUE,
    date: "July 27, 2019 10:50PM EST",
    score_us: 13,
    score_them: 5,
    type: GameType.POOL
  },
  {
    opponent: Teams.REBELLION,
    date: "July 27, 2019 12:40PM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL
  },
  {
    opponent: Teams.SALTY,
    date: "July 27, 2019 2:30PM EST",
    score_us: 13,
    score_them: 4,
    type: GameType.POOL
  },
  {
    opponent: Teams.BENT,
    date: "July 28, 2019 9:00PM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.POP,
    date: "July 28, 2019 10:50PM EST",
    score_us: 13,
    score_them: 8,
    type: GameType.BRACKET
  },
  {
    opponent: Teams.UNDERGROUND,
    date: "July 28, 2019 2:30PM EST",
    score_us: 12,
    score_them: 10,
    type: GameType.BRACKET
  }
];

const GAMES_ESC_2019: Game[] = [];

const GAMES_REGIONALS_2019: Game[] = [];

const GAMES_NATIONALS_2019: Game[] = [];

export const TOURNAMENTS_2019: TournamentList = {
  "2019-pec": {
    id: "2019-pec",
    name: "Pro Elite Challenge",
    location: {
      city: "Aurora",
      state: "CO",
      mapsLink: ""
    },
    date: {
      start: "July 13, 2019",
      end: "July 14, 2019"
    },
    link: "https://play.usaultimate.org/events/TCT-Pro-Elite-Challenge-2019/",
    result: 7,
    sanctioned: true,
    games: GAMES_PEC_2019
  },
  "2019-sfi-east": {
    id: "2019-sfi-east",
    name: "Select Flight Invite - East",
    location: {
      city: "Columbus",
      state: "OH",
      mapsLink: ""
    },
    date: {
      start: "July 27, 2019",
      end: "July 28, 2019"
    },
    link:
      "https://play.usaultimate.org/events/TCT-Select-Flight-Invite-East-2019/",
    result: 1,
    sanctioned: true,
    games: GAMES_SFI_EAST_2019
  },
  "2019-esc": {
    id: "2019-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Rockford",
      state: "IL",
      mapsLink: ""
    },
    date: {
      start: "August 17, 2019",
      end: "August 18, 2019"
    },
    link:
      "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2019/",
    result: undefined,
    sanctioned: true,
    games: GAMES_ESC_2019
  },
  "2019-regionals": {
    id: "2019-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "Cincinnati",
      state: "OH",
      mapsLink: ""
    },
    date: {
      start: "September 21, 2019",
      end: "September 22, 2019"
    },
    link:
      "https://play.usaultimate.org/events/Great-Lakes-Womens-Club-Regional-Championship-2019/",
    result: undefined,
    sanctioned: true,
    games: GAMES_REGIONALS_2019
  },
  "2019-nationals": {
    id: "2019-nationals",
    name: "National Championships",
    location: {
      city: "San Diego",
      state: "CA",
      mapsLink: ""
    },
    date: {
      start: "October 24, 2019",
      end: "October 27, 2019"
    },
    link:
      "https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2019/",
    result: undefined,
    sanctioned: true,
    games: GAMES_NATIONALS_2019
  }
};
