import { ILink } from "../../../models/ILink";

export const privateLinks: ILink[] = [
  { name: "Sub Manager", path: "/", unique: true },
  { name: "Войти", path: "/login", unique: false },
];

export const publicLinks: ILink[] = [
  { name: "Sub Manager", path: "/", unique: true },
  { name: "Профиль", path: "/profile", unique: false },
];
