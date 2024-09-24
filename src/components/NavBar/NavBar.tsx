import { NavLink } from "react-router-dom";
import { publicLinks, privateLinks } from "./constants/links";
import { ILink } from "../../models/ILink";
import { useAppSelector } from "../../hooks/redux";
import { MdOutlineEventNote } from "react-icons/md";

export default function NavBar() {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  return (
    <div className="flex justify-between w-full py-3 items-center">
      {isAuth
        ? publicLinks.map((link: ILink) => (
            <NavLink key={link.name} to={link.path} className="text-lg flex items-center">
              {link.name === "Sub Manager" &&
                <MdOutlineEventNote className="mr-1 mt-0.5" size={26}/>
              }
              {link.name}
            </NavLink>
          ))
        : privateLinks.map((link: ILink) => (
            <NavLink key={link.name} to={link.path} className="text-lg">
              {link.name}
            </NavLink>
          ))}
    </div>
  );
}
