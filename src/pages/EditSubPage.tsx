import { useParams } from "react-router-dom";
import NotFoundSub from "../components/NotFoundSub";
import { useGetSubsQuery, useUpdateSubMutation } from "../store/api/subsApi";
import { Input } from "./NewSubPage/NewSubPage";
import { format } from "date-fns";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISub } from "../models/ISub";
import { getTimestamp } from "../helpers/getTimestamp";

type FormData = Omit<ISub, "id" | "created_at" | "activation_date"> & {
    activation_date: string;
};

export default function EditSubPage() {
  const { data: subs = [] } = useGetSubsQuery(1);
  const { register, handleSubmit } = useForm<FormData>();
  const [ updateSub ] = useUpdateSubMutation();
  const { id } = useParams();
  const sub = subs.find((s) => s.id === id); //переделать

  const inputs: Input[] = [
    {
      name: "name",
      placeholder: "Название",
      required: true,
      id: 1,
      type: "text",
    },
    {
      name: "cost",
      placeholder: "Стоимость",
      required: true,
      id: 2,
      type: "number",
    },
    {
      name: "period",
      placeholder: "Длительность подписки (в месяцах)",
      required: true,
      id: 3,
      type: "number",
    },
    {
      name: "icon",
      placeholder: "Ссылка на иконку подписки (необязательно)",
      required: false,
      id: 4,
      type: "text",
    },
    {
      name: "activation_date",
      placeholder: "Дата активации подписки (дд.мм.гг)",
      required: false,
      id: 5,
      type: "date",
    },
  ];

  if (!sub) {
    return <NotFoundSub />;
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const timestamp = getTimestamp(data.activation_date);
    const newSub = {
        ...data,
        period: Number(data.period),
        cost: Number(data.cost),
        activation_date: timestamp,
        id: sub.id,
        created_at: sub.created_at
        
    };
    updateSub({newSub, id: sub.id})
  };

  const formattedDate = format(sub.activation_date, 'yyyy-MM-dd');

  return (
    <div className="bg-secondary py-3 px-3 rounded-lg flex items-start flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start mt-3 space-y-3">
        {inputs.map((input: Input) => (
          <input
            type={input.type}
            key={input.id}
            placeholder={input.placeholder}
            {...register(input.name, { required: input.required })}
            className="text-black p-2 rounded-lg w-96"
            defaultValue={input.type === 'date' ? formattedDate : sub[input.name]}
          />
        ))}
        <button type="submit" className="link-primary py-2 px-5">
          Сохранить
        </button>
      </form>
    </div>
  );
}
