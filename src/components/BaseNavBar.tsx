import * as _ from "lodash";
import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/BaseNavBar.css";

interface NavBarItemBasic {
    key: string;
    route: string;
    showOnPage: (pageName: string) => boolean;
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
        showOnPage: (pageName: string) => true,
        title: "About Us",
        type: "text",
    },
    {
        key: "roster",
        route: "/roster",
        showOnPage: (pageName: string) => true,
        title: "Roster",
        type: "text",
    },
    {
        image: "/img/RCircle.png",
        key: "home",
        route: "/",
        showOnPage: (pageName: string) => pageName === "home" ? false : true,
        type: "image",
    },
    {
        key: "news",
        route: "/news",
        showOnPage: (pageName: string) => true,
        title: "News",
        type: "text",
    },
    {
        key: "results",
        route: "/results",
        showOnPage: (pageName: string) => true,
        title: "Results",
        type: "text",
    },
];

interface BaseNavBarProps {
    pageName: string;
}

export default class BaseNavBar extends React.Component<BaseNavBarProps> {
    render() {
        return (
            <div className="base-nav-bar">
                    {_.map(NAV_BAR, (navBarItem: NavBarItem, index) => {
                            if (!navBarItem.showOnPage(this.props.pageName)) {
                                return null;
                            }

                            return (
                                <div
                                    key={navBarItem.key}
                                    className="base-nav-bar-item"
                                >
                                    {
                                        (navBarItem.type === "text") && this.renderTextLink(navBarItem)
                                    }
                                    {
                                        (navBarItem.type === "image") && this.renderImageLink(navBarItem)
                                    }
                                </div>
                            );
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

    private renderImageLink(navBarItem: NavBarItemImage) {
        return (
            <Link
                className="base-nav-bar-item-image"
                style={{
                    background: "url(" + navBarItem.image + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                to={navBarItem.route}
            />
        );
    }
}
