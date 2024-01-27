import {createSlice, nanoid} from '@reduxjs/toolkit';
//nanoid for unique id
const initialState = {
    todos: [{id: 1, text:"Hello World"}]
}



export const todoSlice = createSlice({
    name: 'todo', //name is a property in redux tkt
    initialState,
    reducers: {
        addTodo : (state, action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },//(state,action)
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, text: action.payload } : todo)
            }
        
        
    }
})
export const {addTodo, removeTodo, editTodo} = todoSlice.actions//export
export default todoSlice.reducer//export