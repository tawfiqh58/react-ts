import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import { IPost } from '../../types/Post';

export default function Delete({ post }: { post: IPost }) {
  const { id } = post;
  const navigate = useNavigate();

  const [deletePost, { isSuccess, isLoading, isError }] =
    useDeletePostMutation();

  const handleDelete = () => {
    if (id) deletePost(id);
  };

  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  return (
    <div>
      <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
        Delete
      </div>

      {!isLoading && isError && (
        <Error message="There was an error deleting the post!" />
      )}
    </div>
  );
}
