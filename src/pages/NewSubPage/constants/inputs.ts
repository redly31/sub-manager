import { Input } from "../NewSubPage";

export const inputs: Input[] = [
    { name: "name", placeholder: "Название", required: true, id: 1 },
    { name: "cost", placeholder: "Стоимость", required: true, id: 2 },
    {
      name: "period",
      placeholder: "Период (месяц, год)",
      required: true,
      id: 3,
    },
    { name: "icon", placeholder: "Иконка подписки", required: false, id: 4 },
];