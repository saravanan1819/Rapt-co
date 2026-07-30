import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import "./Animation.css";

const TILE_COUNT = 64;

function randomBetween(minimum, maximum) {
  return minimum + Math.random() * (maximum - minimum);
}

function Animation() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const tileRefs = useRef([]);

  const tiles = useMemo(
    () =>
      Array.from({ length: TILE_COUNT }, (_, index) => ({
        id: index + 1,
        duration: randomBetween(18, 36),
        delay: randomBetween(0, 12),
        opacity: randomBetween(0.72, 0.94),
        brightness: randomBetween(0.92, 1.16),
        moveX: randomBetween(-4, 4),
        moveY: randomBetween(-8, 8),
        rotation: randomBetween(-1, 1),
      })),
    [],
  );

  useLayoutEffect(() => {
    const container = containerRef.current;
    const grid = gridRef.current;
    if (!container || !grid) return undefined;
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const context = gsap.context(() => {
      tiles.forEach((tile, index) => {
        const element = tileRefs.current[index];
        if (!element) return;

        gsap.to(element, {
          x: tile.moveX,
          y: tile.moveY,
          scale: 1.03,
          rotation: tile.rotation,
          opacity: randomBetween(0.82, 1),
          duration: tile.duration,
          delay: tile.delay,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          force3D: true,
        });
      });

      const moveGridX = gsap.quickTo(grid, "x", {
        duration: 1.4,
        ease: "power3.out",
      });
      const moveGridY = gsap.quickTo(grid, "y", {
        duration: 1.4,
        ease: "power3.out",
      });

      const renderParallax = () => {
        pointerFrame = 0;
        moveGridX((pointerX / window.innerWidth - 0.5) * 20);
        moveGridY((pointerY / window.innerHeight - 0.5) * 20);
      };

      const handlePointerMove = (event) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!pointerFrame) pointerFrame = requestAnimationFrame(renderParallax);
      };

      const resetParallax = () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        moveGridX(0);
        moveGridY(0);
      };

      container.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      container.addEventListener("pointerleave", resetParallax);

      return () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", resetParallax);
      };
    }, container);

    return () => context.revert();
  }, [tiles]);

  return (
    <main
      className="animation-container"
      ref={containerRef}
      aria-label="Animated liquid glass background"
    >
      <div className="ambient-light orange" aria-hidden="true" />
      <div className="ambient-light mint" aria-hidden="true" />
      <div className="ambient-light blue" aria-hidden="true" />

      <div className="glass-grid" ref={gridRef} aria-hidden="true">
        {tiles.map((tile, index) => (
          <span
            className="glass-tile"
            key={tile.id}
            ref={(element) => {
              tileRefs.current[index] = element;
            }}
            style={{
              "--tile-opacity": tile.opacity,
              "--tile-brightness": tile.brightness,
            }}
          />
        ))}
      </div>

      <div className="noise-overlay" aria-hidden="true" />
    </main>
  );
}

export default Animation;
