import { NavBarItem, ExternalLinkItem } from './interfaces';

export const INITIAL_STATE = {
  testInteger: 4
};

export const NAV_BAR: NavBarItem[] = [
  {
    key: "aboutus",
    title: "About Us",
    route: "/about"
  },
  {
    key: "roster",
    title: "Roster",
    route: "/roster"
  },
  {
    key: "news",
    title: "News",
    route: "/news"
  },
  {
    key: "results",
    title: "Results",
    route: "/results"
  },
];

export const EXTERNAL_LINKS: ExternalLinkItem[] = [
  {
    key: "facebook",
    icon: "logofb",
    href: "https://www.facebook.com/rivalultimate",
    target: "_blank"
  },
  {
    key: "twitter",
    icon: "logotwitter",
    href: "https://twitter.com/RivalUltimate",
    target: "_blank"
  },
  {
    key: "usau",
    icon: "logopointer",
    href: "http://play.usaultimate.org/teams/events/Eventteam/?TeamId=YEuqlS%2fJ5lH0T%2fIKyERLvU%2bboao7c%2bwIggBop%2fT13KA%3d",
    target: "_blank"
  },
  {
    key: "email",
    icon: "logoemail",
    href: "mailto:captains@rivalultimate.com",
    target: "_blank"
  },

];