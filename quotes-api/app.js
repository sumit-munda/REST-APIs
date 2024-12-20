import express from "express";
import 'dotenv/config';
import connectDB from "./db/connect.js";
import quotes_route from "./routes/quotes.js"

const app = express();
// Suggested PORTS 3000, 8080-8090, 5000, and 4000 --------
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`🔥Live on server ${PORT}`);
});

app.use("/api/quotes", quotes_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL)
    app.listen(PORT, console.log(`🔥Live on server ${PORT}...`));
  } catch (error) {
    console.error(error.message);
  }
};

start();
