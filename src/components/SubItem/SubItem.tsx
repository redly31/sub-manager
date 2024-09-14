import { FaTrashAlt } from "react-icons/fa";
import { formatDate } from "../../hooks/useFormatDate";
import { ISub } from "../../models/ISub";
import { useDeleteSubMutation } from "../../store/api/subsApi";

export default function SubItem(sub: ISub) {
    
  const [deleteSub] = useDeleteSubMutation();

  return (
    <div
      className="bg-secondary py-3 px-5 rounded-lg flex items-center justify-between"
    >
      <h3 className="">
        {sub.name} &mdash; {sub.cost} ₽ /{" "}
        {sub.period === 1 ? "мес" : `${sub.period} мес`}&nbsp;
      </h3>
      <div className="flex items-center space-x-2">
        <h3>{formatDate(sub.created_at)}</h3>
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
