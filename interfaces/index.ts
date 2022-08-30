export type Imgix = {
  url: string;
  imgix_url: string;
}

export type Category2 = {
  value: string;
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
    category2: Category2;
    excerpt: string;
    content: string;
    embed: string;
  }
};