import Quote from "../models/quotes.js";

const getQuotes = async (req, res) => {
  const { text, author } = req.query;
  const queryObject = {};

  if (text) {
    queryObject.text = text;
  }

  if (author) {
    queryObject.author = author;
  }

  console.log(queryObject);

  const Quotes = await Quote.find(queryObject);
  console.log(
    "🚀 ~ file: quotes.js ~ line 10 ~ getQuotes ~ req.query",
    req.query
  );
  res.status(200).json({Quotes});
};

export default getQuotes;
