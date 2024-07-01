import { describe, expect, it } from "vitest";
import * as loadLesson from "../loadLesson";

describe("loadLesson.loadLesson", () => {
  it("0", () => {
    let result: any = loadLesson.loadLesson(0);
    expect(result).toMatchSnapshot();
  });

  it("1", () => {
    let result: any = loadLesson.loadLesson(-5.48);
    expect(result).toMatchSnapshot();
  });

  it("2", () => {
    let result: any = loadLesson.loadLesson(100);
    expect(result).toMatchSnapshot();
  });

  it("3", () => {
    let result: any = loadLesson.loadLesson(-100);
    expect(result).toMatchSnapshot();
  });

  it("4", () => {
    let result: any = loadLesson.loadLesson(-Infinity);
    expect(result).toMatchSnapshot();
  });

  it("5", () => {
    let result: any = loadLesson.loadLesson(1);
    expect(result).toMatchSnapshot();
  });

  it("6", () => {
    let result: any = loadLesson.loadLesson(Infinity);
    expect(result).toMatchSnapshot();
  });
});
