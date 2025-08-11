import type { HasDBClient } from "../shared.ts";
import type * as insightsTable from "$tables/insights.ts";
import { deleteStatement, insertStatement } from "../tables/insights.ts";

type Input = HasDBClient & {
  id: number;
};

export default (input: Input) => {
  console.log(`starting delete insight`);

  const sqlStatement = deleteStatement({id: input.id});
  const row = input.db.sql<insightsTable.Row>`${sqlStatement}`;

  if (row) {
    console.log("Insight deleted:");
    return;
  }

  console.log("Insight not deleted");
  return;
};
