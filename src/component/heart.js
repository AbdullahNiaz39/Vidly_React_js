import React, { useState } from "react";

const Heart = () => {
  //
  const [likes, setLike] = useState("fa fa-heart-o");

  // Change icon
  const handleLike = () => {
    if (likes === "fa fa-heart-o") setLike("fa fa-heart");
    else setLike("fa fa-heart-o");
  };

  return (
    <div>
      <i
        className={likes}
        onClick={handleLike}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default Heart;
