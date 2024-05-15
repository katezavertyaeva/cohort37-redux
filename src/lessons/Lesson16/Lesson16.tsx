import { useState } from 'react';
import Counter from '../../components/Counter/Counter';
import { Lesson16Wrapper } from './styles';

function Lesson16() {
  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  return <Lesson16Wrapper><Counter /></Lesson16Wrapper>
  // Вариант каунтера, который контролируется родительским компонентом (так работал компонент до Homework 16)
  // return <Lesson16Wrapper><Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus} /></Lesson16Wrapper>
}

export default Lesson16;