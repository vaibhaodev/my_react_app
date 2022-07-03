import React, {Suspense, useEffect, useCallback, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchPosts, resetAllLoaded} from "./posts-actions";
import "../../App.css";
import NavBar from "./navbar";

const PostCard = React.lazy(() => import("./post-card"));

function Posts() {
  const [posts, setPosts] = useState([]);
  const jsonNumber = useSelector((store) => store.jsonNumber);
  const allLoaded = useSelector((store) => store.allLoaded);
  const loading = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jsonNumber === 1) {
      dispatch(fetchPosts(jsonNumber));
    }
  }, [jsonNumber]);

  useEffect(() => {
    return () => dispatch(resetAllLoaded());
  }, []);

  const trackScrolling = useCallback(() => {
    const el = document.getElementById("posts-container");
    if (isBottom(el) && !loading && jsonNumber <= 3) {
      dispatch(fetchPosts(jsonNumber));
      // fetchPosts(jsonNumber)(dispatch);
    }
  }, [jsonNumber, loading]);

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 400;
  };

  useEffect(() => {
    if (!allLoaded) document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling, allLoaded]);

  const postChangeHandler = param => {
    setPosts(prevState => {
      return param;
    })
  }

  return (
    <div>
      <NavBar postChangeHandler={postChangeHandler}/>
      <ul id="posts-container">
        <div className="row zero-margin">
          {posts &&
          posts.map((post, index) => {
            return (
              <Suspense key={index} fallback={<div>Loading Post Card...</div>}>
                <PostCard key={post.id} post={post}/>
              </Suspense>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Posts;
