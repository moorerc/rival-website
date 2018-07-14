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
        image: "/img/RCircle.svg",
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

// import * as homeIcon from "./RCircle.svg"; // tslint:disable-line:no-require-imports no-var-requires

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
                // style={{
                //     background: "url(" + navBarItem.image + ")",
                //     backgroundPosition: "center",
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover",
                // }}
                to={navBarItem.route}
            >
                {/* <span>{homeIcon}</span> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.9 337.9">
                    <text transform="translate(55.51 250.62)"
                        font-size="220" fill="#231f20" font-family="Michroma, Michroma">R</text>
                    <circle cx="308.66" cy="386.54" r="167.05" transform="translate(-322.63 113.88) rotate(-45)"
                        fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="3.79"/>
                </svg> */}
                                {/* <object
                    className="item-image"
                    type="image/svg+xml"
                    data={navBarItem.image}
                    width="60"
                    height="60"
                /> */}
                {/* <img className="item-image" src={navBarItem.image} /> */}
                {/* {homeIcon} */}
            </Link>
        );
    }
}
