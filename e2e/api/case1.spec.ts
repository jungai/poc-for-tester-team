import got from "got";

type TMockJsonPlaceholder = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

describe("json placeholder", () => {
  test("case1", async () => {
    const res = await got
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .json<TMockJsonPlaceholder>();

    expect(res.id).toBe(1);
  });
});
