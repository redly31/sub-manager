import { ISub } from "../models/ISub";
import { useGetSubsQuery } from "../store/api/subsApi";
import Loader from "../components/Loader/Loader";
import { useSort } from "../hooks/useSort";
import { useState } from "react";
import SubBar from "../components/SubBar/SubBar";
import SubItem from "../components/SubItem/SubItem";

export default function HomePage() {
  const { data: subs = [], isLoading } = useGetSubsQuery(1);
  const [sortType, setSortType] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<boolean>(false)
  const sortedSubs = useSort(subs, sortType, sortOrder);

  if (isLoading) {
    return <Loader />;
  }
  const totalCost = subs.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div>
      <h1>Статистика</h1>
      <h3>Траты в месяц: {totalCost} ₽</h3>
      <h3>Траты в год: {totalCost * 12} ₽</h3>
      <h1 className="mt-2">Подписки ({subs.length})</h1>
      <SubBar setSortType={setSortType} setSortOrder={setSortOrder} sortType={sortType} />
      <div className="flex flex-col mt-2 space-y-3">
        {sortedSubs?.map((sub: ISub) => (
          <SubItem {...sub} key={sub.id} />
        ))}
      </div>
    </div>
  );
}
