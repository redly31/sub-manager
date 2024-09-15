import { useMemo } from "react";
import { ISub } from "../models/ISub";

// Хук для сортировки
export const useSort = (subs: ISub[], sortType: string, sortOrder: boolean) => {
  const sortedSubs = useMemo(() => {
    if (!subs) return [];
    if (sortType === "cost") {
      return [...subs].sort((a, b) => sortOrder ? b.cost - a.cost : a.cost - b.cost);
    }
    if (sortType === "activation_date") {
      return [...subs].sort((a, b) => sortOrder ? new Date(b.activation_date).getTime() - new Date(a.activation_date).getTime() : new Date(a.activation_date).getTime() - new Date(b.activation_date).getTime());
    }
    if (sortType === "period") {
      return [...subs].sort((a, b) => sortOrder ? b.period - a.period : a.period - b.period);
    }
    return subs;
  }, [subs, sortType, sortOrder]);

  return sortedSubs;
};