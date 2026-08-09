import { Component, memo, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import clientBackground from "../../assets/Client_bg.png";
import articlesCardBackground from "../../assets/ArticlesCard.png";
import ctaBackground from "../../assets/CTA_section_bg.png";
// import heroBackground from "../../assets/Background.gif";
// import heroBackgroundVideo from "../../assets/animo.webm";
import heroBackgroundVideo from "../../assets/animo2.webm";
import earthDay from "../../assets/earth/earth_day_2k.jpg";
import earthNormal from "../../assets/earth/earth_normal_2k.jpg";
import earthBump from "../../assets/earth/earth_bump_2k.jpg";
import earthSpecular from "../../assets/earth/earth_specular_2k.jpg";
import earthClouds from "../../assets/earth/earth_clouds_8k.png";
import earthNight from "../../assets/earth/earth_night_2k.jpg";
import panIndiaImage from "../../assets/PanIndia.png";
import technologyDrivenImage from "../../assets/Technology-driven.png";
import oneFirmImage from "../../assets/one-firm.png";
import quoteImage from "../../assets/Quote.png";
import dpdpaIllustration from "../../assets/DPDPA_svg.png";
import socIllustration from "../../assets/SOC_svg.png";
import privacyIllustration from "../../assets/Privacy_svg.png";
import expertiseArrow from "../../assets/Arrow.png";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./Homepage.css";

const features = [
  { title: "Pan-India", subtitle: "Vision & Reach", icon: "pan-india" },
  { title: "Technology-Driven", subtitle: "Compliance Frameworks", icon: "technology-driven" },
  { title: "One Firm", subtitle: "Complete Coverage", icon: "one-firm" },
];

const featureImages = {
  "pan-india": panIndiaImage,
  "technology-driven": technologyDrivenImage,
  "one-firm": oneFirmImage,
};

const advisoryServices = [
  {
    number: "[ 1 ]",
    title: "Protect",
    tagline: "Secure Your Business Foundation",
    description: "Strengthen privacy, security, and compliance to reduce risk and build lasting stakeholder trust",
    theme: "protect",
    pills: ["DPDPA Compliance", "Privacy Audits", "SOC Audits"],
    metricLabel: "Risk Posture",
    metric: "Secure",
    status: "Strong",
  },
  {
    number: "[ 2 ]",
    title: "Govern",
    tagline: "Build Strong Governance",
    description: "Establish effective controls, manage enterprise risks, and strengthen confident decision-making.",
    theme: "govern",
    pills: ["GRC Advisory", "Risk Management", "Internal Controls"],
    metricLabel: "Governance Score",
    metric: "87 %",
    status: "Improving",
  },
  {
    number: "[ 3 ]",
    title: "Grow",
    tagline: "Enable Sustainable Growth",
    description: "Navigate taxation and regulatory complexity with strategic advisory that supports long-term business growth.",
    theme: "grow",
    pills: ["Income Tax Advisory", "GST Services", "International Taxation"],
    metricLabel: "Growth Potential",
    metric: "High",
    status: "Positive Outlook",
  },
];

const whyRaptStories = [
  {
    title: "Senior-Led Advisory",
    description: "Every engagement is led by experienced professionals with over 20 years of expertise across taxation, compliance, governance, and regulatory advisory—ensuring informed decisions and reliable outcomes from day one.",
  },
  {
    title: "One Firm. Complete Coverage.",
    description: "A single advisory partner for every regulatory need.",
    services: ["DPDP Compliance", "SOC Audits", "Privacy Audits", "GST Appeals", "GRC", "Income Tax Representation"],
  },
  {
    title: "Technology-Driven Execution",
    description: "Modern regulatory challenges demand modern solutions. Our technology-enabled frameworks simplify compliance, strengthen internal controls, and help organizations stay prepared for evolving regulations.",
  },
  {
    title: "Built for Sustainable Growth",
    description: "We don't just help organizations remain compliant—we build governance frameworks that strengthen resilience, reduce risk, and create the confidence needed for long-term business growth.",
  },
];

const expertiseServices = [
  { title: "DPDPA Compliance", description: "We help organizations navigate India's landmark data privacy legislation with end-to-end compliance solutions, ensuring every regulatory obligation is met while building lasting digital trust.", theme: "blue", icon: "lock" },
  { title: "SOC Audits", description: "Independent SOC attestation services that demonstrate your commitment to security, confidentiality, and operational excellence while building stakeholder trust.", theme: "orange", icon: "audit" },
  { title: "Privacy Audits", description: "Independent assurance that your organization's data handling practices meet regulatory requirements and industry best practices.", theme: "green", icon: "privacy" },
  { title: "Income Tax Services", description: "Strategic income tax planning, representation, assessments, appeals, international taxation, and dispute resolution.", theme: "blue", icon: "tax" },
  { title: "GRC Advisory", description: "Integrated governance, risk, and compliance frameworks that strengthen oversight, improve controls, and support confident decisions.", theme: "green", icon: "grc" },
  { title: "GST Advisory", description: "Practical GST compliance, advisory, audit support, and representation designed to reduce exposure and enable efficient operations.", theme: "orange", icon: "gst" },
];

const expertiseImages = {
  lock: dpdpaIllustration,
  audit: socIllustration,
  privacy: privacyIllustration,
  tax: dpdpaIllustration,
  grc: privacyIllustration,
  gst: socIllustration,
};

const testimonials = [
  { name: "Ravi Kumar", designation: "Chief Financial Officer", testimonial: "RAPT & Co. provided exceptional guidance throughout our compliance journey. Their structured approach and deep regulatory expertise helped us navigate complex requirements with confidence." },
  { name: "Ravi Kumar", designation: "Operations Head", testimonial: "From the very first consultation, the RAPT & Co. team understood our organizational needs and delivered solutions tailored to our business. Their expertise across taxation, governance, and compliance enabled us to strengthen our internal processes while remaining focused on growth. Every interaction reflected professionalism, accountability, and a genuine commitment to delivering measurable value." },
  { name: "Ravi Kumar", designation: "Finance Head", testimonial: "From taxation to governance advisory, RAPT & Co. served as a dependable strategic partner. Their technology-driven approach simplified what initially seemed like a complex process." },
  { name: "Ravi Kumar", designation: "Chief Executive Officer", testimonial: "RAPT & Co. combines expertise, integrity, and responsiveness in every engagement. We value them as a trusted advisory partner for our ongoing regulatory and compliance needs." },
  { name: "Ravi Kumar", designation: "Director", testimonial: "RAPT & Co. helped us navigate a complex regulatory landscape with remarkable clarity and confidence. Their ability to simplify technical compliance requirements into actionable business strategies made a significant impact on our operations. The team's attention to detail, transparent communication, and technology-driven approach ensured that every milestone was delivered efficiently." },
  { name: "Ravi Kumar", designation: "Compliance Manager", testimonial: "Their practical advice and responsive support gave our leadership team the confidence to make timely decisions while maintaining robust compliance standards." },
];

const testimonialColumns = [
  [testimonials[0], testimonials[1], testimonials[5]],
  [testimonials[2], testimonials[3], testimonials[0]],
  [testimonials[4], testimonials[5], testimonials[2]],
];

const featuredArticles = [
  { title: "DPDPA Compliance", subtitle: "Preparing Your Business for India's Digital Personal Data Protection Act", description: "India's Digital Personal Data Protection Act is reshaping how organizations collect, process, and protect personal data. Learn the practical steps to strengthen governance, reduce compliance risks, implement privacy-first frameworks, and build long-term trust with customers, regulators, and stakeholders.", buttonText: "Read Articles", backgroundImage: articlesCardBackground },
  { title: "Privacy Governance", subtitle: "Building Accountable, Privacy-First Organizations", description: "A practical guide to establishing ownership, controls, and repeatable privacy processes that keep pace with regulation while supporting responsible innovation and sustainable digital growth.", buttonText: "Read Articles", backgroundImage: articlesCardBackground },
  { title: "Technology Risk", subtitle: "Strengthening Controls Across a Changing Digital Landscape", description: "Explore how modern risk frameworks help leadership teams identify technology exposure, strengthen internal controls, and translate complex requirements into clear operational priorities.", buttonText: "Read Articles", backgroundImage: articlesCardBackground },
  { title: "Regulatory Readiness", subtitle: "Turning Compliance Change Into Business Confidence", description: "Learn how an integrated regulatory readiness program can reduce uncertainty, improve response times, and create resilient processes that support confident decisions across the enterprise.", buttonText: "Read Articles", backgroundImage: articlesCardBackground },
];

const leadershipTeam = [
  { name: "CMA Pavithra Mucherla", designation: "Managing Partner · Taxation, Cybersecurity & GRC", image: "https://i.pravatar.cc/300?img=47", description: "Specializes in Income Tax & GST litigation, DPDPA Compliance, SOC & Privacy Audits, Governance, Risk & Compliance (GRC), IS Audits, and Cybersecurity Advisory with extensive experience across banking, financial services, telecom, healthcare, and technology sectors.", expertise: ["Income Tax & GST Appeals", "DPDPA Compliance", "SOC & Privacy Audits", "IS Audits", "Cybersecurity", "Governance, Risk & Compliance"] },
  { name: "CMA Rajesh Sai Iyer", designation: "Partner · Cost Audit & Regulatory Advisory", image: "https://i.pravatar.cc/300?img=12", description: "Advises organizations on cost audit, regulatory reporting, operational controls, and performance frameworks, helping leadership teams improve transparency, accountability, and long-term financial resilience.", expertise: ["Cost Audit", "Regulatory Advisory", "Internal Controls", "Performance Management", "Compliance Reviews"] },
  { name: "CMA A. Vadivel", designation: "Partner · CFO Advisory & Finance Transformation", image: "https://i.pravatar.cc/300?img=11", description: "Leads CFO advisory and finance transformation engagements spanning strategic planning, reporting, process optimization, financial controls, and decision support for growing organizations.", expertise: ["CFO Advisory", "Finance Transformation", "Strategic Planning", "Financial Controls", "Management Reporting"] },
  { name: "CMA T.A. Venkitasubramanian", designation: "Partner · Corporate Finance & Strategic Advisory", image: "https://i.pravatar.cc/300?img=13", description: "Brings deep experience in corporate finance, business strategy, valuation, and transaction advisory, supporting organizations through complex decisions and sustainable growth initiatives.", expertise: ["Corporate Finance", "Strategic Advisory", "Valuation", "Transaction Support", "Business Planning"] },
];

const faqs = [
  { question: "What services does RAPT & Co. provide?", answer: "RAPT & Co. offers integrated advisory services across DPDPA Compliance, SOC Audits, Privacy Audits, Income Tax, GST Advisory, Governance, Risk & Compliance (GRC), Enterprise Risk Management, Internal Controls, and Regulatory Consulting." },
  { question: "Which industries do you serve?", answer: "We work with organizations across manufacturing, banking & financial services, healthcare, technology, telecom, professional services, and other highly regulated industries." },
  { question: "Are engagements led by senior professionals?", answer: "Yes. Every engagement is led by experienced advisors with deep expertise across taxation, governance, compliance, privacy, cybersecurity, and enterprise risk." },
  { question: "Do you serve clients across India?", answer: "Yes. RAPT & Co. provides advisory and compliance services to organizations across India, supporting businesses of different sizes and sectors." },
  { question: "How do you protect confidential information?", answer: "We follow strict confidentiality practices, secure data handling procedures, and professional ethical standards throughout every client engagement." },
  { question: "Do you handle tax and regulatory representation?", answer: "Yes. Our team assists clients with income tax representation, GST litigation, appeals, regulatory advisory, and compliance support before relevant authorities." },
];

const TestimonialCard = memo(function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <header className="testimonial-card__profile">
        <span className="testimonial-card__avatar" role="img" aria-label={`${testimonial.name} profile placeholder`} />
        <div><h3>{testimonial.name}</h3><p>{testimonial.designation}</p></div>
        <img
          className="testimonial-card__quote"
          src={quoteImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </header>
      <p className="testimonial-card__text">{testimonial.testimonial}</p>
    </article>
  );
});

export function InsightsResources() {
  const [activeArticle, setActiveArticle] = useState(0);
  const articleTrackRef = useRef(null);

  const selectArticle = (nextIndex) => {
    if (nextIndex !== activeArticle) setActiveArticle(nextIndex);
  };

  useEffect(() => {
    articleTrackRef.current?.style.setProperty("--active-article", activeArticle);
  }, [activeArticle]);

  return (
    <section className="insights-resources" aria-labelledby="insights-heading">
      <div className="insights-resources__container">
        <header className="insights-resources__header">
          <h2 id="insights-heading">Insights &amp; Resources</h2>
          <p>Stay informed with expert perspectives, regulatory updates, and practical guidance designed to help your business navigate an evolving compliance landscape.</p>
        </header>

        <div className="insights-resources__content">
          <nav className="featured-articles" aria-label="Featured articles">
            {featuredArticles.map((item, index) => (
              <button type="button" className={index === activeArticle ? "is-active" : ""} onClick={() => selectArticle(index)} aria-current={index === activeArticle ? "true" : undefined} key={item.title}>
                <span aria-hidden="true">{index === activeArticle ? "▶" : ""}</span>
                Featured Article {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </nav>

          <article className="featured-article-card" aria-live="polite">
            <div className="featured-article-card__viewport">
              <div className="featured-article-card__track" ref={articleTrackRef}>
                {featuredArticles.map((item, index) => (
                  <div className={`featured-article-card__slide ${index === activeArticle ? "is-active" : ""}`} aria-hidden={index !== activeArticle} key={item.title}>
                    <img src={item.backgroundImage} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <div className="featured-article-card__content">
                      <div className="featured-article-card__copy">
                        <h3>{item.title}</h3>
                        <p className="featured-article-card__subtitle">{item.subtitle}</p>
                        <p className="featured-article-card__description">{item.description}</p>
                      </div>
                      <a href="#featured-article"><span>{item.buttonText}</span><span aria-hidden="true">↗</span></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function LeadershipTeam() {
  const [activeLeader, setActiveLeader] = useState(0);
  const leadershipTrackRef = useRef(null);

  useEffect(() => {
    leadershipTrackRef.current?.style.setProperty("--active-leader", activeLeader);
  }, [activeLeader]);

  return (
    <section className="leadership-team" aria-labelledby="leadership-heading">
      <div className="leadership-team__container">
        <div className="leadership-team__left">
          <header className="leadership-team__header">
            <span className="leadership-team__label">LEADERSHIP TEAM</span>
            <h2 id="leadership-heading">The People Behind<br />Your Confidence.</h2>
            <p>Behind every confident business decision is a team of experienced advisors committed to protecting, governing, and growing your organization.</p>
          </header>

          <div className="leadership-team__selector" role="list" aria-label="Leadership team members">
            {leadershipTeam.map((leader, index) => (
              <button type="button" className={index === activeLeader ? "is-active" : ""} onClick={() => setActiveLeader(index)} aria-pressed={index === activeLeader} role="listitem" key={leader.name}>
                <img src={leader.image} alt={`${leader.name}, ${leader.designation}`} loading="lazy" decoding="async" />
                <span className="leadership-team__selector-name">{leader.name}</span>
                <span className="leadership-team__selector-role">{leader.designation}</span>
              </button>
            ))}
          </div>
        </div>

        <article className="leadership-profile" aria-live="polite">
          <div className="leadership-profile__viewport">
            <div className="leadership-profile__track" ref={leadershipTrackRef}>
              {leadershipTeam.map((leader, index) => (
                <div className={`leadership-profile__slide ${index === activeLeader ? "is-active" : ""}`} aria-hidden={index !== activeLeader} key={leader.name}>
                  <header className="leadership-profile__header">
                    <img src={leader.image} alt={`${leader.name} profile`} loading="lazy" decoding="async" />
                    <div><h3>{leader.name}</h3><p>{leader.designation}</p></div>
                  </header>
                  <p className="leadership-profile__description">{leader.description}</p>
                  <h4>Key Expertise :</h4>
                  <div className="leadership-profile__expertise">
                    {leader.expertise.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-section__container">
        <header className="faq-section__header">
          <span className="faq-section__label">FAQ</span>
          <h2 id="faq-heading">Frequently<br />Asked Questions</h2>
          <p>Find answers to common questions about our services, expertise, and engagement process.</p>
        </header>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;
            return (
              <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}>
                  <span>{faq.question}</span><span className="faq-item__icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-item__answer" id={answerId} role="region">
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const CallToAction = memo(function CallToAction({
  heading = "Let's Build Confidence Together.",
  description = "Whether you're strengthening governance, preparing for audits, navigating taxation, or building a future-ready compliance program, our experts are ready to support your next step.",
}) {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <img className="cta-section__background" src={ctaBackground} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div className="cta-section__content">
        <span className="cta-section__label">READY TO MOVE FORWARD?</span>
        <h2 id="cta-heading">{heading}</h2>
        <p>{description}</p>
        <div className="cta-section__button-glow">
          <a href="/contact#get-in-touch">Book a Consultation</a>
        </div>
      </div>
    </section>
  );
});

function HorizontalCarousel({ items }) {
  const sliderRef = useRef(null);
  const cardStepRef = useRef(415);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const [scrollEdges, setScrollEdges] = useState({
    atStart: true,
    atEnd: false,
  });

  const goTo = useCallback((nextIndex) => {
    const boundedIndex = Math.max(0, Math.min(items.length - 1, nextIndex));
    const slider = sliderRef.current;
    setIsCarouselActive(boundedIndex > 0);
    slider?.scrollTo({
      left: boundedIndex * cardStepRef.current,
      behavior: "smooth",
    });
    setActiveIndex(boundedIndex);
  }, [items.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;
    let frame;
    const measureCards = () => {
      const firstCard = slider.firstElementChild;
      const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
      cardStepRef.current = firstCard
        ? firstCard.getBoundingClientRect().width + gap
        : 415;
    };
    const syncIndex = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const nextIndex = Math.min(
          items.length - 1,
          Math.max(0, Math.round(slider.scrollLeft / cardStepRef.current)),
        );
        const nextEdges = {
          atStart: slider.scrollLeft <= 2,
          atEnd: slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2,
        };
        setActiveIndex((current) => current === nextIndex ? current : nextIndex);
        setScrollEdges((current) => (
          current.atStart === nextEdges.atStart && current.atEnd === nextEdges.atEnd
            ? current
            : nextEdges
        ));
        setIsCarouselActive((current) => {
          const nextActive = slider.scrollLeft > 2;
          return current === nextActive ? current : nextActive;
        });
      });
    };
    const handleResize = () => {
      measureCards();
      syncIndex();
    };
    measureCards();
    syncIndex();
    slider.addEventListener("scroll", syncIndex, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      slider.removeEventListener("scroll", syncIndex);
      window.removeEventListener("resize", handleResize);
    };
  }, [items.length]);

  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    goTo(activeIndex + (event.deltaY > 0 ? 1 : -1));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(activeIndex - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(activeIndex + 1); }
  };

  return (
    <div
      className={`expertise-carousel${isCarouselActive ? " is-active" : ""}${scrollEdges.atEnd ? " is-at-end" : ""}`}
    >
      {!scrollEdges.atStart && (
        <button
          className="expertise-carousel__control expertise-carousel__control--previous"
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous expertise service"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
      )}
      {!scrollEdges.atEnd && (
        <button
          className="expertise-carousel__control expertise-carousel__control--next"
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next expertise service"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      )}
      <div className="expertise-carousel__viewport" ref={sliderRef} onWheel={handleWheel} onKeyDown={handleKeyDown} tabIndex="0" role="region" aria-label="Advisory services carousel">
        {items.map((service) => (
          <article className={`expertise-card expertise-card--${service.theme}`} key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="expertise-card__illustration">
              <img
                src={expertiseImages[service.icon]}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            </div>
            <a
              href={`#${service.icon}`}
              aria-label={`Learn more about ${service.title}`}
            >
              <img src={expertiseArrow} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

const earthTextures = {
  map: earthDay,
  normalMap: earthNormal,
  bumpMap: earthBump,
  roughnessMap: earthSpecular,
  specularMap: earthSpecular,
  nightMap: earthNight,
  cloudMap: earthClouds,
};

class EarthTextureBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <FallbackEarth /> : this.props.children;
  }
}

function FallbackEarth() {
  const earthRef = useRef(null);

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += 0.0005 * delta * 60;
  });

  return (
    <group position={[0, 0, 0]} scale={0.9} rotation={[0.08, 0, THREE.MathUtils.degToRad(-23.5)]}>
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1.2, 96, 96]} />
        <meshStandardMaterial color="#2d6f9f" roughness={0.9} metalness={0} />
      </mesh>
    </group>
  );
}

function Earth() {
  const earthRef = useRef(null);
  const cloudRef = useRef(null);
  const cloudElapsedRef = useRef(0);
  const textures = useTexture(earthTextures);
  const normalScale = useMemo(() => new THREE.Vector2(1, 1), []);
  const cloudGeometry = useMemo(
    () => new THREE.SphereGeometry(1.2 * 1.008, 128, 128),
    [],
  );

  textures.map.colorSpace = THREE.SRGBColorSpace;
  textures.nightMap.colorSpace = THREE.SRGBColorSpace;
  textures.cloudMap.colorSpace = THREE.SRGBColorSpace;
  textures.map.anisotropy = 16;
  textures.normalMap.anisotropy = 16;
  textures.bumpMap.anisotropy = 16;
  textures.roughnessMap.anisotropy = 16;
  textures.specularMap.anisotropy = 16;
  textures.nightMap.anisotropy = 16;
  textures.cloudMap.anisotropy = 16;

  useEffect(
    () => () => {
      Object.values(textures).forEach((texture) => texture.dispose());
      Object.values(earthTextures).forEach((url) => useTexture.clear(url));
      cloudGeometry.dispose();
    },
    [cloudGeometry, textures],
  );

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += 0.0005 * delta * 60;
    cloudElapsedRef.current += delta;
    if (cloudRef.current) {
      const baseSpeed = 0.0005 * (0.16 / 0.12);
      const variation = Math.sin(cloudElapsedRef.current * 0.08) * 0.00015;
      cloudRef.current.rotation.y += (baseSpeed + variation) * delta * 60;
    }
  });

  return (
    <group
      position={[0, 0, 0]}
      scale={0.9}
      rotation={[0.08, 0, THREE.MathUtils.degToRad(-23.5)]}
    >
      <mesh ref={earthRef} rotation={[0, -0.45, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.2, 128, 128]} />
        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          normalScale={normalScale}
          bumpMap={textures.bumpMap}
          bumpScale={0.04}
          roughnessMap={textures.roughnessMap}
          roughness={0.9}
          metalness={0}
          emissive="#ffffff"
          emissiveMap={textures.nightMap}
          emissiveIntensity={0.12}
        />
      </mesh>

      <mesh
        ref={cloudRef}
        rotation={[0, -0.4, 0]}
        castShadow={false}
        receiveShadow={false}
      >
        <primitive object={cloudGeometry} attach="geometry" />
        <meshPhongMaterial
          map={textures.cloudMap}
          bumpMap={textures.cloudMap}
          bumpScale={0.003}
          color="#ffffff"
          transparent
          opacity={0.75}
          side={THREE.DoubleSide}
          depthWrite={false}
          shininess={2}
          specular="#dcefff"
          emissive="#1b2730"
          emissiveIntensity={0.08}
        />
      </mesh>

      <mesh scale={1.015}>
        <sphereGeometry args={[1.2, 96, 96]} />
        <meshBasicMaterial
          color="#8ed7ff"
          opacity={0.12}
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function GlobeArtwork() {
  const controlsRef = useRef(null);
  const resumeRotationTimer = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(
    () => () => {
      if (resumeRotationTimer.current) clearTimeout(resumeRotationTimer.current);
    },
    [],
  );

  const pauseRotation = useCallback(() => {
    if (resumeRotationTimer.current) clearTimeout(resumeRotationTimer.current);
    setAutoRotate(false);
  }, []);

  const scheduleRotationResume = useCallback(() => {
    if (resumeRotationTimer.current) clearTimeout(resumeRotationTimer.current);
    resumeRotationTimer.current = setTimeout(() => setAutoRotate(true), 2000);
  }, []);

  return (
    <Canvas
      className="experience-artwork"
      camera={{ position: [0, 0, 6.3], fov: 28 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      shadows
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        gl.physicallyCorrectLights = true;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.15;
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
      aria-label="Interactive rotating three-dimensional Earth"
    >
      <ambientLight intensity={0.18} />
      <hemisphereLight args={["#dff3ff", "#b7c9d6", 1.1]} />
      <directionalLight
        position={[-6, 6, 8]}
        intensity={2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-radius={8}
      />
      <directionalLight position={[6, 1, 5]} color="#a8d8ff" intensity={0.8} />
      <directionalLight position={[0, 2, -8]} color="#ffffff" intensity={1.4} />
      <spotLight
        position={[0, 8, 5]}
        angle={0.45}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-radius={8}
      />

      <Suspense fallback={null}>
        <EarthTextureBoundary>
          <Earth />
        </EarthTextureBoundary>
      </Suspense>

      <ContactShadows
        position={[0, -1.38, 0]}
        opacity={0.18}
        scale={5}
        blur={4}
        far={4}
        color="#000000"
      />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={[0, 0, 0]}
        enableRotate
        enableZoom
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.7}
        zoomSpeed={0.8}
        minDistance={4.8}
        maxDistance={7.5}
        autoRotate={autoRotate}
        autoRotateSpeed={0.12}
        onStart={pauseRotation}
        onEnd={scheduleRotationResume}
        minPolarAngle={Math.PI * 0.16}
        maxPolarAngle={Math.PI * 0.84}
      />
    </Canvas>
  );
}

export default function Homepage() {
  const heroRef = useRef(null);
  const globeHostRef = useRef(null);
  const [shouldRenderGlobe, setShouldRenderGlobe] = useState(false);

  useEffect(() => {
    const host = globeHostRef.current;
    if (!host || shouldRenderGlobe) return undefined;
    if (!("IntersectionObserver" in window)) {
      setShouldRenderGlobe(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRenderGlobe(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [shouldRenderGlobe]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        [".homepage-hero__title", ".homepage-hero__description", ".homepage-hero__buttons"],
        { autoAlpha: 0, y: 38 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.16, ease: "power3.out", delay: 0.12 },
      );
    }, heroRef);
    return () => context.revert();
  }, []);

  useEffect(() => {
    const pills = document.querySelectorAll(".advisory-panel__pills span");
    const cleanups = [];

    pills.forEach((pill) => {
      let frameId = 0;
      let clientX = 0;
      let clientY = 0;
      let pointerX = 50;
      let pointerY = 50;

      const renderReflection = () => {
        frameId = 0;
        const bounds = pill.getBoundingClientRect();
        pointerX = ((clientX - bounds.left) / bounds.width) * 100;
        pointerY = ((clientY - bounds.top) / bounds.height) * 100;
        pill.style.setProperty("--mouse-x", `${pointerX}%`);
        pill.style.setProperty("--mouse-y", `${pointerY}%`);
        pill.style.setProperty("--reflection-x", `${(pointerX - 50) * 0.08}px`);
        pill.style.setProperty("--reflection-y", `${(pointerY - 50) * 0.05}px`);
      };

      const handlePointerMove = (event) => {
        clientX = event.clientX;
        clientY = event.clientY;
        if (!frameId) frameId = window.requestAnimationFrame(renderReflection);
      };

      const handlePointerLeave = () => {
        if (frameId) window.cancelAnimationFrame(frameId);
        frameId = 0;
        pill.style.setProperty("--mouse-x", "50%");
        pill.style.setProperty("--mouse-y", "50%");
        pill.style.setProperty("--reflection-x", "0px");
        pill.style.setProperty("--reflection-y", "0px");
      };

      pill.addEventListener("pointermove", handlePointerMove, { passive: true });
      pill.addEventListener("pointerleave", handlePointerLeave);
      cleanups.push(() => {
        pill.removeEventListener("pointermove", handlePointerMove);
        pill.removeEventListener("pointerleave", handlePointerLeave);
        if (frameId) window.cancelAnimationFrame(frameId);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <>
    <main>
      <section className="homepage-hero" aria-labelledby="homepage-hero-title" ref={heroRef}>
        {/* <img className="homepage-hero__background" src={heroBackground} alt="" aria-hidden="true" fetchPriority="high" /> */}
        <video className="homepage-hero__background" src={heroBackgroundVideo} autoPlay muted loop playsInline aria-hidden="true" />
        <Header />

        <div className="homepage-hero__content">
          <h1 className="homepage-hero__title" id="homepage-hero-title">
            Compliance Made Simple.
            <br />
            <em>Business Growth</em> Made Possible.
          </h1>
          <p className="homepage-hero__description">From DPDPA Compliance and SOC Audits to Taxation, GST Appeals, Privacy, and GRC, RAPT &amp; Co. delivers integrated advisory solutions tailored for modern enterprises.</p>
          <div className="homepage-hero__buttons">
            <NavLink className="homepage-hero__primary" to="/contact#get-in-touch">Book a Consultation</NavLink>
            <a className="homepage-hero__secondary" href="/company-profile.pdf" download>Download Company Profile</a>
          </div>
        </div>

        <a className="homepage-hero__scroll" href="#experience-heading">Scroll Down <span aria-hidden="true">↓</span></a>
      </section>
      <div className="hr-line"></div>
      <section className="experience" aria-labelledby="experience-heading">
        <div className="experience__container">
          <div className="experience__wrapper">
            <div className="experience__left">
              <h1 id="experience-heading" className="experience__heading">Built on Experience.<br />Trusted by Expertise.</h1>
              <figure className="experience__visual" ref={globeHostRef}>
                {shouldRenderGlobe ? <GlobeArtwork /> : null}
              </figure>
            </div>

            <div className="experience__right">
              <p className="experience__intro">Our experience, integrated advisory approach, and technology-driven execution help<br className="experience__desktop-break" /> organizations navigate complex regulatory environments with confidence.</p>

              <dl className="experience__statistics">
                <div className="experience__stat"><dd>20 +</dd><dt>Years of Experience</dt></div>
                <div className="experience__stat"><dd>6</dd><dt>Integrated Advisory Practices</dt></div>
              </dl>

              <div className="experience__features">
                {features.map((feature) => (
                  <article className="experience-card" key={feature.title}>
                    <h2>{feature.title}</h2>
                    <p>{feature.subtitle}</p>
                    <img
                      src={featureImages[feature.icon]}
                      alt={feature.title}
                      className={`experience-card__image experience-card__image--${feature.icon}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advisory-philosophy" aria-labelledby="advisory-heading">
        <div className="advisory-philosophy__container">
          <header className="advisory-philosophy__header">
            <div className="advisory-philosophy__title-group">
              <span className="advisory-philosophy__label">OUR ADVISORY PHILOSOPHY</span>
              <h2 id="advisory-heading" className="advisory-philosophy__heading">Protect.<br />Govern. Grow.</h2>
            </div>
            <p className="advisory-philosophy__intro">Every business faces unique regulatory, operational, and strategic challenges. Our integrated advisory approach helps organizations protect what matters, strengthen governance, and create a foundation for sustainable growth.</p>
          </header>

          <div className="advisory-philosophy__cards">
            {advisoryServices.map((service) => (
              <article className="advisory-service" key={service.title}>
                <div className="advisory-service__summary">
                  <span className="advisory-service__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p className="advisory-service__tagline">{service.tagline}</p>
                  <p className="advisory-service__description">{service.description}</p>
                </div>

                <div className={`advisory-panel advisory-panel--${service.theme}`}>
                  <div className="advisory-panel__glass">
                    <header className="advisory-panel__header">
                      <h4>{service.title}</h4>
                      <button type="button" className="advisory-panel__menu" aria-label={`Open ${service.title} options`}><span /><span /><span /></button>
                    </header>

                    <div className="advisory-panel__pills">
                      {service.pills.map((pill) => <span key={pill}>{pill}</span>)}
                    </div>

                    <div className="advisory-panel__metric">
                      {service.theme === "protect" ? (
                        <div className="advisory-panel__protect-metric">
                          <div className="advisory-panel__gauge"><strong>92%</strong><small>Compliance<br />Readiness</small></div>
                          <div><span>{service.metricLabel}</span><strong>{service.metric}</strong><small><i />{service.status}</small></div>
                        </div>
                      ) : (
                        <div className="advisory-panel__standard-metric">
                          <span>{service.metricLabel}</span><strong>{service.metric}</strong><small><i />{service.status}</small>
                        </div>
                      )}
                    </div>

                    <a className="advisory-panel__cta" href={`#${service.theme}`}><span>Learn more</span><span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-rapt" aria-labelledby="why-rapt-heading">
        <div className="why-rapt__container">
          <header className="why-rapt__header">
            <span className="why-rapt__label">WHY RAPT &amp; CO</span>
            <h2 id="why-rapt-heading" className="why-rapt__heading">More Than Compliance.<br />A Strategic Advisory Partner.</h2>
            <p className="why-rapt__intro">RAPT &amp; Co. brings together decades of regulatory expertise, technology-driven advisory, and a unified approach to compliance. From governance and privacy to taxation and risk management, we help organizations navigate complexity with clarity and confidence.</p>
          </header>

          <div className="why-rapt__grid">
            {whyRaptStories.map((story, index) => (
              <article className="why-rapt-card" key={story.title}>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                {story.services && (
                  <div className="why-rapt-card__services">
                    <span className="why-rapt-card__services-label">Services :</span>
                    <div className="advisory-panel__pills why-rapt-card__pills">
                      {story.services.map((service) => <span key={service}>{service}</span>)}
                    </div>
                  </div>
                )}
                <span className="why-rapt-card__story">Story {String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="our-expertise" aria-labelledby="expertise-heading">
        <div className="our-expertise__container">
          <header className="our-expertise__header">
            <span className="our-expertise__label">OUR EXPERTISE</span>
            <h2 id="expertise-heading" className="our-expertise__heading">Comprehensive<br />Advisory Services</h2>
            <p className="our-expertise__intro">We deliver technology-driven compliance and advisory solutions across privacy, taxation, governance, risk management, and regulatory compliance—helping organizations operate with confidence in an increasingly complex business environment.</p>
          </header>
          <HorizontalCarousel items={expertiseServices} />
        </div>
      </section>

      <section className="client-testimonials" aria-labelledby="testimonials-heading">
        <img className="client-testimonials__background" src={clientBackground} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="client-testimonials__container">
          <header className="client-testimonials__header">
            <span className="client-testimonials__label">CLIENT TESTIMONIALS</span>
            <h2 id="testimonials-heading">Hear From Our Happy Clients</h2>
            <p>Client success stories and testimonials will be featured here as our<br className="client-testimonials__desktop-break" /> partnerships continue to grow.</p>
          </header>

          <div className="testimonial-columns" aria-label="Client testimonials">
            {testimonialColumns.map((column, columnIndex) => (
              <div className={`testimonial-column testimonial-column--${columnIndex % 2 === 1 ? "up" : "down"}`} key={`testimonial-column-${columnIndex}`}>
                <div className="testimonial-column__track">
                  {[0, 1].map((duplicateIndex) => (
                    <div className="testimonial-column__set" aria-hidden={duplicateIndex === 1} key={duplicateIndex}>
                      {column.map((testimonial, cardIndex) => <TestimonialCard testimonial={testimonial} key={`${duplicateIndex}-${cardIndex}`} />)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightsResources />
      <LeadershipTeam />
      <FrequentlyAskedQuestions />
      <CallToAction />
    </main>
    <Footer />
    </>
  );
}
