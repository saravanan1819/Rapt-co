import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowLeftLongLine } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { FrequentlyAskedQuestions } from "../Homepage/Homepage";
import heroBackground from "../../assets/Background.gif";
import "./Contactpage.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contactpage() {
  const location = useLocation();
  const heroRef = useRef(null);
  const getInTouchRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (location.hash !== "#get-in-touch") return undefined;

    const frame = requestAnimationFrame(() => {
      document.getElementById("get-in-touch")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        [
          ".contact-hero__title",
          ".contact-hero__description",
          ".contact-hero__buttons",
          ".contact-hero__scroll",
        ],
        { autoAlpha: 0, y: 38 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.12,
        },
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        [
          ".get-in-touch__label",
          ".get-in-touch__title",
          ".get-in-touch__description",
          ".get-in-touch__details",
          ".consultation-card",
        ],
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: getInTouchRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, getInTouchRef);

    return () => context.revert();
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const submitConsultation = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main>
        <section
          className="contact-hero"
          aria-labelledby="contact-hero-title"
          ref={heroRef}
        >
          <img
            className="contact-hero__background"
            src={heroBackground}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
          <Header />

          <div className="contact-hero__content">
            <h1 className="contact-hero__title" id="contact-hero-title">
              Let&apos;s Start a Conversation.
            </h1>
            <p className="contact-hero__description">
              Whether you&apos;re navigating regulatory change, planning for
              compliance, or seeking strategic advisory, our team is here to
              help. Tell us about your requirements, and we&apos;ll connect you
              with the right experts.
            </p>
            <div className="contact-hero__buttons">
              <NavLink className="contact-hero__primary" to="/contact#get-in-touch">
                Book a Consultation
              </NavLink>
              <a
                className="contact-hero__secondary"
                href="/company-profile.pdf"
                download
              >
                Download Company Profile
              </a>
            </div>
          </div>

          <a className="contact-hero__scroll" href="#faq-heading">
            Scroll Down <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section
          id="get-in-touch"
          className="get-in-touch"
          aria-labelledby="get-in-touch-title"
          ref={getInTouchRef}
        >
          <header className="get-in-touch__header">
            <span className="get-in-touch__label">GET IN TOUCH</span>
            <h2 className="get-in-touch__title" id="get-in-touch-title">
              Every Great Partnership
              <br />
              Begins with a Conversation.
            </h2>
            <p className="get-in-touch__description">
              Every business faces unique regulatory and compliance challenges.
              Whether you need guidance on DPDPA Compliance, SOC Audits,
              Taxation, GST, Privacy, or Governance, we&apos;re here to provide
              practical, technology-driven solutions tailored to your
              organization.
            </p>
          </header>

          <div className="get-in-touch__layout">
            <address className="get-in-touch__details">
              <div className="contact-detail">
                <span>Phone</span>
                <a href="tel:+919176884914">+91 91768 84914</a>
              </div>

              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:raptconsulting@gmail.com">
                  raptconsulting@gmail.com
                </a>
                <a href="mailto:rapt.info1@gmail.com">
                  rapt.info1@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <span>Office</span>
                <p>RAPT &amp; Co.</p>
                <p>Chennai, Tamil Nadu, India</p>
                <a
                  href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                  target="_blank"
                  rel="noreferrer"
                >
                  See on Google Maps{" "}
                  <RiArrowLeftLongLine
                    className="contact-detail__map-icon"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="contact-detail">
                <span>Working Hours</span>
                <p>Monday – Friday</p>
                <p>9:30 AM – 6:30 PM</p>
              </div>
            </address>

            <article className="consultation-card">
              <header className="consultation-card__header">
                <h3>BOOK A CONSULTATION</h3>
                <h4>Tell Us About Your Requirements :</h4>
                <p>
                  We&apos;d love to understand your business and discuss how we
                  can support your compliance, governance, taxation, or
                  regulatory objectives.
                </p>
              </header>

              <form
                className="consultation-form"
                onSubmit={submitConsultation}
              >
                <div className="consultation-form__grid">
                  <div className="consultation-form__field">
                    <input
                      id="consultation-name"
                      name="name"
                      type="text"
                      placeholder=" "
                      value={formData.name}
                      onChange={updateField}
                      required
                    />
                    <label htmlFor="consultation-name">Name</label>
                  </div>
                  <div className="consultation-form__field">
                    <input
                      id="consultation-email"
                      name="email"
                      type="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={updateField}
                      required
                    />
                    <label htmlFor="consultation-email">Email</label>
                  </div>
                  <div className="consultation-form__field">
                    <input
                      id="consultation-phone"
                      name="phone"
                      type="tel"
                      placeholder=" "
                      value={formData.phone}
                      onChange={updateField}
                      required
                    />
                    <label htmlFor="consultation-phone">Phone Number</label>
                  </div>
                  <div className="consultation-form__field">
                    <input
                      id="consultation-company"
                      name="company"
                      type="text"
                      placeholder=" "
                      value={formData.company}
                      onChange={updateField}
                    />
                    <label htmlFor="consultation-company">
                      Company (Optional)
                    </label>
                  </div>
                </div>

                <div className="consultation-form__field consultation-form__service">
                  <select
                    id="consultation-service"
                    name="service"
                    value={formData.service}
                    onChange={updateField}
                    required
                  >
                    <option value="" disabled aria-label="Select a service" />
                    <option>DPDPA Compliance</option>
                    <option>SOC Audits</option>
                    <option>Privacy Audits</option>
                    <option>Income Tax</option>
                    <option>GST</option>
                    <option>International Taxation</option>
                    <option>Governance Risk &amp; Compliance</option>
                  </select>
                  <label htmlFor="consultation-service">Service</label>
                </div>

                <div className="consultation-form__field consultation-form__message">
                  <textarea
                    id="consultation-message"
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={updateField}
                    required
                  />
                  <label htmlFor="consultation-message">
                    Tell us about yourself
                  </label>
                </div>

                <button type="submit">Book My Consultation</button>
              </form>
            </article>
          </div>
        </section>

        <FrequentlyAskedQuestions />
      </main>
      <Footer />
    </>
  );
}
