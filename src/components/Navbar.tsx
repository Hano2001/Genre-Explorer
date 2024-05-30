import FetchRender from "./FetchRender";
import { Link } from "react-router-dom";
import { InavBarLinks } from "./InterFaces_and_Types";

export default function Navbar() {
  const links: InavBarLinks[] = [
    {
      name: "Home",
      link: "/",
    },
    {
        name:"Random Recipe",
        link:"/random"
    }
  ];
  return (
    <div >
      <nav className="bg-orange  h-10 w-full">
        <ol className="flex justify-between">
          {links.map((link) => {
            return (
              <li>
                <Link to={link.link}>{link.name}</Link>
              </li>
            );
          })}
          <li>
            <FetchRender />
          </li>
        </ol>
      </nav>
    </div>
  );
}
