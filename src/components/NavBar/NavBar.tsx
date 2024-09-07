import { Link } from "react-router-dom";
import { publicLinks, privateLinks } from "./constants/privateLinks";
import { ILink } from "../../models/ILink";

export default function NavBar() {
  const isLoggedIn = false;
  return (
    <div className="flex justify-between w-full py-3 items-center">
      {isLoggedIn
        ? publicLinks.map((link: ILink) => (
            <Link key={link.name} to={link.path}>
              {link.name}
            </Link>
          ))
        : privateLinks.map((link: ILink) => (
            <Link key={link.name} to={link.path}>
              {link.name}
            </Link>
          ))}
    </div>
  );
}
