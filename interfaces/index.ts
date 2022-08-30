export type Imgix = {
  url: string;
  imgix_url: string;
}

export type Author = {
  title: string;
  metadata: {
    picture: Imgix;
  }
}

/*export type Category = {
  title: string;
  metadata: {
    category;
  }
}*/


export type Post = {
  type: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  metadata: {
    cover_image: Imgix;
    author: Author;
    value: string;
    excerpt: string;
    content: string;
    embed: string;
  }
};