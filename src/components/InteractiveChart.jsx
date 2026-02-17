import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './InteractiveChart.module.css'

const BAR_DETAIL = {
  'RB 250ml': { sub: '#1 Food & Drink product in the UK' },
  'RB 355ml': { sub: 'Red Bull Editions — 355ml format' },
  'RB 473ml': { sub: 'Red Bull — 473ml format' },
  'Coca-Cola': { sub: 'Coca-Cola Classic — 330ml' },
  Warburtons: { sub: 'Warburtons bread range' },
  Hovis: { sub: 'Hovis bread range' },
  Milk: { sub: 'Cloverdale Fresh Milk' },
  'Pepsi 2L': { sub: 'Pepsi — 2 litre' },
  'Cola 1.75L': { sub: 'Coca-Cola — 1.75 litre' },
  Lurpak: { sub: 'Lurpak Spreadable — 400g' },
}

export default function InteractiveChart({ bars }) {
  const [animated, setAnimated] = useState(false)
  const [selected, setSelected] = useState(null)
  const [counts, setCounts] = useState(() =>
    bars.reduce((acc, b) => ({ ...acc, [b.label]: 0 }), {})
  )
  const wrapperRef = useRef(null)
  const rafRef = useRef(null)
  const maxValue = Math.max(...bars.map((b) => b.value))

  // Trigger when chart scrolls into view (IO fires async, after initial 0% paint)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [])

  // Count-up tied to fill animation duration
  useEffect(() => {
    if (!animated) return
    const duration = 1500
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCounts(
        bars.reduce(
          (acc, b) => ({ ...acc, [b.label]: Math.round(b.value * eased) }),
          {}
        )
      )
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animated, bars])

  const handleSelect = useCallback((label) => {
    setSelected((prev) => (prev === label ? null : label))
  }, [])

  const selectedBar = bars.find((b) => b.label === selected)
  const hasSelection = selected !== null

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {/* Callout panel — slides in when a bar is selected */}
      <div
        className={`${styles.callout} ${
          hasSelection ? styles.calloutVisible : ''
        }`}
      >
        {selectedBar && (
          <div
            className={`${styles.calloutInner} ${
              selectedBar.highlight ? styles.calloutHighlight : ''
            }`}
          >
            <div className={styles.calloutTop}>
              <span className={styles.calloutName}>{selectedBar.label}</span>
              {selectedBar.highlight && (
                <span className={styles.calloutBadge}>Red Bull</span>
              )}
            </div>
            <span className={styles.calloutNum}>{selectedBar.value}M</span>
            <span className={styles.calloutSub}>
              {BAR_DETAIL[selectedBar.label]?.sub}
            </span>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className={styles.chart}>
        {bars.map((bar, i) => {
          const pct = (bar.value / maxValue) * 100
          const isSelected = selected === bar.label
          const isDimmed = hasSelection && !isSelected
          const isRbDimmed = isDimmed && bar.highlight

          return (
            <button
              key={bar.label}
              className={[
                styles.barCol,
                bar.highlight ? styles.rbCol : '',
                isSelected ? styles.colSelected : '',
                isDimmed ? styles.colDimmed : '',
                isRbDimmed ? styles.colRbDimmed : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => handleSelect(bar.label)}
              aria-label={`${bar.label}: ${bar.value} million units`}
              aria-pressed={isSelected}
            >
              {/* Count above bar */}
              <span className={styles.barValue}>{counts[bar.label]}M</span>

              {/* Bar container */}
              <div className={styles.barOuter}>
                <div
                  className={`${styles.barFill} ${
                    bar.highlight ? styles.barFillRb : ''
                  }`}
                  style={{
                    height: animated ? `${pct}%` : '0%',
                    transitionDelay: animated ? `${i * 0.07}s` : '0s',
                  }}
                >
                  {/* Liquid surface shimmer */}
                  <div className={styles.liquidSurface} />
                  {/* Inner shimmer sweep */}
                  <div className={styles.shimmer} />
                </div>
              </div>

              {/* Label */}
              <span className={styles.barLabel}>{bar.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tap hint */}
      <p className={styles.hint}>
        {hasSelection ? 'Tap again to reset' : 'TAP ANY BAR TO EXPLORE'}
      </p>
    </div>
  )
}
