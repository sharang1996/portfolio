import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaPython } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { BsCloud } from "react-icons/bs";

import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b> and <b>React</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "I can create and manage backend servers and databases like <b>MongoDB</b> using <b>Spring</b>, <b>Flask</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop a robust REST API using <b>Flask</b>, <b>Spring</b> or <b>Nodejs</b> ",
  },
  {
    Icon: BsCloud,
    title: "Cloud Computing",
    about:
      "I can advise on various cloud service providers like <b>AWS</b> or <b>GCP</b> and offer an optimised solution ",
  },
  {
    Icon: FaPython,
    title: "Scripting",
    about:
      "I can create <b>Python scripts</b> for any use case, and set them up for periodic invocation ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Mobile Application Development",
    about:
      "I can create an <b>Android</b> application based on the requirements ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "50%",
  },
  {
    Icon: BsCircleFill,
    name: "Flask",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "45%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Cloud Computing",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "Test Driven Development",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Agile Methodology",
    level: "30%",
  },
  {
    Icon: BsCircleFill,
    name: "Pair Programming",
    level: "45%",
  },
];

export const projects: IProject[] = [
  {
    name: "Vegan Manna",
    image_path: "/images/vegan_manna.jpeg",
    deployed_url: "https://www.veganmanna.org",
    github_url: "https://github.com/sharang96/theveganmanna",
    category: ["FullStack"],
    description:
      "A vegan recipe blogging website allowing for creating and sharing recipes with the world",
    key_techs: ["React", "NextJS", "DynamoDB", "GraphQL", "Ant Design"],
  },

  {
    name: "Heart Disease Prediction",
    image_path: "/images/heart_disease.png",
    deployed_url: "https://github.com/sharang1996/heart_disease_predict",
    github_url: "https://github.com/sharang1996/heart_disease_predict",
    category: ["ML"],
    description:
      "An analysis of the features and algorithms we can use to predict heart diseases",
    key_techs: ["Python", "pandas", "sklearn"],
  },

  {
    name: "Fake News Detection",
    image_path: "/images/mediaeval.jpeg",
    deployed_url: "https://github.com/sharang1996/mediaeval",
    github_url: "https://github.com/sharang1996/mediaeval",
    category: ["ML", "DS"],
    description:
      "An analysis using machine learning and NLP to help in fake news detection",
    key_techs: ["Python", "pandas", "sklearn"],
  },

  {
    name: "IMDB Favourite Movies",
    image_path: "/images/IMDB_favourite_movies.jpeg",
    deployed_url: "https://github.com/sharang1996/imdb-favourite-movies",
    github_url: "https://github.com/sharang1996/imdb-favourite-movies",
    category: ["FullStack"],
    description:
      "An application for people to add to their favourite movies list with information obtained from the OMDB API",
    key_techs: ["CSS", "JavaScript", "MySQL", "Handlebars"],
  },

  {
    name: "Thiasil",
    description:
      "Beautiful User Interface for Thia Glass Works to display their catalog of products",
    image_path: "/images/thiasil.jpeg",
    deployed_url: "https://www.thiasil.com/",
    github_url: "https://github.com/sharang1996/thiasil",
    category: ["Frontend"],
    key_techs: ["React", "CSS"],
  },
  {
    name: "Parivahan Scraper",
    image_path: "/images/parivahan.jpeg",
    deployed_url: "https://parivahan.gov.in/parivahan/",
    github_url: "https://github.com/sharang1996/parivahan_scraper",
    category: ["Scraping"],
    description:
      "A web scraper to obtain registration details from license plates using a captcha service",
    key_techs: ["Python"],
  },
  {
    name: "Tindog",
    image_path: "/images/tindog.jpeg",
    deployed_url: "https://sharang1996.github.io/tindog/index.html",
    github_url: "https://github.com/sharang1996/tindog",
    category: ["Frontend"],
    description: "A web page for a fictious website mimicking tinder for dogs",
    key_techs: ["CSS"],
  },
  {
    name: "Omnifood",
    image_path: "/images/omnifood.jpeg",
    deployed_url: "https://sharang1996.github.io/omnifood/",
    github_url: "https://github.com/sharang1996/omnifood",
    category: ["Frontend"],
    description:
      "A web page for a fictious website mimicking a food ordering service",
    key_techs: ["CSS"],
  },
  {
    name: "Trillo",
    image_path: "/images/trillo.jpeg",
    deployed_url: "https://sharang1996.github.io/Trillo/index.html",
    github_url: "https://github.com/sharang1996/Trillo",
    category: ["Frontend"],
    description:
      "A CSS Flexbox based web page for a fictious website mimicking a holiday booking service",
    key_techs: ["CSS"],
  },
  {
    name: "Nexter",
    image_path: "/images/nexter.jpeg",
    deployed_url: "https://sharang1996.github.io/Nexter/index.html",
    github_url: "https://github.com/sharang1996/Nexter",
    category: ["Frontend"],
    description:
      "A CSS Grid based web page for a fictious website mimicking a housing site",
    key_techs: ["CSS"],
  },
  {
    name: "Fishing Fleet",
    image_path: "/images/fishing_fleet.jpeg",
    deployed_url: "https://github.com/sharang1996/fishing_fleet",
    github_url: "https://github.com/sharang1996/fishing_fleet",
    category: ["DS"],
    description:
      "data and python code for analysis of hypothetical fishing fleet, coursework from UoS",
    key_techs: ["Data Science"],
  },
  {
    name: "WheresMyMoney",
    image_path: "/images/wheresmymoney.jpeg",
    deployed_url: "https://github.com/sharang1996/WheresMyMoney",
    github_url: "https://github.com/sharang1996/WheresMyMoney",
    category: ["Mobile"],
    description: "A money tracking application with a Firebase backend",
    key_techs: ["Android"],
  },
  {
    name: "A-Mazing",
    image_path: "/images/amazing.jpeg",
    deployed_url: "https://github.com/sharang1996/Amazing",
    github_url: "https://github.com/sharang1996/Amazing",
    category: ["Mobile"],
    description:
      "Treasure hunt game for college techfeast, using wifi hotspot ssids as clues",
    key_techs: ["Android"],
  },
  {
    name: "Blood bank management system",
    image_path: "/images/bloodbank.jpeg",
    deployed_url: "https://github.com/sharang1996/BloodBankManagementSystem",
    github_url: "https://github.com/sharang1996/BloodBankManagementSystem",
    category: ["Desktop"],
    description:
      "An application for registering blood group of doners and recipients",
    key_techs: ["Java", "MySQL"],
  },
];
