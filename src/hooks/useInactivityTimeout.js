import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useInactivityTimeout(timeoutMs = 45000) {
  const navigate = useNavigate();
  const location = useLocation();
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (location.pathname !== '/') {
      timerRef.current = setTimeout(() => {
        navigate('/', { replace: true });
      }, timeoutMs);
    }
  }, [navigate, location.pathname, timeoutMs]);

  useEffect(() => {
    const events = ['pointerdown', 'pointermove', 'scroll', 'keydown'];

    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [resetTimer]);
}
