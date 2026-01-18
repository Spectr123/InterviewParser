import styles from "./InterviewSettings.module.scss";

function InterviewSettings() {
  return (
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
  );
}

export default InterviewSettings;