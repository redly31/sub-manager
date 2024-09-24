import { useForm, SubmitHandler } from "react-hook-form";
import { nanoid } from "nanoid";
import { useAddSubMutation } from "../../store/api/subsApi";
import { inputs } from "./constants/inputs";
import { getTimestamp } from "../../helpers/getTimestamp";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "../../models/Input";
import { FormData } from "../../models/Input";

export default function NewSubPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [addSub] = useAddSubMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const timestamp = getTimestamp(data.activation_date);
    const sub = {
      ...data,
      period: Number(data.period),
      cost: Number(data.cost),
      activation_date: timestamp,
      id: nanoid(),
      created_at: Date.now(),
    };
    addSub(sub);
    reset();
    notifySuccess()
  };

  const notifySuccess = () => toast.success('Подписка добавлена');

  return (
    <div>
      <h1 className="">Добавить подписку</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start mt-3 space-y-3"
      >
        {inputs.map((input: Input) => (
          <input
            type={input.type}
            key={input.id}
            {...register(input.name, { required: input.required })}
            placeholder={input.placeholder}
            className="text-black p-2 rounded-lg w-96"
          />
        ))}
        <small>* Дата активации подписки</small>
        <button type="submit" className="link-primary py-2 px-5">
          Добавить
        </button>
      </form>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </div>
  );
}
