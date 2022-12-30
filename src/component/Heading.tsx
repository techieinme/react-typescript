interface IHeading {
  children?: string;
}

export const Heading = ({ children }: IHeading) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};
