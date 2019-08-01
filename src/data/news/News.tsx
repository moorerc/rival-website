export enum NEWS_TYPE {
  VIDEO = "VIDEO",
  ARTICLE = "ARTICLE"
}

export interface NewsItem {
  title: string;
  link: string;
  date: string;
  author: string;
  type: NEWS_TYPE;
}

export const ALL_NEWS: NewsItem[] = [
  {
    title:
      "Santa Maria Sinks: A New Women’s Team And A Shakeup In The Great Lakes",
    link:
      "https://ultiworld.com/2015/06/29/santa-maria-sinks-a-new-womens-team-and-a-shakeup-in-the-great-lakes/",
    date: "Jun 29 2015",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 Women’s Club Regionals Mega-Preview",
    link:
      "https://ultiworld.com/2016/09/08/2016-womens-club-regionals-mega-preview/",
    date: "Sep 8 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Who The Heck Are These Teams?",
    link: "https://ultiworld.com/2016/09/28/who-the-heck-are-these-teams/",
    date: "Sep 28 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Women’s Pool B: 2016 Club Championship Preview",
    link:
      "https://ultiworld.com/2016/09/28/womens-pool-b-2016-club-championship-preview/",
    date: "Sep 28 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Round 2 Recap (Women’s): 2016 Club Championships",
    link:
      "https://ultiworld.com/2016/09/29/round-2-recap-womens-2016-club-championships/",
    date: "Sep 29 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Round 3 Recap (Women’s): 2016 Club Championships",
    link:
      "https://ultiworld.com/2016/09/29/round-3-recap-womens-2016-club-championships/",
    date: "Sep 29 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Round 4 Recap (Women’s): 2016 Club Championships",
    link:
      "https://ultiworld.com/2016/09/29/round-4-recap-womens-2016-club-championships/",
    date: "Sep 29 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Prequarters Recap (Women’s): 2016 Club Championships",
    link:
      "https://ultiworld.com/2016/09/30/prequarters-recap-womens-2016-club-championships/",
    date: "Sep 30 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title:
      "Here’s What You Need To Know About Nationals Day One: Women’s Division",
    link:
      "https://ultiworld.com/2016/09/30/heres-need-know-nationals-day-one-womens-division/",
    date: "Sep 30 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Here Are The Spirit Scores From Nationals",
    link: "https://ultiworld.com/2016/10/05/spirit-scores-nationals/",
    date: "Oct 5 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Elite-Select Challenge 2016: Tournament Recap (Women’s)",
    link:
      "https://ultiworld.com/2016/07/15/elite-select-challenge-2016-tournament-recap-womens/",
    date: "July 15 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Weekend Update: Chesapeake, Select Flight Invite, YCC",
    link:
      "https://ultiworld.com/2016/08/18/weekend-update-chesapeake-select-flight-invite-ycc/",
    date: "Aug 18 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "The Regionals Underdogs You Have To Root For",
    link: "https://ultiworld.com/2016/09/09/regionals-underdogs-root/",
    date: "Sep 9 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Regionals Saturday Update: See Which Teams Are Still In The Hunt",
    link:
      "https://ultiworld.com/2016/09/11/regionals-saturday-update-see-teams-still-hunt/",
    date: "Sep 11 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title:
      "Here Are The 48 Teams That Qualified For The National Championships",
    link:
      "https://ultiworld.com/2016/09/11/48-teams-qualified-national-championships/",
    date: "Sep 11 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 National Championships - Women's Day Two Recap",
    link:
      "https://www.usaultimate.org/news/2016-national-championships-womens-day-two-recap/",
    date: "Sep 30 2016",
    author: "USAU",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 National Championships - Women's Day One Recap",
    link:
      "https://www.usaultimate.org/news/2016-national-championships-womens-day-one-recap/",
    date: "Sep 30 2016",
    author: "USAU",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 National Championships - Women's Division Preview",
    link:
      "https://www.usaultimate.org/news/2016-national-championships-womens-division-preview/",
    date: "Sep 26 2016",
    author: "USAU",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 National Championships Spirit of the Game Report",
    link:
      "https://www.usaultimate.org/news/2016-national-championships-spirit-of-the-game-report/",
    date: "Oct 5 2016",
    author: "USAU",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "THE HEART OF MIDWEST ULTIMATE",
    link: "http://tct.usaultimate.org/2017/09/20/heart-midwest-ultimate/",
    date: "Sep 20 2017",
    author: "USAU",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2017 Women’s Club Regionals Mega-Preview",
    link:
      "https://ultiworld.com/2017/09/22/2017-womens-club-regionals-mega-preview/",
    date: "Sep 22 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Friction Gloves Catch Of The Month: Rival’s Sara Scott",
    link:
      "https://ultiworld.com/2017/09/14/friction-gloves-catch-month-rivals-sara-scott/",
    date: "Sep 14 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Update: Teams Make Push For Bids At Elite Select Challenge",
    link:
      "https://ultiworld.com/2017/08/23/club-update-teams-make-push-bids-elite-select-challenge/",
    date: "Aug 23 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Bid Watch: What Teams Need To Do At The Elite-Select Challenge",
    link:
      "https://ultiworld.com/2017/08/18/bid-watch-teams-need-elite-select-challenge/",
    date: "Aug 18 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Elite-Select Challenge 2017: Tournament Preview (Women’s)",
    link:
      "https://ultiworld.com/2017/08/18/elite-select-challenge-2017-tournament-preview-womens/",
    date: "Aug 18 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Update: SFI Separates Bid Contenders From Pretenders",
    link:
      "https://ultiworld.com/2017/08/02/club-update-sfi-separates-bid-contenders-pretenders/",
    date: "Aug 2 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Select Flight Invite 2017: Tournament Recap (Women’s)",
    link:
      "https://ultiworld.com/2017/08/01/select-flight-invite-2017-tournament-recap-womens/",
    date: "Aug 1 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title:
      "Club Update: Florida United Claim Club Terminus Title, Women’s Favorites Fall",
    link:
      "https://ultiworld.com/2017/07/26/club-update-florida-united-claim-club-terminus-title-womens-favorites-fall/",
    date: "July 26 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "The 2017 Club Season Mega-Preview: Women’s Division",
    link:
      "https://ultiworld.com/2017/07/08/2017-club-season-mega-preview-womens-division/",
    date: "July 8 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Pro-Elite Challenge 2017: Tournament Preview (Women’s)",
    link:
      "https://ultiworld.com/2017/07/07/pro-elite-challenge-2017-tournament-preview-womens/",
    date: "July 7 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Columbus Rival 2017 Roster",
    link: "https://ultiworld.com/livewire/columbus-rival-2017-roster/",
    date: "June 14 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 Women’s Club Awards, Presented By BE Ultimate",
    link:
      "https://ultiworld.com/2016/10/13/2016-womens-club-awards-presented-ultimate/",
    date: "October 13 2016",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Columbus Rival 2018 Roster",
    link: "https://ultiworld.com/livewire/columbus-rival-2018-roster/",
    date: "June 27 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Pro-Elite Challenge 2018: Filming Schedule",
    link:
      "https://ultiworld.com/livewire/pro-elite-challenge-2018-filming-schedule/",
    date: "July 3 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Pro-Elite Challenge 2018: Tournament Preview (Women’s)",
    link:
      "https://ultiworld.com/2018/07/06/pro-elite-challenge-2018-tournament-preview-womens/",
    date: "July 6 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Season Mega-Preview 2018: Women’s Division",
    link:
      "https://ultiworld.com/2018/07/06/club-season-mega-preview-2018-womens-division/",
    date: "July 6 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "U.S. Open: Saturday Recap (Women’s)",
    link: "https://ultiworld.com/2018/08/05/us-open-saturday-recap-womens/",
    date: "Aug 5 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Elite-Select Challenge 2018: Tournament Recap (Women’s)",
    link:
      "https://ultiworld.com/2018/08/22/elite-select-challenge-2018-tournament-recap-womens/",
    date: "Aug 22 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Regionals 2018: Mega-Preview (Women’s)",
    link:
      "https://ultiworld.com/2018/09/20/club-regionals-2018-mega-preview-womens/",
    date: "Sep 20 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title:
      "Great Lakes Regionals 2018 Recap: Nemesis, Machine Grind Out Wins; Cocktails Qualifies For First Time",
    link:
      "https://ultiworld.com/2018/09/25/great-lakes-regionals-recap-nemesis-machine-grind-wins-cocktails-qualifies-first-time/",
    date: "Sep 25 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Championships 2018: Pool C Preview (Women’s)",
    link:
      "https://ultiworld.com/2018/10/17/club-championships-2018-pool-c-preview-womens/",
    date: "Oct 17 2018",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2016 Elite Select Rival vs Green Means Go",
    link: "https://www.youtube.com/watch?v=qlKiYInCfLg&feature=youtu.be",
    date: "July 17 2016",
    author: "Hallie's Dad",
    type: NEWS_TYPE.VIDEO
  },
  {
    title: "2017 NATIONAL CHAMPIONSHIPS: WOMEN’S DAY ONE RECAP",
    link:
      "http://tct.usaultimate.org/2017/10/20/2017-national-championships-womens-day-one-recap/",
    date: "Oct 20 2017",
    author: "USAU",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "How We Got Here: Club Championships 2017 (Women’s Division)",
    link:
      "https://ultiworld.com/2017/10/21/got-club-championships-2017-womens-division/",
    date: "Oct 21 2017",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Rival 2018 - Our Greatest Show Yet!",
    link: "https://youtu.be/UZMtA0p_E00",
    date: "Jun 25 2018",
    author: "Rival",
    type: NEWS_TYPE.VIDEO
  },
  {
    title: "Rival 2017 Roster",
    link: "https://youtu.be/VyMhGNYJQjw",
    date: "Jun 12 2017",
    author: "Rival",
    type: NEWS_TYPE.VIDEO
  },
  {
    title: "Rival Ultimate - 2015 Recap",
    link: "https://www.youtube.com/watch?v=zk1vjQJLNUE",
    date: "Oct 11 2015",
    author: "Rival",
    type: NEWS_TYPE.VIDEO
  },
  {
    title: "Rival 2019 Roster Release",
    link: "http://www.rivalultimate.com/roster2019",
    date: "June 25, 2019",
    author: "Rival",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Columbus Rival 2019 Roster",
    link: "https://ultiworld.com/livewire/columbus-rival-2019-roster/",
    date: "June 26, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Season Primer 2019: Women’s Division",
    link:
      "https://ultiworld.com/2019/07/10/club-season-primer-2019-womens-division/",
    date: "July 10, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Season Primer 2019: Women’s Division",
    link:
      "https://ultiworld.com/2019/07/10/club-season-primer-2019-womens-division/",
    date: "July 10, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Pro-Elite Challenge 2019: Day One Recap (Women’s)",
    link:
      "https://ultiworld.com/2019/07/14/pro-elite-challenge-2019-day-one-recap-womens/",
    date: "July 14, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Pro-Elite Challenge 2019: Tournament Preview (Women’s)",
    link:
      "https://ultiworld.com/2019/07/12/pro-elite-challenge-2019-tournament-preview-womens/",
    date: "July 12, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "2019 Women’s Club Preseason Power Rankings",
    link:
      "https://ultiworld.com/2019/07/12/2019-womens-club-preseason-power-rankings/",
    date: "July 12, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Select Flight Invite East 2019: Tournament Preview (Women’s)",
    link:
      "https://ultiworld.com/2019/07/26/select-flight-invite-east-2019-tournament-preview-womens/",
    date: "July 26, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Select Flight Invite East 2019: Tournament Recap (Women’s)",
    link:
      "https://ultiworld.com/2019/07/31/select-flight-invite-east-2019-tournament-recap-womens/",
    date: "July 31, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  },
  {
    title: "Club Update: Favorites Prevail at SFI East",
    link:
      "https://ultiworld.com/2019/07/31/club-update-favorites-prevail-sfi-east/",
    date: "July 31, 2019",
    author: "Ultiworld",
    type: NEWS_TYPE.ARTICLE
  }
];
