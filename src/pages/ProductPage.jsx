import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import ProductCard from '../components/ProductCard';
import styles from './ProductPage.module.css';

const products = [
  { name: 'Energy Drink', size: '250ml', image: '/assets/images/product_images/GB_ED_250ml_Energy Drink_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Zero', size: '250ml', image: '/assets/images/product_images/GB_ZR_250ml_Zero_COUNTRY_RGB_PACKRQ-1993_Cold_Open_Front_DRES.png' },
  { name: 'Sugarfree', size: '250ml', image: '/assets/images/product_images/GB_SF_250ml_Sugarfree_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Pink Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-FF_355ml_AC_The Pink Edition Sugarfree_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Blue Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-JB_355ml_AC_The Blue Edition Sugarfree_COUNTRY_RGB_auto_Cold_Open_Front_DRES.png' },
  { name: 'Lilac Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-WPG_355ml_AC_The Lilac Edition Sugarfree_COUNTRY_RGB_PACKRQ-2697_Cold_Open_Front_DRES.png' },
  { name: 'Coconut Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-CC_355ml_AC_The Coconut Edition Sugarfree_COUNTRY_RGB_auto_Cold_Open_Front_DRES.png' },
  { name: 'Peach Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-WP_355ml_AC_The Peach Edition Sugarfree_COUNTRY_RGB_PACKRQ-3190_Cold_Open_Front_DRES.png' },
  { name: 'Ice Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-IGB_355ml_AC_The Ice Edition Sugarfree_COUNTRY_RGB_PACKRQ-2744_Cold_Open_Front_DRES.png' },
  { name: 'Apple Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-FAI_355ml_AC_The Apple Edition Sugarfree_COUNTRY_RGB_PACKRQ-3955_Cold_Open_Front_DRES.png' },
  { name: 'Spring Edition', size: '355ml', image: '/assets/images/product_images/GB_CS_355ml_AC_The Spring Edition_COUNTRY_RGB_PACKRQ-3810_Cold_Open_Front_DRES.png' },
];

const ingredients = [
  { letter: 'T', label: 'Taurine', color: 'cyan' },
  { letter: 'B', label: 'B-Vitamins', color: 'yellow' },
  { letter: 'C', label: 'Caffeine', color: 'red' },
  { letter: 'S', label: 'Sugars', color: 'blue' },
];

const heroProduct = products[0];

export default function ProductPage() {
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
        <h1 className={styles.title}>PRODUCT</h1>
        <p className={styles.subtitle}>THE RANGE</p>
        <GradientDivider />
      </header>

      {/* Hero — featured can */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <img
          src={heroProduct.image}
          alt={heroProduct.name}
          className={styles.heroCan}
        />
        <h2 className={styles.heroName}>RED BULL ENERGY DRINK</h2>
        <p className={styles.heroDetail}>250ML · THE ORIGINAL</p>
      </section>

      {/* Ingredients */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>WHAT'S IN THE CAN?</h3>
        <div className={styles.ingredientGrid}>
          {ingredients.map((ing) => (
            <div key={ing.letter} className={styles.ingredientItem}>
              <div className={`${styles.ingredientIcon} ${styles[ing.color]}`}>
                {ing.letter}
              </div>
              <span className={styles.ingredientLabel}>{ing.label}</span>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Product range grid */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>THE FULL RANGE</h3>
        <div className={styles.rangeGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              size={product.size}
            />
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Sugar-free callout */}
      <section className={styles.callout}>
        <div className={styles.calloutCans}>
          <img
            src={products[2].image}
            alt="Sugarfree"
            className={styles.calloutCan}
          />
          <img
            src={products[1].image}
            alt="Zero"
            className={styles.calloutCan}
          />
        </div>
        <div className={styles.calloutText}>
          <h3 className={styles.calloutTitle}>SUGARFREE & ZERO</h3>
          <p className={styles.calloutBody}>
            Same Wings. No Sugar. Available in 250ml across all major retailers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        RED BULL KIOSK EXPERIENCE · OFFLINE READY
      </footer>
    </div>
  );
}
