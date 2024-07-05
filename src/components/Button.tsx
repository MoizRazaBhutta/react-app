import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
