// tslint:disable:max-line-length

import { Tournament } from "../Tournaments";

// (bmoore) to do: create "mapsLink" on the fly with google maps api

export const TOURNAMENTS_2017: Tournament[] = [
    {
        id: "2017-bici",
        name: "Beachfront Invitational",
        location: {
            city: "",
            state: "",
            mapsLink: "",
        },
        date: {
            start: new Date(""),
            end: new Date (""),
        },
        link: "",
        result: undefined,
        sanctioned: false,
    },
    {
        id: "2017-pec",
        name: "Pro Elite Challenge",
        location: {
            city: "Aurora",
            state: "CO",
            mapsLink: "",
        },
        date: {
            start: new Date("July 8, 2017"),
            end: new Date ("July 9, 2017"),
        },
        link: "https://play.usaultimate.org/events/TCT-Pro-Elite-Challenge-2017/",
        result: undefined,
        sanctioned: true,
    },
    {
        id: "2017-sfi",
        name: "Select Flight Invite",
        location: {
            city: "Columbus",
            state: "OH",
            mapsLink: "",
        },
        date: {
            start: new Date("July 29, 2017"),
            end: new Date ("July 30, 2017"),
        },
        link: "https://play.usaultimate.org/events/TCT-Select-Flight-Invite-2017/",
        result: undefined,
        sanctioned: true,
    },
    {
        id: "2017-esc",
        name: "Elite Select Challenge",
        location: {
            city: "Appleton",
            state: "WI",
            mapsLink: "",
        },
        date: {
            start: new Date("August 19, 2017"),
            end: new Date ("August 20, 2017"),
        },
        link: "https://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2017/",
        result: undefined,
        sanctioned: true,
    },
    {
        id: "2017-regionals",
        name: "Great Lakes Regionals",
        location: {
            city: "West Chester",
            state: "OH",
            mapsLink: "",
        },
        date: {
            start: new Date("September 23, 2017"),
            end: new Date ("September 24, 2017"),
        },
        link: "https://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2017/",
        result: 1,
        sanctioned: true,
    },
    {
        id: "2017-nationals",
        name: "National Championships",
        location: {
            city: "Sarasota",
            state: "FL",
            mapsLink: "",
        },
        date: {
            start: new Date("October 19, 2017"),
            end: new Date ("October 22, 2017"),
        },
        link: "https://play.usaultimate.org/events/USA-Ultimate-National-Championships-2017/",
        result: undefined,
        sanctioned: true,
    },
];

export const TOURNAMENTS_2016: Tournament[] = [
    {
        id: "2016-bici",
        name: "Beachfront Invitational",
        location: {
            city: "Joliet",
            state: "IL",
            mapsLink: "https://goo.gl/maps/cXdAiVMp5iz",
        },
        date: {
            start: new Date("June 4, 2016"),
            end: new Date ("June 5, 2016"),
        },
        link: "http://www.bfpultimate.com/tournament.html",
        result: undefined,
        sanctioned: false,
        // "teampic": "img/Beachfront2016_TeamPhoto.JPG",
    },
    {
        id: "2016-esc",
        name: "Elite Select Challenge",
        location: {
            city: "Joliet",
            state: "IL",
            mapsLink: "https://goo.gl/maps/cXdAiVMp5iz",
        },
        date: {
            start: new Date("June 4, 2016"),
            end: new Date("June 5, 2016"),
        },
        link: "http://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2016-Oshadega-Invite/schedule/Women/Club-Women/",
        result: 10,
        sanctioned: true,
    },
    {
        id: "2016-chc",
        name: "Chicago Heavyweights",
        location: {
            city: "Loves Park",
            state: "IL",
            mapsLink: "https://goo.gl/maps/fXpLRVUijSw",
        },
        date: {
            start: new Date("July 23, 2016"),
            end: new Date("June 24, 2016"),
        },
        link: "http://play.usaultimate.org/events/Heavyweights-2016/schedule/Women/Club-Women/",
        result: 2,
        sanctioned: true,
        // "teampic": "img/Heavyweights2016_TeamPhoto.JPG",
    },
    {
        id: "2016-sfi",
        name: "Select Flight Invite",
        location: {
            city: "Westfield",
            state: "IN",
            mapsLink: "https://goo.gl/maps/2YMzesnjqFo",
        },
        date: {
            start: new Date("August 13, 2016"),
            end: new Date("August 14, 2016"),
        },
        link: "http://play.usaultimate.org/events/TCT-Select-Flight-Invite-2016/schedule/Women/Club-Women/",
        result: 2,
        sanctioned: true,
        // "teampic": "img/Heavyweights2016_TeamPhoto.JPG",
    },
    {
        id: "2016-sectionals",
        name: "East Plains Sectionals",
        location: {
            city: "Versailles",
            state: "OH",
            mapsLink: "https://goo.gl/maps/GGrE4y45piJ2",
        },
        date: {
            start: new Date("August 27, 2016"),
            end: new Date("August 28, 2016"),
        },
        link: "http://play.usaultimate.org/events/East-Plains-Womens-Sectionals-2016/schedule/Women/Club-Women/",
        result: 1,
        sanctioned: true,
    },
    {
        id: "2016-regionals",
        name: "Great Lakes Regionals",
        location: {
            city: "Rockford",
            state: "IL",
            mapsLink: "https://goo.gl/maps/5mwkVHyj7Ls",
        },
        date: {
            start: new Date("September 10, 2016"),
            end: new Date("September 11, 2016"),
        },
        link: "http://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2016/schedule/Women/Club-Women/",
        result: 1,
        sanctioned: true,
    },
    {
        id: "2016-nationals",
        name: "National Championships",
        location: {
            city: "Rockford",
            state: "IL",
            mapsLink: "https://goo.gl/maps/5mwkVHyj7Ls",
        },
        date: {
            start: new Date(),
            end: new Date(),
        },
        link: "",
        result: undefined,
        sanctioned: true,
    },
];

export const TOURNAMENTS_2015: Tournament[] = [
    {
        id: "2015-bici",
        name: "Beachfront Invitational",
        location: {
            city: "Joliet",
            state: "IL",
            mapsLink: "https://goo.gl/maps/uMbDC2MsxYA2",
        },
        date: {
            start: new Date("June 6, 2015"),
            end: new Date("June 7, 2015"),
        },
        link: "http://play.usaultimate.org/events/Beachfront-Instant-Classic-Invitational/",
        result: undefined,
        sanctioned: false,
    },
    {
        id: "2015-esc",
        name: "Elite Select Challenge",
        location: {
            city: "Hilliard",
            state: "OH",
            mapsLink: "https://goo.gl/maps/66xTaQsLBUP2",
        },
        date: {
            start: new Date("July 11, 2015"),
            end: new Date("July 12, 2015"),
        },
        link: "http://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2015/",
        result: 13,
        sanctioned: true,
    },
    {
        id: "2015-motown",
        name: "Motown Throwdown",
        location: {
            city: "Sylvania",
            state: "OH",
            mapsLink: "https://goo.gl/maps/AcU6m9TtzYr",
        },
        date: {
            start: new Date("July 25, 2015"),
            end: new Date("July 26, 2015"),
        },
        link: "http://play.usaultimate.org/events/Motown-Throwdown-2015/",
        result: 1,
        sanctioned: true,
    },
    {
        id: "2015-chc",
        name: "Chicago Heavyweights",
        location: {
            city: "Rockford",
            state: "IL",
            mapsLink: "https://goo.gl/maps/MEFQUCpBvRS2",
        },
        date: {
            start: new Date("August 8, 2015"),
            end: new Date("August 9, 2015"),
        },
        link: "http://play.usaultimate.org/events/Heavyweights-2015/",
        result: 4,
        sanctioned: true,
    },
    {
        id: "2015-sectionals",
        name: "East Plains Sectionals",
        location: {
            city: "Versailles",
            state: "OH",
            mapsLink: "https://goo.gl/maps/QMYj1jWz4gJ2",
        },
        date: {
            start: new Date("August 29, 2015"),
            end: new Date("August 30, 2015"),
        },
        link: "http://play.usaultimate.org/events/East-Plains-Womens-Sectionals-2015/",
        result: 1,
        sanctioned: true,
    },
    {
        id: "2015-regionals",
        name: "Great Lakes Regionals",
        location: {
            city: "West Chester",
            state: "OH",
            mapsLink: "https://goo.gl/maps/cLzrgMRDEuA2",
        },
        date: {
            start: new Date("September 12, 2015"),
            end: new Date("September 13, 2015"),
        },
        link: "http://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2015/",
        result: 2,
        sanctioned: true,
    },
];
