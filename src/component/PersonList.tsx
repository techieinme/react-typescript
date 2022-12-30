interface IPersonObject {
  firstName: string;
  lastName: string;
}
interface IPersonList {
  list: IPersonObject[];
}

export const PersonList = ({ list }: IPersonList) => {
  console.log(list);
  return (
    <>
      <h1>Hello</h1>
      {list.map((item) => {
        return (
          <div key={item.firstName}>
            <p>
              {" "}
              {item.firstName} - {item.lastName}
            </p>
          </div>
        );
      })}
    </>
  );
};
