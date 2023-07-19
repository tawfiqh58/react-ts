import { useState } from 'react';
import { useEditPostMutation } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import Success from '../ui/Success';
import TextInput from '../ui/TextInput';
import { IPost } from '../../types/Post';

export default function Form({ post }: { post: IPost }) {
  const { id, title: initialTitle } = post;

  const [editPost, { isLoading, isError, isSuccess }] = useEditPostMutation();

  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editPost({
      id,
      data: {
        title,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Post title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message="Post was edited successfully" />}
        {isError && <Error message="There was an error editing post!" />}
      </div>
    </form>
  );
}
