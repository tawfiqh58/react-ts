import { IPost } from './Post';

export type Store = {
  id: string;
  title: string;
  counter: { value: number; status: 'idle' | 'loading' };
  filters: { watchStatus?: boolean | string };
  post: { posts: IPost[] };
};
