export interface Quote {
  id: number;
  content: string;
  page: number;
  quoter_id: number;
  quoter: string;
  created_at: string;
  updated_at: string;
  book_title: string;
  book_author: string;
  salon: string | null;
  space: string | null;
}
