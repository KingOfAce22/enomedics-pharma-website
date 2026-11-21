// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CircleHelp } from "lucide-react";
// import { demoProducts, getProducts } from "../api/products";
// import Footer from "../components/Footer";
// import ProductCard from "../components/ProductCard";

// export default function ProductList() {
//   const [products, setProducts] = useState(demoProducts);
//   const [filter, setFilter] = useState("All products");
//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);
//   const categories = [
//     "All products",
//     ...new Set(products.map((p) => p.category)),
//   ];
//   const shown =
//     filter === "All products"
//       ? products
//       : products.filter((p) => p.category === filter);
//   return (
//     <>
//       <main className="inner-page">
//         <div className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span>/</span> Products
//         </div>
//         <div className="page-heading">
//           <div className="section-kicker">THE ENOMEDICS COLLECTION</div>
//           <h1>
//             Made with care.
//             <br />
//             <em>Designed for clarity.</em>
//           </h1>
//           <p>
//             Explore our illustrative product range and discover clear,
//             accessible product information.
//           </p>
//         </div>
//         <div className="filter-row">
//           <span>{shown.length} products</span>
//           <div className="filter-pills">
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 className={filter === c ? "filter-pill active" : "filter-pill"}
//                 onClick={() => setFilter(c)}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="products-grid listing-grid">
//           {shown.map((p, i) => (
//             <ProductCard product={p} index={i} key={p.id} />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { demoProducts, getProducts } from "../api/products";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState(demoProducts);
  const [filter, setFilter] = useState("All products");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getProducts()
      .then((data) => {
        if (active) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Unable to load products:", error);
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const categories = [
    "All products",
    ...new Set(products.map((product) => product.category)),
  ];

  const shown =
    filter === "All products"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <>
      <main className="inner-page products-page">

        {/* PRODUCT COLLECTION */}
        <section
          className="product-collection-section"
          id="product-collection"
        >
          <div className="collection-heading">
            <div>
              <div className="section-kicker">
                DISCOVER OUR RANGE
              </div>

              <h2>
                Find your <em>product.</em>
              </h2>

              <p>
                Browse our collection by category.
              </p>
            </div>

            <div className="collection-count">
              <strong>{shown.length}</strong>
              <span>
                {shown.length === 1 ? "PRODUCT" : "PRODUCTS"}
              </span>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="products-filter-wrapper">
            <div className="filter-label">
              EXPLORE BY CATEGORY
            </div>

            <div className="filter-pills">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    filter === category
                      ? "filter-pill active"
                      : "filter-pill"
                  }
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS GRID */}
          {loading ? (
            <div className="products-loading">
              Loading products...
            </div>
          ) : shown.length > 0 ? (
            <div className="products-grid listing-grid">
              {shown.map((product, index) => (
                <ProductCard
                  product={product}
                  index={index}
                  key={product.id}
                />
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <h3>No products found.</h3>
              <p>Try selecting another category.</p>

              <button
                type="button"
                className="button button-dark"
                onClick={() => setFilter("All products")}
              >
                View all products
                <ArrowRight size={17} />
              </button>
            </div>
          )}

          <div className="products-bottom-note">
            <span>
              ENOMEDICS · PREMIUM NUTRACEUTICALS
            </span>

            <Link to="/doctor-samples">
              Healthcare professional?
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
