import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import { events } from '../data/eventsData';
import styles from './EventsPage.module.css';

export default function EventsPage() {
  return (
    <div className={styles.page}>
      {/* Back button */}
      <Link to="/" className={styles.back}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
          <path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Home
      </Link>

      {/* Page header */}
      <header className={styles.header}>
        <h1 className={styles.title}>EVENTS</h1>
        <p className={styles.subtitle}>FITNESS ACTIVATIONS</p>
        <GradientDivider />
      </header>

      {/* Event cards grid */}
      <section className={styles.grid}>
        {events.map((event) => (
          <Link
            key={event.slug}
            to={`/events/${event.slug}`}
            className={styles.card}
          >
            <img
              src={event.cover}
              alt={event.name}
              className={styles.cardImage}
              loading="lazy"
            />
            <div className={styles.cardOverlay}>
              <span className={styles.cardTag}>{event.tag}</span>
              <h2 className={styles.cardName}>{event.name}</h2>
              <span className={styles.cardCta}>View Event →</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
