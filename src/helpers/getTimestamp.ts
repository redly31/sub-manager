import { parse } from "date-fns";

export const getTimestamp = (activation_date: string) => {
    const parsedDate = parse(activation_date, 'yyyy-MM-dd', new Date());
    const timestamp = parsedDate.getTime();
    return timestamp
}
    