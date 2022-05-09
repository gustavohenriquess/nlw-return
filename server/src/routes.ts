import express from "express";
import { readdirSync, readFile } from "fs";
export const routes = express.Router();

import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adatper";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { ReadInitFileUseCase } from "./use-cases/read-init-file-use-case";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerMailAdapter
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  return res.status(201).send();
});

routes.get("/", async (req, res) => {
  const fileReader = new ReadInitFileUseCase(res);
  const filePath = "./init.txt";
  const fileType = "utf-8";

  await fileReader.execute({ filePath, fileType });
});
