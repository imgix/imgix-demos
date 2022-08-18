//import Embed from './embed'

type PostEmbedProps = {
  embed: string
};

const PostEmbed = (props: PostEmbedProps) => {
  const {
    embed
  } = props;

  return (
    <>
      <div
      dangerouslySetInnerHTML={{ __html: embed }}
      >
      </div>
    </>
  )
}

export default PostEmbed;