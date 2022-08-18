import { ReactNode } from "react";

type PostTitleProps = {
  children: ReactNode,
};

const PostTitle = (props: PostTitleProps) => {
  const { children } = props;
  return (
    <>
      <h1 className="block xl:inline">
        {children}
      </h1>
    </>
  )
}

export default PostTitle;