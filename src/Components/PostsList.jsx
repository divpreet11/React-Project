import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded, addNewPost } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";
import { parseISO, formatDistanceToNow } from "date-fns";
import { ReactionButtons } from "./ReactionButtons";
import {
  selectAllPosts,
  selectPostById,
  fetchPosts,
} from "../features/posts/postsSlice";
import { fetchUsers } from "../features/users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
    userId: "",
  });
  const error = useSelector((state) => state.posts.error);
  const postStatus = useSelector((state) => state.posts.status);
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchUsers());
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  const PostAuthor = ({ userId }) => {
    const author = useSelector((state) =>
      state.users.find((user) => user.id === userId)
    );

    return <span>by {author ? author.firstName : "Unknown author"}</span>;
  };

  const TimeAgo = ({ timestamp }) => {
    let timeAgo = "";
    if (timestamp) {
      const date = parseISO(timestamp);
      const timePeriod = formatDistanceToNow(date);
      timeAgo = `${timePeriod} ago`;
    }

    return (
      <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
      </span>
    );
  };
  console.log(posts);
  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id} style={{}}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.body}</p>
      <PostAuthor userId={post.userId} />
      {/* <TimeAgo timestamp={post?.date} /> */}
      <ReactionButtons post={post} />
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </article>
  ));
  const createPost = async () => {
    console.log(post);
    try {
      await dispatch(
        addNewPost({ id: nanoid(), title: post.title, content: post.content })
      ).unwrap();
      // Redux Toolkit adds a .unwrap() function to the returned Promise, which will return a new Promise that either has the actual action.payload value from a fulfilled action, or throws an error if it's the rejected action. This lets us handle success and failure in the component using normal try/catch logic.
    } catch (err) {
      // error occured in thunk promise rejected
    }
    // dispatch(postAdded(post.title, post.content, post.userId));
  };
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <section className="posts-list">
        <h2>Posts</h2>
        {renderedPosts}
      </section>
      <div>
        <h4>add Posts</h4>
        <label>Post title</label>
        <input
          type="text"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <br />
        <label>Post Content</label>
        <input
          type="text"
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <br />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={post.userId}
          onChange={(e) => setPost({ ...post, userId: e.target.value })}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <br />

        <button onClick={() => createPost()}>create Post</button>
      </div>
    </>
  );
};
