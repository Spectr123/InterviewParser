import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/widget/Header";
import InterviewResultMetrics from "@/widget/InterviewResultMetrics";
import { interviewApi } from "@/shared/api";
import styles from "./ResultPage.module.scss";

interface QuestionData {
  id: number;
  title: string;
  score: number;
}

interface MetricsData {
  averageAccuracy: number;
  answeredQuestions: number;
  totalQuestions: number;
  confidenceScore: string;
  sessionDuration: string;
}

interface InterviewResultData {
  interviewId: number;
  totalScore: number;
  candidateLevel: string;
  verdict: string;
  aiSummary: string;
  metrics: MetricsData;
  questions: QuestionData[];
}

/* const mockResult = {
  interviewId: 1235,
  totalScore: 78,
  candidateLevel: "Strong Middle",
  verdict: "Suitable",
  aiSummary:
    "The candidate demonstrates strong communication skills and solid problem-solving abilities, with minor gaps in system thinking.",
  metrics: {
    averageAccuracy: 82,
    answeredQuestions: 8,
    totalQuestions: 8,
    confidenceScore: "High",
    sessionDuration: "14 min",
  },
  questions: [
    {
      id: 1,
      title: "Explain REST vs GraphQL",
      score: 72,
    },
    {
      id: 2,
      title: "Describe React lifecycle methods",
      score: 82,
    },
    {
      id: 3,
      title: "How does JavaScript event loop work?",
      score: 82,
    },
    {
      id: 1,
      title: "Explain REST vs GraphQL",
      score: 72,
    },
    {
      id: 2,
      title: "Describe React lifecycle methods",
      score: 82,
    },
    {
      id: 3,
      title: "How does JavaScript event loop work?",
      score: 82,
    },
  ],
}; */

export default function ResultPage() {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<InterviewResultData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchResult = async () => {
      try {
        const apiResult = await interviewApi.getInterview(parseInt(id));
        const totalQuestions = apiResult.qa.length;
        const answeredQuestions = apiResult.qa.filter(
          (q) => q.full_answer && q.full_answer.trim() !== "",
        ).length;
        const averageAccuracy =
          totalQuestions > 0
            ? Math.round(
                apiResult.qa.reduce((sum, q) => sum + q.accuracy, 0) /
                  totalQuestions,
              )
            : 0;

        const transformedResult: InterviewResultData = {
          interviewId: apiResult.id,
          totalScore: averageAccuracy,
          candidateLevel:
            averageAccuracy > 80
              ? "Strong"
              : averageAccuracy > 60
                ? "Middle"
                : "Junior",
          verdict: averageAccuracy > 70 ? "Suitable" : "Not Suitable",
          aiSummary: `The candidate answered ${answeredQuestions} out of ${totalQuestions} questions with an average accuracy of ${averageAccuracy}%.`,
          metrics: {
            averageAccuracy: averageAccuracy,
            answeredQuestions: answeredQuestions,
            totalQuestions: totalQuestions,
            confidenceScore:
              averageAccuracy > 80
                ? "High"
                : averageAccuracy > 60
                  ? "Medium"
                  : "Low",
            sessionDuration: "15 min",
          },
          questions: apiResult.qa.map((q) => ({
            id: q.id,
            title: q.question,
            score: q.accuracy,
          })),
        };

        setResult(transformedResult);
      } catch (error) {
        console.error("Ошибка запроса:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div>Result not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <InterviewResultMetrics data={result} />
      </div>
    </div>
  );
}
