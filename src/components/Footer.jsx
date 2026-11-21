import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand section */}
        <div className="footer-brand">
          <Link
            className="footer-logo-link"
            to="/"
            aria-label="Enomedics home"
          >
            <img
              src="/images/enomedics-logo.jpg"
              alt="Enomedics Premium Nutraceuticals"
              className="footer-logo"
            />
          </Link>

          <p>
            Thoughtful science. Clear information.
            Care that starts with trust.
          </p>
        </div>

        {/* Explore links */}
        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/products">
            Products
          </Link>

          <Link to="/doctor-samples">
            Doctor samples
          </Link>

          <Link to="/about">
            About us
          </Link>
        </div>

        {/* Contact links */}
        <div className="footer-column">
          <h4>Get in touch</h4>

          <a href="mailto:info.enomedicshealthcare@gmail.com">
            info.enomedicshealthcare@gmail.com
            <ArrowUpRight size={14} />
          </a>

          <a href="/#contact">
            Contact us
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Enomedics. All rights reserved.
        </span>

        <span>
          Product details are illustrative, not medical advice.
        </span>
      </div>
    </footer>
  );
}