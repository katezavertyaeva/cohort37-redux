import Button from "components/Button/Button";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { counterSliceSelectors, counterSliceActions } from "store/redux/counter/counterSlice";
// import { useState } from "react";

function Counter() {
  // Вариант контроля компонента через redux
  //8. Забираем значение count из стора
  const count = useAppSelector(counterSliceSelectors.count)
  //9. Создать функцию dispatch, которая диспачить экшен
  const dispatch = useAppDispatch();

  console.log(counterSliceActions)

  const multiplyValue = 5;

  //10. Создаём функции, которые будут диспатчить определённые экшены в
  // ответ на действия эшен криэйтеров (кнопок)
  const onPlus = () => {
    // 11. Диспатчим экшен, для вызова редьюсера, который отвечает з алогику увеличения каунтера на 1
    dispatch(counterSliceActions.add())
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(multiplyValue))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide())
  }

  // Вариант контроля компонента через локальное хранилище useState
  // const [count, setCount] = useState<number>(0);

  // const onMinus = () => {
  //   setCount(prevValue => prevValue - 1)
  // }

  // const onPlus = () => {
  //   setCount(prevValue => prevValue + 1)
  // }

  // const onMultiply = () => {
  //   setCount(prevValue => prevValue * 2)
  // }

  // const onDivide = () => {
  //   setCount(prevValue => Number((prevValue / 2).toFixed(2)))
  // }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
        <Button onButtonClick={onDivide} name="/" />
      </ButtonControl>
      <CounterResult>{count}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
        <Button onButtonClick={onMultiply} name={`* ${multiplyValue}`} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
