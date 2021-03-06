import React, {useEffect, useState} from "react";
import "../../App.css";
import {useSelector} from "react-redux";

function NavBar({postChangeHandler}) {
  const [searchValue, setSearchValue] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const oldPost = useSelector((store) => store.posts);
  const [posts, setPosts] = useState([])

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const searchedClicked = () => {
    setSearchVisible(true);
  }
  useEffect(() => {
    setPosts((oldPost))
  }, [oldPost])

  useEffect(() => {
    postChangeHandler(posts);
  }, [posts, postChangeHandler])

  useEffect(() => {
    if (searchValue.trim()) {
      const newPosts = oldPost.filter(e => {
        return e.name.toLowerCase().includes(searchValue.toLowerCase())
      })
      setPosts(prevState => newPosts);
    } else {
      setPosts(prevState => oldPost);
    }
  }, [searchValue, searchVisible, oldPost]);

  const search = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  }

  return (
    <div className="nav-bar">
      <form onSubmit={handleSubmit}>
        <img alt="" className="back-btn" src="images/Back.png"/>
        {!searchVisible ? <span className="heading">Romantic Comedy</span> : null}
        <button type="submit" onClick={searchedClicked} className="search-btn">
          <img alt="" className="search-btn-img" src="images/search.png"/>
        </button>
        {searchVisible ?
          <input type="text"
                 value={searchValue}
                 onChange={handleChange}
                 className="search-text" placeholder="Search here..."/> : null}
      </form>
    </div>
  );


}

export default NavBar;
