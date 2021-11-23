const db = require("../data/db-config");



async function insertPage(page) {
  const [newPageObject] = await db("pages")
    .insert(page, ["page_id", "text"])
    .select("page_id", "pagename");
  return newPageObject;
}

async function findById(page_id) {
  const page = await db("pages as p")
  .leftJoin("options as o","p.page_id","o.page_id")
  .select( "p.header", "p.text", "o.text as option", "o.link_id as link","p.page_id")
  .where( "p.page_id",page_id )
  await console.log(page)
  const result = {
    options: [],
  };
  for (let option of page) {
    if (!result.page_id) {
      result.page_id = option.page_id;
      result.header = option.header;
      result.text = option.text;
    }
    if (option.option) {
      result.options.push({
        option: option.option,
        link: option.link,
      });
    }
  }

  return result;
}

function findBy(filter) {
  return db("pages").where(filter);
}

module.exports = {
  insertPage,
  findBy,
  findById,
};