import { Input } from "../NewSubPage";

export const inputs: Input[] = [
    { name: "name", placeholder: "Название", required: true, id: 1 },
    { name: "cost", placeholder: "Стоимость", required: true, id: 2 },
    {
      name: "period",
      placeholder: "Длительность подписки (в месяцах)",
      required: true,
      id: 3,
    },
    { name: "icon", placeholder: "Ссылка на иконку подписки (необязательно)", required: false, id: 4 },
    { name: "activation_date", placeholder: "Дата активации подписки (дд.мм.гг)", required: false, id: 5 },
];