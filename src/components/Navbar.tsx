import FetchRender from "./FetchRender";
import { Link } from "react-router-dom";
import { InavBarLinks } from "./InterFaces_and_Types";

export default function Navbar() {
  const links: InavBarLinks[] = [
    {
      name: "Home",
      link: "/",
    },
  ];
  return (
    <div>
      <nav className="bg-orange">
        <ol className="grid grid-cols-3">
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
