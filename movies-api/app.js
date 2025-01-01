import express from "express";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Allow only your frontend
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("live...");
});

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "api-data.json"));
});

const start = async () => {
  try {
    await app.listen(PORT, () =>
      console.log(
        chalk.bgGreen.blueBright(`Server running on http://localhost:${PORT}`)
      )
    );
  } catch (error) {
    console.error(chalk.bgRed.blueBright(error));
  }
};

start();
