import { useSelector } from 'react-redux';
import { selectFilter } from '../../features/filter/filterSelectors';
import {
  selectAllPosts,
  selectUnWatchedPosts,
  selectWatchedPosts,
} from '../../features/post/postSelectors';
import PostItem from './PostItem';
import { Store } from '../../types/Store';

export default function AllPosts() {
  const filter = useSelector(selectFilter);

  const posts = useSelector((state: Store) => {
    if (filter === 'all') {
      return selectAllPosts(state);
    } else if (filter === true) {
      return selectWatchedPosts(state);
    } else {
      return selectUnWatchedPosts(state);
    }
  });

  if (!posts || posts.length === 0) return <div>No post found!</div>;

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
