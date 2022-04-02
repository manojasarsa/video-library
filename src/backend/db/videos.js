import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Passenger | Sword From The Stone ",
    description: "Written by Mike Rosenberg Produced by Ed Sheeran and Joe Rubel ",
    creator: "Passenger",
    category: "Music",
    image: "https://img.youtube.com/vi/KvHwcOllzjM/hqdefault.jpg",
  },
  {
    _id: uuid(),
    title: "JavaScript in the browser!",
    description: "learn about DOM scripting i.e. JS in the browser, calling servers, and getting data from there, taking user input and showing user output, and many more things.",
    creator: "Tanay Pratap",
    category: "Web Dev",
    image: "https://img.youtube.com/vi/yLZazznWoAs/hqdefault.jpg",
  },
  {
    _id: uuid(),
    title: "ABHISHEK UPMANYU |Friends, Crime, & The Cosmos",
    description: "Jokes about Friends, Crime Patrol and The Cosmos.",
    creator: "Abhishek Upmanyu",
    category: "Standup Comedy",
    image: "https://img.youtube.com/vi/c7QYEedjb_o/hqdefault.jpg",
  },
  {
    _id: uuid(),
    title: "Best Flight as a Captain | Flying Beast",
    description: "Vlog 63 My best flight as a Captain on Airbus 320.",
    creator: "Flying Beast",
    category: "Vlogs",
    image: "https://img.youtube.com/vi/7DlE8EESsi8/hqdefault.jpg",
  },
  {
    _id: uuid(),
    title: "Real Madrid 2 x 3 Barcelona ● ",
    description: "La Liga 16/17 Extended Goals & Highlights HD",
    creator: "Manoj Asarsa",
    category: "Sports",
    image: "https://img.youtube.com/vi/i2kdIbn0Uoc/hqdefault.jpg",
  },
  // {
  //   _id: uuid(),
  //   title: "",
  //   description:
  //     "",
  //   creator: "Manoj Asarsa",
  //   category: "",
  //   image: "",
  // },
  // {
  //   _id: uuid(),
  //   title: "",
  //   description:
  //     "",
  //   creator: "Manoj Asarsa",
  //   category: "",
  //   image: "",
  // },
  
];
