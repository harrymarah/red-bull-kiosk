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
    </div>
  );
}
