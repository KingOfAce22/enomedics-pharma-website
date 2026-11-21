// import React, { useEffect, useState } from "react";

// export default function ProductImage({ product, index, variant = "card" }) {
//   const imageSrc =
//     product.image || `/images/products/${product.slug}.webp`;
//   const [failed, setFailed] = useState(false);

//   useEffect(() => {
//     setFailed(false);
//   }, [imageSrc]);

//   return (
//     <div className={`product-image product-image-${variant} ${variant === "detail" ? "detail-art" : ""} ${product.color || ""}`}>
//       {!failed ? (
//         <img
//           src={imageSrc}
//           alt={`${product.name} product packaging`}
//           loading="lazy"
//           onError={() => setFailed(true)}
//         />
//       ) : (
//         <div className="product-image-fallback" role="img" aria-label={`${product.name} image placeholder`}>
//           <span className="fallback-brand">PRODUCT</span>
//           <div className="fallback-pack">
//             <span className="fallback-mark">n.</span>
//             <strong>{product.name}</strong>
//             <small>{product.form}</small>
//           </div>
//           <span className="fallback-index">{String((index ?? 0) + 1).padStart(2, "0")}</span>
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
import { Carousel } from "antd";


export default function ProductImage({ product }) {
  let images = [];

  if (product.imageFolder) {
    const count = product.imageCount || 1;

    images = Array.from({ length: count }, (_, index) => {
      return `/images/products/${encodeURIComponent(
        product.imageFolder
      )}/${index + 1}.png`;
    });
  } else if (Array.isArray(product.image)) {
    images = product.image;
  } else if (product.image) {
    images = [product.image];
  }

  if (!images.length) return null;

  return (
    <div
      className="product-image-carousel"
      onClick={(e) => e.stopPropagation()}
    >
      <Carousel
        arrows={images.length > 1}
        dots={images.length > 1}
        infinite={images.length > 1}
        autoplay={false}
      >
        {images.map((image, index) => (
          <div key={image} className="product-image-slide">
            <img
              src={image}
              alt={`${product.name} image ${index + 1}`}
              className="product-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
