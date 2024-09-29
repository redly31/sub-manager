import { format } from "date-fns";
import { ISub } from "../../models/ISub";
import { useAddSubMutation } from "../../store/api/subsApi";
import toast, { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";

export default function PatternItem(pattern: ISub) {
  const [addSub] = useAddSubMutation();
  const addNewSubFromPattern = () => {
    addSub({...pattern, id: nanoid()});
    notifySuccess()
  };

  const notifySuccess = () => toast.success('Подписка добавлена');

  return (
    <div
      className="bg-secondary py-3 px-3 rounded-lg flex items-center justify-between h-20 cursor-pointer"
      onClick={() => addNewSubFromPattern()}
    >
      <h3 className="flex items-center">
        {pattern.icon !== "" && (
          <img
            src={pattern.icon}
            alt=""
            className="w-10 mr-2 rounded-lg object-cover"
          />
        )}
        {pattern.name} &mdash; {pattern.cost} ₽ /{" "}
        {pattern.period === 1 ? "мес" : `${pattern.period} мес`}&nbsp;
      </h3>
      <div className="flex items-center space-x-2">
        <h3>
          {format(pattern.activation_date, "dd.MM.yy")} &mdash;{" "}
          {format(
            pattern.activation_date + 2629743000 * pattern.period,
            "dd.MM.yy"
          )}
        </h3>
      </div>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </div>
  );
}
