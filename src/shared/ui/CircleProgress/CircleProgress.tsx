import styles from './CircleProgress.module.scss';

interface CircleProgressProps {
  percentage: number;
  value: number | string;
  isPercentage?: boolean;
}

export default function CircleProgress({
  percentage,
  value,
  isPercentage = false,
}: CircleProgressProps) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className={styles.circleChart}>
      <svg className={styles.progressRing} width="200" height="200">
        <circle className={styles.progressRingBg} cx="100" cy="100" r={radius} />
        <circle
          className={styles.progressRingFill}
          cx="100"
          cy="100"
          r={radius}
          strokeDasharray={strokeDasharray}
          style={{
            stroke:
              percentage >= 70
                ? "#22c55e"
                : percentage >= 40
                  ? "#f59e0b"
                  : "#ef4444",
          }}
        />
      </svg>
      <div className={isPercentage ? styles.percentage : styles.number}>
        {isPercentage ? `${value}%` : value}
      </div>
    </div>
  );
}