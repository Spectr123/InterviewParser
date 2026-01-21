import AppRouterProvider from "../providers/AppRouterProvider";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InterviewPage from "@/pages/InterviewPage/ui/InterviewPage";
import AnalyticsPage from "@/pages/AnalyticsPage";

function App() {
  return (
    <AppRouterProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </AppRouterProvider>
  );
}

export default App;
