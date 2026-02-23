import { useParams, Link, Navigate } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import { getEventBySlug } from '../data/eventsData';
import styles from './EventDetailPage.module.css';

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  if (!event) return <Navigate to="/category/events" replace />;

  return (
    <div className={styles.page}>
      {/* Back button */}
      <Link to="/category/events" className={styles.back}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
          <path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Events
      </Link>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.tag}>{event.tag}</span>
        <h1 className={styles.title}>{event.name}</h1>
        <GradientDivider />
      </header>

      {/* Image carousel */}
      <section className={styles.carouselSection}>
        <div className={styles.carousel}>
          {event.images.map((src, i) => (
            <div key={i} className={styles.slide}>
              <img
                src={src}
                alt={`${event.name} — image ${i + 1}`}
                className={styles.slideImage}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
        <p className={styles.hint}>SWIPE TO BROWSE</p>
      </section>

      {/* Event details */}
      <section className={styles.details}>
        {event.headline && <h2 className={styles.headline}>{event.headline}</h2>}

        {(event.date || event.location) && (
          <div className={styles.meta}>
            {event.date && (
              <span className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {event.date}
              </span>
            )}
            {event.location && (
              <span className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                {event.location}
              </span>
            )}
          </div>
        )}

        {event.stats && (
          <div className={styles.stats}>
            {event.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {event.body && event.body.map((para, i) => (
          <p key={i} className={styles.body}>{para}</p>
        ))}
      </section>
    </div>
  );
}
