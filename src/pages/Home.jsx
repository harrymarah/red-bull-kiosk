import { useEffect, useRef, useCallback } from 'react';
import OrbitalRings from '../components/OrbitalRings';
import GradientDivider from '../components/GradientDivider';
import CategoryTile from '../components/CategoryTile';
import styles from './Home.module.css';

const categories = [
  {
    id: 'product',
    title: 'PRODUCT',
    subtitle: '9.8 BILLION CANS \u2022 THE FULL RANGE',
    span: 'full',
    to: '/category/product',
    image: '/assets/images/red-bull-can.webp',
  },
  {
    id: 'brand',
    title: 'BRAND',
    subtitle: 'WORLD OF RED BULL',
    span: 'wide',
    to: '/category/brand',
  },
  {
    id: 'fitness',
    title: 'FITNESS',
    subtitle: 'ACTIVATIONS',
    span: 'narrow',
    to: '/category/fitness',
  },
  {
    id: 'events',
    title: '2026',
    subtitle: 'EVENTS',
    span: 'narrow',
    to: '/category/events',
  },
  {
    id: 'chillers',
    title: 'CHILLERS',
    subtitle: 'POS SOLUTIONS',
    span: 'wide',
    to: '/category/chillers',
  },
  {
    id: 'new-products',
    title: 'NEW PRODUCTS',
    subtitle: 'NPD \u2022 COMING SOON',
    span: 'full',
    to: '/category/new-products',
  },
];

export default function Home() {
  const gridRef = useRef(null);

  const runAttract = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const tiles = grid.querySelectorAll('[data-tile]');
    tiles.forEach((tile, i) => {
      setTimeout(() => {
        tile.setAttribute('data-attract', '');
        setTimeout(() => tile.removeAttribute('data-attract'), 300);
      }, i * 150);
    });
  }, []);

  useEffect(() => {
    const id = setInterval(runAttract, 45000);
    return () => clearInterval(id);
  }, [runAttract]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <OrbitalRings />
        <h1 className={styles.title}>PERFORM X</h1>
        <div className={styles.logo} aria-label="Red Bull">
          {/* Placeholder — replace with supplied Red Bull logo asset */}
          <img src="/assets/images/red-bull-logo.png" alt="Red Bull" className={styles.logoImg} />
        </div>
        <p className={styles.tagline}>Red Bull Gives You Wiiings</p>
        <p className={styles.cta}>TOUCH TO EXPLORE</p>
        <GradientDivider />
      </header>

      <main className={styles.grid} ref={gridRef}>
        {categories.map((cat) => (
          <CategoryTile
            key={cat.id}
            to={cat.to}
            title={cat.title}
            subtitle={cat.subtitle}
            span={cat.span}
            image={cat.image}
            data-tile
          />
        ))}
      </main>

      <footer className={styles.footer}>
        RED BULL KIOSK EXPERIENCE &bull; <span className={styles.offlineLabel}>OFFLINE READY</span><span className={styles.statusDot} />
      </footer>
    </div>
  );
}
