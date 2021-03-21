export interface Review {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  book_title: string;
  book_author: string;
  salon: string | null;
  space: string | null;
}
