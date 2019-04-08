import { Teams } from "./Teams";

export enum GameType {
  "POOL_PLAY",
  "BRACKET_PLAY",
  "CONSOLATION"
}

export interface Game {
  opponent: Teams;
  date: string;
  score_us: number;
  score_them: number;
  type: GameType;
}
