import { beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { withDB } from "../testing.ts";
import type { Insight } from "$models/insight.ts";
import createInsight from "./create-insight.ts";

describe("Create insight", () => {
  describe("Insight is created", () => {
    withDB((fixture) => {
      let result: Insight | undefined;

      beforeAll(() => {
        createInsight({ ...fixture, id: 0, brand: 0, text:'Test' });
      });

      it("returns nothing", () => {
        expect(result).toBeUndefined();
      });
    });
  });
});
