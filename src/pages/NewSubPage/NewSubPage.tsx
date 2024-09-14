import { useForm, SubmitHandler } from "react-hook-form";
import { nanoid } from "nanoid";
import { ISub } from "../../models/ISub";
import { useAddSubMutation } from "../../store/api/subsApi";
import { inputs } from "./constants/inputs";

type FormData = Omit<ISub, "id" | "created_at">;

export interface Input {
  name: keyof FormData;
  placeholder: string;
  required: boolean;
  id: number;
}

export default function NewSubPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [addSub] = useAddSubMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const sub = {
      ...data,
      period: Number(data.period),
      cost: Number(data.cost),
      id: nanoid(),
      created_at: Date.now(),
    };
    addSub(sub);
    reset()
  };

  return (
    <div>
      <h1 className="">Добавить подписку</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start mt-3 space-y-3"
      >
        {inputs.map((input: Input) => (
          <input
            key={input.id}
            {...register(input.name, { required: input.required })}
            placeholder={input.placeholder}
            className="text-black p-2 rounded-lg w-96"
          />
        ))}
        <div className="">
          <button type="submit" className="link-primary py-2 px-5">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
