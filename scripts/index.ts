import fs from "fs";
import path from "path";

const main = async () => {
  console.log("hello");

  const contents = fs.readFileSync("../The 96er.csv", "utf8");

  // Split the CSV into lines
  const lines = contents.trim().split("\n");

  // Split the first line into headers
  const headers = lines[0].split(",");

  // Find the indexes of the "Track" and "Whos map is it?" columns
  const trackIndex = headers.indexOf("Track");
  const winnerIndex = headers.indexOf("Whos map is it?");
  const commentIndex = headers.indexOf("Comment");

  // Parse the remaining lines into objects
  const results = lines.slice(1).map((line) => {
    const columns = line.split(",");

    return {
      track: columns[trackIndex].trim(),
      winner: columns[winnerIndex].trim(),
      insights: columns[commentIndex].trim(),
    };
  });

  console.log(results);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
