import { TodoItem } from "../types/todoes";

export const addItemdb = async function (item: TodoItem) {
  return fetch("http://localhost:3001/todoes", {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "content-Type": "application/json" },
  });
};
