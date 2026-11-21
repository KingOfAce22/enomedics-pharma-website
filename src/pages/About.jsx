// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   HeartPulse,
//   Microscope,
//   ShieldCheck,
//   Users,
//   Target,
//   Eye,
//   Lightbulb,
//   Handshake,
//   Stethoscope,
// } from "lucide-react";
// import Footer from "../components/Footer";

// const values = [
//   {
//     icon: ShieldCheck,
//     title: "Transparency",
//     description:
//       "We believe people should have access to clear, understandable product information that helps them make informed decisions.",
//   },
//   {
//     icon: Microscope,
//     title: "Thoughtful science",
//     description:
//       "We value a science-conscious approach to healthcare, with attention to product information, ingredients, and responsible communication.",
//   },
//   {
//     icon: HeartPulse,
//     title: "People first",
//     description:
//       "Healthcare is ultimately about people. We aim to make information and resources easier to understand and access.",
//   },
//   {
//     icon: Handshake,
//     title: "Collaboration",
//     description:
//       "We value meaningful relationships with healthcare professionals and believe better communication supports better experiences.",
//   },
// ];

// const focusAreas = [
//   {
//     number: "01",
//     title: "Clear product information",
//     description:
//       "Presenting product details, ingredients, formats, and relevant information in a simple and accessible way.",
//   },
//   {
//     number: "02",
//     title: "Professional engagement",
//     description:
//       "Creating a dedicated space for healthcare professionals to explore product information and professional resources.",
//   },
//   {
//     number: "03",
//     title: "Responsible communication",
//     description:
//       "Keeping our communication informative, thoughtful, and focused on helping visitors understand our offerings.",
//   },
// ];

// export default function About() {
//   return (
//     <>
//       <main className="inner-page about-page">
//         <div className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span>/</span> About us
//         </div>

//         {/* Hero */}
//         <section className="page-heading about-hero">
//           <div className="section-kicker">ABOUT ENOMEDICS</div>
//           <h1>
//             Thoughtful by design.
//             <br />
//             <em>Human by nature.</em>
//           </h1>
//           <p>
//             We believe healthcare communication should be clear, responsible,
//             and centred around people. Enomedics brings product information,
//             professional resources, and meaningful communication together in
//             one place.
//           </p>
//         </section>

//         {/* Brand statement */}
//         <section className="about-statement">
//           <span className="big-asterisk">✳</span>
//           <div>
//             <div className="section-kicker">WHO WE ARE</div>
//             <h2>
//               Making healthcare information more approachable.
//             </h2>
//             <p>
//               Enomedics is a modern pharmaceutical website concept built around
//               the belief that good healthcare communication starts with
//               clarity. We aim to present product information and professional
//               resources through an experience that is simple to navigate,
//               informative, and easy to understand.
//             </p>
//             <p>
//               From exploring product details to finding relevant professional
//               information, every part of the experience is designed to make
//               information more accessible.
//             </p>
//           </div>
//         </section>

//         {/* Mission and Vision */}
//         <section className="about-mission-grid">
//           <div className="about-info-card">
//             <div className="about-icon">
//               <Target size={24} />
//             </div>
//             <div className="section-kicker">OUR MISSION</div>
//             <h2>Clarity in every interaction.</h2>
//             <p>
//               Our mission is to make healthcare and product information easier
//               to explore through thoughtful presentation, transparent
//               communication, and a people-first approach.
//             </p>
//           </div>

//           <div className="about-info-card">
//             <div className="about-icon">
//               <Eye size={24} />
//             </div>
//             <div className="section-kicker">OUR VISION</div>
//             <h2>A more informed healthcare experience.</h2>
//             <p>
//               We envision a healthcare information experience where visitors
//               can find relevant details with confidence and healthcare
//               professionals can access useful resources with ease.
//             </p>
//           </div>
//         </section>

//         {/* Values */}
//         <section className="about-values">
//           <div className="section-kicker">WHAT GUIDES US</div>
//           <h2>Our values shape everything we do.</h2>
//           <p className="about-section-intro">
//             The principles behind how we present information, communicate, and
//             build relationships.
//           </p>

//           <div className="about-values-grid">
//             {values.map((value) => {
//               const Icon = value.icon;

//               return (
//                 <article className="about-value-card" key={value.title}>
//                   <div className="about-icon">
//                     <Icon size={23} />
//                   </div>
//                   <h3>{value.title}</h3>
//                   <p>{value.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </section>

//         {/* What we focus on */}
//         <section className="about-focus">
//           <div className="about-focus-heading">
//             <div className="section-kicker">OUR APPROACH</div>
//             <h2>Designed around what matters.</h2>
//             <p>
//               We focus on creating a useful and straightforward experience for
//               everyone exploring Enomedics.
//             </p>
//           </div>

//           <div className="about-focus-list">
//             {focusAreas.map((item) => (
//               <article className="about-focus-item" key={item.number}>
//                 <span>{item.number}</span>
//                 <div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                 </div>
//                 <ArrowUpRight size={20} />
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Healthcare professionals */}
//         <section className="about-professionals">
//           <div className="about-professionals-icon">
//             <Stethoscope size={30} />
//           </div>
//           <div>
//             <div className="section-kicker">
//               FOR HEALTHCARE PROFESSIONALS
//             </div>
//             <h2>Better conversations begin with better information.</h2>
//             <p>
//               We recognise the important role healthcare professionals play
//               in helping people make informed healthcare decisions. Enomedics
//               provides a dedicated space to explore product-related
//               information and professional resources.
//             </p>
//             <Link to="/doctor-samples" className="button button-dark">
//               Explore professional resources
//               <ArrowUpRight size={17} />
//             </Link>
//           </div>
//         </section>

//         {/* Closing CTA */}
//         <section className="about-contact">
//           <div>
//             <div className="section-kicker">LET'S CONNECT</div>
//             <h2>Have a question? Let's talk.</h2>
//             <p>
//               Whether you are looking for product information or have a
//               professional enquiry, we welcome you to get in touch.
//             </p>
//           </div>
//           <a
//             href="mailto:info.enomedicshealthcare@gmail.com"
//             className="button button-dark"
//           >
//             Contact us <ArrowUpRight size={17} />
//           </a>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Target,
  Eye,
  Handshake,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import Footer from "../components/Footer";

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Transparency",
    description:
      "We believe people should have access to clear, understandable product information that helps them make informed decisions.",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Thoughtful science",
    description:
      "We value a science-conscious approach to healthcare, with attention to product information, ingredients, and responsible communication.",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "People first",
    description:
      "Healthcare is ultimately about people. We aim to make information and resources easier to understand and access.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Collaboration",
    description:
      "We value meaningful relationships with healthcare professionals and believe better communication supports better experiences.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Clear product information",
    description:
      "Presenting product details, ingredients, formats, and relevant information in a simple and accessible way.",
  },
  {
    number: "02",
    title: "Professional engagement",
    description:
      "Creating a dedicated space for healthcare professionals to explore product information and professional resources.",
  },
  {
    number: "03",
    title: "Responsible communication",
    description:
      "Keeping our communication informative, thoughtful, and focused on helping visitors understand our offerings.",
  },
];

export default function About() {
  return (
    <>
      <main className="inner-page about-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          About us
        </div>

        {/* About Hero */}
        <section className="about-hero">
          <div className="about-hero-copy">
            <div className="section-kicker">
              <span className="status-dot" />
              ABOUT ENOMEDICS
            </div>

            <h1>
              Thoughtful by design.
              <br />
              <em>Human by nature.</em>
            </h1>

            <p>
              We believe healthcare communication should be clear,
              responsible, and centred around people. Enomedics brings
              product information, professional resources, and meaningful
              communication together in one place.
            </p>

            <div className="about-hero-actions">
              <Link to="/products" className="button button-dark">
                Explore our products
                <ArrowRight size={17} />
              </Link>

              <a href="#our-approach" className="text-link">
                Discover our approach
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-orbit about-orbit-one" />
            <div className="about-visual-orbit about-orbit-two" />

            <div className="about-visual-center">
              <div className="about-visual-icon">
                <Microscope size={36} />
              </div>

              <span>THE ENOMEDICS PHILOSOPHY</span>

              <h2>
                Care in
                <br />
                every detail.
              </h2>

              <p>
                Thoughtful products.
                <br />
                Clear information.
                <br />
                People at the centre.
              </p>
            </div>

            <div className="about-visual-caption">
              <span>01 / OUR PROMISE</span>
              <strong>Better care starts with clarity.</strong>
            </div>
          </div>
        </section>

        <figure className="about-editorial-image">
          <img
            src="/images/botanical-wellness.jpg"
            alt="Botanical ingredients and citrus arranged for a wellness product still life"
            loading="lazy"
          />
        </figure>

        {/* Brand Statement */}
        <section className="about-statement" id="our-approach">
          <span className="big-asterisk">✳</span>

          <div className="about-statement-content">
            <div className="section-kicker">01 — WHO WE ARE</div>

            <h2>
              Making healthcare information more approachable.
            </h2>

            <p>
              Enomedics is a modern pharmaceutical website concept built
              around the belief that good healthcare communication starts
              with clarity. We aim to present product information and
              professional resources through an experience that is simple
              to navigate, informative, and easy to understand.
            </p>

            <p>
              From exploring product details to finding relevant
              professional information, every part of the experience is
              designed to make information more accessible.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="about-mission-grid">
          <article className="about-info-card">
            <div className="about-icon">
              <Target size={24} />
            </div>

            <div className="section-kicker">02 — OUR MISSION</div>

            <h2>Clarity in every interaction.</h2>

            <p>
              Our mission is to make healthcare and product information
              easier to explore through thoughtful presentation,
              transparent communication, and a people-first approach.
            </p>

            <span className="about-card-number">01</span>
          </article>

          <article className="about-info-card">
            <div className="about-icon">
              <Eye size={24} />
            </div>

            <div className="section-kicker">03 — OUR VISION</div>

            <h2>A more informed healthcare experience.</h2>

            <p>
              We envision a healthcare information experience where
              visitors can find relevant details with confidence and
              healthcare professionals can access useful resources with
              ease.
            </p>

            <span className="about-card-number">02</span>
          </article>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="about-section-heading">
            <div>
              <div className="section-kicker">04 — WHAT GUIDES US</div>

              <h2>
                Our values shape
                <br />
                <em>everything we do.</em>
              </h2>
            </div>

            <p className="about-section-intro">
              The principles behind how we present information,
              communicate, and build relationships.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.number}>
                  <div className="about-value-top">
                    <div className="about-icon">
                      <Icon size={23} />
                    </div>

                    <span>{value.number}</span>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <div className="about-value-line" />
                </article>
              );
            })}
          </div>
        </section>

        {/* Focus Areas */}
        <section className="about-focus">
          <div className="about-focus-heading">
            <div className="section-kicker">05 — OUR APPROACH</div>

            <h2>
              Designed around
              <br />
              <em>what matters.</em>
            </h2>

            <p>
              We focus on creating a useful and straightforward experience
              for everyone exploring Enomedics.
            </p>
          </div>

          <div className="about-focus-list">
            {focusAreas.map((item) => (
              <article className="about-focus-item" key={item.number}>
                <span className="about-focus-number">{item.number}</span>

                <div className="about-focus-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight size={20} />
              </article>
            ))}
          </div>
        </section>

        {/* Healthcare Professionals */}
        <section className="about-professionals">
          <div className="about-professionals-art">
            <div className="about-professionals-orbit" />

            <div className="about-professionals-icon">
              <Stethoscope size={38} />
            </div>

            <span>FOR HEALTHCARE PROFESSIONALS</span>

            <h3>
              Better conversations
              <br />
              start here.
            </h3>

            <small>PARTNERSHIP, WITH PURPOSE</small>
          </div>

          <div className="about-professionals-copy">
            <div className="section-kicker">
              06 — PROFESSIONAL PARTNERSHIPS
            </div>

            <h2>
              For the people
              <br />
              who <em>care for us.</em>
            </h2>

            <p>
              We recognise the important role healthcare professionals
              play in helping people make informed healthcare decisions.
              Enomedics provides a dedicated space to explore
              product-related information and professional resources.
            </p>

            <Link to="/doctor-samples" className="button button-dark">
              Explore professional resources
              <ArrowUpRight size={17} />
            </Link>

            <small>
              Requests are subject to review and availability.
            </small>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="about-contact">
          <div className="about-contact-copy">
            <div className="section-kicker">07 — LET'S CONNECT</div>

            <h2>
              Have a question?
              <br />
              <em>Let's talk.</em>
            </h2>

            <p>
              Whether you are looking for product information or have a
              professional enquiry, we welcome you to get in touch.
            </p>
          </div>

          <a
            href="mailto:info.enomedicshealthcare@gmail.com"
            className="button button-dark"
          >
            Contact us
            <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
