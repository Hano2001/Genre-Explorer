import FetchRender from "./FetchRender";
import { Link, useLocation } from "react-router-dom";
import { InavBarLinks } from "./InterFaces_and_Types";

export default function Navbar() {
  const location = useLocation();

  const links: InavBarLinks[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Random Recipe",
      link:
        location.pathname === "/random"
          ? "javascript:window.location.reload()"
          : "/random",
    },
    {
        name:"Specs",
        link: "/specs"
    }
  ];

  return (
    <div>
        <h1 className="text-center font-bold text-2xl p-2">Recipe Explorer</h1>
      <nav className="bg-black h-10 w-full overflow-hidden ">
        <ol className="flex justify-between border bg-white pb-2">
          {links.map((link, index: number) => {
            return (
              <li key={index}>
                <Link
                  className="p-4 text-black hover:bg-black hover:text-white"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="text-light">
            <FetchRender />
          </li>
        </ol>
      </nav>
    </div>
  );
}
