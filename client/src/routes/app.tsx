import { useEffect, useState } from "react";
import { Header } from "../components/header/header.tsx";
import { Insights } from "../components/insights/insights.tsx";
import styles from "./app.module.css";
import type { Insight } from "../schemas/insight.ts";

export const App = () => {
  const [insights, setInsights] = useState<Insight[]>([]);

  function deleteInsightCalled({ id }: { id: number }) {
    const remainingInsights = insights.filter((x) => x.id !== id);
    setInsights(remainingInsights);
  }

  useEffect(() => {
    fetch(`/api/insights`).then((res) => setInsights(res.json()));
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Insights
        className={styles.insights}
        insights={insights}
        onDelete={deleteInsightCalled}
      />
    </main>
  );
};
