import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode
};

const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
     <div className="container px-10 mx-auto">{children}</div>
  )
}

export default Container;