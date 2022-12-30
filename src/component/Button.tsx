import { FC } from "react";

interface ButtonProps {
  id?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Button: FC<ButtonProps> = ({ handleClick, ...props }) => {
  return (
    <>
      {/* if just a evnet you can use or wanted to pass id or any other parms as argu hen use 
    (event)=>hadlecliek(event,id) */}
      {/* <button onClick={handleClick}>Click</button> */}
      <button {...props} onClick={(event) => handleClick(event, 1)}>
        Click
      </button>
    </>
  );
};
// with default export
export default Button;
