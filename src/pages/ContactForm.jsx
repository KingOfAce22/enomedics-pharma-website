
import React, { useState } from "react";
import { message } from "antd";
import { ArrowRight, Send } from "lucide-react";
import "../css/contact-form.css";
import { validateEmail, validateMobile } from "../utils/validation";

const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

const initialForm = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SHEETS_URL) {
      message.error("Contact form is not configured.");
      return;
    }

    if (!validateMobile(form.phone)) {
      message.error("Mobile number must be exactly 10 digits.");
      return;
    }

    // Email validation
    if (!validateEmail(form.email)) {
      message.error("Please enter a valid email address (e.g. doctor@gmail.com).");
      return;
    }

    setSubmitting(true);

    const payload = {
      form_type: "contact",
      ...form,
    };

    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify(payload),
      });

      message.success("Your message has been sent!");
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);
      message.error("Unable to send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-shell">
        <div className="contact-form-heading">
          <span className="contact-form-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            We'd love to
            <br />
            hear from <em>you.</em>
          </h2>

          <p>
            Have a question, an enquiry, or just want to connect?
            Leave us a message and our team will get back to you.
          </p>

          <div className="contact-form-heading-bottom">
            <span className="contact-form-heading-icon">
              <Send size={18} />
            </span>
            <span>
              <strong>We're here to help</strong>
              <small>Send us your enquiry anytime.</small>
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-topline">
            <span>CONTACT FORM</span>
            <span>01 — 05</span>
          </div>

          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-first-name">
                First name <span>*</span>
              </label>
              <input
                id="contact-first-name"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder="Your first name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-last-name">
                Last name <span>*</span>
              </label>
              <input
                id="contact-last-name"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Your last name"
                required
              />
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-phone">
                Phone number <span>*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91"
                pattern="[0-9+\-\s()]{7,20}"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                Email address <span>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="contact-field contact-message-field">
            <label htmlFor="contact-message">
              Your message <span>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit-button"
            disabled={submitting}
          >
            <span>{submitting ? "Sending message..." : "Send message"}</span>
            <ArrowRight size={18} />
          </button>

          <p className="contact-form-privacy">
            Your information will only be used to respond to your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
