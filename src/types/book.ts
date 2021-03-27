import { Quote } from './quote';
import { Review } from './review';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
  reviews?: Review[];
  quotes?: Quote[];
}

export interface BookData {
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
}
