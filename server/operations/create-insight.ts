import type { HasDBClient } from "../shared.ts";
import type * as insightsTable from "$tables/insights.ts";
import { insertStatement } from "../tables/insights.ts";

type Input = HasDBClient & {
  id: number;
  brand: number;
  text: string;
};

export default (input: Input) => {
  console.log(`starting create insight`);

  const date = Date.now();
  const sqlStatement = insertStatement({brand: input.brand, createdAt: date.toString(), text: input.text});
  const row = input.db.sql<insightsTable.Row>`${sqlStatement}`;

  if (row) {
    const result = { id:row[0].id, brand:row[0].brand, createdAt:row[0].createdAt, text:row[0].text };
    console.log("Insight created:", result);
    return;
  }

  console.log("Insight not created");
  return;
};
