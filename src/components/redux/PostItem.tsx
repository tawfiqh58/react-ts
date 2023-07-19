import { useDispatch } from 'react-redux';
import { updatePost } from '../../features/post/postSlice';
import { IPost } from '../../types/Post';

export default function PostItem({ post }: { post: IPost }) {
  const { title, link, watched, id } = post;
  const dispatch = useDispatch();

  const icon = watched ? '❌' : '✅';

  const editPost = (id: string) => {
    dispatch(updatePost(id));
  };

  return (
    <li className="flex justify-between py-2">
      <a href={link}>{title}</a>
      <span className="text-sm cursor-pointer" onClick={() => editPost(id)}>
        {icon}
      </span>
    </li>
  );
}
