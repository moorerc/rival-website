import { TournamentList } from "../Tournaments";
import { Game } from "../Games";

const GAMES_PEC_2019: Game[] = [];

const GAMES_SFI_EAST_2019: Game[] = [];

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
    result: undefined,
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
    result: undefined,
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
