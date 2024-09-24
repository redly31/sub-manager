import { ISub } from "./ISub";

export type FormData = Omit<ISub, "id" | "created_at" | "activation_date"> & {
    activation_date: string;
};
  
export interface Input {
    name: keyof FormData;
    placeholder: string;
    required: boolean;
    id: number;
    type: string;
}