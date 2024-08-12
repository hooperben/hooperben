import fs from "fs";

import { results } from "./constants";

type PlayerScore = {
  player: string;
  score: number;
};

type Maps = {
  [key: string]: PlayerScore[];
};

type MaxScoreMap = {
  [key: string]: number;
};

const extractMaxScores = (maps: Maps): MaxScoreMap => {
  const maxScores: MaxScoreMap = {};

  for (const key in maps) {
    if (maps.hasOwnProperty(key)) {
      const maxScore = Math.max(...maps[key].map((entry) => entry.score));
      maxScores[key] = maxScore;
    }
  }

  return maxScores;
};

const sortMaxScores = (maxScores: MaxScoreMap): [string, number][] => {
  const lowercaseMaxScores: MaxScoreMap = {};

  // Convert keys to lowercase
  for (const key in maxScores) {
    if (maxScores.hasOwnProperty(key)) {
      lowercaseMaxScores[key.toLowerCase()] = maxScores[key];
    }
  }

  // Sort entries by score in descending order
  return Object.entries(lowercaseMaxScores).sort((a, b) => b[1] - a[1]);
};

// const maxScoresMap = extractMaxScores(data);
// const sortedMaxScores = sortMaxScores(maxScoresMap);

async function main() {
  const filePath = `../2nd-96er-data/96er/json/`;

  const files = fs.readdirSync(filePath);

  let data: Record<string, any> = {};

  for (const mapName of files) {
    const currentFilePath = `${filePath}${mapName}`;

    const raceData = JSON.parse(
      fs.readFileSync(currentFilePath, {
        encoding: "utf-8",
      }),
    );

    console.log(raceData);

    data[mapName.split(".json")[0]] = raceData;
  }

  const maxScoresMap = extractMaxScores(data);
  const sortedMaxScores = sortMaxScores(maxScoresMap);

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

  let startingWith = renamedResults;
  let trackedResults = [];

  for (const result of startingWith) {
    if (
      fs.existsSync(
        `../2nd-96er-data/96er/json/${result.alt ?? result.track}.json`,
      )
    ) {
      trackedResults.push(result);
      startingWith = startingWith.filter((r) => r.track !== result.track);
    }
  }

  console.log("able to sort: ", trackedResults.length, " tracks");

  console.log("but, unable to sort:");
  console.log(startingWith);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
