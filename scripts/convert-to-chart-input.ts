import fs from "fs";

import { results } from "./constants";

async function main() {
  const folderPath = "../2nd-96er-data/96er/json/";

  const files = fs.readdirSync(folderPath);

  let chartData = [];

  const renamedResults = results.map((result) => {
    const track = result.track
      .replace(/\s+/g, "")
      .replace(/'/g, "")
      .replace("(Summer)", "")
      .replace("-", "");
    return {
      ...result,
      track,
    };
  });

  for (const file of files) {
    // this gets all our files
    const inputFile = `${folderPath}${file}`;
    const contents = JSON.parse(fs.readFileSync(inputFile, "utf8")) as {
      player: string;
      score: number;
    }[];

    // we need to match our input file with our records array

    const currentRecord = renamedResults.find((result) => {
      // console.log(result.track, file.replace(".json", ""));
      return (
        result.track === file.replace(".json", "") ||
        result.alt === file.replace(".json", "")
      );
    });

    if (!currentRecord) throw new Error(`No record found for ${file}`);

    // console.log(contents);

    const playerScores = contents.reduce((acc, player) => {
      acc[player.player] = player.score;
      return acc;
    }, {} as { [key: string]: number });

    // console.log(playerScores);

    const trackName = file.replace(".json", "");

    const indexOf = renamedResults.findIndex((result) =>
      result.alt ? result.alt === trackName : result.track === trackName,
    );

    // console.log(indexOf + 1);

    const chartDataItem = {
      track: indexOf + 1,
      ...playerScores,
    };

    chartData.push(chartDataItem);
  }

  // console.log(chartData.length);

  const sortedData = chartData.sort((a, b) => a.track - b.track);

  fs.writeFileSync(
    "../2nd-96er-data/chart-input.json",
    JSON.stringify(sortedData, null, 2),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
