import { ISub } from "../../models/ISub";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function SubItem(sub: ISub) {
  return (
    <Link to={`/${sub.id}`}>
      <div className="bg-secondary py-3 px-3 rounded-lg flex items-center justify-between h-20">
        <h3 className="flex items-center">
          {sub.icon !== "" && (
            <img
              src={sub.icon}
              alt=""
              className="w-10 mr-2 rounded-lg object-cover"
            />
          )}
          {sub.name} &mdash; {sub.cost} ₽ /{" "}
          {sub.period === 1 ? "мес" : `${sub.period} мес`}&nbsp;
        </h3>
        <div className="flex items-center space-x-2">
          <h3>
            {format(sub.activation_date, "dd.MM.yy")} &mdash;{" "}
            {format(sub.activation_date + 2629743000 * sub.period, "dd.MM.yy")}
          </h3>
        </div>
      </div>
    </Link>
    
  );
}
