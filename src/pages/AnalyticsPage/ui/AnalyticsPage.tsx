import Header from "@/widget/Header";
import AnalyticsHero from "@/widget/AnalyticsHero";
import AnalyticsMetrics from "@/widget/AnalyticsMetrics";
import styles from "./AnalyticsPage.module.scss";

export default function AnalyticsPage() {
  const mockAnalytics = {
    total_interviews: 100,
    total_questions: 200,
    total_answered: 145,
    global_answered_percent: 70,
    global_average_accuracy: 70,
    best_interview_id: 1234,
    best_interview_score: 92,
    worst_interview_id: 4321,
    worst_interview_score: 41,
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <AnalyticsHero />
        <AnalyticsMetrics data={mockAnalytics} />
      </div>
    </div>
  );
}
