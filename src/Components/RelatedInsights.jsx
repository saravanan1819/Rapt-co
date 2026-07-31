import { memo, useMemo } from "react";
import { insights } from "../Data/insights";
import InsightCard from "./InsightCard";

const RelatedInsights = memo(function RelatedInsights({ article }) {
  const related = useMemo(() => {
    const requested = article.relatedArticles
      .map((slug) => insights.find((item) => item.slug === slug))
      .filter(Boolean);
    const fallback = insights.filter(
      (item) =>
        item.slug !== article.slug &&
        !requested.some((relatedArticle) => relatedArticle.slug === item.slug),
    );
    return [...requested, ...fallback].slice(0, 3);
  }, [article]);

  return (
    <section
      className="insight-related insight-detail__reveal"
      aria-labelledby="related-insights-title"
    >
      <div className="insight-detail__container">
        <header className="insight-detail__section-heading">
          <span>RELATED INSIGHTS</span>
          <h2 id="related-insights-title">Continue Exploring.</h2>
        </header>
        <div className="insight-related__grid">
          {related.map((relatedArticle) => (
            <InsightCard
              article={relatedArticle}
              className="insight-detail__stagger"
              key={relatedArticle.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default RelatedInsights;
