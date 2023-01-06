export const Events = () => {
  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handlechange", event);
  };
  const handleOnclickCapture = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log("handleOnclickCapture", event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("handleKeyDown", event);
  };
  const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("handleKeyup", event);
  };
  const handleContextMenuCapture = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log("handleContextMenuCapture", event);
  };
  return (
    <>
      <input
        type="text"
        onChange={handlChange}
        onClickCapture={handleOnclickCapture}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyup}
        onContextMenuCapture={handleContextMenuCapture}
      />
    </>
  );
};
