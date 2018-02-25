import * as _ from "lodash";
import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/BaseNavBar.css";

interface NavBarItemBasic {
    key: string;
    route: string;
}

interface NavBarItemText extends NavBarItemBasic {
    title: string;
    type: "text";
}

interface NavBarItemImage extends NavBarItemBasic {
    type: "image";
    image: string;
}

type NavBarItem = NavBarItemText | NavBarItemImage;

const NAV_BAR: NavBarItem[] = [
    {
        key: "aboutus",
        route: "/about",
        title: "About Us",
        type: "text",
    },
    {
        key: "roster",
        route: "/roster",
        title: "Roster",
        type: "text",
    },
    {
        key: "news",
        route: "/news",
        title: "News",
        type: "text",
    },
    {
        key: "results",
        route: "/results",
        title: "Results",
        type: "text",
    },
];

export default class BaseNavBar extends React.Component {
    render() {
        return (
            <div className="base-nav-bar">
                    {_.map(NAV_BAR, (navBarItem: NavBarItem, index) => {
                            if (navBarItem.type === "text") {
                                return (
                                    <div
                                        key={navBarItem.key}
                                        className="base-nav-bar-item"
                                    >
                                        {this.renderTextLink(navBarItem)}
                                    </div>
                                );
                            } else if (navBarItem.type === "image") {
                                return null;
                            } else {
                                return null;
                            }
                    })}
            </div>
        );
    }

    private renderTextLink(navBarItem: NavBarItemText) {
        return (
            <Link
                className="base-nav-bar-item-text"
                to={navBarItem.route}
            >
                {navBarItem.title.toUpperCase()}
            </Link>
        );
    }
}
