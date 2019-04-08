import { TOURNAMENTS_2015 } from "./results/Results_2015";
import { Game } from "./Games";

export interface Tournament {
  name: string;
  location: TournamentLocation;
  logo?: string;
  date: { start: string; end: string };
  link: string;
  result: number | undefined;
  sanctioned: boolean;
  games: Game[];
}

export interface TournamentLocation {
  city: string;
  state: string;
  mapsLink: string;
}

export interface TournamentList {
  [key: string]: Tournament;
}

export const ALL_TOURNAMENTS: TournamentList = TOURNAMENTS_2015; // concat all tournaments
