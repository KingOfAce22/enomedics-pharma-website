// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   CircleHelp,
//   Stethoscope,
// } from "lucide-react";
// import { demoProducts } from "../api/products";
// import Footer from "../components/Footer";

// const initialForm = {
//   doctor_name: "",
//   email: "",
//   phone: "",
//   registration_number: "",
//   specialty: "",
//   clinic: "",
//   clinic_address: "",
//   product_requested: "",
//   quantity: "1",
//   message: "",
// };

// export default function DoctorSamples() {
//   const [form, setForm] = useState(initialForm);
//   const [status, setStatus] = useState("");
//   const [sending, setSending] = useState(false);

//   const update = (e) => {
//     setForm((f) => ({
//       ...f,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

//     if (!GOOGLE_SHEETS_URL) {
//       setStatus("error");
//       console.error(
//         "Something went wrong please try again later"
//       );
//       return;
//     }

//     setSending(true);
//     setStatus("");

//     const submissionData = {
//       ...form,
//       submitted_at: new Date().toISOString(),
//     };

//     try {
//       await fetch(GOOGLE_SHEETS_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "text/plain;charset=utf-8",
//         },
//         body: JSON.stringify(submissionData),
//       });

//       setForm({ ...initialForm });
//       setStatus("success");
//     } catch (error) {
//       console.error("Google Sheets submission error:", error);
//       setStatus("error");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <>
//       <main className="inner-page samples-page">
//         <div className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span>/</span> Doctor samples
//         </div>

//         <div className="samples-layout">
//           <aside className="samples-intro">
//             <div className="section-kicker">
//               FOR HEALTHCARE PROFESSIONALS
//             </div>

//             <h1>
//               Care starts
//               <br />
//               with <em>connection.</em>
//             </h1>

//             <p>
//               Request product samples for professional evaluation.
//               Share your details below and our team can follow up
//               with you.
//             </p>
//             <img
//               className="samples-editorial-image"
//               src="/images/healthcare-professional.jpg"
//               alt="Healthcare professional holding a supplement bottle"
//               loading="lazy"
//             />

//             <div className="sample-callout">
//               <Stethoscope size={21} />

//               <div>
//                 <strong>
//                   For verified healthcare professionals
//                 </strong>

//                 <p>
//                   Requests may be reviewed before fulfilment.
//                   Submission does not guarantee sample availability.
//                 </p>
//               </div>
//             </div>

//             <div className="sample-steps">
//               <div>
//                 <span>01</span>
//                 <p>Tell us about your practice</p>
//               </div>

//               <div>
//                 <span>02</span>
//                 <p>Select a product to request</p>
//               </div>

//               <div>
//                 <span>03</span>
//                 <p>Our team follows up by email</p>
//               </div>
//             </div>
//           </aside>

//           <section className="sample-form-wrap">
//             <div className="form-heading">
//               <span>DOCTOR SAMPLE REQUEST</span>
//               <span>Fields marked * are required</span>
//             </div>

//             {status === "success" && (
//               <div className="form-alert success">
//                 <Check size={18} />
//                 Your request has been sent for processing.
//                 Thank you.
//               </div>
//             )}

//             {status === "error" && (
//               <div className="form-alert error">
//                 <CircleHelp size={18} />
//                 We couldn't submit your request. Please try again
//                 or contact info.enomedicshealthcare@gmail.com.
//               </div>
//             )}

//             <form
//               className="sample-form"
//               onSubmit={submit}
//             >
//               <div className="form-section-title">
//                 01 <span>Professional details</span>
//               </div>

//               <div className="form-grid">
//                 <label>
//                   Full name *
//                   <input
//                     name="doctor_name"
//                     value={form.doctor_name}
//                     onChange={update}
//                     required
//                     placeholder="Dr. First Last"
//                   />
//                 </label>

//                 <label>
//                   Professional email *
//                   <input
//                     name="email"
//                     type="email"
//                     value={form.email}
//                     onChange={update}
//                     required
//                     placeholder="you@clinic.com"
//                   />
//                 </label>

//                 <label>
//                   Phone number *
//                   <input
//                     name="phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={update}
//                     required
//                     placeholder="+91 8787676765"
//                   />
//                 </label>

//                 <label>
//                   Medical registration number *
//                   <input
//                     name="registration_number"
//                     value={form.registration_number}
//                     onChange={update}
//                     required
//                     placeholder="Registration / licence ID"
//                   />
//                 </label>

//                 <label>
//                   Specialty *
//                   <select
//                     name="specialty"
//                     value={form.specialty}
//                     onChange={update}
//                     required
//                   >
//                     <option value="">Select specialty</option>

//                     {[
//                       "General practice",
//                       "Cardiology",
//                       "Dermatology",
//                       "Endocrinology",
//                       "Internal medicine",
//                       "Paediatrics",
//                       "Pharmacy",
//                       "Other",
//                     ].map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </label>

//                 <label>
//                   Clinic / hospital *
//                   <input
//                     name="clinic"
//                     value={form.clinic}
//                     onChange={update}
//                     required
//                     placeholder="Practice or institution"
//                   />
//                 </label>

//                 <label className="full-field">
//                   Practice address *
//                   <input
//                     name="clinic_address"
//                     value={form.clinic_address}
//                     onChange={update}
//                     required
//                     placeholder="Street, city, postal code, country"
//                   />
//                 </label>
//               </div>

//               <div className="form-section-title form-section-second">
//                 02 <span>Sample preferences</span>
//               </div>

//               <div className="form-grid">
//                 <label>
//                   Product requested *
//                   <select
//                     name="product_requested"
//                     value={form.product_requested}
//                     onChange={update}
//                     required
//                   >
//                     <option value="">Choose a product</option>

//                     {demoProducts.map((p) => (
//                       <option key={p.id} value={p.name}>
//                         {p.name} — {p.form}
//                       </option>
//                     ))}
//                   </select>
//                 </label>

//                 <label>
//                   Requested quantity *
//                   <select
//                     name="quantity"
//                     value={form.quantity}
//                     onChange={update}
//                     required
//                   >
//                     <option value="1">1 sample pack</option>
//                     <option value="2">2 sample packs</option>
//                     <option value="3">3 sample packs</option>
//                   </select>
//                 </label>

//                 <label className="full-field">
//                   Additional information
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={update}
//                     rows="3"
//                     placeholder="Optional: tell us more about your request"
//                   />
//                 </label>
//               </div>

//               <label className="consent">
//                 <input type="checkbox" required />
//                 I confirm that I am a healthcare professional and
//                 consent to being contacted about this request. *
//               </label>

//               <button
//                 className="button button-dark submit-button"
//                 type="submit"
//                 disabled={sending}
//               >
//                 {sending
//                   ? "Submitting request..."
//                   : "Submit sample request"}

//                 <ArrowRight size={17} />
//               </button>
//             </form>
//           </section>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CircleHelp, Stethoscope } from "lucide-react";
import { demoProducts } from "../api/products";
import Footer from "../components/Footer";
import { validateEmail, validateMobile } from "../utils/validation";

const initialForm = {
  doctor_name: "",
  email: "",
  phone: "",
  registration_number: "",
  specialty: "",
  clinic: "",
  clinic_address: "",
  product_requested: [],
  quantity: "1",
  message: "",
};

export default function DoctorSamples() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const update = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  // Toggle multiple products without needing to modify product data
  const toggleProduct = (productName) => {
    setForm((f) => ({
      ...f,
      product_requested: f.product_requested.includes(productName)
        ? f.product_requested.filter((product) => product !== productName)
        : [...f.product_requested, productName],
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

    if (!GOOGLE_SHEETS_URL) {
      setStatus("error");
      console.error("Google Sheets URL is missing from .env.local");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("invalid-email");
      return;
    }

    if (!validateMobile(form.phone)) {
      setStatus("invalid-mobile");
      return;
    }

    // Require at least one product selection
    if (form.product_requested.length === 0) {
      setStatus("no-product");
      return;
    }

    setSending(true);
    setStatus("");

    const submissionData = {
      ...form,
      form_type: "doctor_sample",

      // Convert selected products array into a single string
      product_requested: form.product_requested.join(", "),

      submitted_at: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(submissionData),
      });

      setForm({ ...initialForm });
      setStatus("success");
    } catch (error) {
      console.error("Google Sheets submission error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <main className="inner-page samples-page">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span> Doctor samples
        </div>

        <div className="samples-layout">
          <aside className="samples-intro">
            <div className="section-kicker">FOR HEALTHCARE PROFESSIONALS</div>

            <h1>
              Care starts
              <br />
              with <em>connection.</em>
            </h1>

            <p>
              Request product samples for professional evaluation. Share your
              details below and our team can follow up with you.
            </p>

            <img
              className="samples-editorial-image"
              src="/images/healthcare-professional.jpg"
              alt="Healthcare professional holding a supplement bottle"
              loading="lazy"
            />

            <div className="sample-callout">
              <Stethoscope size={21} />

              <div>
                <strong>For verified healthcare professionals</strong>

                <p>
                  Requests may be reviewed before fulfilment. Submission does
                  not guarantee sample availability.
                </p>
              </div>
            </div>

            <div className="sample-steps">
              <div>
                <span>01</span>
                <p>Tell us about your practice</p>
              </div>

              <div>
                <span>02</span>
                <p>Select products to request</p>
              </div>

              <div>
                <span>03</span>
                <p>Our team follows up by email</p>
              </div>
            </div>
          </aside>

          <section className="sample-form-wrap">
            <div className="form-heading">
              <span>DOCTOR SAMPLE REQUEST</span>
              <span>Fields marked * are required</span>
            </div>

            {status === "success" && (
              <div className="form-alert success">
                <Check size={18} />
                Your request has been sent for processing. Thank you.
              </div>
            )}

            {status === "error" && (
              <div className="form-alert error">
                <CircleHelp size={18} />
                We couldn't submit your request. Please try again or contact
                info.enomedicshealthcare@gmail.com.
              </div>
            )}

            {status === "no-product" && (
              <div className="form-alert error">
                <CircleHelp size={18} />
                Please select at least one product before submitting.
              </div>
            )}

            <form className="sample-form" onSubmit={submit}>
              <div className="form-section-title">
                01 <span>Professional details</span>
              </div>

              <div className="form-grid">
                <label>
                  Full name *
                  <input
                    name="doctor_name"
                    value={form.doctor_name}
                    onChange={update}
                    required
                    placeholder="Dr. First Last"
                  />
                </label>

                <label>
                  Professional email *
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    required
                    placeholder="you@clinic.com"
                  />
                  {status === "invalid-email" && (
                    <p
                      style={{
                        color: "#d93025",
                        fontSize: "13px",
                        marginTop: "6px",
                      }}
                    >
                      Please enter a valid email address (e.g.
                      doctor@gmail.com).
                    </p>
                  )}
                </label>

                <label>
                  Phone number *
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update}
                    required
                    placeholder="+91 8787676765"
                  />
                  {status === "invalid-mobile" && (
                    <p
                      style={{
                        color: "#d93025",
                        fontSize: "13px",
                        marginTop: "6px",
                      }}
                    >
                      Mobile number must contain exactly 10 digits.
                    </p>
                  )}
                </label>

                <label>
                  Medical registration number *
                  <input
                    name="registration_number"
                    value={form.registration_number}
                    onChange={update}
                    required
                    placeholder="Registration / licence ID"
                  />
                </label>

                <label>
                  Specialty *
                  <select
                    name="specialty"
                    value={form.specialty}
                    onChange={update}
                    required
                  >
                    <option value="">Select specialty</option>

                    {[
                      "General practice",
                      "Cardiology",
                      "Dermatology",
                      "Endocrinology",
                      "Internal medicine",
                      "Paediatrics",
                      "Pharmacy",
                      "Other",
                    ].map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Clinic / hospital *
                  <input
                    name="clinic"
                    value={form.clinic}
                    onChange={update}
                    required
                    placeholder="Practice or institution"
                  />
                </label>

                <label className="full-field">
                  Practice address *
                  <input
                    name="clinic_address"
                    value={form.clinic_address}
                    onChange={update}
                    required
                    placeholder="Street, city, postal code, country"
                  />
                </label>
              </div>

              <div className="form-section-title form-section-second">
                02 <span>Sample preferences</span>
              </div>

              <div className="form-grid">
                {/* MULTIPLE PRODUCT REQUEST */}
                <div className="full-field" style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Product requested *</span>

                    <span
                      style={{
                        fontSize: "12px",
                        color: "#66836b",
                      }}
                    >
                      {form.product_requested.length} selected
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      opacity: 0.7,
                      marginBottom: "14px",
                    }}
                  >
                    You can select multiple products.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                      gap: "10px",
                    }}
                  >
                    {demoProducts.map((p) => {
                      const selected = form.product_requested.includes(p.name);

                      return (
                        <label
                          key={p.id || p.slug || p.name}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "13px",
                            border: selected
                              ? "1px solid #66836b"
                              : "1px solid #e1e5dc",
                            background: selected ? "#eef3ec" : "#ffffff",
                            cursor: "pointer",
                            borderRadius: "4px",
                            minWidth: 0,
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleProduct(p.name)}
                            style={{
                              accentColor: "#365b43",
                              width: "16px",
                              height: "16px",
                              flexShrink: 0,
                            }}
                          />

                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0,
                            }}
                          >
                            <strong
                              style={{
                                fontSize: "13px",
                                lineHeight: 1.5,
                              }}
                            >
                              {p.name}
                            </strong>

                            <small style={{ opacity: 0.65 }}>
                              {p.form || p.category}
                            </small>
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {/* SELECTED PRODUCTS DISPLAY */}
                  {form.product_requested.length > 0 && (
                    <div
                      style={{
                        marginTop: "15px",
                        padding: "12px 15px",
                        background: "#f3f6f0",
                        borderLeft: "3px solid #66836b",
                      }}
                    >
                      <strong style={{ fontSize: "12px" }}>
                        Selected products
                      </strong>

                      <p
                        style={{
                          margin: "6px 0 0",
                          fontSize: "13px",
                          lineHeight: 1.7,
                        }}
                      >
                        {form.product_requested.join(", ")}
                      </p>
                    </div>
                  )}
                </div>

                <label>
                  Requested quantity *
                  <select
                    name="quantity"
                    value={form.quantity}
                    onChange={update}
                    required
                  >
                    <option value="1">1 sample pack</option>
                    <option value="2">2 sample packs</option>
                    <option value="3">3 sample packs</option>
                  </select>
                </label>

                <label className="full-field">
                  Additional information
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="3"
                    placeholder="Optional: tell us more about your request"
                  />
                </label>
              </div>

              <label className="consent">
                <input type="checkbox" required />I confirm that I am a
                healthcare professional and consent to being contacted about
                this request. *
              </label>

              <button
                className="button button-dark submit-button"
                type="submit"
                disabled={sending}
              >
                {sending ? "Submitting request..." : "Submit sample request"}

                <ArrowRight size={17} />
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
