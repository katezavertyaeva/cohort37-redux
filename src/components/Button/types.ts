type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name: string,
  type?: ButtonType,
  disabled?: boolean,
  onButtonClick?: () => void
}