import { Icon } from "@blueprintjs/core";
import * as _ from "lodash";
import * as React from "react";

import { Badges } from "../data/Badges";
import { PLAYERS, Players } from "../data/Players";
import { rbq2017BadgesActivated } from "../data/RBQ2017";
import { getBadgesEarnedForPlayer, numTimesUserEarnedBadge } from "./RBQHelpers";
import RBQMiniBadgeIcon from "./RBQMiniBadgeIcon";

interface RBQIndividualDetailsPanelProps {
    player: Players;
    placement: number;
}

export default class RBQIndividualDetailsPanel extends React.Component<RBQIndividualDetailsPanelProps> {
    render() {
        const { player } = this.props;
        const imagesBase = "/img/roster-2018/headshots/rival2018_headshot_";
        const badgesEarned = getBadgesEarnedForPlayer(player);
        const badgesActivated: Badges[] = rbq2017BadgesActivated;

        return (
            <div className="rbq-individual-details-panel">
                <div className="panel-header">
                    <div className="header-left">
                        <img
                            className="user-image"
                            src={imagesBase + PLAYERS[player].name.last.toLowerCase() + ".jpg"}
                        />
                    </div>
                    <div className="header-right">
                        <div className="title">
                            <div className="title-text">
                            {
                                PLAYERS[this.props.player].name.first
                                    + " "
                                    + (
                                        PLAYERS[this.props.player].name.nickname
                                            ? "'" + PLAYERS[this.props.player].name.nickname + "' "
                                            : ""
                                    )
                                    + PLAYERS[this.props.player].name.last
                            }
                            </div>
                        </div>
                        <div className="description">
                            <Icon icon="badge" iconSize={12} />
                            {"Badges Earned: " + badgesEarned.length}
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="badge-icons">
                        { _.map(badgesActivated, (badge: Badges, key: any) => (
                            <RBQMiniBadgeIcon
                                badge={badge}
                                key={key}
                                count={numTimesUserEarnedBadge(player, badge)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

// return (
//     <div className="rbq-badge-details-panel">
//         <div className="panel-header">
//             <div className="header-left">
//                 <img
//                     className="badge-image"
//                     src={badgeImagesBase + BADGES[badge].image}
//                 />
//             </div>
//             <div className="header-right">
//                 <div className="title">
//                     <div className="title-text">{BADGES[badge].title}</div>
//                     <div className="created-by">
//                         {"Created By: "}
//                         <img
//                             className="player-image"
//                             src={playerImagesBase + BADGES[badge].createdBy + ".jpg"}
//                         />
//                     </div>
//                 </div>
//                 <div className="description">{BADGES[badge].description}</div>
//             </div>
//         </div>
//         <div className="panel-body">
//             <div className="user-avatars">
//                 { _.map(roster.players, (player: Players, key: any) => (
//                     <RBQMiniUserAvatar
//                         player={player}
//                         key={key}
//                         count={numTimesUserEarnedBadge(player, badge)}
//                     />
//                 ))}
//             </div>
//             <div className="badges-earned-table">
//                 <table className="pt-table">
//                     <thead>
//                         <tr>
//                             <th>User</th>
//                             <th>Date Earned</th>
//                             <th>Notes</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {_.map(badgesEarned, (badgeEanred: BadgeEarned) => (
//                             <tr>
//                                 <td>
//                                 {
//                                     PLAYERS[badgeEanred.player].name.nickname
//                                         || PLAYERS[badgeEanred.player].name.first
//                                 }
//                                 </td>
//                                 <td>{badgeEanred.date}</td>
//                                 <td>{badgeEanred.notes || ""}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// );
