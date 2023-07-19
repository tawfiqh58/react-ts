import React from 'react';
import AddPost from '../components/redux/AddPost';
import AllPosts from '../components/redux/AllPosts';
import Filters from '../components/redux/Filters';
import UnWatchedPosts from '../components/redux/UnwatchedPosts';
import WatchedPosts from '../components/redux/WatchedPosts';

function PostPage() {
  return (
    <div className="w-screen h-screen p-20">
      <div className="flex w-full">
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400 flex justify-between items-center">
            <span className="font-bold">All Posts</span>
            <Filters />
          </div>
          <AllPosts />
          <AddPost />
        </div>
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400">
            <span className="font-bold">Watched Posts</span>
          </div>
          <WatchedPosts />
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400">
            <span className="font-bold">Un Watched Posts</span>
          </div>
          <UnWatchedPosts />
        </div>
      </div>
    </div>
  );
}

export default PostPage;
