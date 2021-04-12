export interface Review {
  id: number;
  title: string;
  content: string;
  reviewer_id: number;
  reviewer: string;
  created_at: string;
  updated_at: string;
  review_comment_count:number;
  book_title: string;
  book_author: string;
  salon: string | null;
  space: string | null;
}
