import React from "react";
import ProductTitleHeader from "../components/ProductTitleHeader";
import ProductPreviewCard from "../components/ProductPreviewCard";
import productData from "../data/products.json";
import ProductCategory from "../components/ProductCateogry";
import BestAudio from "../components/BestAudio";

function Headphones() {
  const headphones = productData.filter(
    (product) => product.category === "headphones"
  );

  return (
    <div>
      <ProductTitleHeader title="Headphones" />
      <div className="flex flex-col gap-[120px] lg:mb-[120px]">
        {headphones
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((headphone, index) => (
            <ProductPreviewCard
              key={headphone.id}
              image={headphone.categoryImage}
              name={headphone.name}
              description={headphone.description}
              newProduct={headphone.new}
              id={headphone.id}
              slug={headphone.slug}
              isReversed={index % 2 === 1}
            />
          ))}
      </div>
      <ProductCategory />
      <BestAudio></BestAudio>
    </div>
  );
}

export default Headphones;
