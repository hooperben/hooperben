import * as fs from "fs";

import { promisify } from "util";
import heicConvert from "heic-convert";
import sharp from "sharp";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const convertHEICToPNG = async (inputPath: string, outputPath: string) => {
  try {
    const inputBuffer = await readFile(inputPath);
    const heicConverted = await heicConvert({
      // @ts-ignore
      buffer: inputBuffer,
      format: "PNG",
      quality: 1,
    });

    const pngBuffer = await sharp(heicConverted).png().toBuffer();
    await writeFile(outputPath, pngBuffer);

    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error("Error converting HEIC to PNG:", error);
  }
};

async function main() {
  const folderPath = "../2nd-96er-data/96er/";

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const inputFile = `${folderPath}${file}`;
    const outputFile = `${folderPath}pngs/${file.replace(".HEIC", ".png")}`;

    // we have some non formatted files in the folder so this just cuts them out
    if (!file.includes("IMG")) {
      await convertHEICToPNG(inputFile, outputFile);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
