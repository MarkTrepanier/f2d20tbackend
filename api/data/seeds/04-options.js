exports.seed = function (knex) {
  return knex("options").insert([
    {
      text: "backlog",
      page_id: 1,
      link_id: "2"
    },
    {
      text: "run tests",
      page_id: 1,
      link_id: "3"
    },
  ]);
};