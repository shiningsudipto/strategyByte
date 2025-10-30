export type TOfTitleAndDesc = {
  title: string;
  description: string;
};

export interface TArticle {
  sys: {
    id: string;
    publishedAt: string;
  };
  title: string;
  slug: string;
  description: string;
  thumbnail: {
    url: string;
  };
  blogCategory: {
    title: string;
    slug: string;
  };
}
