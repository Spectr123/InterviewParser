import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <div className={styles.main}>
      <h1>Interview Parser & Analyzer</h1>
      <p className={styles.description}>
        Your intelligent companion for interview preparation, recording, and
        analysis. Transform the way you handle interviews with AI-powered
        insights and real-time feedback.
      </p>
      <div className={styles.blocks}>
        <p>AI-Powered Analysis</p>
        <p>Real-time Recording</p>
        <p>Detailed Analytics</p>
      </div>
      <button>Start Interview</button>
    </div>
  );
}

export default Welcome;
