import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import styles from './BrandPage.module.css';

const stats = [
  { value: '850+', label: 'Global Athletes' },
  { value: '180', label: 'Countries' },
  { value: '100', label: 'Disciplines' },
  { value: '1250+', label: 'Events' },
];

const playgrounds = [
  { name: 'Music', image: '/assets/images/worb/playgrounds/music.jpg' },
  { name: 'Motorsports', image: '/assets/images/worb/playgrounds/motorsports.jpg' },
  { name: 'Gaming', image: '/assets/images/worb/playgrounds/gaming.jpg' },
  { name: 'Dance', image: '/assets/images/worb/playgrounds/dance.jpg' },
  { name: 'Snow', image: '/assets/images/worb/playgrounds/snow.jpg' },
  { name: 'Bike', image: '/assets/images/worb/playgrounds/bike.jpg' },
  { name: 'Water', image: '/assets/images/worb/playgrounds/water.jpg' },
  { name: 'Athlete', image: '/assets/images/worb/playgrounds/athlete.jpg' },
  { name: 'Sports', image: '/assets/images/worb/playgrounds/sports.jpg' },
];

const occasions = [
  { name: 'Driving', image: '/assets/images/worb/occasions/driving.png' },
  { name: 'Commuting', image: '/assets/images/worb/occasions/commuting.png' },
  { name: 'Partying', image: '/assets/images/worb/occasions/partying.png' },
  { name: 'Studying', image: '/assets/images/worb/occasions/studying.png' },
  { name: 'Sports', image: '/assets/images/worb/occasions/sports.png' },
  { name: 'Working', image: '/assets/images/worb/occasions/working.png' },
  { name: 'Stay Fit', image: '/assets/images/worb/occasions/stay-fit.png' },
  { name: 'Gaming', image: '/assets/images/worb/occasions/gaming.png' },
];

const footballClubs = [
  { name: 'Leeds United', logo: '/assets/images/worb/clubs/leeds.svg' },
  { name: 'Aston Villa', logo: '/assets/images/worb/clubs/aston-villa.svg' },
  { name: 'Crystal Palace', logo: '/assets/images/worb/clubs/crystal-palace.svg' },
  { name: 'Everton', logo: '/assets/images/worb/clubs/everton.svg' },
  { name: 'Fulham', logo: '/assets/images/worb/clubs/fulham.svg' },
  { name: 'Leicester City', logo: '/assets/images/worb/clubs/leicester.svg' },
  { name: 'Newcastle', logo: '/assets/images/worb/clubs/newcastle.svg' },
  { name: 'Nott\'m Forest', logo: '/assets/images/worb/clubs/forest.svg' },
  { name: 'West Ham', logo: '/assets/images/worb/clubs/west-ham.svg' },
];

export default function BrandPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

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
        <h1 className={styles.title}>BRAND</h1>
        <p className={styles.subtitle}>WORLD OF RED BULL</p>
        <GradientDivider />
      </header>

      {/* Hero banner */}
      <section className={styles.hero}>
        <img
          src="/assets/images/worb/hero.jpg"
          alt="Red Bull athlete in flight"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h2 className={styles.heroTagline}>GIVING WIIINGS TO PEOPLE & IDEAS</h2>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      <GradientDivider />

      {/* Video */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>RED BULL 2026</h3>
        <div className={styles.videoWrap} onClick={toggleVideo}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/assets/video/red-bull-2026.mp4"
            playsInline
            preload="metadata"
            poster="/assets/images/worb/hero.jpg"
            onEnded={() => setPlaying(false)}
          />
          <div className={`${styles.playOverlay} ${playing ? styles.playing : ''}`}>
            <div className={styles.playButton} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="8" y="6" width="5" height="20" rx="1" fill="currentColor" />
                  <rect x="19" y="6" width="5" height="20" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10 6L26 16L10 26V6Z" fill="currentColor" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Playgrounds */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>OUR PLAYGROUNDS</h3>
        <div className={styles.playgroundsGrid}>
          {playgrounds.map((pg) => (
            <div key={pg.name} className={styles.playgroundTile}>
              <img src={pg.image} alt={pg.name} className={styles.playgroundImage} loading="lazy" />
              <span className={styles.playgroundLabel}>{pg.name}</span>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Consumption occasions */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>CONSUMPTION OCCASIONS</h3>
        <div className={styles.occasionsGrid}>
          {occasions.map((occ) => (
            <div key={occ.name} className={styles.occasionItem}>
              <div className={styles.occasionCircle}>
                <img src={occ.image} alt={occ.name} className={styles.occasionImage} loading="lazy" />
              </div>
              <span className={styles.occasionLabel}>{occ.name}</span>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Football partnerships */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>FOOTBALL PARTNERSHIPS</h3>
        <div className={styles.partnersGrid}>
          {footballClubs.map((club) => (
            <div key={club.name} className={styles.partnerBadge}>
              <img src={club.logo} alt={club.name} className={styles.partnerLogo} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        RED BULL KIOSK EXPERIENCE · OFFLINE READY
      </footer>
    </div>
  );
}
