import React from "react";
import "./category-item.styles.scss";

function CategoryItem({ category: { id, title, imageUrl } }) {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}

export default CategoryItem;
