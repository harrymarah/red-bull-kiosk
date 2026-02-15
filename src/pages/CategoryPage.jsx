import { useParams, Link } from 'react-router-dom';
import styles from './CategoryPage.module.css';

const categoryNames = {
  product: 'Product',
  brand: 'Brand / WORB',
  fitness: 'Fitness Activations',
  events: '2026 Events',
  chillers: 'Chillers / POS',
  'new-products': 'New Products',
};

export default function CategoryPage() {
  const { slug } = useParams();
  const name = categoryNames[slug] || slug;

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backButton}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Home
      </Link>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.placeholder}>Category page content coming soon.</p>
    </div>
  );
}
