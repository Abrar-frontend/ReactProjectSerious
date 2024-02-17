import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : 'todo Sms',
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deletetodo : (id) => {},
    toggleCompleted : (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const ContextProvider = TodoContext.Provider