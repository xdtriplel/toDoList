import { Todoes, TodoItem } from "../types/todoes";

export const deleteItemdb = async (id: string) => {
  return fetch(`http://localhost:3001/todoes/${id}`, {
    method: "DELETE",
  });
};
