import { FaTrashAlt } from "react-icons/fa";
import { formatDate } from "../../hooks/useFormatDate";
import { ISub } from "../../models/ISub";
import { useDeleteSubMutation } from "../../store/api/subsApi";

export default function SubItem(sub: ISub) {
    
  const [deleteSub] = useDeleteSubMutation();

  return (
    <div
      className="bg-secondary py-3 px-3 rounded-lg flex items-center justify-between"
    >
      <h3 className="flex items-center">
        {sub.icon !== "" &&
          <img src={sub.icon} alt="" className="w-10 mr-2 rounded-lg"/>
        }
        {sub.name} &mdash; {sub.cost} ₽ /{" "}
        {sub.period === 1 ? "мес" : `${sub.period} мес`}&nbsp;
      </h3>
      <div className="flex items-center space-x-2">
        <h3>{formatDate(sub.activation_date)} &mdash; {formatDate(sub.activation_date + 2629743000 * sub.period)}</h3>
        <div
          className="flex items-center space-x-2 link-primary p-3"
          onClick={() => deleteSub(sub.id)}
        >
          <FaTrashAlt />
        </div>
      </div>
    </div>
  );
}
