import React from "react";
import "../../App.css";

function PostCard({post}) {
  return (
    <div className="col-xs-4 zero-padding black-bg-card" key={post.id}>
      <img alt="" className="poster-image" src={`images/${post['poster-image']}`}
           onError={(e) => (e.currentTarget.src = 'images/placeholder_for_missing_posters.png')}
      />
      <div className="title">{post.name}</div>
    </div>
  );
}

export default PostCard;
