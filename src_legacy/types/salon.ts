import { Book } from './book';
import { User } from './user';

export interface Salon {
  id: number;
  name: string;
  creator_nickname: string;
  books?: Book[];
  participants?: User[];
}
