import { Game } from "./Games";
import { TOURNAMENTS_2015 } from "./results/Results_2015";
import { TOURNAMENTS_2016 } from "./results/Results_2016";
import { TOURNAMENTS_2017 } from "./results/Results_2017";
import { TOURNAMENTS_2018 } from "./results/Results_2018";
import { TOURNAMENTS_2019 } from "./results/Results_2019";
import { TOURNAMENTS_2021 } from "./results/Results_2021";
import { TOURNAMENTS_2022 } from "./results/Results_2022";

export interface Tournament {
  id: string;
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

export const ALL_TOURNAMENTS: TournamentList[] = [
  TOURNAMENTS_2015,
  TOURNAMENTS_2016,
  TOURNAMENTS_2017,
  TOURNAMENTS_2018,
  TOURNAMENTS_2019,
  TOURNAMENTS_2021,
  TOURNAMENTS_2022,
];
