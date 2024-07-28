import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
// Since the posts slice only knows about the data it's responsible for,
//  the state argument will be the array of posts by itself,
//  and not the entire Redux state object.
const postsSlice = createSlice({
  name: "posts", //createSlice will generate an action creator for every reducer function we define in the reducers field, and that the generated action types include the name of the slice,
  initialState,
  reducers: {
    // When we write the postAdded reducer function, createSlice will automatically generate an "action creator" function with the same name.

    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        // The "prepare callback" function can take multiple arguments, generate random values like unique IDs, and run whatever other synchronous logic is needed to decide what values go into the action object. It should then return an object with the payload field inside. (The return object may also contain a meta field, which can be used to add extra descriptive values to the action, and an error field, which should be a boolean indicating whether this action represents some kind of an error.)
        return {
          // It should then return an object with the payload field inside.
          payload: {
            title,
            content,
            user: userId,
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    // builder.addCase(actionCreator, reducer): defines a case reducer that handles a single known action type based on either an RTK action creator or a plain action type string
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // We can directly add the new post object to our posts array
        state.posts.push(action.payload)
      })

      // Redux Persist also allows you to handle rehydration in the Redux Toolkit if you are writing your reducer using the extraReducer object:
      // builder.addCase(REHYDRATE, (state) => {
      //   console.log(state)
      //   return state
      // })
  },
});
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions; // exporting action functions to be used by dispatch
export default postsSlice.reducer;

// for thunks

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

// Thunks are typically written in "slice" files.
// createSlice itself does not have any special support for defining thunks,
//  so you should write them as separate functions in the same slice file.
//  That way, they have access to the plain action creators for that slice,
//  and it's easy to find where the thunk lives.

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  console.log(data.posts);
  return data.posts;

  // fetch("https://dummyjson.com/products/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.products);
  //       // if(data.length!==json.products.length)
  //       setData(json.products);
  //     });
});

// createAsyncThunk accepts two arguments:

// A string that will be used as the prefix for the generated action types
// A "payload creator" callback function that should return a Promise containing some data, or a rejected Promise with an error

// Redux Toolkit's createAsyncThunk API generates thunks that automatically dispatch those "start/success/failure" actions for you.
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  // The payload creator receives the partial `{title, content, user}` object
  async (initialPost) => {
    // We send the initial data to the fake API server
    // const response = await client.post('/fakeApi/posts', initialPost)
    // The response includes the complete post object, including unique ID
    return initialPost;
  }
);
