import { Players } from "../Players";
// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length

export interface Badge {
  title: string;
  image: string;
  description: string;
  createdBy: Players;
}

export interface BadgeEarned {
  badge: Badges;
  player: Players;
  date: string;
  notes?: string;
}

export enum Badges {
  FIRST_RESPONDER = "FIRST_RESPONDER",
  BRIDGE_THE_GAP = "BRIDGE_THE_GAP",
  SWEATY_SELFIE = "SWEATY_SELFIE",
  PLANK_PRO = "PLANK_PRO",
  DANCE_CHAIN = "DANCE_CHAIN",
  HI_FIVE = "HI_FIVE",
  PUMP_IT_UP = "PUMP_IT_UP",
  SUPERB_SUGGESTER = "SUPERB_SUGGESTER",
  CHEER_MASTER = "CHEER_MASTER",
  REPORTING_FOR_DUTY = "REPORTING_FOR_DUTY",
  THROWIN_AROUND = "THROWIN_AROUND",
  HAPPY_HISTORIAN = "HAPPY_HISTORIAN",
  HYDRATION = "HYDRATION",
  SNACK_ATTACK = "SNACK_ATTACK",
  NEON_NIGHT = "NEON_NIGHT",
  ALL_STAR_SUPPORTER = "ALL_STAR_SUPPORTER",
  BONDING_BADGE_BADGE = "BONDING_BADGE_BADGE",
  SLEEPING_BEAUTY = "SLEEPING_BEAUTY",
  SNAPCHAT_SOULMATES = "SNAPCHAT_SOULMATES",
  BORDER_PATROL = "BORDER_PATROL",
  RAK = "RAK",
  DECATHLON = "DECATHLON",
  POKEMON_NO = "POKEMON_NO",
  FIFTY_PLATES = "FIFTY_PLATES",
  RUSTY_RAMPAGE = "RUSTY_RAMPAGE",
  IDYLLIC_IMPROVEMENT = "IDYLLIC_IMPROVEMENT",
  WALKER_STALKER = "WALKER_STALKER",
  ON_TRACK = "ON_TRACK",
  ANACONDA = "ANACONDA",
  TEAMMATE_TERROR = "TEAMMATE_TERROR",
  INNOVATION_STATION = "INNOVATION_STATION",
  HUCKING_HABIT = "HUCKING_HABIT",
  FAB_FIVE = "FAB_FIVE",
  HOMETOWN_HERO = "HOMETOWN_HERO",
  THE_RULER = "THE_RULER",
  GOLD_STAR = "GOLD_STAR",
  ADULTING = "ADULTING",
  IMPRESSIVE_IMPERSONATION = "IMPRESSIVE_IMPERSONATION",
  TRAVELER_TRIVIA = "TRAVELER_TRIVIA",
  GRUELING_GAUNTLET = "GRUELING_GAUNTLET",
  WORKIN_IT = "WORKIN_IT",
  STELLAR_STUDENT = "STELLAR_STUDENT",
  CARPOOL_CONQUEROR = "CARPOOL_CONQUEROR",
  ACTIVE_COMMUTER = "ACTIVE_COMMUTER",
  WOMEN_AND_SONGS = "WOMEN_AND_SONGS",
  MIDSEASON_MONTAGE = "MIDSEASON_MONTAGE",
  WORM_WIZARD = "WORM_WIZARD",
  PERSONALITY_PERSUIT = "PERSONALITY_PERSUIT",
  EPIC_FAIL = "EPIC_FAIL",
  DRESS_LIKE_SOPHIE_DAY = "DRESS_LIKE_SOPHIE_DAY",
  EAT_LIKE_SOPHIE = "EAT_LIKE_SOPHIE",
  RISE_AND_SHINE = "RISE_AND_SHINE",
  CAN_COLLECTOR = "CAN_COLLECTOR",
  REHAB_ROCKSTAR = "REHAB_ROCKSTAR",
  WEEKLY_WELLNESS = "WEEKLY_WELLNESS",
  TOP_TEN = "TOP_TEN",
  ICE_BUT_NICE = "ICE_BUT_NICE",
  BOOK_CLUB = "BOOK_CLUB",
  FANTASTIC_FUNDRAISER = "FANTASTIC_FUNDRAISER",
  OUT_TOTSING_TOTS = "OUT_TOTSING_TOTS",
  EXCESSIVE_EFFORT = "EXCESSIVE_EFFORT",
  PORTRAIT_MODE = "PORTRAIT_MODE",
  FILM_FANATIC = "FILM_FANATIC",
  RULES_RECTIFIER = "RULES_RECTIFIER",
  INTO_IT = "INTO_IT",
  INTEREST_INTERSECTION = "INTEREST_INTERSECTION",
  GOSSIP_GALORE = "GOSSIP_GALORE",
  CHILDHOOD_CHARM = "CHILDHOOD_CHARM",
  BASIC_BADGE = "BASIC_BADGE",
  TIE_DYE_BADGE = "TIE_DYE_BADGE",
  POUTINE_AND_PLATES = "POUTINE_AND_PLATES",
  FLATBALL_STANLEY = "FLATBALL_STANLEY",
  GUESS_WHO = "GUESS_WHO",
  SECRET_ENCOURAGEMENT_FAIRY = "SECRET_ENCOURAGEMENT_FAIRY",
  DANCING_QUEEN = "DANCING_QUEEN",
  WIZARDS_UNITE = "WIZARDS_UNITE",
  MAKEUP_MASTER = "MAKEUP_MASTER",
  EMAIL_SUNSHINE = "EMAIL_SUNSHINE",
  UP_DOG = "UP_DOG",
  RIVANIMALS = "RIVANIMALS",
  SLEEP_TIGHT = "SLEEP_TIGHT",
  CELEBRITY_CHEF = "CELEBRITY_CHEF",
  PAPARAZZI = "PAPARAZZI"
}

export const BADGES: { [key in Badges]: Badge } = {
  FIRST_RESPONDER: {
    title: "First Responder",
    image: "badge_check.png",
    description:
      "Be the first to respond to a team survey (sent out by the captains).",
    createdBy: Players.MOORE
  },
  BRIDGE_THE_GAP: {
    title: "Bridge the Gap",
    image: "badge_chat.png",
    description:
      "Video chat with a teammate not in your relative location (squad group). Take a mid-hangout screenshot and post it to slack.",
    createdBy: Players.MOORE
  },
  SWEATY_SELFIE: {
    title: "Sweaty Selfie",
    image: "badge_weight.png",
    description:
      "Complete a workout outside of weekly pods/practices. Take a post workout selfie and post it to slack.",
    createdBy: Players.MOORE
  },
  PLANK_PRO: {
    title: "Plank Pro",
    image: "badge_abs.png",
    description:
      "Beat the team record for a standard forearm plank. See below for the current 'time to beat'. If nobody has earned the badge yet, time to beat is 0. Post a video to slack of your new record.",
    createdBy: Players.MOORE
  },
  DANCE_CHAIN: {
    title: "Dance Chain",
    image: "badge_dance.png",
    description:
      "Repeat all dance moves in the last posted 'dance chain' video, add one of your own moves to the end, and post a video of your performance of the new chain to slack.",
    createdBy: Players.MOORE
  },
  HI_FIVE: {
    title: "Hi - Five",
    image: "badge_hand.png",
    description:
      "Get to know your team housemates and introduce them to the team. Choose a housemate from your GoT house and post five unique/fun facts about them to slack.",
    createdBy: Players.MOORE
  },
  PUMP_IT_UP: {
    title: "Pump It Up",
    image: "badge_headphones.png",
    description:
      "Take a video of yourself lip-syncing to your favorite (pump up) song and post it to slack. (min length 8 second)",
    createdBy: Players.MOORE
  },
  SUPERB_SUGGESTER: {
    title: "Superb Suggester",
    image: "badge_lightbulb.png",
    description:
      "Email tots with a new idea for a badge and the criteria to earn it.  Requirements: (1) everyone has a reasonably fair chance of earning (2) you could make a convincing argument on how it benefits the team / working towards our goals",
    createdBy: Players.MOORE
  },
  CHEER_MASTER: {
    title: "Cheer Master",
    image: "badge_megaphone.png",
    description: "Come up with a new team cheer and share via slack.",
    createdBy: Players.MOORE
  },
  REPORTING_FOR_DUTY: {
    title: "Reporting for Duty",
    image: "badge_officer.png",
    description:
      "Volunteer for an officer or committee member role on our team.",
    createdBy: Players.MOORE
  },
  THROWIN_AROUND: {
    title: "Throwin' Around Trophy",
    image: "badge_trophy.png",
    description:
      "Throw with each member of our team for a minimum of one uninterrupted 10 min segment. Keep a log of when you threw with who and submit to tots for approval.",
    createdBy: Players.MOORE
  },
  HAPPY_HISTORIAN: {
    title: "Happy Historian",
    image: "badge_quill.png",
    description:
      "Share a success story of one of your teammates via slack - can be recounting a sick play they made at a practice or tournament, sharing the work they've put in to reach a goal, or describing another way that their effort shines through.",
    createdBy: Players.ZETTNER
  },
  HYDRATION: {
    title: "Hydration",
    image: "badge_bottle.png",
    description:
      "Take a photo of yourself with your water bottle every day for 2 weeks straight and post it to slack.",
    createdBy: Players.SMIACH
  },
  SNACK_ATTACK: {
    title: "Snack Attack",
    image: "badge_cupcake.png",
    description:
      "Bring a shareable amount of team snacks to a practice or tournament. Because snacks.",
    createdBy: Players.MOORE
  },
  NEON_NIGHT: {
    title: "Neon Night",
    image: "badge_moon.png",
    description:
      "Wear neon to practice/pod/workout on 'Neon Night' 7/19. Post photo evidence to slack.",
    createdBy: Players.MOORE
  },
  ALL_STAR_SUPPORTER: {
    title: "All-Star Supporter",
    image: "badge_allstar.png",
    description:
      "Watch an All Star Tour game (live stream or in person) and support women's ultimate and Stevie! Post photo evidence to slack.",
    createdBy: Players.MOORE
  },
  BONDING_BADGE_BADGE: {
    title: "Bonding Badge Badge",
    image: "badge_pals.png",
    description:
      "Take a photo of yourself and a teammate doing a non-frisbee related activity together and post it to slack. Photo must include participants hanging out together during the week, outside of your homes. (Pictures at practice, workouts, to/from rival events, eating after practice, or solely with people you live with do not count!)",
    createdBy: Players.CRAYCRAFT
  },
  SLEEPING_BEAUTY: {
    title: "Sleeping Beauty",
    image: "badge_zs.png",
    description:
      "Take a selfie with a sleeping teammate (during non-normal sleep hours) and post it to slack.",
    createdBy: Players.SCOTT
  },
  SNAPCHAT_SOULMATES: {
    title: "Snapchat Soulmates",
    image: "badge_ghost.png",
    description:
      "Achieve 'best friend' status (the smiling face or yellow heart emoji) on Snapchat with a teammate not in your pod! Post screenshot proof to slack channel. ",
    createdBy: Players.WRIGHT
  },
  BORDER_PATROL: {
    title: "Border Patrol",
    image: "badge_car.png",
    description:
      "Take a photo of/by a state border sign and post it to slack. Only one photo needed per group. After a state border is claimed, nobody else can earn badge credit for that state.",
    createdBy: Players.SCOTT
  },
  RAK: {
    title: "RAK",
    image: "badge_heart.png",
    description:
      "Complete a random act of kindness for a Rival teammate/coach. Share evidence (photo or description) of the act you've committed or award badge credit to someone for an act you received via slack.",
    createdBy: Players.MOORE
  },
  DECATHLON: {
    title: "Decathlon",
    image: "badge_torch.png",
    description:
      "Complete each of the following exercises (see email) in succession as fast as possible. Exercises can be completed in any order but full quantity must be completed before switching. Post a before and after photo along with your time as evidence of completion to slack.",
    createdBy: Players.MOORE
  },
  POKEMON_NO: {
    title: "Pokemon No",
    image: "badge_pokeball.png",
    description:
      "Catch someone else (stranger/teammate/etc) playing Pokemon Go. Take a selfie with them in the shot and post to slack. No credit if player catches you in the act.",
    createdBy: Players.MOORE
  },
  FIFTY_PLATES: {
    title: "Fifty Plates",
    image: "badge_licenseplate.png",
    description:
      "Take a photo of / selfie with a state license plate and post it to slack. Individual credit only, no groups. After a state is claimed, nobody else can earn badge credit for that state.",
    createdBy: Players.LO
  },
  RUSTY_RAMPAGE: {
    title: "Rusty Rampage",
    image: "badge_burger.png",
    description:
      "Snap a photo of a teammate eating unhealthy food (or really digging in to any food) and post it to slack. Can’t be at team dinners (ex: if we all get ice cream during a tourney or something).",
    createdBy: Players.LO
  },
  IDYLLIC_IMPROVEMENT: {
    title: "Idyllic Improvement",
    image: "badge_arrowcircle.png",
    description:
      "Solicit feedback from a teammate, coach, or captain on how to improve your game. Prepare and complete a next step that incorporates their advice. Summarize your experience via Slack for credit.",
    createdBy: Players.ZETTNER
  },
  WALKER_STALKER: {
    title: "Walker Stalker",
    image: "badge_stalker.png",
    description:
      "Take 5 photos of a teammate wearing 5 different outfits without getting caught. If you are caught you can no longer use that person to get this badge … you must stalk someone else. Can't be a housemate.",
    createdBy: Players.WALKER
  },
  ON_TRACK: {
    title: "On Track",
    image: "badge_track.png",
    description:
      "Take a picture of yourself at a track post sprint workout (let’s get ready for regionals)!!",
    createdBy: Players.WALKER
  },
  ANACONDA: {
    title: "Anaconda",
    image: "badge_snake.png",
    description:
      "Take a video or post picture of you anaconda-ing someone. What is an anaconda? One of the three forms of armpit tickling of course -- make sure you have an unsuspecting target, create a fake scenario that causes them to lift their arm up (or they may create an opening on their own). When you see the prime opportunity, cup your hand and like an anaconda, pounce grabbing mid armpit and yelling ANACONDA!!",
    createdBy: Players.WALKER
  },
  TEAMMATE_TERROR: {
    title: "Teammate Terror",
    image: "badge_scream.png",
    description: "Videotape yourself scaring a teammate and upload to slack.",
    createdBy: Players.WALKER
  },
  INNOVATION_STATION: {
    title: "Innovation Station",
    image: "badge_brain.png",
    description:
      "Can receive badge three times. Must include picture of innovation space/ innovated equipment or exercise amendment. Can include picture of self if person has to modify workout for solo completion (i.e. Fakes instead of throws, throwing into nets). [See email for full explanation]",
    createdBy: Players.CRAYCRAFT
  },
  HUCKING_HABIT: {
    title: "Hucking Habit",
    image: "badge_throw.png",
    description:
      "Work on your individual drive to improve! Throw 50 forehand hucks, 50 backhand hucks, 20 IO hucks, 20 OI hucks, and 15 hammers. By yourself. Take a pic of you and your friend Disc; post to slack for a #badge.",
    createdBy: Players.ZETTNER
  },
  FAB_FIVE: {
    title: "Fab Five",
    image: "badge_five.png",
    description:
      "Earn this badge by earning five other badges between RBQ updates.",
    createdBy: Players.FICEK
  },
  HOMETOWN_HERO: {
    title: "Hometown Hero",
    image: "badge_house.png",
    description:
      "Share something you love about your hometown or the city that you're currently living in via a site-specific selfie. Must explain in comment what it is and why it's important to you.",
    createdBy: Players.ZETTNER
  },
  THE_RULER: {
    title: "The Ruler",
    image: "badge_ruler.png",
    description:
      "Complete this badge by taking a stab at the 2014 Club Nationals Rules Quiz (see email for link). Email me your answers to the twelve multiple choice questions and get at least 70% correct for badge credit. ",
    createdBy: Players.MOORE
  },
  GOLD_STAR: {
    title: "Gold Star",
    image: "badge_goldstar.png",
    description:
      "Either get tots to say 'gold star' to you publicly (and post event description to slack), or post a screenshot from a conversation in which she says it to you.",
    createdBy: Players.SCOTT
  },
  RISE_AND_SHINE: {
    title: "Rise and Shine",
    image: "badge_alarm.png",
    description:
      "Earned by taking a selfie upon waking up (and before getting out of bed) for five consecutive mornings and submitting the photos to slack.",
    createdBy: Players.BUTTS
  },
  ADULTING: {
    title: "Adulting",
    image: "badge_adult.png",
    description:
      "Submit an example to slack of a time when were very 'adult' and a time when you really weren't. Because rival is all about balance. (Ex: I pulled the hair out of the drain and then ate candy for dinner. )",
    createdBy: Players.BUTTS
  },
  IMPRESSIVE_IMPERSONATION: {
    title: "Impressive Impersonation",
    image: "badge_drama.png",
    description:
      "Post a video impersonating a teammate in the slack channel. A single person can be impersonated an unlimited number of times (by different people), but you can only get credit for that person once. 20 sec minimum for badge credit.",
    createdBy: Players.LO
  },
  TRAVELER_TRIVIA: {
    title: "Traveler Trivia",
    image: "badge_liberty.png",
    description:
      "Take a selfie with a piece of rival gear (showing the rival logo) at a recognizable landmark (think on the level of statue of liberty, not the campus library) and post it in the slack channel. In order to receive badge credit, a teammate will have to identify the landmark (first to identify by responding in the slack channel will also receive the badge). Badge can be earned 3 times as the traveler, and 3 times as the identifier.",
    createdBy: Players.SCOTT
  },
  GRUELING_GAUNTLET: {
    title: "Grueling Gauntlet",
    image: "badge_gauntlet.png",
    description:
      "Complete 'The Gauntlet' fitness challenge and post your time and and a post-workout selfie to the slack channel for credit.",
    createdBy: Players.FAZEKAS
  },
  WORKIN_IT: {
    title: "Workin It",
    image: "badge_work.png",
    description:
      "? by day, ultimate player by night. Post a selfie to slack of you arriving at work / at work / doing whatever you consider to be your day job. ",
    createdBy: Players.MOORE
  },
  STELLAR_STUDENT: {
    title: "Stellar Student",
    image: "badge_student.png",
    description:
      "Learn something (frisbee related or not) from a teammate. Demonstrate competency at said task and both people get points.",
    createdBy: Players.CHU
  },
  CARPOOL_CONQUEROR: {
    title: "Carpool Conqueror",
    image: "badge_carpool.png",
    description:
      "Limited time only. Complete each the following set of tasks with your carpool on your drive to ESC, posting to slack as required.",
    createdBy: Players.SCOTT
  },
  ACTIVE_COMMUTER: {
    title: "Active Commuter",
    image: "badge_bus.png",
    description:
      "Take a photo of yourself walking, biking, or taking the bus to get somewhere you need to go.",
    createdBy: Players.HARLEY
  },
  WOMEN_AND_SONGS: {
    title: "Women and Songs",
    image: "badge_microphone.png",
    description:
      "Text/email/call/ or tag Harley on slack with an idea for the women and songs playlist. It will go to the Harley and Kristen Committee and if it passes: your song will be added to the playlist, you'll get the badge, and you can be a part of women's club.",
    createdBy: Players.HARLEY
  },
  MIDSEASON_MONTAGE: {
    title: "Midseason Montage",
    image: "badge_camera.png",
    description:
      "Create a photo/video montage displaying 5+ things you are doing during the midseason break to prepare for the series. ",
    createdBy: Players.SCOTT
  },
  WORM_WIZARD: {
    title: "Worm Wizard",
    image: "badge_worm.png",
    description:
      "Submit a video to slack of yourself attempting to master the worm (the stretch, any variation of the dance move -- up to you).",
    createdBy: Players.MOORE
  },
  PERSONALITY_PERSUIT: {
    title: "Personality Pursuit",
    image: "badge_personality.png",
    description:
      "Understand yourself and your teammates a little bit more through a Myers-Briggs ish assessment (with a well done ui/ux).Take the free quiz at www.16personalities.com and post a screenshot of your results to slack!",
    createdBy: Players.MOORE
  },
  EPIC_FAIL: {
    title: "Epic Fail",
    image: "badge_fail.png",
    description:
      "Describe a moment within the week in which you did not reach your goal. Ex: Carried too many things to the car in the morning and spilled coffee all over my pants.",
    createdBy: Players.ZETTNER
  },
  DRESS_LIKE_SOPHIE_DAY: {
    title: "Dress Like Sophie Day",
    image: "badge_hoodie.png",
    description:
      "Limited time only! Attend the second pod of this week (week of 9/10) dressed like Sophie and post a photo to slack!",
    createdBy: Players.KNOWLES
  },
  EAT_LIKE_SOPHIE: {
    title: "Eat Like Sophie",
    image: "badge_cookie.png",
    description:
      "Post a picture to slack with you being unreasonably messy with whatever you're eating.",
    createdBy: Players.NITZ
  },
  CAN_COLLECTOR: {
    title: "Can Collector",
    image: "badge_can.png",
    description:
      "Post a picture to slack of you returning cans, separating your returnables, or bringing a bag of cans to practice to give to Tia.",
    createdBy: Players.ESPOSITO
  },
  REHAB_ROCKSTAR: {
    title: "Rehab Rockstar",
    image: "badge_stretch.png",
    description:
      "Taking care of your body is important. Post a picture to slack of you doing some extra prehab / rehab / pt / stretching / etc.",
    createdBy: Players.ESPOSITO
  },
  WEEKLY_WELLNESS: {
    title: "Weekly Wellness",
    image: "badge_wellness.png",
    description:
      "Take a selfie doing something (non-ultimate related) that helps keep you keep your head fresh, focused, and determined so you can approach the field as your best self!",
    createdBy: Players.CRAYCRAFT
  },
  TOP_TEN: {
    title: "Top Ten",
    image: "badge_topten.png",
    description:
      "Throw for ten minutes a day for ten consecutive days. Keep a log of your throwing times / partner and post to slack when you reach ten consecutive days to earn this badge.",
    createdBy: Players.KNOWLES
  },
  ICE_BUT_NICE: {
    title: "Ice But Nice",
    image: "badge_ice.png",
    description:
      "Ice your teammate with a La Croix (this La Croix must be marked with ICE and your name). Photo evidence (of hiding and/or discovery) required. Act fast - this badge can only be earned once per flavor.",
    createdBy: Players.SCOTT
  },
  BOOK_CLUB: {
    title: "Book Club",
    image: "badge_worm.png",
    description:
      "Team book club of reading The Rosie Project by Graeme Simsion. To earn this badge post a picture of you reading it to slack and share a way that it relates to our team ;)",
    createdBy: Players.HARLEY
  },
  FANTASTIC_FUNDRAISER: {
    title: "Fantastic Fundraiser",
    image: "badge_piggy.png",
    description:
      "Post a picture to slack of you participating in a Rival fundraiser. Unlike all other badges, this badge will be retroactive (so posting evidence from prior fundraisers will also count). No credit for fundraisers that have their own badge (Ex: Can Collector)",
    createdBy: Players.KWEE
  },
  OUT_TOTSING_TOTS: {
    title: "Out Totsing Tots",
    image: "badge_robot.png",
    description:
      "Post a photo/description of yourself 'Out Totsing Tots'. Discretion for badge credit goes to Harley.",
    createdBy: Players.HARLEY
  },
  EXCESSIVE_EFFORT: {
    title: "Excessive Effort",
    image: "badge_rocket.png",
    description:
      "Earn this badge by putting in a ridiculous amount of effort into something for the team that isn’t necessarily ultimate related— like orchestrating a massive road rally or exhausting a work day to make a sorting. Post an explanation/evidence to slack for badge credit - on behalf of yourself, or on behalf of a teammate you think deserves credit.",
    createdBy: Players.FAZEKAS
  },
  PORTRAIT_MODE: {
    title: "Portrait Mode",
    image: "badge_insta.png",
    description:
      "Snap a great photo of your teammate on or off the field and submit a fun social media post idea about them. Badge credit if it’s good enough we use on social media! (as determined by Social Media Guru Janine)",
    createdBy: Players.HARLEY
  },
  FILM_FANATIC: {
    title: "Film Fanatic",
    image: "badge_film.png",
    description:
      "Watch some footage of one of our previous games (this season). Clip a small section with something strategically noteworthy (a time we implemented our sets particularly well/poor) and post the clip to slack.",
    createdBy: Players.MOORE
  },
  RULES_RECTIFIER: {
    title: "Rules Rectifier",
    image: "badge_ruler.png",
    description:
      "If there’s a game scenario you’re unclear on, look it up in the rules and slack out the clarification with rule section citation.",
    createdBy: Players.FAZEKAS
  },
  INTO_IT: {
    title: "Into It",
    image: "badge_like.png",
    description:
      "Share (via slack) something you're really into at the moment, but not frisbee-related - maybe a favorite song, new hobby, TV show, etc.",
    createdBy: Players.CRAYCRAFT
  },
  INTEREST_INTERSECTION: {
    title: "Interest Intersection",
    image: "badge_intersection.png",
    description:
      "Check out something your teammate is into (that they've earend an Into It badge for). Earn badge credit by posting a picture of yourself doing it - reading the book, trying the thing, etc. - to slack.",
    createdBy: Players.CRAYCRAFT
  },
  GOSSIP_GALORE: {
    title: "Gossip Galore",
    image: "badge_chat.png",
    description:
      "Hear about a story (must be this season / recent) of one of your teammates through the grapevine. Share the story via slack for badge credit.",
    createdBy: Players.HARLEY
  },
  CHILDHOOD_CHARM: {
    title: "Childhood Charm",
    image: "badge_baby.png",
    description:
      "Share a funny/cute photo or video of yourself as a child. This badge can be earned once for baby/toddler years, once for middle school age, and once for high school age. ",
    createdBy: Players.MOORE
  },
  BASIC_BADGE: {
    title: "Basic Badge",
    image: "badge_basic.png",
    description:
      "Participate in the basic theme for Austines Celebrity Pod the week of 9/17. Post photo evidence to slack.",
    createdBy: Players.LIN
  },
  TIE_DYE_BADGE: {
    title: "Tie Dye Badge",
    image: "badge_tiedye.png",
    description:
      "Participate in the tie dye theme for Graces Celebrity Pod the week of 10/1. Post photo evidence to slack.",
    createdBy: Players.DENNEY
  },
  POUTINE_AND_PLATES: {
    title: "Poutine and Plates",
    image: "badge_mapleleaf.png",
    description:
      "This is like Fifty Plates ... but for Canadian territories. Take a photo of / selfie with the license plate and post it to slack. After a territory is claimed, nobody else can earn badge credit for that territory.",
    createdBy: Players.DENNEY
  },
  FLATBALL_STANLEY: {
    title: "Flatball Stanley",
    image: "badge_disc.png",
    description:
      "Complete all the requirements of a propper handoff in the flatball stanley challenge (time requirements, slack messages, and handoff photo)",
    createdBy: Players.MOORE
  },
  GUESS_WHO: {
    title: "Guess Who?",
    image: "badge_drama.png",
    description:
      "Take a pic/video of yourself imitating another teammate and post to slack. First one to correctly guess who you are imitating also gets a badge! Badge can be earned 3 times as the imitator, and 3 times as the identifier.",
    createdBy: Players.SCOTT
  },
  SECRET_ENCOURAGEMENT_FAIRY: {
    title: "Secret Encouragement Fairy",
    image: "badge_wand.png",
    description:
      "Leave a small encouraging note in a teammates bag at practice or during a tournament without them noticing. Signature should be anonymous. Privately email tots with a picture of your secret mission being accomplished for badge credit.",
    createdBy: Players.WALKER
  },
  WIZARDS_UNITE: {
    title: "Wizards Unite!",
    image: "badge_harrypotter.png",
    description:
      "Submit a screenshot to slack which proves that you have reached level 10 on Harry Potter Wizards Unite. (Badge can also be earned at level 20 and level 30).",
    createdBy: Players.DUFFY
  },
  MAKEUP_MASTER: {
    title: "Makeup Master",
    image: "badge_lips.png",
    description:
      "Being the best looking team takes some effort. Create a makeup or hairstyle tutorial to help the team look stylin (ex: eye black) and post a video to slack. Note: You do not get credit for acting solely as a model in the video.",
    createdBy: Players.JAVERSAK
  },
  DANCING_QUEEN: {
    title: "Dancing Queen",
    image: "badge_dance.png",
    description:
      "Take a video of you and another teammate(s) coordinated dancing (for at least 10 seconds) and post to slack. Groups may not exceed 6 players. Only one post needed for all participants badge credit.",
    createdBy: Players.YEE
  },
  EMAIL_SUNSHINE: {
    title: "Email Sunshine",
    image: "badge_sun.png",
    description:
      "Send an email (bcc tots) to any captain, coach or officer about why you appreciate the work they are doing outside of practices to help push this team to the next level.",
    createdBy: Players.WALKER
  },
  UP_DOG: {
    title: "UpDog",
    image: "badge_partyhat.png",
    description:
      "Submit a picture to slack of yourself throwing a party for a pet in your life.",
    createdBy: Players.DUFFY
  },
  RIVANIMALS: {
    title: "Rivanimals",
    image: "badge_paw.png",
    description:
      "Take a picture with a living animal that does not belong to you (i.e. you can't do one of your own pets) and post to slack. Once an animal species has been taken, nobody else can get credit for that species. (No more than 2 of each persons badge submissions can come from a zoo).",
    createdBy: Players.SOTER
  },
  SLEEP_TIGHT: {
    title: "Sleep Tight",
    image: "badge_sheep.png",
    description:
      "Hit your stretch goal for sleep for an entire work week (ex: Bed by 10:30pm). Post evidence of completion to slack for badge credit - fitness tracker data, sleep logs, etc.",
    createdBy: Players.NITZ
  },
  CELEBRITY_CHEF: {
    title: "Celebrity Chef",
    image: "badge_chef.png",
    description:
      "Post an original recipe for a healthy meal or snack. Once someone else makes your recipe and posts photo evidence to slack, you both will receive badge credit. You can receive this badge up to 3 times for recipe submission and 3 times for recipe making.",
    createdBy: Players.CONERLY
  },
  PAPARAZZI: {
    title: "Paparazzi Badge",
    image: "badge_stalker.png",
    description:
      "Submit a photo or video of a teammate doing something or looking embarrassing on or off the field. Provide a witty caption.",
    createdBy: Players.SCOTT
  }
};
