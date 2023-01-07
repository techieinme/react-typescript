interface IStatus {
  status?: "loading" | "success" | "failure";
}
const Status = (props: IStatus) => {
  let { status } = props;
  let message;
  switch (status) {
    case "loading":
      message = "loading ...";
      break;
    case "success":
      message = "success ...";
      break;
    case "failure":
      message = "failure ...";
      break;

    default:
      break;
  }
  return (
    <>
      <div>
        <h1>Status component {message}</h1>
      </div>
    </>
  );
};

export default Status;
