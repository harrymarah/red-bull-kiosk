import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useInactivityTimeout(timeoutMs = 45000) {
  const navigate = useNavigate();
  const location = useLocation();
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (pausedRef.current) return;

    if (location.pathname !== '/') {
      timerRef.current = setTimeout(() => {
        navigate('/', { replace: true });
      }, timeoutMs);
    }
  }, [navigate, location.pathname, timeoutMs]);

  useEffect(() => {
    const events = ['pointerdown', 'pointermove', 'scroll', 'keydown'];

    const onMediaPlay = () => {
      pausedRef.current = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    const onMediaStop = () => {
      pausedRef.current = false;
      resetTimer();
    };

    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));
    document.addEventListener('play', onMediaPlay, true);
    document.addEventListener('pause', onMediaStop, true);
    document.addEventListener('ended', onMediaStop, true);
    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      document.removeEventListener('play', onMediaPlay, true);
      document.removeEventListener('pause', onMediaStop, true);
      document.removeEventListener('ended', onMediaStop, true);
    };
  }, [resetTimer]);
}
