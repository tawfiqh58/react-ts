import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectMemoizedFilteredPosts } from '../../features/post/postSelectors';
import PostItem from './PostItem';
import { Store } from '../../types/Store';

export default function WatchedPosts() {
  const selectWatchedPosts = useMemo(selectMemoizedFilteredPosts, []);

  const watchedPosts = useSelector((state: Store) =>
    selectWatchedPosts(state, true)
  );

  if (!watchedPosts || watchedPosts.length === 0)
    return <div>Watch list empty!</div>;

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {watchedPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
