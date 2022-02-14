import React from "react";

function PostItem() {
  return (
    <div>
      <div className="post">
        <div className="post-content">
          <strong>1. js</strong>
          <div> JS is a programming language</div>
          <div className="post-btns">
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
