import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteSubMutation, useGetSubQuery } from "../store/api/subsApi";
import { format } from "date-fns";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import NotFoundSub from "../components/NotFoundSub";

export default function SubPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: sub, isLoading, error } = useGetSubQuery(id as string)
  const [deleteSub] = useDeleteSubMutation();

  const removeSub = (id: string) => {
    deleteSub(id)
    navigate('/')
  }

  if (isLoading) return <h1>Загрузка...</h1>;
  if (error || !sub) return <NotFoundSub />;

  return (
    <div className="bg-secondary py-3 px-3 rounded-lg flex items-start flex-col">
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-2">
          {sub.icon !== "" && (
            <img
              src={sub.icon}
              alt=""
              className="w-10 rounded-lg object-cover"
            />
          )}
          <h2>{sub.name}</h2>
        </div>
          <div className="flex space-x-2">
            <Link to={`/${sub.id}/edit`}>
              <div className="flex items-center space-x-2 link-primary p-3">
                <FaEdit />
              </div>
            </Link>
            <div className="link-primary p-3" onClick={() => removeSub(sub.id)}>
            <FaTrashAlt />
            </div>
          </div>
      </div>
      <div className="mt-3 flex flex-col space-y-1">
        <h2>{sub.cost} ₽ в месяц</h2>
        <h3>Дата активации: {format(sub.activation_date, "dd.MM.yy")}</h3>
        <h3>Дата окончания: {format(sub.activation_date + 2629743000 * sub.period, "dd.MM.yy")}</h3>
      </div>
    </div>
  );
}
