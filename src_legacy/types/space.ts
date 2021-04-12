import { Book } from './book';

export interface Space {
  id: number;
  name: string;
  owner_id: string;
  owner_nickname: string;
  owner_loginId: string;
  books: Book[];
}
