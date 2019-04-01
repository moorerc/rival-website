import { RIVAL_ROSTERS } from "src/data/RosterList";
import * as _ from "lodash";
import { Player } from "src/data/Players";

export function getImageUrlForRoster(rosterId: string) {
  return "/img/" + rosterId + "/" + rosterId + ".jpg";
}

export function getImageUrlForPlayer(rosterId: string, playerId: string) {
  return (
    "/img/" +
    rosterId +
    "/headshots/" +
    rosterId +
    "_headshot_" +
    playerId +
    ".jpg"
  );
}

export function getImageUrlForPlayerAction(rosterId: string, playerId: string) {
  return (
    "/img/" +
    rosterId +
    "/actionshots/" +
    rosterId +
    "_actionshot_" +
    playerId +
    ".jpg"
  );
}

export function isPlayerACoach(rosterId: string, playerId: string) {
  const roster = _.find(RIVAL_ROSTERS, ["id", rosterId]);
  if (!roster) {
    return false;
  }
  // console.log(_.findIndex(roster.coaches, Players[playerId]));
  if (_.indexOf(roster.coaches, playerId) >= 0) {
    return true;
  } else {
    return false;
  }
}

export function isPlayerACaptain(rosterId: string, playerId: string) {
  const roster = _.find(RIVAL_ROSTERS, ["id", rosterId]);
  if (!roster) {
    return false;
  }
  if (_.indexOf(roster.captains, playerId) >= 0) {
    return true;
  } else {
    return false;
  }
}

export function getDisplayNameForPlayer(player: Player) {
  if (player.name.nickname) {
    return (
      player.name.first + ' "' + player.name.nickname + '" ' + player.name.last
    );
  }
  return player.name.first + " " + player.name.last;
}

export function openLinkInNewTab(url: string) {
  window.open(url, "_blank");
}
