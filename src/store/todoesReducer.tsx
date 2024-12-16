import { TodoItem, Todoes } from "../types/todoes"


const defaulftState:{todoes: Todoes} = {
    todoes: JSON.parse(localStorage.getItem('todoItems') as string) || []
}

export const reducer = (state = defaulftState, action: {type: string, payload: TodoItem}) => {
    switch (action.type) {
        case "ADD_TODO":
            return {todoes: [...state.todoes, action.payload]};
        case "UPDATE_TODOES":
            return {todoes: [...state.todoes.map(item => item.id != action.payload.id ? item : {id: action.payload.id, title: action.payload.title, description: action.payload.description, completed: !action.payload.completed})]};
        case "DELETE_TODO":
            return {todoes: [...state.todoes.filter(item => item.id == action.payload.id ? null : item)]};
        default:
            return state;
    }
}