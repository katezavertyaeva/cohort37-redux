import { createAppSlice } from "store/createAppSlice";
import { RandomJokesSliceState } from "./types";

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  status: 'default',
  error: undefined
}

export const randomJokesSlice = createAppSlice({
  name: 'RANDOMJOKES',
  initialState: randomJokesInitialState,
  reducers: create => ({
    //создание middleware с помощью функции createThunk
    //метод createThunk принимает два аргумента
    //1 аргумент - асинхронная функция
    //2 аргумент - объект из 3-х методов, которые обрабатывают результат выполнения асинхронной функции
    getJoke: create.asyncThunk(async (arg, thunkApi) => {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      const result = await response.json();
      console.log(result)

      if (!response.ok) {
        //выполняем переход к мини редьюсеру (обработчик - метод) rejected
        thunkApi.rejectWithValue(result)
      } else {
        //выполняем переход к мини редьюсеру (обработчик - метод) fulfilled
        return result
      }
    }, {
      pending: (state: RandomJokesSliceState) => {
        console.log('pending')
        state.status = 'loading'
        //каждый раз при выполнение запроса ошибка будет очищаться
        state.error = undefined
      },
      fulfilled: (state: RandomJokesSliceState, action: any) => {
        console.log('fulfilled')
        console.log(action)

        state.status = 'success'
        state.data = [...state.data, {
          id: action.payload?.id,
          question: action.payload?.setup,
          answer: action.payload?.punchline,
        }]
      },
      rejected: (state: RandomJokesSliceState, action: any) => {
        state.status = 'error'
        state.error = action.payload
      }
    })
  }),
  selectors: {
    joke: (state) => state
  }
})

export const randomJokesSliceActions = randomJokesSlice.actions;
export const randomJokesSliceSelectors = randomJokesSlice.selectors;


// const res =( SliceSelectors.joke)
// res = {
//   data: []
// }

// const jokesArr = res.data

// ответ от сервера
// id
// : 
// 44
// punchline
// : 
// "Because he was a little horse"
// setup: "Why did the Clydesdale give the pony a glass of water?"
// type
// : 
// "general"