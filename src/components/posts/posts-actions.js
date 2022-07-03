export const addPosts = (posts) => {
  return {
    type: "ADD_POSTS",
    posts,
  };
};

export const loadingPosts = () => {
  return {
    type: "LOADING_POSTS",
  };
};

export const resetAllLoaded = () => {
  return {
    type: "RESET_ALL_LOADED",
  };
};

export const resetPosts = () => {
  return {
    type: "RESET_POSTS",
  };
};

export const fetchPosts = (number) => {
  return (dispatch) => {
    dispatch(loadingPosts());
    fetch(`api/CONTENTLISTINGPAGE-PAGE${number}.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addPosts(data.page['content-items'].content));
      });
  };
};
