import { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const InsightCard = memo(function InsightCard({
  article,
  variant = "standard",
  number,
  className = "",
  layeredArtwork = false,
}) {
  if (variant === "trending") {
    return (
      <Link
        className={`trending-card ${className}`.trim()}
        to={`/insights/${article.slug}`}
      >
        <img
          className="trending-card__image"
          src={article.featuredImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width="1200"
          height="900"
        />
        <span className="trending-card__number">{number}</span>
        <span className="insights-card-category">{article.category}</span>
        <h3>{article.title}</h3>
        <div>
          <span>{article.readingTime}</span>
          <FaArrowRight aria-hidden="true" />
        </div>
      </Link>
    );
  }

  return (
    <article className={`insight-card ${className}`.trim()}>
      <Link
        className="insight-card__media"
        to={`/insights/${article.slug}`}
        aria-label={`Read ${article.title}`}
      >
        {layeredArtwork ? (
          <>
            <img
              className="insight-card__background-image"
              src={article.cardBackground}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
            <img
              className="insight-card__illustration"
              src={article.featuredImage}
              alt={`Illustration for ${article.title}`}
              loading="lazy"
              decoding="async"
              width="1200"
              height="900"
            />
          </>
        ) : (
          <img
            src={article.featuredImage}
            alt={`Cover for ${article.title}`}
            loading="lazy"
            decoding="async"
            width="1200"
            height="900"
          />
        )}
      </Link>
      <div className="insight-card__content">
        <span className="insights-card-category">{article.category}</span>
        <h3>
          <Link to={`/insights/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <div className="insight-card__footer">
          <div className="insights-card-meta">
            <span>{article.readingTime}</span>
            <span>{article.publishDate}</span>
          </div>
          <Link
            to={`/insights/${article.slug}`}
            aria-label={`Read ${article.title}`}
          >
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
});

export default InsightCard;
