import { ILink } from "../../../models/ILink";

export const privateLinks: ILink[] = [
  { name: "Sub Manager", path: "/" },
  { name: "Войти", path: "/login" },
];

export const publicLinks: ILink[] = [
  { name: "Sub Manager", path: "/" },
  { name: "Профиль", path: "/profile" },
];
