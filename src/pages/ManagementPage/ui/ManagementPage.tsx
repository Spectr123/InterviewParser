import Header from "@/widget/Header";
import ManagementHero from "@/widget/ManagementHero";
import styles from "./ManagementPage.module.scss";
import InterviewManager from "@/features/InterviewManager";

export default function ManagementPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <ManagementHero />
        <InterviewManager />
      </div>
    </div>
  );
}
