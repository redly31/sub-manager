import { format } from "date-fns";
import { ISub } from "../../models/ISub";
import { useGetPatternsQuery } from "../../store/api/patternsApi";
import PatternItem from "./PatternItem";

export default function Patterns() {
  const { data: patterns = [], isLoading } = useGetPatternsQuery(1);
  console.log(patterns);

  if (isLoading) return <h2 className="mt-5">Загрузка...</h2>;

  return (
    <div className="mt-5">
      <h2>Шаблоны</h2>
      <div className="flex flex-col mt-4 space-y-3">
        {patterns.map((pattern: ISub) => (
          <PatternItem {...pattern} key={pattern.id}/>
        ))}
      </div>
    </div>
  );
}
