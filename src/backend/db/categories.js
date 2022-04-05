import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "MUSIC",
    description:
      "Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre.",
  },
  {
    _id: uuid(),
    category: "VLOGS",
    description:
      "A video blog or video log, sometimes shortened to vlog, is a form of blog for which the medium is video.",
  },
  {
    _id: uuid(),
    category: "STANDUP COMEDY",
    description:
      "Stand-up comedy is a comedy performance where a comedian performs in front of a live audience, often addressing them directly from the stage.",
  },
  {
    _id: uuid(),
    category: "SPORTS",
    description:
      "Watch all your sports related videos online at PLAY NOW.",
  },
  {
    _id: uuid(),
    category: "WEB DEV",
    description:
      "Web development refers to the building, creating, and maintaining of websites.",
  },
];
