import { Post } from 'interfaces';
import PostPreview from './post-preview'

type MoreDemosProps = {
  posts: Post[],
};

const MoreDemos = (props: MoreDemosProps) => {
  const { posts } = props;
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Demos
      </h2>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.metadata.cover_image}
            date={post.created_at}
            author={post.metadata.author}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
            category={post.metadata.category}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreDemos;