import { beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { withDB } from "../testing.ts";
import type { Insight } from "$models/insight.ts";
import deleteInsight from "./delete-insight.ts";
import listInsights from "./list-insights.ts";

describe("Delete insight", () => {
  describe("Insight is deleted", () => {
    withDB((fixture) => {
      const insights: Insight[] = [
        { id: 1, brand: 0, createdAt: new Date(), text: "1" },
        { id: 2, brand: 0, createdAt: new Date(), text: "2" },
        { id: 3, brand: 1, createdAt: new Date(), text: "3" },
        { id: 4, brand: 4, createdAt: new Date(), text: "4" },
      ];
      let result: Insight | undefined;

      beforeAll(() => {
        fixture.insights.insert(
          insights.map((it) => ({
            ...it,
            createdAt: it.createdAt.toISOString(),
          })));

        deleteInsight({ ...fixture, id: 0});
      });

      it("Insight deleted", () => {
        let insights = listInsights({...fixture});
        expect(insights.find(x => x.id == 0)).toBeUndefined();
      });
    });
  });
});
