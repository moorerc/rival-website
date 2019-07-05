import * as _ from "lodash";

import { BadgeEarned, Badges } from "../../data/rbq/Badges";
import { Players } from "../../data/Players";
import { rbq2018BadgeEarned } from "../../data/rbq/RBQ2018";

const BADGES_EARNED = rbq2018BadgeEarned;

export function numTimesUserEarnedBadge(player: Players, badge: Badges) {
  let count = 0;
  _.forEach(BADGES_EARNED, (badgeEarned: BadgeEarned) => {
    if (badgeEarned.player === player && badgeEarned.badge === badge) {
      count++;
    }
  });
  return count;
}

export function getBadgesEarnedForBadge(badge: Badges): BadgeEarned[] {
  const sortedBadgesEarned = _.groupBy(BADGES_EARNED, "badge");
  return sortedBadgesEarned[badge] || [];
}

export function getBadgesEarnedForPlayer(player: Players) {
  const badgesEarned = _.groupBy(BADGES_EARNED, "player");
  return badgesEarned[player] || [];
}
