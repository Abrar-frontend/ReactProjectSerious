import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : 'todo Sms',
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const ContextProvider = TodoContext.Provider