import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Author, Imgix } from 'interfaces';

type PostPreviewProps = {
  title: string,
  coverImage: Imgix,
  date: string,
  excerpt: string,
  author: Author,
  slug: string,
};

const PostPreview = (props: PostPreviewProps) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  } = props;

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.imgix_url} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]"><a className="hover:underline">{title}</a></Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.title} picture={author.metadata.picture.imgix_url} />
    </div>
  )
}

export default PostPreview;