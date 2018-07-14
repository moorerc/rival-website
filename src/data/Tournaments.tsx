import { TOURNAMENTS_2016 } from "./results/2016results";

export interface Tournament {
    id: string;
    name: string;
    location: TournamentLocation;
    logo?: string;
    date: {start: Date, end: Date};
    link: string;
    result: number | undefined;
    sanctioned: boolean;
}

export interface TournamentLocation {
    city: string;
    state: string;
    mapsLink: string;
}

export const TOURNAMENTS: Tournament[] = TOURNAMENTS_2016; // concat all tournaments
