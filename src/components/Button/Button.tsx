import { ButtonComponent } from './styles';
import { ButtonProps } from './types'

function Button({ name, type = "button", onButtonClick, disabled=false }: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} type={type} onClick={onButtonClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
