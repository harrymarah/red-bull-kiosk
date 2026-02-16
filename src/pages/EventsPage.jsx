import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import styles from './EventsPage.module.css';

const events = [
  {
    name: 'Pro Climbing League',
    day: '28',
    month: 'Feb',
    location: 'London, United Kingdom',
    tag: 'Climbing',
    image: '/assets/images/events/pro-climbing-league.png',
  },
  {
    name: 'Red Bull BC One Cypher UK',
    day: '11',
    month: 'Apr',
    location: 'London, United Kingdom',
    tag: 'Breaking',
    image: '/assets/images/events/bc-one-cypher-uk.png',
  },
  {
    name: 'Red Bull Basement',
    day: '09',
    month: 'May',
    location: 'London, United Kingdom',
    tag: 'Innovation',
    image: '/assets/images/events/red-bull-basement.png',
  },
  {
    name: 'Red Bull Dance Your Style UK National Final',
    day: '30',
    month: 'May',
    location: 'London, United Kingdom',
    tag: 'Dance',
    image: '/assets/images/events/dance-your-style.png',
  },
  {
    name: 'Red Bull Soapbox Race London 2026',
    day: '20',
    month: 'Jun',
    location: 'Alexandra Palace, Great Britain',
    tag: 'Soapbox',
    featured: true,
    image: '/assets/images/events/soapbox-race.png',
  },
  {
    name: 'London Premier Padel P1',
    day: '03–09',
    month: 'Aug',
    location: 'London, United Kingdom',
    tag: 'Padel',
    image: '/assets/images/events/premier-padel.png',
  },
  {
    name: 'Red Bull Bring The Vim',
    day: '05',
    month: 'Sep',
    location: 'London, United Kingdom',
    tag: 'Music',
    image: '/assets/images/events/bring-the-vim.png',
  },
];

/* Group events by month */
const grouped = events.reduce((acc, event) => {
  const key = event.month;
  if (!acc[key]) acc[key] = [];
  acc[key].push(event);
  return acc;
}, {});

/* Find featured event */
const featured = events.find((e) => e.featured);

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
        <p className={styles.subtitle}>2026 CALENDAR</p>
        <GradientDivider />
      </header>

      {/* Year strip */}
      <div className={styles.yearStrip}>2026</div>

      {/* Featured event */}
      {featured && (
        <section className={styles.featured}>
          <img
            src={featured.image}
            alt={featured.name}
            className={styles.featuredImage}
          />
          <div className={styles.featuredOverlay}>
            <h2 className={styles.featuredName}>{featured.name}</h2>
            <span className={styles.featuredDate}>{featured.day} {featured.month} 2026</span>
          </div>
        </section>
      )}

      {/* Month groups */}
      {Object.entries(grouped).map(([month, monthEvents]) => (
        <section key={month} className={styles.monthBlock}>
          <div className={styles.monthHeader}>
            <span className={styles.monthName}>{month}</span>
            <span className={styles.eventCount}>
              {monthEvents.length} {monthEvents.length === 1 ? 'event' : 'events'}
            </span>
          </div>
          {monthEvents.map((event) => (
            <div key={event.name} className={styles.eventCard}>
              <div className={styles.dateBadge}>
                <span className={styles.dateDay}>{event.day}</span>
                <span className={styles.dateMonth}>{event.month}</span>
              </div>
              <div className={styles.eventDetails}>
                <h4 className={styles.eventName}>{event.name}</h4>
                <p className={styles.eventLocation}>{event.location}</p>
                <span className={styles.eventTag}>{event.tag}</span>
              </div>
              <img
                src={event.image}
                alt={event.name}
                className={styles.eventThumb}
                loading="lazy"
              />
            </div>
          ))}
        </section>
      ))}

      {/* Footer */}
      <footer className={styles.footer}>
        RED BULL KIOSK EXPERIENCE · OFFLINE READY
      </footer>
    </div>
  );
}
