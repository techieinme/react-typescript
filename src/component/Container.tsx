interface ContainerProps {
  style: React.CSSProperties;
}
export const Container = (props: ContainerProps) => {
  return <div {...props}>Some content here</div>;
  // return <div style={props.style}>Some content here</div>;
};
