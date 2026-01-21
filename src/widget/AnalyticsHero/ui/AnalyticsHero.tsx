import styles from './AnalyticsHero.module.scss';

export default function AnalyticsHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>Analytics dashboard</h1>
        <p>
          Get a clear overview of interview performance and answer quality.
          Track key metrics and trends across all interviews.
        </p>
        <div className={styles.controls}>
          <div className={styles.scope}>
            <h4>Scope</h4>
            <p>All interviews</p>
          </div>
          <div className={styles.update}>
            <h4>Update</h4>
            <p>Real-time data</p>
          </div>
          <div className={styles.filter}>
            <h4>Filters</h4>
            <p>Date-based</p>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src="/img/analytics_hero.png" alt="Analytics" />
      </div>
    </div>
  );
}