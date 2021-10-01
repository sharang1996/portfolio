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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "I can create and manage backend servers and databases using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop a robust REST API using <b>Flask</b> or <b>NodeJs</b> ",
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
      "I can create <b>python scripts</b> for any use case, and set them up for periodic invocation ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Mobile Application Development",
    about:
      "I can create an <b>andriod</b> application based on the requirements ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "65%",
  },
  {
    Icon: BsCircleFill,
    name: "Flask",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Cloud Computing",
    level: "70%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "VSCode",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
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
    category: ["Machine Learning"],
    description:
      "An analysis of the features and algorithms we can use to predict heart diseases",
    key_techs: ["Python", "pandas", "sklearn"],
  },

  {
    name: "Fake News Detection",
    image_path: "/images/mediaeval.jpeg",
    deployed_url: "https://github.com/sharang1996/mediaeval",
    github_url: "https://github.com/sharang1996/mediaeval",
    category: ["Machine Learning", "Data Science"],
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
    category: ["Web-Scraping"],
    description:
      "A web scraper to obtain registration details from license plates using a captcha service",
    key_techs: ["python"],
  },
];
