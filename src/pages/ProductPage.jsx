import { Link } from 'react-router-dom';
import GradientDivider from '../components/GradientDivider';
import ProductCard from '../components/ProductCard';
import InteractiveChart from '../components/InteractiveChart';
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

// Data from Manufacturers website — caffeine content by drink (mg)
const caffeineBars = [
  { label: 'Large Americano',    value: 300, highlight: false, sub: 'Large Americano Coffee — 590ml' },
  { label: 'Medium Americano',   value: 225, highlight: false, sub: 'Medium Americano Coffee — 470ml' },
  { label: 'Energy Shot',        value: 210, highlight: false, sub: 'Typical Energy Shot — 60ml' },
  { label: 'Energy Drink 500ml', value: 160, highlight: false, sub: 'Typical Energy Drink — 500ml' },
  { label: 'Red Bull 473ml',     value: 151, highlight: true,  sub: 'Red Bull Energy Drink — 473ml' },
  { label: 'Small Americano',    value: 150, highlight: false, sub: 'Small Americano Coffee — 235ml' },
  { label: 'Red Bull 355ml',     value: 114, highlight: true,  sub: 'Red Bull Energy Drink — 355ml' },
  { label: 'Red Bull 250ml',     value: 80,  highlight: true,  sub: 'Red Bull Energy Drink — 250ml' },
  { label: 'Single Espresso',    value: 75,  highlight: false, sub: 'Single Espresso — 30ml' },
  { label: 'Black Tea',          value: 47,  highlight: false, sub: 'Black Tea — 235ml' },
  { label: 'Cola',               value: 34,  highlight: false, sub: 'Cola — 330ml' },
];

// Data from Food Chemistry (Belitz et al., 2004), Stiftung Warentest (7/2012), USDA Nutrient Database
const sugarBars = [
  { label: 'Cola',              value: 35, highlight: false, sub: 'Cola — 330ml' },
  { label: 'Grape Juice',       value: 30, highlight: false, sub: 'Grape Juice — 250ml' },
  { label: 'Red Bull 250ml',    value: 27, highlight: true,  sub: 'Red Bull Energy Drink — 250ml' },
  { label: 'Apple Juice',       value: 26, highlight: false, sub: 'Apple Juice — 250ml' },
  { label: 'Orange Juice',      value: 23, highlight: false, sub: 'Orange Juice — 250ml' },
  { label: 'Sport Drink',       value: 20, highlight: false, sub: 'Sport Drink — 500ml' },
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

      {/* Caffeine comparison chart */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>CAFFEINE COMPARISON</h3>
        <p className={styles.sectionSubtitle}>Milligrams per serving</p>
        <InteractiveChart
          bars={caffeineBars}
          unit="mg"
          scrollable
          highlightColor="yellow"
          referenceLine={{ value: 200, label: '200mg single-dose max' }}
        />
        <p className={styles.chartSource}>Source: Manufacturers website</p>
      </section>

      <GradientDivider />

      {/* Sugar comparison chart */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>SUGAR COMPARISON</h3>
        <p className={styles.sectionSubtitle}>Grams of sugar per serving</p>
        <InteractiveChart
          bars={sugarBars}
          unit="g"
          highlightColor="blue"
        />
        <p className={styles.chartSource}>Source: Food Chemistry (Belitz et al., 2004); Stiftung Warentest 7/2012; USDA Nutrient Database</p>
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

      {/* New product spotlight — Cherry Sakura */}
      <section className={styles.hero}>
        <div className={styles.newProductGlow} aria-hidden="true" />
        <span className={styles.heroChip}>New for 2026</span>
        <img
          src="/assets/images/product_images/GB_CS_355ml_AC_The Spring Edition_COUNTRY_RGB_PACKRQ-3810_Cold_Open_Front_DRES.png"
          alt="Spring Edition — Cherry Sakura"
          className={styles.heroCan}
        />
        <h2 className={styles.heroName}>SPRING EDITION</h2>
        <p className={styles.heroDetail}>Cherry Sakura · 355ml</p>
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

    </div>
  );
}
