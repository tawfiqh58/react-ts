import { createSelector } from 'reselect';
import { Store } from '../../types/Store';

export const selectAllPosts = (state: Store) => state.post.posts;

export const selectWatchedPosts = (state: Store) =>
  state.post.posts.filter((v) => v.watched === true);

export const selectUnWatchedPosts = (state: Store) =>
  state.post.posts.filter((v) => v.watched === false);

export const selectMemoizedWatchedPosts = createSelector(
  selectAllPosts,
  (allPosts) => {
    return allPosts.filter((v) => v.watched === true);
  }
);

export const selectMemoizedUnWatchedPosts = createSelector(
  selectAllPosts,
  (allPosts) => {
    console.log('running output selector');
    return allPosts.filter((v) => v.watched === false);
  }
);

export const selectMemoizedFilteredPosts = () =>
  createSelector(
    selectAllPosts,
    (state: Store, filter: boolean | string) => filter,
    (allPosts, filter) => {
      return allPosts?.filter((v) => v.watched === filter);
    }
  );
