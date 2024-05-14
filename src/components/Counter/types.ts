export interface CounterProps {
  countValue: number,
  onMinusClick: () => void,
  onPlusClick: () => void,
  disabledMinus?: boolean,
  disabledPlus?: boolean,
}