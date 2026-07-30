import { useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import heroBackground from "../../assets/Background.gif";
import "./Servicepage.css";
import { CallToAction } from "../Homepage/Homepage";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "DPDPA Compliance",
    description:
      "Navigate India's landmark data privacy legislation with end-to-end compliance solutions that strengthen governance, protect personal data, and build lasting digital trust.",
  },
  {
    title: "SOC Audits",
    description:
      "Build stakeholder confidence with structured SOC readiness and audit support that strengthens security, availability, confidentiality, and operational controls.",
  },
  {
    title: "Privacy Audits",
    description:
      "Evaluate privacy practices, identify compliance gaps, and establish practical controls that support accountable handling of personal data.",
  },
  {
    title: "Income Tax Services",
    description:
      "Navigate income tax planning, assessments, representation, and disputes with experienced guidance designed to protect your interests.",
  },
  {
    title: "GST Services",
    description:
      "Simplify GST compliance, audits, appeals, and advisory requirements through clear, practical support aligned with your operational needs.",
  },
  {
    title: "Governance, Risk & Compliance",
    description:
      "Strengthen oversight, enterprise risk management, and internal controls with integrated GRC frameworks tailored to your organization.",
  },
];

const approachPhases = [
  {
    title: "Discover & Assess",
    description:
      "Understand your business landscape, regulatory exposure, and current compliance posture.",
  },
  {
    title: "Gap Analysis & Strategy",
    description:
      "Identify compliance gaps, assess risks, and develop a tailored roadmap with clear priorities.",
  },
  {
    title: "Implementation & Execution",
    description:
      "Deploy governance frameworks, audit preparation, policy development, and regulatory submissions.",
  },
  {
    title: "Review & Reporting",
    description:
      "Validate outcomes through comprehensive reporting, recommendations, and stakeholder presentations.",
  },
  {
    title: "Ongoing Support & Monitoring",
    description:
      "Continuous compliance monitoring, health checks, regulatory updates, and long-term advisory support.",
  },
];

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=700&q=85",
    size: "tall",
  },
  {
    number: "02",
    title: "Banking & Financial Services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    size: "wide",
  },
  {
    number: "03",
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=85",
    size: "slim",
  },
  {
    number: "04",
    title: "Technology",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85",
    size: "square",
  },
  {
    number: "05",
    title: "Telecommunication",
    image:
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8f?auto=format&fit=crop&w=700&q=85",
    size: "compact",
  },
  {
    number: "06",
    title: "Pharmaceuticals",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=700&q=85",
    size: "medium",
  },
  {
    number: "07",
    title: "Infrastructure & Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85",
    size: "wide-tall",
  },
  {
    number: "08",
    title: "Consumer Products & FMCG",
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=700&q=85",
    size: "short",
  },
];

export default function Servicepage() {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef(null);
  const approachRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        [
          ".service-hero__title",
          ".service-hero__description",
          ".service-hero__buttons",
          ".service-hero__scroll",
        ],
        { autoAlpha: 0, y: 38 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
          delay: 0.12,
        },
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const chapters = gsap.utils.toArray(".approach-chapter");

      const setActiveChapter = (activeIndex) => {
        gsap.to(chapters, {
          opacity: (index) =>
            index < activeIndex ? 0.5 : index === activeIndex ? 1 : 0.7,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      gsap.set(chapters, {
        opacity: (index) => (index === 0 ? 1 : 0.7),
      });

      chapters.forEach((chapter, index) => {
        const number = chapter.querySelector(".chapter-number");
        const label = chapter.querySelector(".chapter-label");
        const title = chapter.querySelector("h3");
        const description = chapter.querySelector("p");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: chapter,
              start: "top 82%",
              once: true,
            },
          })
          .fromTo(
            number,
            { autoAlpha: 0, scale: 0.8 },
            {
              autoAlpha: 0.5,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            },
          )
          .fromTo(
            label,
            { autoAlpha: 0.3, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.3",
          )
          .fromTo(
            title,
            { autoAlpha: 0.3, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.3",
          )
          .fromTo(
            description,
            { autoAlpha: 0.3, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              delay: 0.2,
              ease: "power2.out",
            },
            "-=0.3",
          );

        ScrollTrigger.create({
          trigger: chapter,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveChapter(index),
          onEnterBack: () => setActiveChapter(index),
        });
      });
    }, approachRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <main>
        <section
          className="service-hero"
          aria-labelledby="service-hero-title"
          ref={heroRef}
        >
          <img
            className="service-hero__background"
            src={heroBackground}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
          <Header />

          <div className="service-hero__container">
            <div className="service-hero__content">
              <h1 className="service-hero__title" id="service-hero-title">
                Expertise That Helps <em>Organizations</em>
                <br />
                Navigate Complexity.
              </h1>

              <p className="service-hero__description">
                From governance and regulatory compliance to taxation, digital
                privacy, cybersecurity, and enterprise risk, RAPT &amp; Co.
                provides integrated advisory services designed to help
                organizations operate with confidence in an increasingly
                regulated world.
              </p>

              <div className="service-hero__buttons">
                <NavLink
                  className="service-hero__primary"
                  to="/#cta-heading"
                >
                  Book a Consultation
                </NavLink>
                <a
                  className="service-hero__secondary"
                  href="/company-profile.pdf"
                  download
                >
                  Download Company Profile
                </a>
              </div>
            </div>
          </div>

          <span className="service-hero__scroll" aria-hidden="true">
            Scroll Down ↓
          </span>
        </section>

        <section
          className="service-expertise"
          aria-labelledby="service-expertise-title"
        >
          <div className="service-expertise__layout">
            <header className="service-expertise__intro">
              <span className="service-expertise__label">OUR EXPERTISE</span>
              <h2
                className="service-expertise__title"
                id="service-expertise-title"
              >
                Comprehensive
                <br />
                Advisory
                <br />
                Services.
              </h2>
              <p className="service-expertise__description">
                Integrated solutions across privacy, taxation, governance, risk
                management, audits, and regulatory compliance.
              </p>
            </header>

            <div className="service-expertise__divider" aria-hidden="true" />

            <div className="service-accordion">
              {services.map((service, index) => {
                const isOpen = activeService === index;
                const panelId = `service-panel-${index}`;

                return (
                  <article
                    className={`service-accordion__item${
                      isOpen ? " is-open" : ""
                    }`}
                    key={service.title}
                  >
                    <button
                      className="service-accordion__trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setActiveService((current) =>
                          current === index ? null : index,
                        )
                      }
                    >
                      <span>{service.title}</span>
                      <span
                        className="service-accordion__icon"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className="service-accordion__panel"
                      id={panelId}
                      aria-hidden={!isOpen}
                    >
                      <div className="service-accordion__panel-inner">
                        <p className="service-accordion__service-description">
                          {service.description}
                        </p>

                        <div className="service-accordion__bottom-row">
                          <NavLink to="/contact#get-in-touch">
                            Book a Consultation
                            <FaArrowRight
                              className="service-accordion__link-icon"
                              aria-hidden="true"
                            />
                          </NavLink>

                          <figure className="service-accordion__image">
                            <img
                              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=450&q=80"
                              alt="Advisory team in a business meeting"
                              loading="lazy"
                              decoding="async"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="service-approach"
          aria-labelledby="service-approach-title"
          ref={approachRef}
        >
          <header className="service-approach__header">
            <span className="service-approach__label">OUR APPROACH</span>
            <h2 className="service-approach__title" id="service-approach-title">
              Every Engagement. A Proven Process.
            </h2>
            <p className="service-approach__description">
              Every project follows a structured methodology designed to
              deliver measurable outcomes while reducing regulatory risk.
            </p>
          </header>

          <div className="service-approach__list">
            {approachPhases.map((phase, index) => (
              <article className="approach-chapter" key={phase.title}>
                <div className="chapter-number-wrap" aria-hidden="true">
                  <span className="chapter-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="chapter-content">
                  <span className="chapter-label">
                    PHASE {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="service-industries"
          aria-labelledby="service-industries-title"
        >
          <header className="service-industries__header">
            <span className="service-industries__label">
              INDUSTRIES WE SERVE
            </span>
            <h2
              className="service-industries__title"
              id="service-industries-title"
            >
              Trusted Across Diverse
              <br />
              Industries.
            </h2>
            <p className="service-industries__description">
              Delivering advisory services to organizations operating in highly
              regulated and growth-focused sectors.
            </p>
          </header>

          <div
            className="service-industries__slider"
            aria-label="Industries served"
          >
            <div className="service-industries__track">
              {[0, 1].map((duplicateIndex) => (
                <div
                  className="service-industries__group"
                  aria-hidden={duplicateIndex === 1}
                  key={duplicateIndex}
                >
                  {industries.map((industry) => (
                    <article
                      className={`industry-card industry-card--${industry.size}`}
                      key={`${duplicateIndex}-${industry.number}`}
                    >
                      <div className="industry-card__image">
                        <img src={industry.image} alt="" loading="lazy" decoding="async" />
                      </div>
                      <div className="industry-card__text">
                        <span>{industry.number}</span>
                        <h3>{industry.title}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
          <CallToAction />
      </main>
      <Footer />
    </>
  );
}
