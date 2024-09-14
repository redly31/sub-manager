import { useMemo } from "react";
import { ISub } from "../models/ISub";

// Хук для сортировки
export const useSort = (subs: ISub[], sortType: string, sortOrder: boolean) => {
  const sortedSubs = useMemo(() => {
    if (!subs) return [];
    if (sortType === "cost") {
      return [...subs].sort((a, b) => sortOrder ? b.cost - a.cost : a.cost - b.cost);
    }
    if (sortType === "created_at") {
      return [...subs].sort((a, b) => sortOrder ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime() : new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    }
    return subs;
  }, [subs, sortType, sortOrder]);

  return sortedSubs;
};