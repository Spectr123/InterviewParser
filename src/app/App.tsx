import AppRouterProvider from "../providers/AppRouterProvider";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InterviewPage from "@/pages/InterviewPage/ui/InterviewPage";

function App() {
  return (
    <AppRouterProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </AppRouterProvider>
  );
}

export default App;
