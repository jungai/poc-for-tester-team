import got from "got";

describe("With server", () => {
  it("should get 200", async () => {
    expect.assertions(1);

    const res = await got
      .get("http://localhost:3000/")
      .json<{ hello: string }>();

    expect(res.hello).toBe("root");
  });

  it("should get 400", async () => {
    // number of assertions in this test
    expect.assertions(2);

    try {
      await got
        .get("http://localhost:3000/error-400")
        .json<{ hello: string }>();

      // not call
      expect(true).toBeFalsy();
    } catch (error: any) {
      const status = error.response.statusCode;

      // string
      const customError = error.response.body;

      expect(status).toBe(400);
      expect(JSON.parse(customError)).toMatchObject({ hello: "error 400" });
    }
  });

  it("should get 500", async () => {
    expect.assertions(2);

    try {
      await got
        .get("http://localhost:3000/error-500")
        .json<{ hello: string }>();

      // not call
      expect(true).toBeFalsy();
    } catch (error: any) {
      const status = error.response.statusCode;
      // string
      const customError = error.response.body;

      expect(status).toBe(500);
      expect(JSON.parse(customError)).toMatchObject({ hello: "error 500" });
    }
  });
});
