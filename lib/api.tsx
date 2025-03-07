import Cosmic from 'cosmicjs'
import _ from 'lodash'
import ErrorPage from 'next/error'

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

type getPreviewPostBySlugProps = {
  slug: string,
};

export const getPreviewPostBySlug = async (props: getPreviewPostBySlugProps) => {
  const { slug } = props;
  const params = {
    query: {
      slug,
      type: 'posts'
    },
    props: 'slug',
    status: 'any',
  }

  try {
    const data = await bucket.getObjects(params)
    return data.objects[0]
  } catch (err) {
    // Don't throw if an slug doesn't exist
    return <ErrorPage statusCode={err.status} />
  }
}

export const getAllPostsWithSlug = async () => {
  const params = {
    query: {
      type: 'posts'
    },
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export const getAllCategoriesWithSlug = async (category) => {
  const params = {
    query: {
      type: 'posts',
      'metadata.category2.value': category
    },
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export const getAllImagePosts2 = async () => {
  const params = {
    query: {
      type: 'posts',
      'metadata.category':'image'
    },
    props: 'slug',
  }
    const data = await bucket.getObjects(params)
    return data.objects
}

export const getAllImagePosts = async (preview: boolean, category: string) => {
  const params = {
    query: {
      type: 'posts',
      'metadata.category2.value': category
    },
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    ...(preview && { status: 'all' }),
  }
  const data = await bucket.getObjects(params)
  let allPosts = data.objects;
  // Reorder
  allPosts = _.orderBy(allPosts, ['created_at'], ['desc'])
  return allPosts;
}

export const getMergeRequestPosts = async (merge_id: string) => {
  const data = await bucket.getMergeRequestObjects({
    id: merge_id
  })
  return data.objects
}

export const getAllPostsForHome = async (preview: boolean) => {
  const data = await bucket.objects.find({ type: "posts" })
  .props("title,slug,metadata,created_at")
  .sort("-created_at")
  let allPosts = data.objects;
  // Reorder
  allPosts = _.orderBy(allPosts, ['created_at'], ['desc'])
  return allPosts;
}

export const getPostAndMorePosts = async (slug: string, preview: boolean,) => {

  const singleObjectParams = {
    query: {
      slug,
      type: 'posts'
    },
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'any' }),
  }
  const moreObjectParams = {
    query: {
      type: 'posts'
    },
    limit: 3,
    props: 'title,slug,metadata,created_at',
    ...(preview && { status: 'any' }),
  }
  let object
  try {
    const data = await bucket.getObjects(singleObjectParams)
    object = data.objects[0]
  } catch (err) {
    return <ErrorPage statusCode={err.status} />
  }
  const moreObjects = await bucket.getObjects(moreObjectParams)
  const morePosts = moreObjects.objects
    ?.filter(({ slug: object_slug }) => object_slug !== slug)
    .slice(0, 2)

  return {
    post: object,
    morePosts,
  }
}

export const getCategoriesSlug = async(slug) => {
  const data = await bucket.objects.find({
    type: 'posts',
    'metadata.category2.value': slug
  })
  .props('slug,title,metadata,created_at')
  .limit(20)
  return data.objects
}