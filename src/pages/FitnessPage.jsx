import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import ProductCard from '../components/ProductCard';
import styles from './FitnessPage.module.css';

const fitnessProducts = [
  { name: 'Zero', size: '250ml', image: '/assets/images/product_images/GB_ZR_250ml_Zero_COUNTRY_RGB_PACKRQ-1993_Cold_Open_Front_DRES.png' },
  { name: 'Sugarfree', size: '250ml', image: '/assets/images/product_images/GB_SF_250ml_Sugarfree_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Energy Drink', size: '250ml', image: '/assets/images/product_images/GB_ED_250ml_Energy Drink_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Pink Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-FF_355ml_AC_The Pink Edition Sugarfree_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Lilac Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-WPG_355ml_AC_The Lilac Edition Sugarfree_COUNTRY_RGB_PACKRQ-2697_Cold_Open_Front_DRES.png' },
  { name: 'Coconut Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-CC_355ml_AC_The Coconut Edition Sugarfree_COUNTRY_RGB_auto_Cold_Open_Front_DRES.png' },
  { name: 'Blue Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-JB_355ml_AC_The Blue Edition Sugarfree_COUNTRY_RGB_auto_Cold_Open_Front_DRES.png' },
  { name: 'Peach Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-WP_355ml_AC_The Peach Edition Sugarfree_COUNTRY_RGB_PACKRQ-3190_Cold_Open_Front_DRES.png' },
];

const rtmLogos = [
  { name: 'Active Trade Sports', image: '/assets/images/fitness/active-trade-sports 1.png' },
  { name: 'Protein Bargain Wholesale', image: '/assets/images/fitness/protein-bargain-wholesale-2 1 3.png' },
  { name: 'NutriStore', image: '/assets/images/fitness/NutriStore 1.png' },
  { name: 'Tropicana Wholesale', image: '/assets/images/fitness/tropicana-wholesale 1.png' },
  { name: 'Muscle Finesse', image: '/assets/images/fitness/muscle-finesse 1.png' },
];

export default function FitnessPage() {
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
        <h1 className={styles.title}>FITNESS</h1>
        <p className={styles.subtitle}>ACTIVATIONS</p>
        <GradientDivider />
      </header>

      {/* Hero split */}
      <section className={styles.heroSplit}>
        <div className={styles.heroImage}>
          <img src="/assets/images/fitness/hero-boxing.jpg" alt="Athlete training" />
        </div>
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>PERFORM X</h2>
          <p className={styles.heroBody}>
            Red Bull fuels fitness activations across the UK — from obstacle courses to functional training events.
          </p>
        </div>
      </section>

      {/* Action photo carousel */}
      <section className={styles.photoStrip}>
        {[1, 2, 3].map((n) => (
          <div key={n} className={styles.photoSlide}>
            <div className={`${styles.photoBlock} ${styles.tall}`}>
              <img src="/assets/images/fitness/red-bull-pit-race.jpeg" alt="Red Bull Pit Race" />
              <span className={styles.photoCaption}>Pit Race</span>
            </div>
            <div className={styles.photoBlock}>
              <img src="/assets/images/fitness/box-jump.jpg" alt="Box jump" />
              <span className={styles.photoCaption}>Box Jump</span>
            </div>
            <div className={styles.photoBlock}>
              <img src="/assets/images/fitness/tyre-flip.jpg" alt="Tyre carry" />
              <span className={styles.photoCaption}>Tyre Carry</span>
            </div>
          </div>
        ))}
      </section>

      {/* Fitness portfolio */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>FITNESS PORTFOLIO</h3>
        <div className={styles.portfolioGrid}>
          {fitnessProducts.map((product) => (
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

      {/* Route to Market */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>ROUTE TO MARKET</h3>
        <div className={styles.rtmGrid}>
          {rtmLogos.map((logo) => (
            <div key={logo.name} className={styles.rtmCard}>
              <img src={logo.image} alt={logo.name} className={styles.rtmLogo} />
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Featured activation */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>FEATURED ACTIVATION</h3>
        <div className={styles.featured}>
          <div className={styles.featuredImage}>
            <img src="/assets/images/fitness/red-bull-pit-race-winners.avif" alt="Red Bull Pit Race" />
          </div>
          <div className={styles.featuredInfo}>
            <h4 className={styles.featuredName}>RED BULL PIT RACE</h4>
            <p className={styles.featuredDesc}>Fitness competition — F1 inspired obstacle course</p>
          </div>
        </div>
      </section>

      {/* Full width closing image */}
      <section className={styles.closing}>
        <img src="/assets/images/fitness/beach-runner.jpg" alt="Outdoor fitness" className={styles.closingImage} />
        <h2 className={styles.closingText}>FUEL YOUR FITNESS</h2>
      </section>
    </div>
  );
}
