
export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
}

export interface Report {
  id: string;
  title: string;
  period: string;
  type: string;
}

export interface Webinar {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  replies?: Comment[];
}
