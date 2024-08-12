import OpenAI from "openai";
import fs from "fs";

const API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
});

async function main() {
  const filePath = `../2nd-96er-data/96er/`;

  const files = fs.readdirSync(filePath);

  for (const mapName of [files[0]]) {
    const currentFilePath = `${filePath}${mapName}`;

    try {
      const exampleFileInput = fs.readFileSync(currentFilePath, {
        encoding: "base64",
      });

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "You are mario kart score GPT. Here is a photo of a mario kart scoreboard. Can you please return this leaderboard as a JSON array of 12 items, containing the player and score? can you please add a START and END string at the beginning and end of the JSON, and do not add any formatting (new lines, tabs, etc)",
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${exampleFileInput}`,
                },
              },
            ],
          },
        ],
      });

      if (!response.choices[0].message.content) {
        console.error("Error getting data for map", mapName);
        console.error(response.choices[0]);
      }

      console.log(
        response.choices[0].message
          .content!.split("START")[1]
          .split("END")[0]
          .trim(),
      );

      const raceData = JSON.parse(
        response.choices[0].message
          .content!.split("START")[1]
          .split("END")[0]
          .trim(),
      );

      // write the race data to the output file
      fs.writeFileSync(
        `../2nd-96er-data/96er/json/${mapName.replace(".png", ".json")}`,
        JSON.stringify(raceData, null, 2),
      );

      console.log("recorded data for: ", mapName);
    } catch (err) {
      console.error("Something went wrong for map name: ", mapName);
      console.error(err);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
