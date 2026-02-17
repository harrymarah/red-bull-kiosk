import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import EquipmentCard from '../components/EquipmentCard';
import styles from './ChillersPage.module.css';

const chillers = [
  { name: 'Baby Cooler', spec: 'Counter-top', image: '/assets/images/chillers/baby-cooler.png' },
  { name: 'Medium Slim GDC', spec: 'Floor standing', image: '/assets/images/chillers/medium-slim.png' },
  { name: 'Mega Slim GDC', spec: 'Floor standing', image: '/assets/images/chillers/megaslim-chiller.png' },
  { name: 'Can Cooler', spec: 'Portable', image: '/assets/images/chillers/can-cooler.png' },
];

const specialUnits = [
  { name: 'Refuel Station', spec: 'Branded display', image: '/assets/images/chillers/refuel-1.png' },
  { name: 'Counter Top Vending', spec: 'Compact unit', image: '/assets/images/chillers/counter-top-vending-2.png' },
];

const vending = [
  { name: 'Large G-Snack Vending', image: '/assets/images/chillers/large-g-snack-vending.png' },
  { name: 'Counter Top Vending', image: '/assets/images/chillers/counter-top-vending-1.png' },
];

const posItems = [
  'Chiller Toppers',
  'Vending Toppers',
  'Totems',
  'Strut Cards',
  'Posters',
  'Neon Signs',
  'Light Boxes',
  'Digital Screens',
];

export default function ChillersPage() {
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
        <h1 className={styles.title}>CHILLERS</h1>
        <p className={styles.subtitle}>POS SOLUTIONS</p>
        <GradientDivider />
      </header>

      {/* Hero showcase */}
      <section className={styles.hero}>
        <img
          src="/assets/images/chillers/megaslim.png"
          alt="Red Bull Mega Slim Chiller"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h2 className={styles.heroTitle}>CHILLER RANGE</h2>
          <p className={styles.heroDetail}>POINT OF SALE COOLING SOLUTIONS</p>
        </div>
      </section>

      {/* Equipment range */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>EQUIPMENT RANGE</h3>
        <div className={styles.equipmentGrid}>
          {chillers.map((item) => (
            <EquipmentCard
              key={item.name}
              image={item.image}
              name={item.name}
              spec={item.spec}
            />
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Special units */}
      <section className={styles.section}>
        <div className={styles.vendingGrid}>
          {specialUnits.map((item) => (
            <EquipmentCard
              key={item.name}
              image={item.image}
              name={item.name}
              spec={item.spec}
            />
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Vending */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>VENDING</h3>
        <div className={styles.vendingGrid}>
          {vending.map((item) => (
            <EquipmentCard
              key={item.name}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* POS Solutions */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>POS SOLUTIONS</h3>
        <div className={styles.posGrid}>
          {posItems.map((item) => (
            <div key={item} className={styles.posTile}>
              <span className={styles.posLabel}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing image */}
      <section className={styles.closing}>
        <img
          src="/assets/images/chillers/refuel-2.png"
          alt="Red Bull chiller in-store"
          className={styles.closingImage}
        />
        <div className={styles.closingOverlay}>
          <p className={styles.closingText}>PERFECT SERVE, EVERY TIME</p>
        </div>
      </section>

    </div>
  );
}
