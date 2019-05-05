import { RIVAL_ROSTERS } from "src/data/RosterList";
import * as _ from "lodash";
import { Player } from "src/data/Players";

export function getImageUrlForOpponent(teamId: string) {
  return "/img/team-logos/" + teamId + ".jpg";
}

export function getImageUrlForTournament(tournamentId: string) {
  return "/img/tournament-logos/" + tournamentId + ".jpg";
}

export function getImageUrlForTournamentTeamPic(tournamentId: string) {
  return "/img/tournament-team-pics/" + tournamentId + ".jpg";
}

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

export function getYearsOnRival(playerId: string): number[] {
  const yearsOnRival: number[] = [];
  RIVAL_ROSTERS.forEach(rosterList => {
    let played = false;
    const rostFull = rosterList.players.concat(rosterList.coaches);
    _.forEach(rostFull, player => {
      if (player === playerId) {
        played = true;
      }
    });
    if (played) {
      yearsOnRival.push(rosterList.year);
    }
  });

  return yearsOnRival;
}

export function isPlayerACoach(rosterId: string, playerId: string) {
  const roster = _.find(RIVAL_ROSTERS, ["id", rosterId]);
  if (!roster) {
    return false;
  }
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
