import { ChangeEvent, FocusEvent } from "react";

export interface InputProps {
  name: string,
  type?: string,
  placeholder: string,
  label?: string,
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string;
  error?: string | undefined;
  onBlur?: (e: FocusEvent<any, Element>) => void,
}