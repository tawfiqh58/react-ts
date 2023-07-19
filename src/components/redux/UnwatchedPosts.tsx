import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectMemoizedFilteredPosts } from '../../features/post/postSelectors';
import PostItem from './PostItem';
import { Store } from '../../types/Store';

export default function UnWatchedPosts() {
  const selectUnWatchedPosts = useMemo(selectMemoizedFilteredPosts, []);

  const unwatchedPosts = useSelector((state: Store) =>
    selectUnWatchedPosts(state, false)
  );

  if (!unwatchedPosts || unwatchedPosts.length === 0)
    return <div>Unwatched list empty!</div>;

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {unwatchedPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
