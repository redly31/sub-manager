import { Link } from "react-router-dom";
import { ISub } from "../models/ISub";
import { useDeleteSubMutation, useGetSubsQuery } from "../store/api/subsApi";
import { FaTrashAlt } from "react-icons/fa";
import Loader from "../components/Loader/Loader";

export default function HomePage() {

  const { data: subs = [], isLoading } = useGetSubsQuery(1);
  const [ deleteSub ] = useDeleteSubMutation()

  if(isLoading) {
    return <Loader/>
  }

  return (
    <div>
      <h1>Подписки ({subs.length})</h1>
      <Link to="/new"><button className="link-primary w-9 h-9 mt-3 font-semibold">+</button></Link>
      <div className="mt-3 space-y-3">
        {subs.map((sub: ISub) =>
          <div key={sub.id} className="bg-secondary py-3 px-5 rounded-lg flex items-center justify-between">
            <h2>{sub.name} &mdash; {sub.cost} руб / {sub.period === 1 ? "мес" : `${sub.period} мес`}</h2>
            <div className="flex items-center space-x-2 link-primary p-3" onClick={() => deleteSub(sub.id)}>
              <FaTrashAlt/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
