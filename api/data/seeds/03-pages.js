exports.seed = function (knex) {
  return knex("pages").insert([
    {
      header: "ROBCO TESTING SUITE",
      text: "welcome to the ROBCO TESTING SUITE. As of oct0ber 13th, 2077 there are no issues",
      user_id: 1,
    },
    {
      header: "ROBCO TESTING SUITE - backlog",
      text: "-nothing in backlog-",
      user_id: 1,
    },
    {
      header: "ROBCO TESTING SUITE - run tests",
      text: "all tests run: fatal error",
      user_id: 1,
    },
  ]);
};