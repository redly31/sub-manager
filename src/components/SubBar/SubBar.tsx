import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SubBarProps {
  setSortOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  sortType: string;
}

export default function SubBar(props: SubBarProps) {
  const {setSortOrder, setSortType, sortType} = props

  const handleSortClick = (type: string) => {
    if (sortType === type) {
      setSortOrder(prevOrder => !prevOrder);
    } else {
      setSortType(type);
      setSortOrder(true);
    }
  };

  return (
    <div className="flex items-start mt-2 flex-col">

      <Link to="/new">
        <button className="space-x-2 link-primary p-3">
          <FaPlus size={15}/>
        </button>
      </Link>

      <div className="flex space-x-2 items-center">
        <h3>Сортировка по: </h3>
        <button
          className="link-primary py-2 px-5"
          onClick={() => handleSortClick('cost')}
        >
          Стоимости
        </button>

        <button
          className="link-primary py-2 px-5"
          onClick={() => handleSortClick('created_at')}
        >
          Дате добавления
        </button>
      </div>

    </div>
  );
}
