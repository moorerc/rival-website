import { Game, GameType } from "../Games";
import { Teams } from "../Teams";
import { TournamentList } from "../Tournaments";

const GAMES_DC_ROUND_ROBIN_2022: Game[] = [
  {
    opponent: Teams.SCANDAL,
    date: "July 9, 2022 1:00PM EST",
    score_us: 4,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.BRUTESQUAD,
    date: "July 9, 2022 2:30PM EST",
    score_us: 0,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.PARCHA,
    date: "July 10, 2022 9:00AM EST",
    score_us: 8,
    score_them: 12,
    type: GameType.POOL,
  },
  {
    opponent: Teams.BENT,
    date: "July 10, 2022 10:30AM EST",
    score_us: 3,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.GRIT,
    date: "July 10, 2022 12:00PM EST",
    score_us: 6,
    score_them: 12,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SIEGE,
    date: "July 10, 2022 1:30PM EST",
    score_us: 9,
    score_them: 12,
    type: GameType.POOL,
  },
];
const GAMES_ESC_2022: Game[] = [
  {
    opponent: Teams.OZONE,
    date: "Aug 20, 2022 8:30AM EST",
    score_us: 8,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.DISH,
    date: "Aug 20, 2022 1:10PM EST",
    score_us: 14,
    score_them: 7,
    type: GameType.POOL,
  },
  {
    opponent: Teams.FLIGHT,
    date: "Aug 20, 2022 4:10PM EST",
    score_us: 8,
    score_them: 12,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.HEIST,
    date: "Aug 21, 2022 8:00AM EST",
    score_us: 9,
    score_them: 5,
    type: GameType.CONSOLATION,
  },
  {
    opponent: Teams.YALL,
    date: "Aug 21, 2022 9:45AM EST",
    score_us: 15,
    score_them: 3,
    type: GameType.CONSOLATION,
  },
  {
    opponent: Teams.STELLAR,
    date: "Aug 21, 2022 11:30AM EST",
    score_us: 10,
    score_them: 7,
    type: GameType.CONSOLATION,
  },
  {
    opponent: Teams.INDYROGUE,
    date: "Aug 21, 2022 1:15PM EST",
    score_us: 7,
    score_them: 10,
    type: GameType.CONSOLATION,
  },
];

const GAMES_SECTIONALS_2022: Game[] = [
  {
    opponent: Teams.AUTONOMOUS,
    date: "Sep 10, 2022 9:00AM EST",
    score_us: 15,
    score_them: 5,
    type: GameType.POOL,
  },
  {
    opponent: Teams.YALL,
    date: "Sep 10, 2022 10:45AM EST",
    score_us: 15,
    score_them: 2,
    type: GameType.POOL,
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Sep 10, 2022 12:30PM EST",
    score_us: 12,
    score_them: 7,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SOLSTICE,
    date: "Sep 10, 2022 2:15PM EST",
    score_us: 15,
    score_them: 3,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SURESHOT,
    date: "Sep 11, 2022 10:00AM EST",
    score_us: 15,
    score_them: 0,
    type: GameType.POOL,
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Sep 11, 2022 11:45AM EST",
    score_us: 15,
    score_them: 0,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.YALL,
    date: "Sep 11, 2022 1:30PM EST",
    score_us: 15,
    score_them: 3,
    type: GameType.BRACKET,
  },
];

const GAMES_REGIONALS_2022: Game[] = [
  {
    opponent: Teams.NEMESIS,
    date: "Oct 1, 2021 9:00AM EST",
    score_us: 7,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SURESHOT,
    date: "Oct 1, 2021 10:45AM EST",
    score_us: 13,
    score_them: 0,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SOLSTICE,
    date: "Oct 1, 2021 2:15PM EST",
    score_us: 13,
    score_them: 1,
    type: GameType.POOL,
  },
  {
    opponent: Teams.AUTONOMOUS,
    date: "Oct 1, 2021 4:00PM EST",
    score_us: 13,
    score_them: 6,
    type: GameType.POOL,
  },
  {
    opponent: Teams.NOTOROIOUSCLE,
    date: "Oct 2, 2021 9:00AM EST",
    score_us: 15,
    score_them: 5,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.INDYROGUE,
    date: "Oct 2, 2021 11:00AM EST",
    score_us: 11,
    score_them: 12,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.DISH,
    date: "Oct 2, 2021 1:00PM EST",
    score_us: 13,
    score_them: 7,
    type: GameType.CONSOLATION,
  },
];

export const TOURNAMENTS_2022: TournamentList = {
  "2022-dc-round-robin": {
    id: "2022-dc-round-robin",
    name: "DC July Round Robin",
    location: {
      city: "Washington DC",
      state: "",
      mapsLink: "",
    },
    date: {
      start: "July 9, 2022",
      end: "July 10, 2022",
    },
    link: "https://play.usaultimate.org/events/DC-July-Round-Robin/",
    result: 8,
    sanctioned: true,
    games: GAMES_DC_ROUND_ROBIN_2022,
  },
  "2022-esc": {
    id: "2022-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Indianapolis",
      state: "IN",
      mapsLink: "",
    },
    date: {
      start: "August 20, 2022",
      end: "August 21, 2022",
    },
    link:
      "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2022/",
    result: 10, // idk
    sanctioned: true,
    games: GAMES_ESC_2022,
  },
  "2022-sectionals": {
    id: "2022-sectionals",
    name: "East Plains Sectionals",
    location: {
      city: "Versailles",
      state: "OH",
      mapsLink: "",
    },
    date: {
      start: "September 10, 2022",
      end: "September 11, 2022",
    },
    link:
      "https://play.usaultimate.org/events/2022-East-Plains-Womens-Sectional-Championship/",
    result: 1,
    sanctioned: true,
    games: GAMES_SECTIONALS_2022,
  },
  "2022-regionals": {
    id: "2022-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "Zeeland",
      state: "MI",
      mapsLink: "",
    },
    date: {
      start: "October 1, 2022",
      end: "October 2, 2022",
    },
    link:
      "https://play.usaultimate.org/events/2022-Great-Lakes-Womens-Regional-Championship/",
    result: 3,
    sanctioned: true,
    games: GAMES_REGIONALS_2022,
  },
};
