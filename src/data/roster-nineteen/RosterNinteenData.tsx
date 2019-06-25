import { Player, PLAYERS, Players } from "../Players";

export interface Category {
  title: string;
  description?: string;
  playlists: Playlist[];
}

export interface Playlist {
  title: string;
  description: string;
  image: string;
  trackList: Track[];
}

export interface Track {
  title: string;
  artist: Player;
  link: string;
}

export const THE_ONES_THAT_GOT_AWAY: Playlist = {
  title: "The Ones That Got Away",
  description: "Welcome (finally) to Rival",
  image: "playlist_theonesthatgotaway.jpg",
  trackList: [
    {
      title: "Since U Been Gone",
      artist: PLAYERS[Players.MILLER],
      link: "https://open.spotify.com/track/3xrn9i8zhNZsTtcoWgQEAd"
    },
    {
      title: "Just A Dream",
      artist: PLAYERS[Players.LEHMAN],
      link: "https://open.spotify.com/track/3ZdJffjzJWFimSQyxgGIxN"
    },
    {
      title: "Wait For You",
      artist: PLAYERS[Players.YEE],
      link: "https://open.spotify.com/track/0U969xYNlAyfzi8P1TaO7u"
    },
    {
      title: "Coming Home",
      artist: PLAYERS[Players.SOPER],
      link: "https://open.spotify.com/track/6Iocm6VMu6bVNYwiDoyQFW"
    }
  ]
};

export const FRESH_FINDS: Playlist = {
  title: "Fresh Finds",
  description: "Fresh music every year, from local gigs to the big stage",
  image: "playlist_freshfinds.jpg",
  trackList: [
    {
      title: "Welcome To My Life",
      artist: PLAYERS[Players.GORDON],
      link: "https://open.spotify.com/track/714Lw0m2SmCEhKSPw0Dn8J"
    },
    {
      title: "We Are Young",
      artist: PLAYERS[Players.FLEMING],
      link:
        "https://open.spotify.com/track/7a86XRg84qjasly9f6bPSD?si=1l19bQdhT6OCoPmetyeHOw"
    },
    {
      title: "Breaking Free",
      artist: PLAYERS[Players.HECHT],
      link: "https://open.spotify.com/track/5zQ1Wq6HNYjGZWkVv5P8Eg"
    }
  ]
};

export const KIDS_BOP_19: Playlist = {
  title: "Kidz Bop 19",
  description: "Family-friendly sing-a-longs for the developing minds",
  image: "playlist_kidzbop19.jpg",
  trackList: [
    {
      title: "I Want Candy",
      artist: PLAYERS[Players.KNOWLES],
      link:
        "https://open.spotify.com/track/7sruBwHu4S0DIo8RXKxsAY?si=bNkF1c5sSs6DILOUTuBkiw"
    },
    {
      title: "Young Dumb & Broke",
      artist: PLAYERS[Players.JAVERSAK],
      link: "https://open.spotify.com/track/5Z3GHaZ6ec9bsiI5BenrbY"
    },
    {
      title: "Sixteen Going on Seventeen",
      artist: PLAYERS[Players.CONERLY],
      link: "https://open.spotify.com/track/34IIktVCLfkbysTSYcKo3k"
    }
  ]
};

export const LADIES_EIGHTIES: Playlist = {
  title: "Ladies 80s",
  description: "Groovy beats for a memorable night on the dancefloor",
  image: "playlist_ladieseighties.jpg",
  trackList: [
    {
      title: "Lady Marmalade",
      artist: PLAYERS[Players.WALKER],
      link:
        "https://open.spotify.com/track/7GQqj9jRtDkMp8zByehXQI?si=jQXn74V2RJirNKOWCI73XQ"
    },
    {
      title: "Walking On Sunshine",
      artist: PLAYERS[Players.HARLEY],
      link:
        "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0?si=IkU-MwsLTVyYrZKCnTfV3Q"
    },
    {
      title: "Pump Up The Jam",
      artist: PLAYERS[Players.SMIACH],
      link:
        "https://open.spotify.com/track/0UAEHlFR79k9CJvknSGUNf?si=haBZXVj5RN-SrGQn4VFFMA"
    },
    {
      title: "What a Feeling",
      artist: PLAYERS[Players.SCHRODER],
      link:
        "https://open.spotify.com/track/0aAR5HogGoT68EWFbyRFqx?si=6lPWISQQSWayIzPqgHz5dA"
    },
    {
      title: "Girls Just Wanna Have Fun",
      artist: PLAYERS[Players.SOPER],
      link:
        "https://open.spotify.com/track/4y1LsJpmMti1PfRQV9AWWe?si=bPllCWuWR7i6Dbs5Svpm5g"
    },
    {
      title: "Sweet Dreams (Are Made of This)",
      artist: PLAYERS[Players.KNOWLES],
      link:
        "https://open.spotify.com/track/1TfqLAPs4K3s2rJMoCokcS?si=u1dmusvZQtyGWKldXQccmw"
    }
  ]
};

export const THIS_IS_PITBULL: Playlist = {
  title: "This Is: Pitbull",
  description: "Mr. Worldwide right in Steel City",
  image: "playlist_thisispitbull.jpg",
  trackList: [
    {
      title: "Wild Wild Love",
      artist: PLAYERS[Players.MENDOZA],
      link:
        "https://open.spotify.com/track/2J4Alm5zUad4hB5bY2HhtV?context=spotify%3Aplaylist%3A37i9dQZF1DXcfXDjovoEpj&si=YLmjqhgzTUCwPzhcJ77kMA"
    },
    {
      title: "I Know You want Me (Calle Ocho)",
      artist: PLAYERS[Players.LEHMAN],
      link:
        "https://open.spotify.com/track/5RzFJd6W40SDTyZkX6xx45?context=spotify%3Aplaylist%3A37i9dQZF1DXcfXDjovoEpj&si=BOOIcw2OQVuXckvYCPc8hw"
    },
    {
      title: "International Love",
      artist: PLAYERS[Players.YEE],
      link:
        "https://open.spotify.com/track/62zFEHfAYl5kdHYOivj4BC?si=JxLVxcnJTfOL8WJt2sZx2g"
    },
    {
      title: "Hotel Room Service",
      artist: PLAYERS[Players.BENDER],
      link:
        "https://open.spotify.com/track/6Rb0ptOEjBjPPQUlQtQGbL?context=spotify%3Aplaylist%3A37i9dQZF1DXcfXDjovoEpj&si=ME1ihtbKRhagr_0Ja8DhNA"
    },
    {
      title: "Messin' Around",
      artist: PLAYERS[Players.KNOWLES],
      link:
        "https://open.spotify.com/track/2moTY9zKAZkRsODU4TUXY6?si=IibVa52VSaW15qC9qjhQzA"
    }
  ]
};

export const THIS_IS_PAVAROTTI: Playlist = {
  title: "This Is: Pavarotti",
  description: "An unforgettable voice always chasing the spotlight",
  image: "playlist_thisispavarotti.jpg",
  trackList: [
    {
      title: "Do You Want to Build a Snowman?",
      artist: PLAYERS[Players.LO],
      link: "https://open.spotify.com/track/2yi7HZrBOC4bMUSTcs4VK6"
    }
  ]
};

export const EMO_FOREVER: Playlist = {
  title: "Emo Forever",
  description: "Emo anthems for the middle school spirits",
  image: "playlist_emoforever.jpg",
  trackList: [
    {
      title: "Dirty Little Secret",
      artist: PLAYERS[Players.SCOTT],
      link: "https://open.spotify.com/track/5lDriBxJd22IhOH9zTcFrV"
    },
    {
      title: "Sk8tr Boi",
      artist: PLAYERS[Players.WRIGHT],
      link: "https://open.spotify.com/track/00Mb3DuaIH1kjrwOku9CGU"
    }
  ]
};

export const MORNING_COMMUTE: Playlist = {
  title: "Morning Commute",
  description: "Brought to you buy solo artists always on the road",
  image: "playlist_morningcommute.jpg",
  trackList: [
    {
      title: "Leaving, On a Jet Plane",
      artist: PLAYERS[Players.MOORE],
      link:
        "https://open.spotify.com/track/3D8dwH690MXQRhtIZTSS9c?si=NE5zseuhRjKsT76nWMSzzw"
    },
    {
      title: "Dancing On My Own",
      artist: PLAYERS[Players.SOPER],
      link:
        "https://open.spotify.com/track/7g13jf3zqlP5S68Voo5v9m?si=brZE8fIfRAmMlpi5TMwdSg"
    },
    {
      title: "Lonely",
      artist: PLAYERS[Players.LO],
      link:
        "https://open.spotify.com/track/6ls5ulRydoPE7oWGPGBqFA?si=iiBvZZrFSru3SRxZM8KTLA"
    },
    {
      title: "On the Road Again",
      artist: PLAYERS[Players.DUFFY],
      link:
        "https://open.spotify.com/track/1OmKo4t4Bh95xQI6WGiUR3?si=OXex3riCQViITDjCT8uTKA"
    },
    {
      title: "Life is a Highway",
      artist: PLAYERS[Players.CONERLY],
      link:
        "https://open.spotify.com/track/2Fs18NaCDuluPG1DHGw1XG?si=IFSETXHPSViN07utivGQZg"
    },
    {
      title: "Ridin' Solo",
      artist: PLAYERS[Players.NITZ],
      link:
        "https://open.spotify.com/track/6BaxqcoEM9r3LXisTyJjST?si=MshqJUGAR6qpDJFFqrpggQ"
    }
  ]
};

export const HIT_REWIND: Playlist = {
  title: "Hit Rewind",
  description:
    "Still leading the charts, vintage hits from your record player days",
  image: "playlist_hitrewind.jpg",
  trackList: [
    {
      title: "What Hurts The Most",
      artist: PLAYERS[Players.FAZEKAS],
      link:
        "https://open.spotify.com/track/4bVuIlGQBMWS7vIhcx8Ae4?si=dsfPZyOgTnSbrdPsmyn51w"
    },
    {
      title: "What's My Age Again?",
      artist: PLAYERS[Players.WALKER],
      link:
        "https://open.spotify.com/track/4LJhJ6DQS7NwE7UKtvcM52?si=B9lJiw73TdaR3Y9ifzXBMw"
    },
    {
      title: "Forever Young",
      artist: PLAYERS[Players.BALL],
      link:
        "https://open.spotify.com/track/1qli6fjEVdmMgssWy55eiZ?si=1MEKPLbeTE6jGQj-ugP-vw"
    }
  ]
};

export const NEW_BOOTS: Playlist = {
  title: "New Boots",
  description:
    "Leading the new generation in boots that were never made just for walking",
  image: "playlist_newboots.jpg",
  trackList: [
    {
      title: "Pray for You",
      artist: PLAYERS[Players.WRIGHT],
      link: "https://open.spotify.com/track/3l8FWYAfYCutuiGgJndfos"
    },
    {
      title: "Goodbye Summer",
      artist: PLAYERS[Players.PRUITT],
      link: "https://open.spotify.com/track/1kmpcpEK0f56M5dkqNajRk"
    }
  ]
};

export const CHILL_HITS: Playlist = {
  title: "Chill Hits",
  description: "Kick back and relax to these calming melodies",
  image: "playlist_chillhits.jpg",
  trackList: [
    {
      title: "Good Vibrations",
      artist: PLAYERS[Players.DUFFY],
      link:
        "https://open.spotify.com/track/7tf64lNC31lWlTsih0nfZf?si=V41UIZc_QKmkBLOru5WnPQ"
    },
    {
      title: "Cool Kids",
      artist: PLAYERS[Players.HECHT],
      link:
        "https://open.spotify.com/track/13P5rwmk2EsoFRIz9UCeh9?si=5DiI6SgDRjWcof5aYJ4TKQ"
    },
    {
      title: "Bitch Don't Kill My Vibe",
      artist: PLAYERS[Players.MENDOZA],
      link:
        "https://open.spotify.com/track/712uvW1Vezq8WpQi38v2L9?si=O-R-ncrmSQSc0FCpnq8MbA"
    },
    {
      title: "Don't Worry, Be Happy",
      artist: PLAYERS[Players.PRUITT],
      link:
        "https://open.spotify.com/track/4hObp5bmIJ3PP3cKA9K9GY?si=oqZ7pUwsT2WonS-yFcOxtA"
    },
    {
      title: "Ice Ice Baby",
      artist: PLAYERS[Players.JAVERSAK],
      link:
        "https://open.spotify.com/track/3XVozq1aeqsJwpXrEZrDJ9?si=JBe-3gByTPG3eqL1StGFRg"
    },
    {
      title: "No Shoes, No Shirt, No Problem",
      artist: PLAYERS[Players.NITZ],
      link:
        "https://open.spotify.com/track/208bYsadJ56km31IENM2qS?si=-RR7BGNHSd2Ixnt3wgASdw"
    }
  ]
};

export const NATURE_SOUNDS: Playlist = {
  title: "Nature Sounds",
  description: "Return to the harmonies of the wilderness wherever you may be",
  image: "playlist_naturesounds.jpg",
  trackList: [
    {
      title: "Praying",
      artist: PLAYERS[Players.SCHRODER],
      link:
        "https://open.spotify.com/track/0jdny0dhgjUwoIp5GkqEaA?si=NBRv9kr0QY-hyERkUQA23Q"
    },
    {
      title: "Crazy Frog",
      artist: PLAYERS[Players.MENDOZA],
      link: "https://open.spotify.com/track/3VQ955Eo5g8bi442lerau3"
    },
    {
      title: "What A Wonderful World",
      artist: PLAYERS[Players.PAINE],
      link:
        "https://open.spotify.com/track/1Fzm9s6Fh1Eumj5tU4q20m?si=XTHeiCYBQfKbGU5OhuwXNw"
    },
    {
      title: "Heaven Is A Place On Earth",
      artist: PLAYERS[Players.LEHMAN],
      link: "https://open.spotify.com/track/58mFu3oIpBa0HLNeJIxsw3"
    },
    {
      title: "Ain't No Mountain High Enough",
      artist: PLAYERS[Players.BENDER],
      link:
        "https://open.spotify.com/track/7tqhbajSfrz2F7E1Z75ASX?si=lclaOOYIQYG6WO8cYHZuGQ"
    },
    {
      title: "This Land is Your Land",
      artist: PLAYERS[Players.SCOTT],
      link: "https://open.spotify.com/track/7CNaYAdLyi86kofGafReiT"
    }
  ]
};

export const SECRET_LIFE_OF_PETS: Playlist = {
  title: "Offficial Soundtrack: Secret Life of Pets",
  description: "Never go anywhere without your furry friends on your mind",
  image: "playlist_secretlifeofpets.jpg",
  trackList: [
    {
      title: "(How Much Is) That Doggie In The Window ft. Jasper",
      artist: PLAYERS[Players.MILLER],
      link: "https://open.spotify.com/track/7bs4wDnaX0z7BTeM6lTcYA"
    },
    {
      title: "Howling At Nothing ft. Griffin",
      artist: PLAYERS[Players.SCOTT],
      link: "https://open.spotify.com/track/072XFpSbDJPCRxILkfUbxp"
    },
    {
      title: "Hound Dog ft. Thor",
      artist: PLAYERS[Players.PERRY],
      link: "https://open.spotify.com/track/64Ny7djQ6rNJspquof2KoX"
    },
    {
      title: "Dog Days Are Over ft. Mari and Miso",
      artist: PLAYERS[Players.LEHMAN],
      link:
        "https://open.spotify.com/track/1YLJVmuzeM2YSUkCCaTNUB?si=kJQceMUEQXKkJkOp6vgdDg"
    }
  ]
};

export const HAPPY_BIRTHDAY: Playlist = {
  title: "Happy Birthday",
  description: "Happy Birthday Champ!",
  image: "playlist_happybirthday.jpg",
  trackList: [
    {
      title: "Birthday",
      artist: PLAYERS[Players.PRUITT],
      link:
        "https://open.spotify.com/track/2xLOMHjkOK8nzxJ4r6yOKR?si=AR8XW2ggTly0tLfoM-H-1A"
    },
    {
      title: "Happy Birthday",
      artist: PLAYERS[Players.PRUITT],
      link:
        "https://open.spotify.com/track/01lewSOj9ZaXplh9TpNKL4?si=1_w8DqyJSIasUU_7fvMfjQ"
    }
  ]
};

export const STUDY_BREAK: Playlist = {
  title: "Study Break",
  description: "The perfect tunes to keep your focus",
  image: "playlist_studybreak.jpg",
  trackList: [
    {
      title: "ABC",
      artist: PLAYERS[Players.CONERLY],
      link: "https://open.spotify.com/track/6wDviYDtmSDZ0S6TVMM9Vc"
    },
    {
      title: "The Longest Time",
      artist: PLAYERS[Players.SOTER],
      link: "https://open.spotify.com/track/5DH7nDryMhpixm4G4B7RP9"
    },
    {
      title: "Me and Julio Down By The Schoolyard",
      artist: PLAYERS[Players.FLEMING],
      link: "https://open.spotify.com/track/6vxHp3CDNo0afgKGp2yi1E"
    },
    {
      title: "All Night",
      artist: PLAYERS[Players.DUFFY],
      link: "https://open.spotify.com/track/0dXNQ8dckG4eYfEtq9zcva"
    },
    {
      title: "Don't Stop 'Til You Get Enough",
      artist: PLAYERS[Players.SOPER],
      link: "https://open.spotify.com/track/6AZZzlQD1FThgAcWIgu3g1"
    },
    {
      title: "Ways to Go",
      artist: PLAYERS[Players.HECHT],
      link: "https://open.spotify.com/track/57nNNkgk768QVXq3uHxu5e"
    },
    {
      title: "Teach Me How to Dougie",
      artist: PLAYERS[Players.WALKER],
      link: "https://open.spotify.com/track/61LtVmmkGr8P9I2tSPvdpf"
    },
    {
      title: "Daddy Lessons",
      artist: PLAYERS[Players.GORDON],
      link: "https://open.spotify.com/track/71OvX5NNLrmz7rpq1ANTQn"
    },
    {
      title: "School's Out",
      artist: PLAYERS[Players.BENDER],
      link:
        "https://open.spotify.com/track/5Z8EDau8uNcP1E8JvmfkZe?si=WBXmtEiiQ8iEeRanE5iEEg"
    }
  ]
};

export const ALL_TIME_HITS: Playlist = {
  title: "All Time Hits",
  description:
    "Throughout the years: started on the charts, stayed on the charts.",
  image: "playlist_alltimehits.jpg",
  trackList: [
    {
      title: "Far Away",
      artist: PLAYERS[Players.MOORE],
      link:
        "https://open.spotify.com/track/0ADZ5dmXhlfzjMw6lefoPl?si=GSZ8yvJkT-qQWnJ69ZgeZw"
    },
    {
      title: "Wake Me Up When September Ends",
      artist: PLAYERS[Players.LO],
      link:
        "https://open.spotify.com/track/3ZffCQKLFLUvYM59XKLbVm?si=FmuxNKXQTSyNlLafUg5ddA"
    },
    {
      title: "We Are Family",
      artist: PLAYERS[Players.HARLEY],
      link:
        "https://open.spotify.com/track/5IKLwqBQG6KU6MP2zP80Nu?si=75Bicrc9QSKpzfQIAu6pMQ"
    },
    {
      title: "Uptown Girl",
      artist: PLAYERS[Players.WALKER],
      link:
        "https://open.spotify.com/track/5zA8vzDGqPl2AzZkEYQGKh?si=79Ua892cQsumo9_Bq0JDSw"
    },
    {
      title: "Don't You (Forget About Me)",
      artist: PLAYERS[Players.SCOTT],
      link:
        "https://open.spotify.com/track/4aWn4NHlELpOehxsBaQeoe?si=gmKCo_QXRk69GQWpT4cSaQ"
    },
    {
      title: "Heart Of A Champion",
      artist: PLAYERS[Players.PRUITT],
      link:
        "https://open.spotify.com/track/5PYu9Jw9zWN7Iom9OtYmgU?si=0H7mcCetTVOZpTQ55kXpLQ"
    },
    {
      title: "I'll Never Love Again",
      artist: PLAYERS[Players.SMIACH],
      link:
        "https://open.spotify.com/track/3DKpA54hrFIdPN6AtL9HXa?si=AzL3N1pLREa1V_bppAwbCA"
    },
    {
      title: "Centerfield",
      artist: PLAYERS[Players.BALL],
      link:
        "https://open.spotify.com/track/2iRfjwzPsooCskZrrlsgcC?si=XkWxtL_YS4WFC8IYuelV_A"
    }
  ]
};

export const RIVAL_2019_PLAYLIST: Playlist = {
  title: "Favorites",
  description: "Introducing Rival 2019!",
  image: "playlist_favorites.jpg",
  trackList: [
    {
      title: "",
      artist: PLAYERS[Players.SOPER],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.BENDER],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.CONERLY],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.MILLER],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.PRUITT],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.NITZ],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.MOORE],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.WALKER],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.SMIACH],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.LO],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.FLEMING],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.YEE],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.WRIGHT],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.MENDOZA],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.HARLEY],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.SOTER],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.KNOWLES],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.LEHMAN],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.GORDON],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.SCHRODER],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.FAZEKAS],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.SCOTT],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.PAINE],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.PERRY],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.DUFFY],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.HECHT],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.JAVERSAK],
      link: ""
    },
    {
      title: "",
      artist: PLAYERS[Players.BALL],
      link: ""
    }
  ]
};

export const PLAYLISTS: Playlist[] = [
  RIVAL_2019_PLAYLIST,
  NEW_BOOTS,
  HIT_REWIND,
  THE_ONES_THAT_GOT_AWAY,
  FRESH_FINDS,
  ALL_TIME_HITS,
  LADIES_EIGHTIES,
  HAPPY_BIRTHDAY,
  KIDS_BOP_19,
  THIS_IS_PAVAROTTI,
  EMO_FOREVER,
  MORNING_COMMUTE,
  STUDY_BREAK,
  THIS_IS_PITBULL,
  CHILL_HITS,
  NATURE_SOUNDS,
  SECRET_LIFE_OF_PETS
];

export const HEAVY_ROTATION: Category = {
  title: "Your heavy rotation",
  playlists: [RIVAL_2019_PLAYLIST, NEW_BOOTS, HIT_REWIND]
};

export const FRESH_NEW_MUSIC: Category = {
  title: "Fresh new music",
  playlists: [THE_ONES_THAT_GOT_AWAY, FRESH_FINDS]
};

export const YEARS_IN_REWIND: Category = {
  title: "Years in rewind",
  playlists: [ALL_TIME_HITS, LADIES_EIGHTIES, HAPPY_BIRTHDAY]
};

export const MORE_OF_WHAT_YOU_LIKE: Category = {
  title: "More of what you like",
  playlists: [
    KIDS_BOP_19,
    THIS_IS_PAVAROTTI,
    EMO_FOREVER,
    MORNING_COMMUTE,
    STUDY_BREAK
  ]
};

export const RECENTLY_PLAYED: Category = {
  title: "Recently played",
  playlists: [THIS_IS_PITBULL, CHILL_HITS, NATURE_SOUNDS, SECRET_LIFE_OF_PETS]
};

export const CATEGORIES: Category[] = [
  HEAVY_ROTATION,
  FRESH_NEW_MUSIC,
  YEARS_IN_REWIND,
  RECENTLY_PLAYED,
  MORE_OF_WHAT_YOU_LIKE
];
