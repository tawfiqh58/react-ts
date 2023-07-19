import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import DescriptionLoader from '../ui/placeholder/Description';
import RelatedPostLoader from '../ui/placeholder/RelatedPost';
import Description from '../ui/Description';
import RelatedPosts from './RelatedPosts';
import { IPost } from '../../types/Post';

export default function Post({ post: someData }: { post: IPost }) {
  const { postId } = useParams();
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostQuery(postId) as ReturnType<typeof useGetPostQuery> & {
    data: IPost;
  };

  let content = null;
  if (isLoading) {
    content = (
      <>
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }

  if (!isLoading && !isError && post?.id) {
    content = (
      <>
        <Description text={post.title} />
      </>
    );
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>

          {post?.id ? (
            <RelatedPosts id={post.id} title={post.title} />
          ) : isLoading ? (
            <>
              <RelatedPostLoader />
              <RelatedPostLoader />
              <RelatedPostLoader />
            </>
          ) : (
            <Error message="There was an error!" />
          )}
        </div>
      </div>
    </section>
  );
}
