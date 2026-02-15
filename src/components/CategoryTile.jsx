import { Link } from 'react-router-dom';
import styles from './CategoryTile.module.css';

export default function CategoryTile({ to, title, subtitle, image, span = 'full' }) {
  return (
    <Link to={to} className={`${styles.tile} ${styles[span]}`}>
      {image && <img src={image} alt="" className={styles.image} />}
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.arrow} aria-hidden="true">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M2 2L10 10L2 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}
