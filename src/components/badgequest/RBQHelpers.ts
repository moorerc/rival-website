import * as _ from "lodash";

import { BadgeEarned, Badges } from "../../data/rbq/Badges";
import { Players } from "../../data/Players";
import { BADGES_EARNED_THIS_SEASON } from "src/data/rbq/RBQData";

export function numTimesUserEarnedBadge(player: Players, badge: Badges) {
  let count = 0;
  _.forEach(BADGES_EARNED_THIS_SEASON, (badgeEarned: BadgeEarned) => {
    if (badgeEarned.player === player && badgeEarned.badge === badge) {
      count++;
    }
  });
  return count;
}

export function getBadgesEarnedForBadge(badge: Badges): BadgeEarned[] {
  const sortedBadgesEarned = _.groupBy(BADGES_EARNED_THIS_SEASON, "badge");
  return sortedBadgesEarned[badge] || [];
}

export function getBadgesEarnedForPlayer(player: Players) {
  const badgesEarned = _.groupBy(BADGES_EARNED_THIS_SEASON, "player");
  return badgesEarned[player] || [];
}
