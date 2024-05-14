import { ErrorMessage, InputComponent, InputComponentContainer, InputLabel } from "./styles";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, onInputChange, value, error, onBlur }: InputProps) {
  return (
    <InputComponentContainer>
      <InputLabel>{label}</InputLabel>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        onBlur={onBlur}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputComponentContainer>
  );
}

export default Input;
