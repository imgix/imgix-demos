import { ReactNode } from "react";

type EmbedProps = {
  children: ReactNode,
};

const Embed = (props: EmbedProps) => {
  const { children } = props;
  return (
    <>
      <h1 className="mb-12 text-6xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl md:leading-none md:text-left">
        {children}
      </h1>
    </>

  )
}

export default Embed;