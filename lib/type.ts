export type ActiveStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";

export type Role = "USER" | "ADMIN" | "AUTHOR";

export type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type CommentStatus = "APPROVED" | "REJECTED";

export type SubscriptionStatus = "ACTIVE" | "CANCELED" | "EXPIRED";

export type IComment = {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  status: CommentStatus;
  createdAt: string;
  updatedAt: string;
};

export type IAuthor = {
  name: string;
  email: string;
};

export type IPost = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  status: PostStatus;
  tags: string[];
  views: number;
  isPremium: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: IAuthor;
  comments: IComment[];
};

export type IMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type IGetPostsResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IPost[];
  meta: IMeta;
};

export type GetCommentsResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IComment[];
};
