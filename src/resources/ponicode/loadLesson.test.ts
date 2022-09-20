import * as loadLesson from "../loadLesson";
// @ponicode
describe("loadLesson.loadLesson", () => {
  test("0", () => {
    let result: any = loadLesson.loadLesson(0);
    expect(result).toMatchSnapshot();
  });

  test("1", () => {
    let result: any = loadLesson.loadLesson(-5.48);
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result: any = loadLesson.loadLesson(100);
    expect(result).toMatchSnapshot();
  });

  test("3", () => {
    let result: any = loadLesson.loadLesson(-100);
    expect(result).toMatchSnapshot();
  });

  test("4", () => {
    let result: any = loadLesson.loadLesson(-Infinity);
    expect(result).toMatchSnapshot();
  });

  test("5", () => {
    let result: any = loadLesson.loadLesson(1);
    expect(result).toMatchSnapshot();
  });

  test("6", () => {
    let result: any = loadLesson.loadLesson(Infinity);
    expect(result).toMatchSnapshot();
  });
});
