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
    </div>
  );
}
