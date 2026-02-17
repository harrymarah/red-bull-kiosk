import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import ProductCard from '../components/ProductCard';
import styles from './NewProductsPage.module.css';

const newProducts = [
  {
    name: 'Spring Edition',
    flavour: 'Cherry Sake',
    size: '355ml',
    image: '/assets/images/product_images/GB_CS_355ml_AC_The Spring Edition_COUNTRY_RGB_PACKRQ-3810_Cold_Open_Front_DRES.png',
    description: 'A light, floral sweetness with a crisp finish.',
    accentColor: 'spring',
  },
  {
    name: 'Peach Edition',
    flavour: 'White Peach',
    size: '355ml',
    image: '/assets/images/product_images/GB_SF-WP_355ml_AC_The Peach Edition Sugarfree_COUNTRY_RGB_PACKRQ-3190_Cold_Open_Front_DRES.png',
    description: 'Smooth, delicate stone-fruit flavour.',
    accentColor: 'peach',
  },
  {
    name: 'Apple Edition',
    flavour: 'Fuji Apple & Ginger',
    size: '355ml',
    image: '/assets/images/product_images/GB_SF-FAI_355ml_AC_The Apple Edition Sugarfree_COUNTRY_RGB_PACKRQ-3955_Cold_Open_Front_DRES.png',
    description: 'Crisp apple with a warm ginger kick.',
    accentColor: 'apple',
  },
];

const fullEditions = [
  { name: 'Spring Edition', size: '355ml', image: '/assets/images/product_images/GB_CS_355ml_AC_The Spring Edition_COUNTRY_RGB_PACKRQ-3810_Cold_Open_Front_DRES.png' },
  { name: 'Peach Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-WP_355ml_AC_The Peach Edition Sugarfree_COUNTRY_RGB_PACKRQ-3190_Cold_Open_Front_DRES.png' },
  { name: 'Apple Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-FAI_355ml_AC_The Apple Edition Sugarfree_COUNTRY_RGB_PACKRQ-3955_Cold_Open_Front_DRES.png' },
  { name: 'Pink Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-FF_355ml_AC_The Pink Edition Sugarfree_COUNTRY_RGB__Cold_Open_Front_DRES.png' },
  { name: 'Lilac Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-WPG_355ml_AC_The Lilac Edition Sugarfree_COUNTRY_RGB_PACKRQ-2697_Cold_Open_Front_DRES.png' },
  { name: 'Coconut Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-CC_355ml_AC_The Coconut Edition Sugarfree_COUNTRY_RGB_auto_Cold_Open_Front_DRES.png' },
  { name: 'Blue Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-JB_355ml_AC_The Blue Edition Sugarfree_COUNTRY_RGB_auto_Cold_Open_Front_DRES.png' },
  { name: 'Ice Edition', size: '355ml', image: '/assets/images/product_images/GB_SF-IGB_355ml_AC_The Ice Edition Sugarfree_COUNTRY_RGB_PACKRQ-2744_Cold_Open_Front_DRES.png' },
];

const editionsBenefits = [
  { icon: 'T', label: 'Consumer\nChoice', color: 'gold' },
  { icon: 'F', label: 'Same\nFunctionality', color: 'cyan' },
  { icon: 'SF', label: 'Sugarfree\nOptions', color: 'blue' },
];

const heroProduct = newProducts[0];

export default function NewProductsPage() {
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
        <h1 className={styles.title}>NEW PRODUCTS</h1>
        <p className={styles.subtitle}>Latest Additions to the Range</p>
        <GradientDivider />
      </header>

      {/* Hero spotlight */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <span className={styles.heroChip}>New for 2026</span>
        <img
          src={heroProduct.image}
          alt={heroProduct.name}
          className={styles.heroCan}
        />
        <h2 className={styles.heroName}>{heroProduct.name.toUpperCase()}</h2>
        <p className={styles.heroDetail}>{heroProduct.flavour} &bull; {heroProduct.size} Sugarfree</p>
      </section>

      <GradientDivider />

      {/* New for 2026 highlights */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>NEW FOR 2026</h3>
        <div className={styles.newGrid}>
          {newProducts.map((product) => (
            <div key={product.name} className={styles.newCard}>
              <div className={styles.newCardImageWrap}>
                <span className={styles.newBadge}>NEW</span>
                <img src={product.image} alt={product.name} className={styles.newCardImage} />
              </div>
              <span className={styles.newCardName}>{product.name}</span>
              <span className={styles.newCardFlavour}>{product.flavour}</span>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Flavour profiles */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>FLAVOUR PROFILES</h3>
        <div className={styles.flavourCards}>
          {newProducts.map((product) => (
            <div key={product.name} className={styles.flavourCard}>
              <div className={`${styles.flavourSwatch} ${styles[product.accentColor]}`} />
              <div className={styles.flavourText}>
                <h4 className={styles.flavourName}>{product.name}</h4>
                <p className={styles.flavourDesc}>{product.flavour} — {product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Editions explained */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>RED BULL EDITIONS</h3>
        <p className={styles.editionsSubhead}>Same Functionality, Different Taste</p>
        <div className={styles.editionsBenefits}>
          {editionsBenefits.map((item) => (
            <div key={item.icon} className={styles.benefitItem}>
              <div className={`${styles.benefitIcon} ${styles[item.color]}`}>
                {item.icon}
              </div>
              <span className={styles.benefitLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      {/* Full editions range */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>FULL EDITIONS RANGE</h3>
        <div className={styles.rangeGrid}>
          {fullEditions.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              size={product.size}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        ALL EDITIONS &bull; SUGARFREE &bull; 355ML
      </footer>
    </div>
  );
}
