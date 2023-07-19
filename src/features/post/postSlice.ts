import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../types/Post';

const initialState: { posts: IPost[] } = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const postIndexToUpdate = state.posts.findIndex(
        (v) => v.id === action.payload
      );
      state.posts[postIndexToUpdate].watched =
        !state.posts[postIndexToUpdate].watched;
    },
  },
});

export default postSlice.reducer;
export const { addPost, updatePost } = postSlice.actions;
