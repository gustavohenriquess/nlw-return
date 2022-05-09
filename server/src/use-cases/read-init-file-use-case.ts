import fs from "fs";
import { Response } from "express";

interface ReadInitFileUseCaseProps {
  filePath: string;
  fileType: "utf-8";
}

export class ReadInitFileUseCase {
  constructor(private response?: Response) {}

  execute(props: ReadInitFileUseCaseProps) {
    if (!fs.existsSync(props.filePath)) {
      throw new Error("File not found");
    }

    fs.readFile(props.filePath, props.fileType, (err, data) => {
      if (err) {
        console.log(err);
        throw new Error("Error reading file");
      }

      if (this.response) {
        this.response.set({ "Content-Type": "text/plain" }).send(data);
      } else {
        const lines = data.split("\n");
        lines.forEach(function (line) {
          console.log(line); // aqui podes fazer o que precisas com cada linha
        });
      }
    });
  }
}
