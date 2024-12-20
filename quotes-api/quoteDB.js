import "dotenv/config";
import connectDB from "./db/connect.js";
import Quote from "./models/quotes.js";
import QuoteJson from "./quotes.json" assert { type: "json" };
console.log(QuoteJson);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Quote.deleteMany();
    await Quote.create(QuoteJson);
    console.log("success!");
  } catch (error) {
    console.error(error);
  }
};

start();
