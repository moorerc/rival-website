import { Game, GameType } from "../Games";
import { Teams } from "../Teams";
import { TournamentList } from "../Tournaments";

const GAMES_ESC_2021: Game[] = [
  {
    opponent: Teams.SURESHOT,
    date: "Aug 21, 2021 9:00AM EST",
    score_us: 15,
    score_them: 0,
    type: GameType.POOL,
  },
  {
    opponent: Teams.REBELLION,
    date: "Aug 21, 2021 1:00PM EST",
    score_us: 15,
    score_them: 8,
    type: GameType.POOL,
  },
  {
    opponent: Teams.GRIT,
    date: "Aug 21, 2021 3:00PM EST",
    score_us: 9,
    score_them: 14,
    type: GameType.POOL,
  },
  {
    opponent: Teams.TABBYROSA,
    date: "Aug 22, 2021 8:00AM EST",
    score_us: 15,
    score_them: 6,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.NEMESIS,
    date: "Aug 22, 2021 10:00AM EST",
    score_us: 12,
    score_them: 11,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.GRIT,
    date: "Aug 22, 2021 12:00PM EST",
    score_us: 14,
    score_them: 8,
    type: GameType.BRACKET,
  },
];

const GAMES_SECTIONALS_2021: Game[] = [
  {
    opponent: Teams.AUTONOMOUS,
    date: "Sep 11, 2021 9:00AM EST",
    score_us: 15,
    score_them: 3,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SURESHOT,
    date: "Sep 11, 2021 11:00AM EST",
    score_us: 15,
    score_them: 2,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SOLSTICE,
    date: "Sep 11, 2021 1:00PM EST",
    score_us: 15,
    score_them: 2,
    type: GameType.POOL,
  },
];

const GAMES_REGIONALS_2021: Game[] = [
  {
    opponent: Teams.INDYROGUE,
    date: "Oct 2, 2021 9:00AM EST",
    score_us: 13,
    score_them: 2,
    type: GameType.POOL,
  },
  {
    opponent: Teams.NEMESIS,
    date: "Oct 2, 2021 10:50AM EST",
    score_us: 8,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SOLSTICE,
    date: "Oct 2, 2021 12:40PM EST",
    score_us: 13,
    score_them: 0,
    type: GameType.POOL,
  },
  {
    opponent: Teams.AUTONOMOUS,
    date: "Oct 2, 2021 2:30PM EST",
    score_us: 13,
    score_them: 1,
    type: GameType.POOL,
  },
  {
    opponent: Teams.SURESHOT,
    date: "Oct 3, 2021 9:00AM EST",
    score_us: 2, // they forfeited i think
    score_them: 1,
    type: GameType.POOL,
  },
  {
    opponent: Teams.NEMESIS,
    date: "Oct 3, 2021 11:00AM EST",
    score_us: 9,
    score_them: 13,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.INDYROGUE,
    date: "Oct 3, 2021 1:00PM EST",
    score_us: 13,
    score_them: 4,
    type: GameType.CONSOLATION,
  },
];

const GAMES_NATIONALS_2021: Game[] = [
  {
    opponent: Teams.FURY,
    date: "Oct 21, 2021 9:00AM PST",
    score_us: 4,
    score_them: 15,
    type: GameType.POOL,
  },
  {
    opponent: Teams.BENT,
    date: "Oct 21, 2021 11:15AM PST",
    score_us: 14,
    score_them: 11,
    type: GameType.POOL,
  },
  {
    opponent: Teams.POP,
    date: "Oct 21, 2021 1:30PM PST",
    score_us: 11,
    score_them: 13,
    type: GameType.POOL,
  },
  {
    opponent: Teams.TRAFFIC,
    date: "Oct 22, 2021 9:00AM PST",
    score_us: 10,
    score_them: 15,
    type: GameType.BRACKET,
  },
  {
    opponent: Teams.SCHWA,
    date: "Oct 22, 2021 11:30AM PST",
    score_us: 11,
    score_them: 12,
    type: GameType.CONSOLATION,
  },
  {
    opponent: Teams.BENT,
    date: "Oct 22, 2021 2:00PM PST",
    score_us: 15,
    score_them: 7,
    type: GameType.CONSOLATION,
  },
  {
    opponent: Teams.SIEGE,
    date: "Oct 23, 2021 9:00AM PST",
    score_us: 13,
    score_them: 9,
    type: GameType.CONSOLATION,
  },
];

export const TOURNAMENTS_2021: TournamentList = {
  "2021-esc": {
    id: "2021-esc",
    name: "Elite Select Challenge",
    location: {
      city: "Lebanon",
      state: "OH",
      mapsLink: "",
    },
    date: {
      start: "August 21, 2021",
      end: "August 22, 2021",
    },
    link:
      "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2021/",
    result: 1,
    sanctioned: true,
    games: GAMES_ESC_2021,
  },
  "2021-sectionals": {
    id: "2021-sectionals",
    name: "East Plains Sectionals",
    location: {
      city: "Versailles",
      state: "OH",
      mapsLink: "",
    },
    date: {
      start: "September 11, 2021",
      end: "September 12, 2021",
    },
    link:
      "https://play.usaultimate.org/events/East-Plains-Womens-Club-Sectional-Championship-2021/",
    result: 1,
    sanctioned: true,
    games: GAMES_SECTIONALS_2021,
  },
  "2021-regionals": {
    id: "2021-regionals",
    name: "Great Lakes Regionals",
    location: {
      city: "Cincinnati",
      state: "OH",
      mapsLink: "",
    },
    date: {
      start: "October 2, 2021",
      end: "October 3, 2021",
    },
    link:
      "https://play.usaultimate.org/events/Great-Lakes-Womens-Club-Regional-Championship-2021/",
    result: 2,
    sanctioned: true,
    games: GAMES_REGIONALS_2021,
  },
  "2021-nationals": {
    id: "2021-nationals",
    name: "National Championships",
    location: {
      city: "San Diego",
      state: "CA",
      mapsLink: "",
    },
    date: {
      start: "October 21, 2021",
      end: "October 24, 2021",
    },
    link:
      "https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2021/",
    result: 13,
    sanctioned: true,
    games: GAMES_NATIONALS_2021,
  },
};
