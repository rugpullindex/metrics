import test from "ava";
import esmock from "esmock";
import fetchMock from "fetch-mock";
import dotenv from "dotenv";

dotenv.config();

test("if client can get member count", async (t) => {
  const COUNT = 40;

  const { default: getMembersCount } = await esmock("../index.js", {
    "cross-fetch": {
      default: fetchMock.sandbox().get(
        {
          url: `begin:${process.env.BASE_URL}`,
        },
        { approximate_member_count: COUNT }
      ),
    },
  });

  const count = await getMembersCount();
  t.is(count, COUNT);
});
