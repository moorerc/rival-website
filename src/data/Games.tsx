import { Teams } from "./Teams";

export enum GameType {
  "POOL" = "POOL",
  "BRACKET" = "BRACKET",
  "CONSOLATION" = "CONSOLATION"
}

export interface Game {
  opponent: Teams;
  date: string;
  score_us: number;
  score_them: number;
  type: GameType;
}
