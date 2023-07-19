import { useGetRelatedPostsQuery } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import RelatedPostLoader from '../ui/placeholder/RelatedPost';
import { IPost } from '../../types/Post';

interface IRelatedPosts {
  id: string;
  title: string;
}

export default function RelatedPosts({ id, title }: IRelatedPosts) {
  const {
    data: relatedPosts,
    isLoading,
    isError,
  } = useGetRelatedPostsQuery({ id, title }) as ReturnType<
    typeof useGetRelatedPostsQuery
  > & {
    data: IPost[];
  };

  let content = null;

  if (isLoading) {
    content = (
      <>
        <RelatedPostLoader />
        <RelatedPostLoader />
        <RelatedPostLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }

  if (!isLoading && !isError && relatedPosts?.length === 0) {
    content = <Error message="No related posts found!" />;
  }

  if (!isLoading && !isError && relatedPosts?.length > 0) {
    content = relatedPosts.map((post) => <div>{post.title}</div>);
  }

  return <div> {content}</div>;
}
