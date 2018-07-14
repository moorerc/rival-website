import { Badges } from "./Badges";
import { Players } from "./Players";
// tslint:disable:max-line-length

export interface BadgeEarned {
    badge: Badges;
    player: Players;
    date: string;
    notes?: string;
}

export const rbq2017BadgesActivated: Badges[] = [
    Badges.ALL_STAR_SUPPORTER,
    Badges.BONDING_BADGE_BADGE,
    Badges.BRIDGE_THE_GAP,
    Badges.HI_FIVE,
    Badges.PLANK_PRO,
    Badges.REPORTING_FOR_DUTY,
    Badges.SUPERB_SUGGESTER,
    Badges.SWEATY_SELFIE,
    Badges.PERSONALITY_PERSUIT,
    Badges.HOMETOWN_HERO,
    Badges.EAT_LIKE_SOPHIE,
    Badges.DANCE_CHAIN,
    Badges.ADULTING,
    Badges.ANACONDA,
];

export const rbq2017BadgeEarned: BadgeEarned[] = [
    { badge: Badges.REPORTING_FOR_DUTY, player: Players.LO, date: "Jun 18 2017 16:30:00 EST", notes: "Social Media Master" },
    { badge: Badges.PLANK_PRO, player: Players.LO, date: "Jul 05 2017 01:15:00 EST", notes: "New Record - 2:00" },
    { badge: Badges.HI_FIVE, player: Players.LO, date: "Jul 08 2017 12:01:00 EST" },
    { badge: Badges.BRIDGE_THE_GAP, player: Players.LO, date: "Jul 12 2017 15:20:00 EST", notes: "Google Hangout with Tots" },
    { badge: Badges.SWEATY_SELFIE, player: Players.LO, date: "Jul 26 2017 11:38:00 EST" },
    { badge: Badges.ALL_STAR_SUPPORTER, player: Players.LO, date: "Aug 10 2017 20:57:00 EST", notes: "vs Brute Squad" },
    { badge: Badges.ALL_STAR_SUPPORTER, player: Players.LO, date: "Aug 10 2017 20:57:00 EST", notes: "In Person Bonus" },
    { badge: Badges.BONDING_BADGE_BADGE, player: Players.LO, date: "Aug 11 2017 10:38:00 EST", notes: "TLo & Stevie" },
    { badge: Badges.SUPERB_SUGGESTER, player: Players.LO, date: "Aug 11 2017 10:39:00 EST", notes: "Rusty Rampage" },
];
