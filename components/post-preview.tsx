import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
//import { Author, Imgix, Category } from 'interfaces';
import { Author, Imgix } from 'interfaces';

type PostPreviewProps = {
  title: string,
  coverImage: Imgix,
  date: string,
  excerpt: string,
  author: Author,
  //category: string,
  slug: string,
};

const PostPreview = (props: PostPreviewProps) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    //category,
    slug,
  } = props;

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.imgix_url} />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className='flex-1'>
          <p className="text-sm font-medium text-indigo-600">
            <a className='hover:underline'>
            Category
            </a>
          </p>
          <h3 className="mb-3 text-3xl leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]"><a className="hover:underline">{title}</a></Link>
          </h3>
          <div className="mb-4 text-lg">
            <Date dateString={date} />
          </div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        </div>
        <Avatar name={author.title} picture={author.metadata.picture.imgix_url} />
      </div>
    </div>
  )
}

export default PostPreview;