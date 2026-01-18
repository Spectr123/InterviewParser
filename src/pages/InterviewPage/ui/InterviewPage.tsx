import Header from "@/widget/Header";
import styles from "./InterviewPage.module.scss";
import InterviewWelcome from "@/widget/InterwiewWelcome";

export default function InterviewPage() {
  return(
    <div className={styles.main}>
        <Header />
        <InterviewWelcome />
    </div>
  ) 
}
