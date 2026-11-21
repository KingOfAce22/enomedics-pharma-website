// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import ProductImage from "./ProductImage";
// import { money } from "../utils/money";

// export default function ProductCard({ product, index }) {
//   return (
//     <Link to={`/products/${product.slug}`} className="product-card">
//       <div className="product-card-visual">
//         <ProductImage product={product} index={index} />
//         <span className="art-arrow"><ArrowUpRight size={20} /></span>
//       </div>
//       <div className="product-card-info">
//         <div>
//           <h3>{product.name}</h3>
//           <span className="eyebrow">Category -  {product.category}</span>
//         </div>
//         <span className="product-price">{money(product.price)}</span>
//       </div>
//       <p className="card-tagline">{product.tagline}</p>
//     </Link>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "./ProductImage";
import { money } from "../utils/money";

export default function ProductCard({ product, index }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="product-card"
    >
      <div className="product-card-visual">
        <ProductImage product={product} index={index} />

        <span className="art-arrow">
          <ArrowUpRight size={20} />
        </span>
      </div>

      <div className="product-card-info">
        <div className="product-card-heading">
          <h3>{product.name}</h3>
          <span className="eyebrow">
            Category - {product.category}
          </span>
        </div>

        <span className="product-price">
          {money(product.price)}
        </span>
      </div>

      <p className="card-tagline">
        {product.tagline}
      </p>
    </Link>
  );
}
