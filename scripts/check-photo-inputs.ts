import fs from "fs";

async function main() {
  const folderPath = "../2nd-96er-data/96er/";

  const files = fs.readdirSync(folderPath);

  let count = 0;

  for (const file of files) {
    if (!file.includes("IMG")) {
      count++;
    }
  }
  console.log(count);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
