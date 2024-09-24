import { Input } from "../../../models/Input";


export const inputs: Input[] = [
    { name: "name", placeholder: "Название", required: true, id: 1, type: "text" },
    { name: "cost", placeholder: "Стоимость", required: true, id: 2, type: "number" },
    {
      name: "period",
      placeholder: "Длительность подписки (в месяцах)",
      required: true,
      id: 3,
      type: "number" 
    },
    { name: "icon", placeholder: "Ссылка на иконку подписки (необязательно)", required: false, id: 4, type: "text"  },
    { name: "activation_date", placeholder: "Дата активации подписки (дд.мм.гг)", required: false, id: 5, type: "date"  },
];