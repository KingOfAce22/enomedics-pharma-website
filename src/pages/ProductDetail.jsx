// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { ArrowRight, Check } from "lucide-react";
// import { addToCart } from "../store";
// import { demoProducts, getProducts } from "../api/products";
// import { money } from "../utils/money";
// import Footer from "../components/Footer";
// import ProductImage from "../components/ProductImage";

// export default function ProductDetail() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [products, setProducts] = useState(demoProducts);
//   const [quantity, setQty] = useState(1);
//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);
//   const product = products.find((p) => p.slug === slug);
//   if (!product)
//     return (
//       <main className="inner-page">
//         <div className="empty-state">
//           <h2>Product not found</h2>
//           <Link className="button button-dark" to="/products">
//             Browse products
//           </Link>
//         </div>
//       </main>
//     );
//   const buy = () => {
//     dispatch(addToCart({ ...product, quantity }));
//     navigate("/checkout");
//   };
//   return (
//     <>
//       <main className="inner-page product-detail-page">
//         <div className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span>/</span>
//           <Link to="/products">Products</Link>
//           <span>/</span>
//           {product.name}
//         </div>
//         <div className="detail-grid">
//           <ProductImage product={product} variant="detail" />
//           <div className="detail-copy">
//             <div className="eyebrow">{product.category}</div>
//             <h1>
//               {product.name}
//               <em>{product.tagline}</em>
//             </h1>
//             <p className="detail-description">{product.description}</p>
//             <div className="detail-price">
//               {money(product.price)} <span>/pack</span>
//             </div>
//             <div className="detail-meta">
//               <div>
//                 <span>FORM</span>
//                 <strong>{product.form}</strong>
//               </div>
//               <div>
//                 <span>PACK SIZE</span>
//                 <strong>{product.pack}</strong>
//               </div>
//               <div>
//                 <span>STRENGTH</span>
//                 <strong>{product.strength}</strong>
//               </div>
//             </div>
//             <div className="detail-quantity">
//               <label htmlFor="quantity">Quantity</label>
//               <div className="quantity-control">
//                 <button
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   aria-label="Decrease quantity"
//                 >
//                   −
//                 </button>
//                 <span>{quantity}</span>
//                 <button
//                   onClick={() => setQty((q) => Math.min(99, q + 1))}
//                   aria-label="Increase quantity"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button className="button button-dark detail-buy" onClick={buy}>
//               Continue to checkout <ArrowRight size={17} />
//             </button>
//             <div className="detail-points">
//               {product.highlights.map((h) => (
//                 <div key={h}>
//                   <Check size={16} />
//                   {h}
//                 </div>
//               ))}
//             </div>
//             <p className="medical-note">
//               This page contains placeholder information for a website
//               demonstration and is not medical advice. Consult a qualified
//               healthcare professional for medical guidance.
//             </p>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Leaf,
  Minus,
  Plus,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

import { addToCart } from "../store";
import { demoProducts, getProducts } from "../api/products";
import { money } from "../utils/money";
import ProductImage from "../components/ProductImage";
import Footer from "../components/Footer";

import "../css/product-detail.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [products, setProducts] = useState(demoProducts);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getProducts()
      .then((data) => {
        if (active && Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Unable to load products:", error);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const product = products.find((item) => item.slug === slug);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(99, current + 1));
  };

  const handleBuy = () => {
    if (!product) return;

    dispatch(addToCart({ ...product, quantity }));
    navigate("/checkout");
  };

  if (loading && !product) {
    return (
      <>
        <main className="pd-loading">
          <span className="pd-loader" />
          <p>Preparing your product details...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <main className="pd-not-found">
          <span className="pd-not-found-label">PRODUCT NOT FOUND</span>
          <h1>Looks like this product has moved.</h1>
          <p>Explore our collection to discover something suitable for you.</p>
          <Link to="/products" className="pd-primary-button">
            Explore products <ArrowRight size={18} />
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const highlights = product.highlights || [];

  return (
    <>
      <main className="pd-page">
        {/* Breadcrumb */}
        <div className="pd-topbar">
          <div className="pd-container">
            <div className="pd-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/products">Our products</Link>
              <span>/</span>
              <span className="pd-current">{product.name}</span>
            </div>

            <Link to="/products" className="pd-back-link">
              <ArrowUpRight size={15} />
              View collection
            </Link>
          </div>
        </div>

        {/* Main product section */}
        <section className="pd-main-section">
          <div className="pd-container">
            <div className="pd-main-grid">

              {/* Product visual */}
              <div className="pd-visual-column">
                <div className="pd-image-stage">
                  <div className="pd-image-glow" />

                  <div className="pd-image-frame">
                    <ProductImage
                      product={product}
                      variant="detail"
                    />
                  </div>

                  <div className="pd-image-caption">
                    <span className="pd-caption-icon">
                      <Leaf size={17} />
                    </span>
                    <span>
                      <strong>Thoughtfully formulated</strong>
                      <small>Quality-focused wellness</small>
                    </span>
                  </div>

                  <span className="pd-visual-index">01 / PRODUCT</span>
                </div>

                <div className="pd-visual-note">
                  <span>ENOMEDICS</span>
                  <p>
                    Thoughtful wellness. A more considered approach
                    to everyday health.
                  </p>
                </div>
              </div>

              {/* Product information */}
              <div className="pd-info-column">
                <div className="pd-category-line">
                  <span className="pd-category-dot" />
                  {product.category}
                </div>

                <div className="pd-heading">
                  <span className="pd-overline">DISCOVER THE DIFFERENCE</span>
                  <h1>{product.name}</h1>
                  {product.tagline && (
                    <p className="pd-tagline">{product.tagline}</p>
                  )}
                </div>

                <div className="pd-description">
                  <p>{product.description}</p>
                </div>

                <div className="pd-price-area">
                  <div>
                    <span className="pd-price-label">YOUR PRODUCT PRICE</span>
                    <div className="pd-price">
                      {money(product.price)}
                      <span>/ pack</span>
                    </div>
                  </div>
                  <span className="pd-price-note">
                    Product details below
                  </span>
                </div>

                {/* Product specifications */}
                <div className="pd-specifications">
                  <div className="pd-spec-heading">
                    <span>PRODUCT INFORMATION</span>
                    <span>01 — 03</span>
                  </div>

                  <div className="pd-spec-grid">
                    <div className="pd-spec-item">
                      <span>FORM</span>
                      <strong>{product.form || "—"}</strong>
                    </div>

                    <div className="pd-spec-item">
                      <span>PACK SIZE</span>
                      <strong>{product.pack || "—"}</strong>
                    </div>

                    <div className="pd-spec-item">
                      <span>STRENGTH</span>
                      <strong>{product.strength || "—"}</strong>
                    </div>
                  </div>
                </div>

                {/* Quantity and purchase */}
                <div className="pd-purchase">
                  <div className="pd-purchase-top">
                    <label htmlFor="pd-quantity">Select quantity</label>

                    <div className="pd-quantity-control">
                      <button
                        type="button"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>

                      <span id="pd-quantity" aria-live="polite">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={increaseQuantity}
                        disabled={quantity >= 99}
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="pd-primary-button pd-buy-button"
                    onClick={handleBuy}
                  >
                    Continue to checkout
                    <ArrowRight size={19} />
                  </button>

                  <p className="pd-purchase-caption">
                    Review your order and quantity at checkout.
                  </p>
                </div>

                {/* Trust details */}
                <div className="pd-trust-row">
                  <div>
                    <ShieldCheck size={19} />
                    <span>Quality-focused</span>
                  </div>
                  <div>
                    <PackageCheck size={19} />
                    <span>Product information</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        {highlights.length > 0 && (
          <section className="pd-highlights-section">
            <div className="pd-container">
              <div className="pd-highlights-heading">
                <div>
                  <span className="pd-overline">THE PRODUCT DETAILS</span>
                  <h2>What makes it noteworthy?</h2>
                </div>
                <p>
                  Explore the key product highlights and
                  information provided for this formulation.
                </p>
              </div>

              <div className="pd-highlights-grid">
                {highlights.map((highlight, index) => (
                  <div className="pd-highlight-card" key={highlight}>
                    <span className="pd-highlight-number">
                      0{index + 1}
                    </span>
                    <span className="pd-highlight-check">
                      <Check size={18} />
                    </span>
                    <h3>{highlight}</h3>
                    <span className="pd-highlight-line" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Medical disclaimer */}
        <section className="pd-disclaimer-section">
          <div className="pd-container">
            <div className="pd-disclaimer">
              <ShieldCheck size={23} />
              <div>
                <strong>A note on product information</strong>
                <p>
                  This website contains demonstration product
                  information and is not medical advice. Product
                  descriptions should not replace professional
                  medical guidance. Consult a qualified healthcare
                  professional for advice about your individual needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pd-bottom-cta">
          <div className="pd-container">
            <div className="pd-bottom-cta-inner">
              <div>
                <span>EXPLORE ENOMEDICS</span>
                <h2>Discover more from our collection.</h2>
              </div>

              <Link to="/products" className="pd-outline-button">
                Explore all products
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
