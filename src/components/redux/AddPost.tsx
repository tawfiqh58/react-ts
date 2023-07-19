// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../features/post/postSlice';

let id = 1;
export default function AddPost() {
  const dispatch = useDispatch();
  // const [disabled, setDisabled] = useState(false);

  const insertPost = () => {
    // setDisabled(true);
    dispatch(
      addPost({
        id: id,
        title: 'Think in a Redux way',
        link: 'https://youtu.be/7InhI8NMsec',
        watched: true,
      })
    );

    id++;
  };

  return (
    <div className="flex justify-end">
      <button
        // disabled={disabled}
        onClick={insertPost}
        className="px-3 py-2 bg-violet-600 text-white text-sm rounded-full"
      >
        Add Post
      </button>
    </div>
  );
}
