import { useForm, SubmitHandler } from "react-hook-form";
import { nanoid } from "nanoid";
import { ISub } from "../../models/ISub";
import { useAddSubMutation } from "../../store/api/subsApi";
import { inputs } from "./constants/inputs";
import { getTimestamp } from "../../helpers/getTimestamp";
import { useState } from "react";

type FormData = Omit<ISub, "id" | "created_at" | "activation_date"> & {
  activation_date: string;
};

export interface Input {
  name: keyof FormData;
  placeholder: string;
  required: boolean;
  id: number;
  type: string;
}

export default function NewSubPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [addSub] = useAddSubMutation();
  const [validationError, setValidationError] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data.activation_date)
    if(data.activation_date.length !== 10) {
      setValidationError(true)
    } else {
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
      setValidationError(false)
    }
    
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
            type={input.type}
            key={input.id}
            {...register(input.name, { required: input.required })}
            placeholder={input.placeholder}
            className="text-black p-2 rounded-lg w-96"
          />
        ))}
        {validationError &&
          <h3 className="">Ошибка! Вы не указали или неправильно указали одно из полей</h3>
        }
        <button type="submit" className="link-primary py-2 px-5">
          Добавить
        </button>
      </form>
    </div>
  );
}
