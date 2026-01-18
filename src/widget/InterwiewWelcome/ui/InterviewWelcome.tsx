import styles from "./InterviewWelcome.module.scss";

function InterviewWelcome() {
  return (
    <div className={styles.top}>
      <div className={styles.left}>
        <h1>Real-time<br />Voice Interview</h1>
        <p>
          Experience a natural voice interview with an AI interviewer. Answer
          out loud and listen to questions in real time.
        </p>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h4>Format</h4>
            <p>Voice conversation</p>
          </div>
          <div className={styles.block}>
            <h4>Duration</h4>
            <p>~10–15 minutes</p>
          </div>
          <div className={styles.block}>
            <h4>Evaluation</h4>
            <p>Logic, clarity, confidence</p>
          </div>
        </div>
      </div>
      <img
        src="/img/InterviewWelcome.png"
        alt="InterviewWelcome"
        className={styles.image}
      />
    </div>
  );
}

export default InterviewWelcome;
