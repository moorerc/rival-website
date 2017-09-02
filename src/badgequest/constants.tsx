
export interface BadgesEarned {
  "id": number,
  "date_earned": string;
  "details": string;
}

export interface User {
  "id": number;
  "name": string;
  "image": string;
  "badges": BadgesEarned[];
}

export interface Badge {
  "id": number;
  "title": string;
  "image": string;
  "description": string;
  "created": string;
  "created_by": number;
}

export const USERS: User[] = [
  {
      "id":20174,
      "name": "ninja",
      "image": "user_ninja.jpg",
      "badges": [
        {
          "id":213,
          "date_earned":"1501013460000",
          "details":"South Carolina"
        },
        {
          "id":213,
          "date_earned":"1501013580000",
          "details":"Maryland"
        },
        {
          "id":213,
          "date_earned":"1500988320000",
          "details":"Michigan"
        },
        {
          "id":210,
          "date_earned":"1501557060000",
          "details":"MI Bonding"
        },
        {
          "id":213,
          "date_earned":"1503421320000",
          "details":"Hawaii"
        },
        {
          "id":201,
          "date_earned":"1503722760000",
          "details":""
        },
        {
          "id": 215,
          "date_earned":"1503282180000",
          "details":"Navy Pier - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503284520000",
          "details":"Bean - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503093240000",
          "details":"Sweetwater's Donuts - Traveler"
        },
        {
          "id":211,
          "date_earned":"1503197940000",
          "details":"Harley zzz"
        },
      ]
  },
  {
      "id":20175,
      "name": "stevie",
      "image": "user_stevie.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Spirit Captain"
          },
          {
            "id":210,
            "date_earned":"1504248120000",
            "details":"Ladies 80s"
          },
      ]
  },
  {
      "id":20176,
      "name": "champ",
      "image": "user_champ.jpg",
      "badges": [
        {
          "id":213,
          "date_earned":"1501103640000",
          "details":"Indiana"
        },
        {
          "id":208,
          "date_earned":"1500986640000",
          "details":"Indiana"
        },
      ]
  },
  {
      "id":20177,
      "name": "nitz",
      "image": "user_nitz.jpg",
      "badges": [
        {
          "id":213,
          "date_earned":"1501001460000",
          "details":"Texas"
        },
        {
          "id":213,
          "date_earned":"1501001520000",
          "details":"Pennsylvania"
        },
        {
          "id":213,
          "date_earned":"1501018860000",
          "details":"Illinois"
        },
        {
          "id": 220,
          "date_earned":"1501877880000",
          "details":"Confined Space Entries"
        },
        {
          "id":211,
          "date_earned":"1503197280000",
          "details":"Harley zzz"
        },
        {
          "id":201,
          "date_earned":"1504308000000",
          "details":""
        },
      ]
  },
  {
      "id":20178,
      "name": "tots",
      "image": "user_tots.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Co-Captain"
          },
          {
          "id":213,
          "date_earned":"1501354920000",
          "details":"Maine"
        },
        {
          "id":213,
          "date_earned":"1501276500000",
          "details":"Nevada"
        },
        {
          "id":212,
          "date_earned":"1501107960000",
          "details":"Sara Scott"
        },
        {
          "id":201,
          "date_earned":"1501095720000",
          "details":""
        },
        {
          "id":202,
          "date_earned":"1501519560000",
          "details":""
        },
        {
          "id": 204,
          "date_earned":"1501616040000",
          "details":"Workin It"
        },
        {
          "id": 215,
          "date_earned":"1501794240000",
          "details":"Big Ben - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1501937940000",
          "details":"221b Baker Street - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1502032620000",
          "details":"Buckingham Palace - Traveler"
        },
        {
          "id": 220,
          "date_earned":"1501744680000",
          "details":"Forward Deployed Engineer"
        },
        {
          "id":210,
          "date_earned":"1502486820000",
          "details":"SS/Tots"
        },
        {
          "id":201,
          "date_earned":"1503451140000",
          "details":""
        },
        {
          "id":210,
          "date_earned":"1502926680000",
          "details":"Game Night at Sophies!"
        },
        {
          "id":210,
          "date_earned":"1503418080000",
          "details":"Ice Cream with SS/Sophie/Butts!"
        },
        {
          "id":211,
          "date_earned":"1503088260000",
          "details":"Stevie zzz"
        },
        {
          "id": 204,
          "date_earned":"1503799560000",
          "details":"Worm Wizard"
        },
        {
          "id": 225,
          "date_earned":"1503872340000",
          "details":"Walking to Coffee Shop"
        },
        {
          "id":201,
          "date_earned":"1503964200000",
          "details":""
        },
        {
          "id":219,
          "date_earned":"1504237980000",
          "details":"6:09, 3:03, 1:29, 0:39, 6-7"
        },
        {
          "id": 204,
          "date_earned":"1504101660000",
          "details":"Personality Pursuit"
        },
      ]
  },
  {
      "id":20179,
      "name": "janine",
      "image": "user_janine.jpg",
      "badges": [
        {
            "id":205,
            "date_earned":"1499287201937",
            "details":"Co-Captain"
        },
        {
          "id":213,
          "date_earned":"1501350720000",
          "details":"Missouri"
        },
        {
          "id":211,
          "date_earned":"1501795440000",
          "details":"Kristen zzz"
        },
        {
          "id":201,
          "date_earned":"1504046460000",
          "details":""
        },
        {
          "id":210,
          "date_earned":"1504248120000",
          "details":"Ladies 80s"
        },
      ]
  },
  {
      "id":201710,
      "name": "kristen",
      "image": "user_kristen.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Snack Captain"
          },
          {
            "id":214,
            "date_earned":"1502067060000",
            "details":"as Sophie"
          },
          {
            "id":210,
            "date_earned":"1504248120000",
            "details":"Ladies 80s"
          },
      ]
  },
  {
      "id":201711,
      "name": "tlo",
      "image": "user_tlo.jpg",
      "badges": [
          {
            "id":205,
            "date_earned":"1499287201937",
            "details":"MI Pod Leader"
          },
          {
            "id": 204,
            "date_earned":"1500355440000",
            "details":"Impressive Impersonation"
          },
          {
            "id":213,
            "date_earned":"1501354800000",
            "details":"West Virginia"
          },
          {
            "id":213,
            "date_earned":"1501354860000",
            "details":"Washington DC"
          },
          {
            "id":212,
            "date_earned":"1501294140000",
            "details":"Sophie"
          },
          {
            "id":210,
            "date_earned":"1502055000000",
            "details":"TLo/Brittany"
          },
          {
            "id":200,
            "date_earned":"1501624800000",
            "details":"Practice Survey"
          },
          {
            "id":213,
            "date_earned":"1503151560000",
            "details":"Oklahoma"
          },
          {
            "id":213,
            "date_earned":"1503151560000",
            "details":"Kansas"
          },
          {
            "id": 215,
            "date_earned":"1502997240000",
            "details":"Willis Tower - Traveler"
          },
          {
            "id": 215,
            "date_earned":"1503282480000",
            "details":"Navy Pier - Guesser"
          },
          {
            "id":211,
            "date_earned":"1503197940000",
            "details":"Harley zzz"
          },
          {
            "id":211,
            "date_earned":"1503273060000",
            "details":"Chelsea zzz"
          },
          {
            "id":208,
            "date_earned":"1503003780000",
            "details":"Wisconsin"
          },
          {
            "id":222,
            "date_earned":"1503591660000",
            "details":""
          },
          {
            "id": 220,
            "date_earned":"1504024320000",
            "details":"Childhood Room Cleaner"
          },
          {
            "id":208,
            "date_earned":"1504107000000",
            "details":"Pennsylvania"
          },
          {
            "id":212,
            "date_earned":"1504287900000",
            "details":"Harley"
          },
      ]
  },
  {
      "id":201712,
      "name": "zeus",
      "image": "user_zeus.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Social Media Team"
          },
          {
            "id":213,
            "date_earned":"1501108680000",
            "details":"Tennessee"
          },
          {
            "id":213,
            "date_earned":"1501108860000",
            "details":"Massachusetts"
          },
          {
            "id":201,
            "date_earned":"1501521660000",
            "details":""
          },
          {
            "id":210,
            "date_earned":"1501986180000",
            "details":"Theiss/Zeus/Sophie/Gg"
          },
          {
            "id":213,
            "date_earned":"1502844420000",
            "details":"Connecticut"
          },
          {
            "id": 220,
            "date_earned":"1503003840000",
            "details":"Vet"
          },
          {
            "id":201,
            "date_earned":"1504287780000",
            "details":""
          },
          {
            "id":210,
            "date_earned":"1504248120000",
            "details":"Ladies 80s"
          },
      ]
  },
  {
      "id":201713,
      "name": "bubba",
      "image": "user_bubba.jpg",
      "badges": [
        {
          "id": 201,
          "date_earned":"1500932340000",
          "details":""
        },
        {
          "id":213,
          "date_earned":"1501467780000",
          "details":"Utah"
        },
        {
          "id":208,
          "date_earned":"1501459080000",
          "details":"Arizona"
        },
        {
          "id": 215,
          "date_earned":"1501635480000",
          "details":"Grand Canyon - Traveler"
        },
        {
          "id":208,
          "date_earned":"1501971360000",
          "details":"Arkansas"
        },
        {
          "id":208,
          "date_earned":"1501881840000",
          "details":"New Mexico"
        },
        {
          "id": 215,
          "date_earned":"1503284580000",
          "details":"Bean - Guesser"
        },
        {
          "id": 220,
          "date_earned":"1502998380000",
          "details":"Editor of Doctor Things"
        },
        {
          "id":213,
          "date_earned":"1503936780000",
          "details":"North Dakota"
        },
      ]
  },
  {
      "id":201714,
      "name": "tz",
      "image": "user_tz.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Swag Captain"
          },
          {
            "id": 215,
            "date_earned":"1502032680000",
            "details":"Buckingham Palace - Guesser"
          },
          {
            "id":211,
            "date_earned":"1502650140000",
            "details":"TLo zzz"
          },
          {
            "id":216,
            "date_earned":"1502650200000",
            "details":"Chelsea/Viv"
          },
          {
            "id": 204,
            "date_earned":"1504046760000",
            "details":"Epic Fail"
          },
      ]
  },
  {
      "id":201715,
      "name": "brittany",
      "image": "user_brittany.jpg",
      "badges": [
        {
          "id":208,
          "date_earned":"1501451460000",
          "details":"Michigan"
        },
        {
          "id":210,
          "date_earned":"1501557060000",
          "details":"MI Bonding"
        },
        {
          "id":210,
          "date_earned":"1502055000000",
          "details":"TLo/Brittany"
        },
        {
          "id":213,
          "date_earned":"1503097440000",
          "details":"Arizona"
        },
        {
          "id": 215,
          "date_earned":"1502997240000",
          "details":"Willis Tower - Traveler"
        },
        {
          "id":211,
          "date_earned":"1503197940000",
          "details":"Harley zzz"
        },
        {
          "id":211,
          "date_earned":"1503273060000",
          "details":"Chelsea zzz"
        },
        {
          "id":208,
          "date_earned":"1503003780000",
          "details":"Wisconsin"
        },
        {
          "id":222,
          "date_earned":"1503591660000",
          "details":""
        },
      ]
  },
  {
      "id":201718,
      "name": "harley",
      "image": "user_harley.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Co-Captain"
          },
          {
            "id":208,
            "date_earned":"1500832800000",
            "details":"Ohio"
          },
          {
            "id":213,
            "date_earned":"1501354800000",
            "details":"California"
          },
          {
            "id":214,
            "date_earned":"1501294440000",
            "details":"of Janine"
          },
          {
            "id":201,
            "date_earned":"1501889220000",
            "details":""
          },
          {
            "id":213,
            "date_earned":"1501354620000",
            "details":"New York"
          },
          {
            "id":210,
            "date_earned":"1502926680000",
            "details":"Game Night at Sophies!"
          },
          {
            "id": 204,
            "date_earned":"1502798400000",
            "details":"Active Commuter"
          },
          {
            "id": 204,
            "date_earned":"1503003600000",
            "details":"Women and Songs"
          },
          {
            "id":201,
            "date_earned":"1504220580000",
            "details":""
          },
          {
            "id":210,
            "date_earned":"1504248120000",
            "details":"Ladies 80s"
          },
      ]
  },
  {
      "id":201720,
      "name": "sophie",
      "image": "user_sophie.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Treasurer"
          },
          {
            "id":208,
            "date_earned":"1500832800000",
            "details":"Ohio"
          },
          {
            "id":213,
            "date_earned":"1500984300000",
            "details":"Ohio"
          },
          {
            "id":213,
            "date_earned":"1500984300000",
            "details":"Washington"
          },
          {
            "id":212,
            "date_earned":"1501122060000",
            "details":"Viv"
          },
          {
            "id":210,
            "date_earned":"1501277520000",
            "details":"Board Games with SS"
          },
          {
            "id":207,
            "date_earned":"1501333200000",
            "details":"Zuchini Bread at SFI"
          },
          {
            "id": 220,
            "date_earned":"1501796520000",
            "details":"Software Engineer"
          },
          {
            "id":201,
            "date_earned":"1502041020000",
            "details":""
          },
          {
            "id":211,
            "date_earned":"1502573520000",
            "details":"Viv zzz"
          },
          {
            "id":210,
            "date_earned":"1501986180000",
            "details":"Theiss/Zeus/Sophie/Gg"
          },
          {
            "id":218,
            "date_earned":"1502311440000",
            "details":"SS calls timeouts"
          },
          {
            "id":213,
            "date_earned":"1503153180000",
            "details":"Nebraska"
          },
          {
            "id":210,
            "date_earned":"1502926680000",
            "details":"Game Night at Sophies!"
          },
          {
            "id":216,
            "date_earned":"1504298760000",
            "details":"Janine"
          },
          {
            "id": 225,
            "date_earned":"1504266000000",
            "details":"On the bus!"
          },
          {
            "id":201,
            "date_earned":"1504024200000",
            "details":""
          },
          {
            "id":201,
            "date_earned":"1504371960000",
            "details":""
          },
      ]
  },
  {
      "id":201722,
      "name": "talia",
      "image": "user_talia.jpg",
      "badges": [
        {
          "id":213,
          "date_earned":"1501350480000",
          "details":"Alabama"
        },
        {
          "id":213,
          "date_earned":"1501350480000",
          "details":"Wisconsin"
        },
        {
          "id":208,
          "date_earned":"1501451460000",
          "details":"Michigan"
        },
        {
          "id":210,
          "date_earned":"1501557060000",
          "details":"MI Bonding"
        },
        {
          "id": 215,
          "date_earned":"1503093240000",
          "details":"Sweetwater's Donuts - Traveler"
        },
      ]
  },
  {
      "id":201723,
      "name": "chelsea",
      "image": "user_chelsea.jpg",
      "badges": [
        {
          "id": 215,
          "date_earned":"1501638780000",
          "details":"Grand Canyon - Guesser"
        },
        {
          "id":213,
          "date_earned":"1501945680000",
          "details":"Rhode Island"
        },
        {
          "id":213,
          "date_earned":"1502294520000",
          "details":"Iowa"
        },
        {
          "id":210,
          "date_earned":"1502054880000",
          "details":"Viv/Hank/Chelsea"
        },
        {
          "id": 215,
          "date_earned":"1503093240000",
          "details":"Sweetwater's Donuts - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503286380000",
          "details":"Chi Art Museum - Guesser"
        },
      ]
  },
  {
      "id":201727,
      "name": "gg",
      "image": "user_gg.jpg",
      "badges": [
        {
          "id":210,
          "date_earned":"1501986180000",
          "details":"Theiss/Zeus/Sophie/Gg"
        },
        {
          "id":210,
          "date_earned":"1502926680000",
          "details":"Game Night at Sophies!"
        },
        {
          "id":210,
          "date_earned":"1504248120000",
          "details":"Ladies 80s"
        },
      ]
  },
  {
      "id":201730,
      "name": "mack",
      "image": "user_mack.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Strength & Cond. Coach"
          },
          {
            "id":208,
            "date_earned":"1500832800000",
            "details":"Ohio"
          },
          {
            "id":211,
            "date_earned":"1500833940000",
            "details":"Bubba zzz"
          },
          {
            "id":213,
            "date_earned":"1501006560000",
            "details":"Georgia"
          },
          {
            "id":213,
            "date_earned":"1501006680000",
            "details":"New Jersey"
          },
          {
            "id":213,
            "date_earned":"1501006860000",
            "details":"Arkansas"
          },
          {
            "id":202,
            "date_earned":"1501516020000",
            "details":""
          },
          {
            "id": 204,
            "date_earned":"1501035780000",
            "details":"Grueling Gauntlet"
          },
          {
            "id":201,
            "date_earned":"1502883540000",
            "details":""
          },
          {
            "id":209,
            "date_earned":"1503012660000",
            "details":"Soup for Sophie! (and others)"
          },
      ]
  },
  {
      "id":201731,
      "name": "sara scott",
      "image": "user_sarascott.jpg",
      "badges": [
        {
          "id": 204,
          "date_earned":"1500903720000",
          "details":"Traveler Trivia"
        },
        {
          "id": 201,
          "date_earned":"1500929880000",
          "details":""
        },
        {
          "id":213,
          "date_earned":"1501354740000",
          "details":"Vermont"
        },
        {
          "id":212,
          "date_earned":"1501071240000",
          "details":"Tots"
        },
        {
          "id":210,
          "date_earned":"1501277520000",
          "details":"Board Games with Sophie"
        },
        {
          "id":207,
          "date_earned":"1501333200000",
          "details":"Zuchini Bread at SFI"
        },
        {
          "id": 215,
          "date_earned":"1501794300000",
          "details":"Big Ben - Guesser"
        },
        {
          "id": 220,
          "date_earned":"1501640820000",
          "details":"Doctor Scott"
        },
        {
          "id": 220,
          "date_earned":"1502138640000",
          "details":"Firefighter"
        },
        {
          "id":201,
          "date_earned":"1501722960000",
          "details":""
        },
        {
          "id":201,
          "date_earned":"1501889220000",
          "details":""
        },
        {
          "id":211,
          "date_earned":"1501640940000",
          "details":"Kristen zzz"
        },
        {
          "id":210,
          "date_earned":"1502486820000",
          "details":"SS/Tots"
        },
        {
          "id":207,
          "date_earned":"1502575200000",
          "details":"Cookie Cake at Farm Practice"
        },
        {
          "id": 204,
          "date_earned":"1502637000000",
          "details":"Carpool Conqueror"
        },
        {
          "id":210,
          "date_earned":"1502926680000",
          "details":"Game Night at Sophies!"
        },
        {
          "id": 215,
          "date_earned":"1503093240000",
          "details":"Sweetwater's Donuts - Guesser"
        },
        {
          "id":211,
          "date_earned":"1503020700000",
          "details":"Sophie zzz"
        },
        {
          "id":211,
          "date_earned":"1503088260000",
          "details":"Stevie zzz"
        },
        {
          "id":216,
          "date_earned":"1503096660000",
          "details":"Harley/Kristen"
        },
        {
          "id":207,
          "date_earned":"1503061200000",
          "details":"Banana Bread at ESC"
        },
        {
          "id": 204,
          "date_earned":"1503669600000",
          "details":"Midseason Montage"
        },
        {
          "id":213,
          "date_earned":"1503870960000",
          "details":"South Dakota"
        },
        {
          "id":209,
          "date_earned":"1504030260000",
          "details":"Make tots get glasses!"
        },
      ]
  },
  {
      "id":201732,
      "name": "viv",
      "image": "user_viv.jpg",
      "badges": [
        {
          "id":213,
          "date_earned":"1500987960000",
          "details":"Minnesota"
        },
        {
          "id":213,
          "date_earned":"1500988320000",
          "details":"Michigan"
        },
        {
          "id":213,
          "date_earned":"1500988380000",
          "details":"Florida"
        },
        {
          "id":208,
          "date_earned":"1501451460000",
          "details":"Michigan"
        },
        {
          "id":212,
          "date_earned":"1500987060000",
          "details":"Sophie"
        },
        {
          "id":210,
          "date_earned":"1501557060000",
          "details":"MI Bonding"
        },
        {
          "id": 215,
          "date_earned":"1501938960000",
          "details":"221b Baker Street - Guesser"
        },
        {
          "id": 220,
          "date_earned":"1501699980000",
          "details":"Robotic Poker"
        },
        {
          "id":201,
          "date_earned":"1501721940000",
          "details":""
        },
        {
          "id":201,
          "date_earned":"1502325480000",
          "details":""
        },
        {
          "id":210,
          "date_earned":"1502054880000",
          "details":"Viv/Hank/Chelsea"
        },
        {
          "id":200,
          "date_earned":"1501776180000",
          "details":"Van Packet Survey"
        },
        {
          "id": 204,
          "date_earned":"1502160120000",
          "details":"Stellar Student"
        },
        {
          "id": 215,
          "date_earned":"1503282180000",
          "details":"Navy Pier - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503284520000",
          "details":"Bean - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503093240000",
          "details":"Sweetwater's Donuts - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1502997300000",
          "details":"Willis Tower - Guesser"
        },
        {
          "id":216,
          "date_earned":"1503860760000",
          "details":"Chelsea"
        },
        {
          "id":201,
          "date_earned":"1504369620000",
          "details":""
        },
        {
          "id":211,
          "date_earned":"1504018500000",
          "details":"Stevie zzz"
        },
        {
          "id":208,
          "date_earned":"1504268340000",
          "details":"Minnesota"
        },
      ]
  },
  {
      "id":201737,
      "name": "hank",
      "image": "user_hank.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Spirit Captain"
          },
          {
            "id":208,
            "date_earned":"1500907020000",
            "details":"Massachusetts"
          },
          {
            "id":208,
            "date_earned":"1500908160000",
            "details":"New Hampshire"
          },
          {
          "id": 201,
          "date_earned":"1500936540000",
          "details":""
        },
        {
          "id":213,
          "date_earned":"1501350600000",
          "details":"North Carolina"
        },
        {
          "id":213,
          "date_earned":"1501350900000",
          "details":"Kentucky"
        },
        {
          "id":208,
          "date_earned":"1501451460000",
          "details":"Michigan"
        },
        {
          "id":210,
          "date_earned":"1501557060000",
          "details":"MI Bonding"
        },
        {
          "id":201,
          "date_earned":"1501721940000",
          "details":""
        },
        {
          "id":201,
          "date_earned":"1501973280000",
          "details":""
        },
        {
          "id":210,
          "date_earned":"1502054880000",
          "details":"Viv/Hank/Chelsea"
        },
        {
          "id": 215,
          "date_earned":"1503282180000",
          "details":"Navy Pier - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503284520000",
          "details":"Bean - Traveler"
        },
        {
          "id": 215,
          "date_earned":"1503093240000",
          "details":"Sweetwater's Donuts - Traveler"
        },
      ]
  },
  {
      "id":201738,
      "name": "jenny",
      "image": "user_jenny.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Squoddballs Leader"
          },
          {
            "id":208,
            "date_earned":"1500680160000",
            "details":"West Virginia"
          },
          {
            "id":208,
            "date_earned":"1500926760000",
            "details":"Virginia"
          },
          {
            "id":213,
            "date_earned":"1500990600000",
            "details":"Virginia"
          },
          {
            "id":213,
            "date_earned":"1501025220000",
            "details":"New Hampshire"
          },
          {
            "id":201,
            "date_earned":"1501024680000",
            "details":""
          },
          {
            "id": 220,
            "date_earned":"1501766640000",
            "details":"Sports Biomechanical Engineer"
          },
        
      ]
  },
  {
      "id":201740,
      "name": "deanna",
      "image": "user_deanna.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Coach"
          },
          {
            "id":201,
            "date_earned":"1502925420000",
            "details":""
          },
      ]
  },
  {
      "id":201741,
      "name": "theiss",
      "image": "user_theiss.jpg",
      "badges": [
          {
              "id":205,
              "date_earned":"1499287201937",
              "details":"Coach"
          },
          {
            "id":213,
            "date_earned":"1501699860000",
            "details":"New Mexico"
          },
          {
            "id":210,
            "date_earned":"1501986180000",
            "details":"Theiss/Zeus/Sophie/Gg"
          },
      ]
  }
];


export const BADGES: Badge[] = [
  {
    "id": 200,
    "title": "First Responder",
    "image": "badge_check.png",
    "description": "Be the first to respond to a team survey (sent out by the captains).",
    "created": "",
    "created_by": 8
  },
  {
    "id": 201,
    "title": "Sweaty Selfie",
    "image": "badge_weight.png",
    "description": "Complete a workout outside of weekly pods/practices. Take a post workout selfie and post it to slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 202,
    "title": "Hi - Five",
    "image": "badge_hand.png",
    "description": "Get to know your buddies and introduce them to the team. Post five unique facts about each of them to slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 203,
    "title": "Pump It Up",
    "image": "badge_headphones.png",
    "description": "Take a video of yourself lip-syncing to your favorite pump up song and post it to slack. (min length 10 second)",
    "created": "",
    "created_by": 8
  },
  {
    "id": 204,
    "title": "Superb Suggester",
    "image": "badge_lightbulb.png",
    "description": "Email tots with a new idea for a badge and the criteria to earn it.  Requirements: (1) everyone has a reasonably fair chance of earning (2) you could make a convincing argument on how it benefits the team / working towards our goals",
    "created": "",
    "created_by": 8
  },
  {
    "id": 205,
    "title": "Reporting for Duty",
    "image": "badge_officer.png",
    "description": "Volunteer for an officer or committee member role on our team.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 206,
    "title": "Throwin' Around Trophy",
    "image": "badge_trophy.png",
    "description": "Throw with each member of our team for a minimum of one uninterrupted 15 min segment. Keep a log of when you threw with who and submit to tots for approval.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 207,
    "title": "Snack Attack",
    "image": "badge_cupcake.png",
    "description": "Bring a shareable amount of team snacks to a practice or tournament. Because snacks.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 208,
    "title": "Border Patrol",
    "image": "badge_car.png",
    "description": "Take a photo of/by a state border sign and post it to slack. Only one photo needed per group. After a state border is claimed, nobody else can earn badge credit for that state.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 209,
    "title": "RAK",
    "image": "badge_heart.png",
    "description": "Complete a random act of kindness for a Rival teammate/coach. Share evidence (photo or description) of the act you've committed or award badge credit to someone for an act you received via slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 210,
    "title": "Bonding Badge Badge",
    "image": "badge_pals.png",
    "description": "Take a photo of yourself and a teammate doing a non-frisbee related activity together and post it to slack. Photo must include participants hanging out together during the week, outside of your homes. (Pictures at practice, workouts, to/from rival events, eating after practice, or solely with people you live with do not count!)",
    "created": "",
    "created_by": 8
  },
  {
    "id": 211,
    "title": "Sleeping Beauty",
    "image": "badge_zs.png",
    "description": "Take a selfie with a sleeping teammate (during non-normal sleep hours) and post it to slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 212,
    "title": "Snapchat Soulmates",
    "image": "badge_ghost.png",
    "description": "Achieve 'best friend' status (the smiling face or yellow heart emoji) on Snapchat with a teammate not in your pod! Post screenshot proof to slack channel. ",
    "created": "",
    "created_by": 15
  },
  {
    "id": 213,
    "title": "Fifty Plates",
    "image": "badge_licenseplate.png",
    "description": "Take a photo of / selfie with a state license plate and post it to slack. Individual credit only, no groups. After a state is claimed, nobody else can earn badge credit for that state.",
    "created_by": 11
  },
  {
    "id": 214,
    "title": "Impressive Impersonation",
    "image": "badge_drama.png",
    "description": "Post a video impersonating a teammate in the slack channel. A single person can be impersonated an unlimited number of times (by different people), but you can only get credit for that person once. 20 sec minimum for badge credit.",
    "created_by": 11
  },
  {
    "id": 215,
    "title": "Traveler Trivia",
    "image": "badge_liberty.png",
    "description": "Take a selfie with a piece of rival gear (showing the rival logo) at a recognizable landmark (think on the level of statue of liberty, not the campus library) and post it in the slack channel. In order to receive badge credit, a teammate will have to identify the landmark (first to identify by responding in the slack channel will also receive the badge). Badge can be earned 3 times as the traveler, and 3 times as the identifier.",
    "created_by": 31
  },
  {
    "id": 216,
    "title": "Rusty Rampage",
    "image": "badge_burger.png",
    "description": "Snap a photo of a teammate eating unhealthy food (or really digging in to any food) and post it to slack. Can’t be at team dinners (ex: if we all get ice cream during a tourney or something).",
    "created_by": 11
  },
  {
    "id": 217,
    "title": "Teammate Terror",
    "image": "badge_scream.png",
    "description": "Videotape yourself scaring a teammate and upload to slack.",
    "created_by": 9
  },
  {
    "id": 218,
    "title": "Happy Historian",
    "image": "badge_quill.png",
    "description": "Share a success story of one of your teammates via slack - can be recounting a sick play they made at a practice or tournament, sharing the work they've put in to reach a goal, or describing another way that their effort shines through.",
    "created": "",
    "created_by": 14
  },
  {
    "id": 219,
    "title": "Grueling Gauntlet",
    "image": "badge_gauntlet.png",
    "description": "Complete 'The Gauntlet' fitness challenge and post your time and and a post-workout selfie to the slack channel for credit.",
    "created_by": 32
  },
  {
    "id": 220,
    "title": "Workin It",
    "image": "badge_work.png",
    "description": "? by day, ultimate player by night. Post a selfie to slack of you arriving at work / at work / doing whatever you consider to be your day job. ",
    "created_by": 8
  },
  {
    "id": 221,
    "title": "Stellar Student",
    "image": "badge_student.png",
    "description": "Learn something (frisbee related or not) from a teammate. Demonstrate competency at said task and both people get points.",
    "created_by": 32
  },
  {
    "id": 222,
    "title": "Carpool Conqueror",
    "image": "badge_carpool.png",
    "description": "Limited time only. Complete each the following set of tasks with your carpool on your drive to ESC, posting to slack as required.",
    "created_by": 31
  },
  {
    "id": 223,
    "title": "Cheer Master",
    "image": "badge_megaphone.png",
    "description": "Come up with a new team cheer and share via slack.",
    "created": "",
    "created_by": 8
  },
  {
    "id": 224,
    "title": "Hydration",
    "image": "badge_bottle.png",
    "description": "Take a photo of yourself with your water bottle every day for 2 weeks straight and post it to slack.",
    "created": "",
    "created_by": 10
  },
  {
    "id": 225,
    "title": "Active Commuter",
    "image": "badge_bus.png",
    "description": "Take a photo of yourself walking, biking, or taking the bus to get somewhere you need to go.",
    "created": "",
    "created_by": 18
  },
  {
    "id": 226,
    "title": "Women and Songs",
    "image": "badge_microphone.png",
    "description": "Text/email/call/ or tag Harley on slack with an idea for the women and songs playlist. It will go to the Harley and Kristen Committee and if it passes: your song will be added to the playlist, you'll get the badge, and you can be a part of women's club.",
    "created": "",
    "created_by": 18
  },
  {
    "id": 227,
    "title": "Midseason Montage",
    "image": "badge_camera.png",
    "description": "Create a photo/video montage displaying 5+ things you are doing during the midseason break to prepare for the series. ",
    "created": "",
    "created_by": 31
  },
  {
    "id": 228,
    "title": "Worm Wizard",
    "image": "badge_worm.png",
    "description": "Submit a video to slack of yourself attempting to master the worm (the stretch, any variation of the dance move -- up to you).",
    "created": "",
    "created_by": 8
  },
  {
    "id": 229,
    "title": "Personality Pursuit",
    "image": "badge_personality.png",
    "description": "Understand yourself and your teammates a little bit more through a Myers-Briggs ish assessment (with a well done ui/ux).Take the free quiz at www.16personalities.com and post a screenshot of your results to slack!",
    "created": "",
    "created_by": 8
  },
  {
    "id": 230,
    "title": "Epic Fail",
    "image": "badge_fail.png",
    "description": "Describe a moment within the week in which you did not reach your goal. Ex: Carried too many things to the car in the morning and spilled coffee all over my pants.",
    "created": "",
    "created_by": 14
  },
  {
    "id": 230,
    "title": "Gold Star",
    "image": "badge_goldstar.png",
    "description": "Either get tots to say 'gold star' to you publicly (and post event description to slack), or post a screenshot from a conversation in which she says it to you.",
    "created": "",
    "created_by": 31
  },
  {
    "id": 231,
    "title": "Neon Night",
    "image": "badge_moon.png",
    "description": "Limited time only! Attend the first pod of this week (week of 9/3) wearing neon attire (monday for aa, wednesday for cbus, wednesday at the latest for squodballs) and post a photo to slack!",
    "created": "",
    "created_by": 8
  },
];