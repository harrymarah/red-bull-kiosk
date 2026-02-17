import { Outlet } from 'react-router-dom';
import { useInactivityTimeout } from '../hooks/useInactivityTimeout';
import styles from './Layout.module.css';

export default function Layout() {
  useInactivityTimeout(45000);

  return (
    <div className={styles.kiosk}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.footer}>
        RED BULL KIOSK EXPERIENCE &bull;{' '}
        <span className={styles.offlineLabel}>OFFLINE READY</span>
        <span className={styles.statusDot} />
      </footer>
    </div>
  );
}
