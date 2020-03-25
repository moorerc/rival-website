export enum SSSNavTab {
  HOME = "HOME",
  RULES = "RULES"
}

export interface Detail {
  title: string;
  value: string;
}

export interface Show {
  title: string;
  summary: string[];
  img: string;
  previewImg?: string;
  details: Detail[];
  slogan: string;
  star: string;
  className?: string;
}

export const SHOWS: Show[] = [
  {
    title: "Bridezillas",
    summary: [
      `Anna Scott, renowned Tech Star and Fortune50000 CEO, has dreamed of her fairytale wedding day ever since she was 29 
      and 3/4. She has settled for her prince charming and no expense has been spared for her big day. Now that it’s finally 
      here, will she crack under the pressure of doing absolutely nothing while watching her family and friends prepare her 
      wedding for her? Or will she lose her cool and ruin it for everyone?`,
      `Hailed as a “raw and emotional story about womanhood” by Men’s Health magazine and nominated for a people’s choice 
      award by the eClair executive board, Bridezillas is sure to entertain you for at least part of the film.`
    ],
    img: "/img/sss/anna_full.jpg",
    previewImg: "/img/sss/anna_preview.jpg",
    details: [],
    slogan: `It’s my fucking wedding`,
    star: `Anna “Oil Tycoon” Scott`,
    className: "bridezilla"
  },
  {
    title: "Lethal Weapon",
    summary: [
      `Award winning tattoo artist and 2018 Bachelor of the Year, Yan Azdoud, stars in this crime-fighting thriller as a 
      detective using his unmatched street smarts, athleticism, and irrational confidence to outsmart criminals throughout 
      his “crime-ridden beat” of Baltimore. Armed with only a butter knife, Azdoud shows a reverent audience how he can 
      deftly spread marmalade, barter for exotic goods, and even start a minivan.`,
      `This film has been called “different” and “too diverse” by Fox News and “underwhelming and not worth seeing” by the NRA.`
    ],
    img: "/img/sss/yan_full.jpg",
    previewImg: "/img/sss/yan_preview.jpg",
    details: [],
    slogan: "You think that’s deadly?",
    star: `Yan “eClair Employee #3” Azdoud`,
    className: "lethal-weapon"
  },

  {
    title: "Generic Crime Show",
    summary: [
      `Emeritus professor Ridgway Scott stars in GCS, a witty, predictable, fast-paced crime drama. No golf course crime 
      or yacht club heist is too small for Scott to investigate. Follow Dr. Scott through twists, turns, and naps as he 
      routinely manages to unexpectedly catch the suspect in the last 5 minutes of every episode. `,
      `Hailed as “the most predictable combination of your favorite crime shows – NCIS, Law and Order, Criminal Minds, 
      Blue Bloods, and CSI. Perfect for those retirees who spend their nights watching Ion Television. Two stars.“ -- 
      by Rolling Stone Magazine.`
    ],
    img: "/img/sss/ridg_full_blur.jpg",
    previewImg: "/img/sss/ridg_preview.jpg",
    details: [],
    slogan: "Retirement is just a number",
    star: `Ridg “Jethro Gibbs” Scott as himself`,
    className: "crime-show"
  },
  {
    title: "failure to launch",
    summary: [
      `An epic coming-of age tale in which middling employee and college graduate Peter Scott (B.S.) battles the odds 
      and fights to keep company profits in check. When Kremlin-funded Palantir begins to be too successful, Peter Scott 
      is sent in to save the day. But, will his wealth of experience (or mere presence) be enough to torpedo this project?  `,
      `In his debut film, Peter has been described as “not increasing our stock value” by other Palantir employees. This 
      movie is touted to be “an educational course on what is and is not a business expense” by Seventeen Magazine.`
    ],
    img: "/img/sss/peter_full.jpg",
    previewImg: "/img/sss/peter_preview_blur.jpg",
    details: [],
    slogan:
      "He’s not the guy FedEx needs right now, but he’s the guy they’re going to get.",
    star: `Peter “Still Growing Out My Hair” Scott with a cameo by Beauty “Alysia” Englund`,
    className: "failure-to-launch"
  },
  {
    title: "Space Jam 2 – can we take a photo break?",
    summary: [
      `Internationally renowned nature photographer, Delta Million-Miler, and part-time pediatric infectious disease 
      specialist Janet Englund makes her athletic debut in a remake of this 1996-hit film. You’ll see her pull off 
      stunts such as vaguely understanding sporting events, occasionally cheering at the appropriate time while watching 
      college lacrosse, and even exploding into a slow jog. If you thought her athletic prowess was unmatched during 
      Thanksgiving ultimate Frisbee games, wait until you see this. This instant classic answers the age-old question – 
      where did the Scott children get their athleticism?`,
      `Hailed as “slightly worse than the original” by Delta In-Flight magazine and called “a movie of the year” by 
      the New York Times.`
    ],
    img: "/img/sss/jan_full_blur.jpg",
    previewImg: "/img/sss/jan_preview_blur.jpg",
    details: [],
    slogan: "Is the bird watching before or after this space conference.......",
    star: `Jan “Kobe” Englund as herself`,
    className: "space-jam"
  },
  {
    title: "Sleeping Beauty",
    summary: [
      `It’s a race against the clock for stay at home dog dad and YouTube afficionado Jordan O’Neill, who must battle the odds to get enough sleep each night. As O’Neill 
      struggles to overcome obstacles like a 20-hour work week, an extensive hair-care regimen, minor household responsibilities, 
      and wrinkled sheets, the audience is left to wonder – what will his Whoop data show in the morning?`,
      `This family-friendly thriller has been described as a “film about an unhealthy obsession with Whoop Data” by Whoop Fitness 
      Strap and hailed as “a complete abuse of copyright” by Disney, this film is a definite don’t miss!`
    ],
    img: "/img/sss/jo_full.jpg",
    previewImg: "/img/sss/jo_preview.jpg",
    details: [],
    slogan: "My whoop says I need to be sleeping",
    star: `Jordan “Did You Mean Ball Golf or Disc Golf” O’Neill`,
    className: "sleeping-beauty"
  },
  {
    title: "without limits",
    summary: [
      `Practice doesn’t make perfect in this uninspiring, yet heartwarming tale. After being told by her Fitbit™ 
      that she “could see a significant cardiovascular improvement with an 8.5 pound loss,” Sara sets out to prove 
      that she can finish a half marathon without once running over 2 miles during training. Faced with obstacles 
      such as dying headphone batteries, bionic knees, and having a tiny bladder, will this aspiring athlete prove 
      there is nothing wrong with a little winter weight?`,
      `"I don’t understand this movie. Did she even try? Did she break a sweat? Why does she keep asking about compost
       bins at the aid stations?” –Trader Joe’s Fearless Flyer`
    ],
    img: "/img/sss/sara_full_blur.jpg",
    previewImg: "/img/sss/sara_preview.jpg",
    details: [],
    slogan: "Wait, how many Turkey Trots are in a half marathon?",
    star: `Sara “Pre” “Madonna” Scott with a surprise reprisal by Jonathan Pritchard`,
    className: "without-limits"
  }
];

export interface Rules {
  rule: string;
  image: string;
  heading?: string;
}

export const SSS_RULES: Rules[] = [
  {
    rule:
      "Each person will be assigned ONLY ONE other person in the family to whom they will give a present. Steps will be taken to ensure you are not assigned the same person as last year.",
    image: "/img/sss/rules-icons/agent.png"
  },
  {
    rule:
      "Suggested present value is around $50. Maximum spend is $100. Homemade gifts are HIGHLY encouraged (lookin' at you Dad).",
    image: "/img/sss/rules-icons/money.png"
  },
  {
    heading: "Children",
    rule:
      "If you would like, you have the option to give 1 small gift (of less than $5) or an inexpensive homemade gift to non assigned secret santa recipients. MUST be small or homemade (ie soap, or food).",
    image: "/img/sss/rules-icons/gift.png"
  },
  {
    heading: "Parents",
    rule:
      "You are allowed to stuff stockings with small gifts. You ARE NOT allowed to otherwise break the rules and give other gifts to non assigned secret santa recipients (lookin' at you Mom). The punishment for breaking this rule is death.",
    image: "/img/sss/rules-icons/skull.png"
  },
  {
    rule:
      "There will be a $25-50 pay to play fee. This money will be donated to an organization decided upon by the winner of the secret santa gift exchange (yes, there will be a winner).",
    image: "/img/sss/rules-icons/trophy.png"
  },
  {
    rule:
      "You will receive your secret santa assignment in a separate email. Gifts will be exchanged on Dec 31, 2019.",
    image: "/img/sss/rules-icons/email.png"
  }
];
