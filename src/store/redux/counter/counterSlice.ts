//импортируем функцию, которая помогает нам создать новый slice
import { createAppSlice } from "store/createAppSlice";
import { CounterStateSlice } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";


//создаем объект с первоначальным состоянием
const counterInitialState: CounterStateSlice = {
  count: 10
}

//1. Создаем слайс для каунтера
export const counterSlice = createAppSlice({
  //2. Задаем имя под которым будет храниться объект со значением каунтера в глобальном стейте
  name: 'COUNTER',
  //3. Задаём объект, в котором храниться начальное состояние
  initialState: counterInitialState,
  //4. Создаем обект, внутри которого будут храниться все редьюсеры 
  //внутри объекта create храниться функция, создающая редьюсеры. 
  //Редьюсеры нужны для обновления состояния 
  // action = 'add' (!=reducer) - идентификатор(названия) действия, который позволяет 
  // запустить соответствующий редьюсер
  //функция reducer принимает 2 аргумента 
  //1 аргумент - состояние
  //2 аргумент - это значение, которое можно передать из компонента и использовать внутри редьюсера
  //PayloadAction - типизация второго аргумента
  reducers: create => ({
    add: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),
    minus: create.reducer((state: CounterStateSlice) => { state.count = state.count - 1 }),
    divide: create.reducer((state: CounterStateSlice) => { state.count = Number((state.count / 2).toFixed(2)) }),
    multiply: create.reducer((state: CounterStateSlice, action: PayloadAction<number>) => {
      console.log(action);
      state.count = Number((state.count * action.payload).toFixed(2))
    }),
  }),
  //5. Создаём селекторы, которые позволяют забрать в компонент данные из хранилища
  selectors: {
    count: (state: CounterStateSlice) => state.count
  }
})

//6. Экспортируем экшены и селекторы для того, чтобы ими можно было воспользоваться в компонентах приложения
export const counterSliceActions = counterSlice.actions;
export const counterSliceSelectors = counterSlice.selectors;


// Просто коммментарий - пример внешнего вида глобального состояния
///global state
// {
//   COUNTER: {
//     count: 0
//   },
//   USER: {
//     firsName: ''
//     ...
//   }
// }