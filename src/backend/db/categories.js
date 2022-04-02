import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Music",
    description:
      "Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre.",
  },
  {
    _id: uuid(),
    categoryName: "Vlogs",
    description:
      "A video blog or video log, sometimes shortened to vlog, is a form of blog for which the medium is video.",
  },
  {
    _id: uuid(),
    categoryName: "Standup Comedy",
    description:
      "Stand-up comedy is a comedy performance where a comedian performs in front of a live audience, often addressing them directly from the stage.",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    description:
      "Watch all your sports related videos online at PLAY NOW.",
  },
  {
    _id: uuid(),
    categoryName: "Web Dev",
    description:
      "Web development refers to the building, creating, and maintaining of websites.",
  },
];
