import Button from "components/Button/Button";
import { CounterProps } from "./types";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";

function Counter({ countValue, onMinusClick, onPlusClick, disabledMinus = false, disabledPlus = false }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-" disabled={disabledMinus} />
      </ButtonControl>
      <CounterResult>{countValue}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" disabled={disabledPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
