import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

function CategoriesMenu() {
  const categories = [
    {
      id: 1,
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "WOMEN'S",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem category={item} />
      ))}
    </div>
  );
}

export default CategoriesMenu;
