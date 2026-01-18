import styles from "./InterviewWelcome.module.scss";

function InterviewWelcome() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>Real-time Voice Interview</h1>
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
      <div className={styles.bottom}>
        <div className={styles.settings}>
          <h2>Interview settings</h2>
          <form className={styles.form}>
            <div className={styles.field}>
              <label>Your CV</label>
              <textarea className={styles.bigarea} />
            </div>
            <div className={styles.field}>
              <label>Job Description</label>
              <textarea className={styles.bigarea} />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Specialization</label>
                <textarea className={styles.smallarea} />
              </div>
              <div className={styles.field}>
                <label>Experience level</label>
                <textarea className={styles.smallarea} />
              </div>
            </div>
            <button type="button" className={styles.startButton}>
              Start voice interview
            </button>
          </form>
        </div>
        <div className={styles.next}>
          <h3>What happens next</h3>
          <ul>
            <li>Voice interview starts immediately</li>
            <li>Questions adapt to your answers</li>
            <li>Interview takes ~10–15 minutes</li>
            <li>You'll receive AI feedback after completion</li>
          </ul>
          <div className={styles.tip}>
            <h4>Tip</h4>
            <p>
              Speak clearly and structure your answers. The AI evaluates both
              content and reasoning.
            </p>
          </div>
          <div className={styles.microphoneNote}>
            🎙️ Make sure your microphone is on
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewWelcome;
