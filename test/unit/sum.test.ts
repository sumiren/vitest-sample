import { describe, test, expect } from "vitest";
import { sum } from "../../src/sum"

describe("vitest sample", () => {
  test("sum", async ()=> {
    expect(await (sum(1,2))).toBe(3);
  })
})
