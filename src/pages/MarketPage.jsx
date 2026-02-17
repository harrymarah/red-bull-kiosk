import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import InteractiveChart from '../components/InteractiveChart';
import styles from './MarketPage.module.css';

const secondaryStats = [
  { num: '950M', label: 'UK Cans Sold' },
  { num: '#1', label: 'Energy Drink' },
  { num: '129M', label: '250ml Packs' },
];

// Data from Nielsen Scantrack — Top 10 Food & Drink by units
const chartBars = [
  { label: 'RB 250ml', value: 129, highlight: true },
  { label: 'Coca-Cola', value: 111, highlight: false },
  { label: 'Warburtons', value: 106, highlight: false },
  { label: 'Hovis', value: 98, highlight: false },
  { label: 'Milk', value: 77, highlight: false },
  { label: 'Pepsi 2L', value: 76, highlight: false },
  { label: 'RB 355ml', value: 76, highlight: true },
  { label: 'Cola 1.75L', value: 74, highlight: false },
  { label: 'RB 473ml', value: 65, highlight: true },
  { label: 'Lurpak', value: 44, highlight: false },
];

const infoStats = [
  { num: '180', label: 'Countries' },
  { num: '100+', label: 'Disciplines' },
  { num: '850+', label: 'Global Athletes' },
  { num: '1,250+', label: 'Events Created' },
];

export default function MarketPage() {
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
        <h1 className={styles.title}>CATEGORY</h1>
        <p className={styles.subtitle}>Market Performance</p>
        <GradientDivider />
      </header>

      {/* Hero stat — 9.8B */}
      <section className={styles.heroStat}>
        <div className={styles.heroImagePlaceholder} aria-hidden="true" />
        <div className={styles.heroOverlay}>
          <span className={styles.heroBigNumber}>9.8B</span>
          <span className={styles.heroStatLabel}>Cans Sold Worldwide</span>
        </div>
      </section>

      {/* Secondary stats row */}
      <div className={styles.statRow}>
        {secondaryStats.map((stat) => (
          <div key={stat.label} className={styles.statBox}>
            <span className={styles.statNum}>{stat.num}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.dividerSpacing}><GradientDivider /></div>

      {/* Bar chart — Top 10 Food & Drink */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>TOP 10 FOOD &amp; DRINK</h3>
        <p className={styles.sectionSubtitle}>Units Sold (Millions)</p>
        <InteractiveChart bars={chartBars} />
        <p className={styles.chartSource}>
          Source: Nielsen Scantrack · Total Coverage · Packaged F&amp;D Universe · 52 w/e 22.03.25
        </p>
      </section>

      {/* Red Bull sells more packs callout */}
      <section className={styles.callout}>
        <div className={styles.calloutGlow} aria-hidden="true" />
        <p className={styles.calloutHeadline}>
          Red Bull 250ml sells more packs than any other food &amp; drink product
        </p>
        <div className={styles.calloutRule} aria-hidden="true" />
        <p className={styles.calloutSub}>Nielsen Scantrack · 52 w/e 22.03.25</p>
      </section>

      <div className={styles.dividerSpacing}><GradientDivider /></div>

      {/* Global brand stats */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>A GLOBAL BRAND</h3>
        <div className={styles.infoGrid}>
          {infoStats.map((stat) => (
            <div key={stat.label} className={styles.infoCard}>
              <span className={styles.infoNum}>{stat.num}</span>
              <span className={styles.infoLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.dividerSpacing}><GradientDivider /></div>

      {/* Image placeholder block */}
      <section className={styles.imagePlaceholderBlock}>
        <div className={styles.imagePlaceholder}>
          [ Market growth / share image ]
        </div>
      </section>

    </div>
  );
}
