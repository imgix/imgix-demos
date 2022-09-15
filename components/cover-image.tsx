import cn from 'classnames'
import Link from 'next/link'
import Imgix from 'react-imgix'

type CoverImageProps = {
  title: string,
  url: string,
  slug: string,
};
const CoverImage = (props: CoverImageProps) => {
  const { 
    title, 
    url, 
    slug
  } = props;
  
  const image = (
    <Imgix
      src={url}
      //alt={`Cover Image for ${title}`}
      className={cn('lazyload shadow-small w-full', {
        'hover:shadow-medium border-slate-200 border-2 transition-shadow duration-200': slug,
      })}
      sizes="(min-width: 1024px) 40vw, 90vw"
      imgixParams={{ fit: "crop", ar: "1.7:1"}}
      attributeConfig={{
        src: 'data-src',
        srcSet: 'data-srcset',
        sizes: 'data-sizes',
      }}
      htmlAttributes={{
        src: `${url}?auto=format,compress&q=1&w=10`,
      }}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}><a aria-label={title}>{image}</a></Link>
      ) : (
        image
      )}
    </div>
  )
}
export default CoverImage;
