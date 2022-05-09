import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { ReadInitFileUseCase } from "./use-cases/read-init-file-use-case";

const port = process.env.PORT || 3333;
const app = express();

const filePath = "./init.txt";
const fileType = "utf-8";
const fileReader = new ReadInitFileUseCase();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, async () => {
  await fileReader.execute({ filePath, fileType });

  console.log(`Server started on port ${port}`);
});
