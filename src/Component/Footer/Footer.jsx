import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const expertiseLinks = [
  "DPDPA Compliance",
  "SOC & Privacy Audits",
  "Income Tax Representation",
  "International Taxation",
  "GST Appeals & GSTAT",
  "Governance, Risk & Compliance (GRC)",
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "X / Twitter", href: "#twitter", Icon: FaXTwitter },
  { label: "Facebook", href: "#facebook", Icon: FaFacebookF },
  { label: "Instagram", href: "#instagram", Icon: FaInstagram },
];

const colors = ["blue", "green", "orange"];

function createGridCycle() {
  const columns = Math.max(12, Math.ceil(window.innerWidth / 40));
  const availableCells = [];

  for (let row = 1; row <= 3; row += 1) {
    for (let column = 1; column <= columns; column += 1) {
      availableCells.push({
        id: `${Date.now()}-${column}-${row}-${Math.random()}`,
        column,
        row,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 2 + Math.random(),
      });
    }
  }

  const animationQueue = [...availableCells];
  for (let index = animationQueue.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [animationQueue[index], animationQueue[randomIndex]] = [animationQueue[randomIndex], animationQueue[index]];
  }

  return { occupiedCells: [], availableCells, animationQueue, isClearing: false };
}

export default function Footer() {
  const footerRef = useRef(null);
  const [grid, setGrid] = useState(() => createGridCycle());

  useEffect(() => {
    let timer;

    if (grid.isClearing) {
      timer = window.setTimeout(() => setGrid(createGridCycle()), 500);
    } else if (grid.animationQueue.length > 0) {
      const placementDelay = 500 + Math.random() * 700;
      timer = window.setTimeout(() => {
        setGrid((current) => {
          const [nextCell, ...remainingQueue] = current.animationQueue;
          if (!nextCell) return current;
          return {
            ...current,
            occupiedCells: [...current.occupiedCells, nextCell],
            availableCells: current.availableCells.filter((cell) => cell.id !== nextCell.id),
            animationQueue: remainingQueue,
          };
        });
      }, placementDelay);
    } else if (grid.occupiedCells.length > 0) {
      const finalBlockDuration = grid.occupiedCells.at(-1)?.duration ?? 3;
      timer = window.setTimeout(() => setGrid((current) => ({ ...current, isClearing: true })), finalBlockDuration * 1000 + 15000);
    }

    return () => window.clearTimeout(timer);
  }, [grid]);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => setGrid(createGridCycle()), 200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(footerRef.current, { autoAlpha: 0, y: 55 }, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 92%", once: true },
      });
    }, footerRef);
    return () => context.revert();
  }, []);

  const placeBlock = (block) => (node) => {
    if (!node) return;
    node.style.setProperty("--mosaic-column", block.column);
    node.style.setProperty("--mosaic-row", block.row);
    node.style.setProperty("--mosaic-start-y", `${-120 - (block.row - 1) * 40}px`);
    node.style.setProperty("--mosaic-duration", `${block.duration}s`);
  };

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className={`footer-mosaic ${grid.isClearing ? "is-clearing" : ""}`} aria-hidden="true">
        {grid.occupiedCells.map((block) => (
          <span className={`footer-mosaic__block footer-mosaic__block--${block.color}`} ref={placeBlock(block)} key={block.id} />
        ))}
      </div>

      <div className="site-footer__content">
        <section className="site-footer__brand" aria-labelledby="footer-brand-heading">
          <h2 id="footer-brand-heading">RAPT &amp; Co.</h2>
          <h3>Compliance · Governance · Digital Security</h3>
          <p>We appreciate your time and look forward to partnering with you on your compliance, governance, and growth journey.</p>
          <div className="site-footer__socials">
            {socialLinks.map(({ label, href, Icon }) => <a href={href} aria-label={label} key={label}><Icon aria-hidden="true" /></a>)}
          </div>
        </section>

        <nav className="site-footer__links" aria-labelledby="footer-expertise-heading">
          <h3 id="footer-expertise-heading">Expertise</h3>
          {expertiseLinks.map((link) => <a href="#expertise" key={link}>{link}</a>)}
        </nav>

        <nav className="site-footer__links" aria-labelledby="footer-quick-links-heading">
          <h3 id="footer-quick-links-heading">Quick Links</h3>
          {quickLinks.map(({ label, to }) => (
            <Link to={to} key={to}>{label}</Link>
          ))}
        </nav>
      </div>

      <div className="site-footer__watermark" aria-hidden="true">RAPT &amp; CO</div>
    </footer>
  );
}
