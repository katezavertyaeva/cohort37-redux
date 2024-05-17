import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

const todoListInitialState: todoListStateSlice = {
  todoList: [],
}

export const todoListSlice = createAppSlice({
  name: "TODO",
  initialState: todoListInitialState,
  reducers: create => ({
    addTask: create.reducer(
        (state: todoListStateSlice, action: PayloadAction<string>) => {
            state.todoList = [...state.todoList, action.payload] 
      },
    ),
  }),
  selectors: {
    todoList: (state: todoListStateSlice) => state.todoList,
  },
})

export const todoListSliceActions = todoListSlice.actions
export const todoListSliceSelectors = todoListSlice.selectors
