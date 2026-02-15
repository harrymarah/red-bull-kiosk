import styles from './EquipmentCard.module.css';

export default function EquipmentCard({ image, name, spec }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        {spec && <p className={styles.spec}>{spec}</p>}
      </div>
    </div>
  );
}
