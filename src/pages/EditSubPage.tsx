import { useParams } from "react-router-dom";
import NotFoundSub from "../components/NotFoundSub";
import { useGetSubQuery, useUpdateSubMutation } from "../store/api/subsApi";
import { format } from "date-fns";
import { SubmitHandler, useForm } from "react-hook-form";
import { getTimestamp } from "../helpers/getTimestamp";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "../models/Input";
import { FormData } from "../models/Input";
import { inputs } from "./NewSubPage/constants/inputs";

export default function EditSubPage() {
  const { id } = useParams();
  const { data: sub, isLoading, error } = useGetSubQuery(id as string)
  const { register, handleSubmit } = useForm<FormData>();
  const [ updateSub ] = useUpdateSubMutation();

  if (isLoading) return <h1>Загрузка...</h1>;
  if (error || !sub) return <NotFoundSub />;

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
    notifySuccess()
  };

  const formatedDate = format(sub.activation_date, 'yyyy-MM-dd');
  const notifySuccess = () => toast.success('Подписка обновлена');

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
            defaultValue={input.type === 'date' ? formatedDate : sub[input.name]}
          />
        ))}
        <small>* Дата активации подписки</small>
        <button type="submit" className="link-primary py-2 px-5">
          Сохранить
        </button>
      </form>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </div>
  );
}
