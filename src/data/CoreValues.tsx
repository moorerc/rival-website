export interface CoreValue {
  color: string;
  image: string;
  explanation: string;
  name: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    name: "Brain",
    color: "#003faa",
    image: "",
    explanation:
      "We recognize the role our minds have in the game, and we value both knowledge depth and the desire for continued improvement. Through strong focus and good decision making as individuals and as a team, our mental toughness will prepare us for whatever obstacles come our way."
  },
  {
    name: "Effort",
    color: "#b38100",
    image: "",
    explanation:
      "The one thing that's always in your control is the amount of effort you're putting in. Whether on the sideline or on the field, at workouts or in the championship game, we expect each other to be giving our best one hundred percent of the time."
  },
  {
    name: "Skill",
    color: "#7a242f",
    image: "",
    explanation:
      "We believe in strong fundamentlas. Don't get us wrong, we love those athletic highlight reel plays too, but our foundation is built on executing the basics with consistency and precision."
  },
  {
    name: "Character",
    color: "#215d39",
    image: "",
    explanation:
      "We respect each other and our opponents. We make individual sacrifices to put the team first. We use our unique strengths to contribute to the goals of the team both on and off the field. We are family, and we play for each other."
  }
];
