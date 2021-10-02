import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItem: FunctionComponent<{
  value: Category | "all";
  filterProjectsHandler: Function;
  active: string;
}> = ({ value, filterProjectsHandler, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
  return (
    <li className={className} onClick={() => filterProjectsHandler(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  filterProjectsHandler: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="Frontend" {...props} />
      <NavItem value="FullStack" {...props} />
      <NavItem value="ML" {...props} />
      <NavItem value="DS" {...props} />
      <NavItem value="Scraping" {...props} />
      <NavItem value="Mobile" {...props} />
      <NavItem value="Desktop" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
