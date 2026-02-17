import styles from './ProductCard.module.css';

export default function ProductCard({ image, name, size }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} loading="lazy" />
      </div>
      <span className={styles.name}>{name}</span>
      {size && <span className={styles.chip}>{size}</span>}
    </div>
  );
}
