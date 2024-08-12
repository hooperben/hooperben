import fs from "fs";

async function main() {
  const folderPath = "../2nd-96er-data/96er/pngs/";

  const files = fs.readdirSync(folderPath);

  let fileCount = 0;

  for (const file of files) {
    if (!file.includes("IMG")) {
      fileCount++;
    }
  }
  console.log(fileCount);

  const jsonPath = "../2nd-96er-data/96er/json/";
  const jsonFiles = fs.readdirSync(jsonPath);

  console.log("json files: ", jsonFiles.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
