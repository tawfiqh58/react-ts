import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['Posts', 'Post', 'RelatedPosts'],
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }], // Observer
    }),
    editPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Posts',
        { type: 'Post', id: arg.id },
        { type: 'RelatedPosts', id: arg.id },
      ],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    getPosts: builder.query({
      query: () => '/posts',
      keepUnusedDataFor: 600,
      providesTags: ['Posts'], // Observer
    }),
    getRelatedPosts: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(' ');
        const likes = tags.map((tag: string) => `title_like=${tag}`);

        // filtering API (backend)
        const queryString = `/posts?${likes.join('&')}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: 'RelatedPosts', id: arg.id }, // Observer
      ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetRelatedPostsQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = apiSlice;
