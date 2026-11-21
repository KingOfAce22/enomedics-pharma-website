
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, ShoppingBag, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const count = useSelector((state) =>
    state.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="nav-wrap">
        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="Enomedics home"
        >
          <img
            src="/images/enomedics-logo.jpg"
            alt="Enomedics Premium Nutraceuticals"
            className="brand-logo-image"
          />
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About us
          </NavLink>

          <NavLink to="/doctor-samples" onClick={closeMenu}>
            Doctor Samples
          </NavLink>

          <NavLink to="/contact-us" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/checkout"
            className="cart-link"
            onClick={closeMenu}
          >
            <ShoppingBag size={19} />
            <span>Cart</span>
            <span className="cart-count">{count}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
