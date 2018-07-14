import { Team } from "./Teams";
// import { Tournaments } from "./Tournaments";

enum GameType {
    "POOL_PLAY",  // fix this
    "BRACKET_PLAY", // fix this
}

export interface Game {
    id: string;
    tournament: string;
    roundNumber: number;
    opponent: Team;
    date: string;  // fix this
    time: string; // fix this
    score_us: number;
    score_them: number;
    type: GameType;
}

// export const GAMES: Game[] = [
//     {
//         id: "bici-1";
//         tournament: string;
//         roundNumber: 1;
//         opponent: Team;
//         date: string;  // fix this
//         time: string; // fix this
//         score_us: number;
//         score_them: number;
//         type: GameType;
//     },
// ];
