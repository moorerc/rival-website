export interface NavBarItemBasic {
  key: string;
  route: string;
  showOnPage: (pageName: string) => boolean;
}

export interface NavBarItemText extends NavBarItemBasic {
  title: string;
  type: "text";
}

export interface NavBarItemImage extends NavBarItemBasic {
  type: "image";
  image: string;
}

export type NavBarItem = NavBarItemText | NavBarItemImage;

export const NAV_BAR: NavBarItem[] = [
  {
    key: "aboutus",
    route: "/about",
    showOnPage: (pageName: string) => true,
    title: "About Us",
    type: "text"
  },
  {
    key: "roster",
    route: "/roster",
    showOnPage: (pageName: string) => true,
    title: "Roster",
    type: "text"
  },
  {
    image: "/img/RCircle.svg",
    key: "home",
    route: "/",
    showOnPage: (pageName: string) => (pageName === "home" ? false : true),
    type: "image"
  },
  {
    key: "news",
    route: "/news",
    showOnPage: (pageName: string) => true,
    title: "News",
    type: "text"
  },
  {
    key: "results",
    route: "/results",
    showOnPage: (pageName: string) => true,
    title: "Results",
    type: "text"
  }
];
