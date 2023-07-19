import React from 'react';
import AllPosts from '../components/rtk/AllPosts';
import { Link } from 'react-router-dom';

export default function RTKPage() {
  return (
    <div>
      <Link to="add">Create New</Link>
      <AllPosts />
    </div>
  );
}
