import styles from "./InterviewGuide.module.scss";

function InterviewGuide() {
  return (
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
  );
}

export default InterviewGuide;