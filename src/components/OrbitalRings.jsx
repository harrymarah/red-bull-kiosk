import styles from './OrbitalRings.module.css';

export default function OrbitalRings() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.glow} />
      <div className={`${styles.ring} ${styles.ringInner}`} />
      <div className={`${styles.ring} ${styles.ringMid}`} />
      <div className={`${styles.ring} ${styles.ringOuter}`} />
      <div className={`${styles.ring} ${styles.ringOutermost}`} />
    </div>
  );
}
