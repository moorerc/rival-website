
import * as _ from "lodash";

import { Badges } from "../data/Badges";
import { Players } from "../data/Players";
import { BadgeEarned, rbq2017BadgeEarned } from "../data/RBQ2017";

const BADGES_EARNED = rbq2017BadgeEarned;

export function numTimesUserEarnedBadge(player: Players, badge: Badges) {
    let count = 0;
    _.forEach(BADGES_EARNED, (badgeEarned: BadgeEarned) => {
        if (badgeEarned.player === player && badgeEarned.badge === badge) {
            count++;
        }
    });
    return count;
}

export function getBadgesEarnedForBadge(badge: Badges) {
    const sortedBadgesEarned = _.groupBy(BADGES_EARNED, "badge");
    // console.log(sortedBadgesEarned); // tslint:disable-line:no-console
    return sortedBadgesEarned[badge];
}

export function getBadgesEarnedForPlayer(player: Players) {
    const badgesEarned = _.groupBy(BADGES_EARNED, "player");
    return badgesEarned[player] || [];
}
