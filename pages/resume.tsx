import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2 ">
      {/* Education and experience*/}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Latest Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">MSc in Computing Science</h5>
            <p className="font-semibold">
              University of Southampton(2020-2021)
            </p>
            <p className="my-3">
              I have completed my studies in pursuance of a Master&apos;s degree
              in Computer Science with my dissertation focus on a modern
              serverless architecture.
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Latest Work Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Graduate Software Developer
            </h5>
            <p className="font-semibold">The Hut Group(2021-ongoing)</p>
            <p className="my-3">
              I am working with the logistics team as a full-stack developer.
            </p>
          </div>
        </div>
      </div>

      {/* Languages and Tools*/}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
