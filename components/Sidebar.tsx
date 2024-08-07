import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <div>
      <Image
        src="/profilephoto.jpeg"
        alt="profile photo sharang"
        className="w-32 h-32 mx-auto rounded-full"
        width="100%"
        height="100%"
      ></Image>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Sharang </span>Gupta
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Fullstack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/resume_latest.pdf"
        download="resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/*Social Icons*/}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.instagram.com/guptasharang/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/sharang1996">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sharanggupta">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/*address*/}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span>
            <a href="https://goo.gl/maps/zUMstuncbeeR2iTY9">
              Bournemouth, England
            </a>
          </span>
        </div>

        <p className="my-2">
          <a href="mailto:sharanggupta1996@gmail.com?subject=Contacting you from your resume online!">
            sharanggupta1996@gmail.com
          </a>
        </p>
        <p className="my-2">
          <a href="tel:+447563566755">(+44) 07563566755</a>
        </p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:sharanggupta1996@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
