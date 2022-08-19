import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Author, Imgix } from 'interfaces';


type HeroPostProps = {
  title: string,
  coverImage: Imgix;
  date: string,
  excerpt: string,
  author: Author,
  slug: string,
};

const HeroPost = (props: HeroPostProps) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug
  } = props;

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} slug={slug} />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]"><a className="hover:underline">{title}</a></Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar
            name={author.title}
            picture={author.metadata.picture.imgix_url}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroPost;