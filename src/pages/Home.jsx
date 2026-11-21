
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  HeartPulse,
  FlaskConical,
} from "lucide-react";

import { demoProducts, getProducts } from "../api/products";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState(demoProducts);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <>
      <main className="home-page">

        {/* HERO SECTION */}
        <section className="home-hero">
          <div className="home-hero-copy">
            <div className="section-kicker home-kicker">
              <span className="status-dot" />
              PREMIUM NUTRACEUTICALS
            </div>

            <h1>
              Science with
              <br />
              <em>care at its core.</em>
            </h1>

            <p className="home-hero-description">
              Premium nutraceuticals, thoughtfully formulated
              with carefully selected ingredients to support
              your everyday health and beauty.
            </p>

            <div className="home-hero-actions">
              <Link
                to="/products"
                className="button button-dark home-primary-button"
              >
                Explore Our Products
                <ArrowRight size={19} />
              </Link>

              <Link to="/about" className="home-secondary-link">
                Get to know us
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <div className="home-trust-points">
              <div className="home-trust-item">
                <span className="home-trust-icon">
                  <ShieldCheck size={25} />
                </span>

                <div>
                  <strong>Clinically inspired</strong>
                  <small>Thoughtful formulations</small>
                </div>
              </div>

              <div className="home-trust-divider" />

              <div className="home-trust-item">
                <span className="home-trust-icon">
                  <FlaskConical size={25} />
                </span>

                <div>
                  <strong>Quality focused</strong>
                  <small>Care in every detail</small>
                </div>
              </div>

              <div className="home-trust-divider" />

              <div className="home-trust-item">
                <span className="home-trust-icon">
                  <HeartPulse size={25} />
                </span>

                <div>
                  <strong>People first</strong>
                  <small>Wellness with purpose</small>
                </div>
              </div>
            </div>
          </div>

          <div className="home-hero-visual">
            <img
              src="/images/enomedics-hero.jpg"
              alt="Enomedics Hair and Beauty, Skin and Beauty, and Vitamin D products"
              className="home-hero-image"
            />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="intro-section section-pad" id="about">
          <div className="section-kicker">
            01 — WHO WE ARE
          </div>

          <div className="intro-grid">
            <h2>
              Health is personal.
              <br />
              <em>We treat it that way.</em>
            </h2>

            <div className="intro-copy">
              <p>
                At Enomedics, we believe the best healthcare
                experience begins with listening. Our mission is
                to make product information more accessible,
                support informed conversations, and put people
                at the centre of every decision.
              </p>

              <Link className="underlined-link" to="/about">
                Discover our approach
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">
                <FlaskConical />
              </span>
              <span className="value-number">01</span>
              <h3>Thoughtful science</h3>
              <p>
                We value rigor, transparency, and careful
                consideration at every step.
              </p>
            </div>

            <div className="value-item">
              <span className="value-icon">
                <HeartPulse />
              </span>
              <span className="value-number">02</span>
              <h3>People, always</h3>
              <p>
                Healthcare is human. We aim to make every
                interaction feel that way.
              </p>
            </div>

            <div className="value-item">
              <span className="value-icon">
                <ShieldCheck />
              </span>
              <span className="value-number">03</span>
              <h3>Clarity builds trust</h3>
              <p>
                Clear information helps patients and
                professionals ask better questions.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section
          className="products-section section-pad"
          id="products"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                02 — THE COLLECTION
              </div>

              <h2>
                Meet the <em>range.</em>
              </h2>
            </div>

            <Link className="underlined-link" to="/products">
              View all products
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="products-grid">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={product.id}
              />
            ))}
          </div>
        </section>

        {/* PROFESSIONAL SECTION */}
        <section
          className="professional-section"
          id="professional"
        >
          <div className="professional-art">
            <img
              src="/images/healthcare-professional.jpg"
              alt="Healthcare professional presenting a supplement bottle"
              loading="lazy"
            />
          </div>

          <div className="professional-copy">
            <div className="section-kicker">
              03 — PROFESSIONAL PARTNERSHIPS
            </div>

            <h2>
              For the people
              <br />
              who <em>care for us.</em>
            </h2>

            <p>
              We value the expertise of healthcare professionals.
              Request product samples and connect with our team
              for more information about the Enomedics range.
            </p>

            <Link
              to="/doctor-samples"
              className="button button-dark"
            >
              Request doctor samples
              <ArrowRight size={17} />
            </Link>

            <small>
              Requests are subject to review and availability.
            </small>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-strip" id="contact">
          <div>
            <div className="section-kicker">
              LET'S TALK
            </div>

            <h2>
              Good care starts
              <br />
              with a <em>conversation.</em>
            </h2>
          </div>

          <a
            href="mailto:info.enomedicshealthcare@gmail.com"
            className="contact-circle"
          >
            Get in
            <br />
            touch
            <ArrowUpRight />
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
