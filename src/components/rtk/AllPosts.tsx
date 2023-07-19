import { useGetPostsQuery } from '../../features/api/apiSlice';
import { IPost } from '../../types/Post';
import Error from '../ui/Error';
import PostLoader from '../ui/placeholder/PostLoader';
import PostView from './PostView';

export default function Posts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery('query') as ReturnType<typeof useGetPostsQuery> & {
    data: IPost[];
  };

  let content: any = <></>;

  if (isLoading) {
    content = (
      <>
        <PostLoader />
        <PostLoader />
        <PostLoader />
        <PostLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && posts?.length === 0) {
    content = <Error message="No posts found!" />;
  }

  if (!isLoading && !isError && posts?.length > 0) {
    content = posts.map((post) => <PostView key={post.id} post={post} />);
  }

  return content;
}
