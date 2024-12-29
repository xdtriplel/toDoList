import { TodoItem } from "../types/todoes";

export const changeStatusdb = async (item: TodoItem) => {
  return fetch(`http://localhost:3001/todoes/${item.id}`, {
    method: "PATCH",
    body: JSON.stringify({ ...item, completed: !item.completed }),
  });
};
