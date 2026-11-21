import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";
import { removeFromCart, setQuantity } from "../store";
import { money } from "../utils/money";
import Footer from "../components/Footer";
import ProductImage from "../components/ProductImage";
import { Button, message } from "antd";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const [messageApi, contextHolder] = message.useMessage();

const handleNotify = () => {
  messageApi.success(
    "We'll update you when this product is back in stock!"
  );
};
  return (
    <>
      <main className="inner-page checkout-page">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span> Checkout
        </div>
        <div className="page-heading checkout-heading">
          <div className="section-kicker">YOUR ORDER</div>
          <h1>
            Review & <em>checkout.</em>
          </h1>
          <p>Review your selected demo products below.</p>
        </div>
        {items.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <ShoppingBag size={26} />
            </div>
            <h2>Your bag is taking a breather.</h2>
            <p>You haven't added any products yet.</p>
            <Link className="button button-dark" to="/products">
              Explore products <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="checkout-grid">
            <div className="checkout-items">
              <div className="checkout-list-head">
                <span>PRODUCT</span>
                <span>QUANTITY</span>
                <span>TOTAL</span>
              </div>
              {items.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <ProductImage product={item} variant="checkout" />
                  <div className="checkout-item-name">
                    <Link to={`/products/${item.slug}`}>{item.name}</Link>
                    <small>
                      {item.form} · {item.pack}
                    </small>
                    <button
                      className="remove-link"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="quantity-control checkout-qty">
                    <button
                      onClick={() =>
                        dispatch(
                          setQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          }),
                        )
                      }
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          setQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <strong className="line-total">
                    {money(item.price * item.quantity)}
                  </strong>
                </div>
              ))}
              <Link to="/products" className="underlined-link continue-link">
                ← Continue browsing
              </Link>
            </div>
            <aside className="order-summary">
              <h2>Order summary</h2>
              <div className="summary-line">
                <span>Subtotal</span>
                <strong>{money(subtotal)}</strong>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>Calculated later</span>
              </div>
              <div className="summary-line total-line">
                <span>Estimated total</span>
                <strong>{money(subtotal)}</strong>
              </div>
              <div className="stock-alert">
                <PackageCheck size={20} />
                <div>
                  <strong>Currently out of stock</strong>
                </div>
              </div>
              <button className="button payment-button" disabled>
                Proceed to payment <ArrowRight size={17} />
              </button>
              <p className="payment-caption">
                Payment is unavailable while products are out of stock.
              </p>
              {contextHolder}
              <Button
                className="notify-link"
                type="button"
                onClick={handleNotify}
              >
                Notify me when available
                <ArrowUpRight size={15} />
              </Button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
