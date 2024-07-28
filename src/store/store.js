import { configureStore, nanoid } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ['users']
  // transforms: [usersTransform],
  // There might be situations when you want to customize how certain parts of your state persist. Transforming persistent data becomes important at this point because it gives you control over what is stored, how it is stored, and if it is stored after being rehydrated. This transformation technique comes in handy in various scenarios, from formatting data to handling defaults to applying pre-processing tasks and so on.
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


//Transformations in redux persist

// import { createTransform } from "redux-persist";

// const usersTransform = createTransform(
//   (incomingState, originalState) => {
//     // Transform the incoming state
//     return {
//       users: incomingState.users.map((usr) => ({
//         // Apply transformations to each note if needed
//         userId: nanoid()
//       })),
//     };
//   },
//   (state) => {
//     // Transform the state before persisting
//     return {
//       users: state.users.map((user) => ({
//         ...user,
//         userId: nanoid() // Example: Transform content to lowercase
//       })),
//     };
//   },
//   { safelist: ["users"] }
// );
