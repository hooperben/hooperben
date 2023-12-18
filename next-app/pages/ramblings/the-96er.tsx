import Markdown from "react-markdown";
import Layout from "../../components/Layout";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Head from "next/head";

const results = [
  { track: "Mario Kart Stadium", winner: "Gabba" },
  { track: "Water Park", winner: "Sweeney" },
  { track: "Sweet Sweet Canyon", winner: "Gabba" },
  { track: "Thomp Ruins", winner: "Gabba" },
  { track: "Mario Circuit", winner: "Gabba" },
  { track: "Toad Harbour", winner: "Gabba" },
  { track: "Twisted Mansion", winner: "Gabba" },
  { track: "Shy Guy Falls", winner: "Isabelle (Mob)" },
  { track: "Sunshine Airport", winner: "Sweeney" },
  { track: "Dolphin Shoals", winner: "Sweeney" },
  { track: "Electrodome", winner: "Sweeney" },
  { track: "Mount Wario", winner: "Gabba" },
  { track: "Cloudtop Cruise", winner: "Gabba" },
  { track: "Bone dry dunes", winner: "Gabba" },
  { track: "Bowsers Castle", winner: "Gabba" },
  { track: "Rainbow Road", winner: "Gabba" },
  { track: "Moo Moo Meadows", winner: "Gabba" },
  { track: "Mario Circuit", winner: "Sweeney" },
  { track: "Cheep Cheep Beach", winner: "Gabba" },
  { track: "Toads Turnpike", winner: "Gabba" },
  { track: "Dry Dry desert", winner: "Gabba" },
  { track: "Donut Planes", winner: "Gabba" },
  { track: "Royal Raceway", winner: "Gabba" },
  { track: "DK Jungle", winner: "Gabba" },
  { track: "Wario Stadium", winner: "Sweeney" },
  { track: "Sherbet Land", winner: "Sweeney" },
  { track: "Melody Motorway", winner: "Gabba" },
  { track: "Yoshi Valley", winner: "Gabba" },
  { track: "Tick Tock Clock", winner: "Sweeney" },
  { track: "Pirahna Plant Pipeway", winner: "Gabba" },
  { track: "Grumble Volcano", winner: "Gabba" },
  { track: "Rainbow Road", winner: "Sweeney" },
  { track: "Yoshi Circuit", winner: "Benjamin" },
  { track: "Excitebike arena", winner: "Sweeney" },
  { track: "Dragon Driftway", winner: "Gabba" },
  { track: "Mute Way", winner: "Sweeney" },
  {
    track: "Warios Gold Mine",
    winner: "Isabelle, Bowser (mob top 2)",
    insights: "Wilson Donut",
  },
  { track: "Rainbow Road", winner: "Sweeney", insights: "Wilson Donut" },
  { track: "Ice Ice Outpost", winner: "Yoshi (Mob)" },
  { track: "Hyrule Circuit", winner: "Gabba" },
  { track: "Baby Park", winner: "Link (Mob)" },
  { track: "Cheese Land", winner: "Sweeney" },
  { track: "Wild Woods", winner: "Benjamin" },
  { track: "Animal Crossing (Sunset)", winner: "Sweeney" },
  { track: "Koopa City", winner: "Gabba" },
  { track: "Ribbon Road", winner: "Sweeney" },
  { track: "Super bell Subway", winner: "Sweeney" },
  { track: "Big Blue", winner: "Gabba" },
  { track: "Paris Promenade", winner: "Gabba", insights: "Sweeney Hit" },
  { track: "Toad Circuit", winner: "Gabba", insights: "Sweeney Hit" },
  { track: "Choco Mountain", winner: "Sweeney" },
  { track: "Coconut Mall", winner: "Gabba" },
  { track: "Tokyo Blur", winner: "Wendy (Mob)", insights: "Sweeney Hit" },
  { track: "Shroom Ridge", winner: "Gabba" },
  { track: "Sky Garden", winner: "Sweeney" },
  { track: "Ninja Hideaway", winner: "Sweeney" },
  { track: "New York Minute", winner: "Dry Bones (Mob)" },
  { track: "Mario Circuit 3", winner: "Sweeney" },
  { track: "Kalamari Desert", winner: "Wendy (Mob)" },
  { track: "Waluigi Pinball", winner: "Gabba" },
  { track: "Sydney Sprint", winner: "Gabba" },
  { track: "Snowland", winner: "Gabba" },
  {
    track: "Mushroom Gorge",
    winner: "Gabba",
    insights: "The car got in the way of the sean",
  },
  {
    track: "Sky-High Sundae",
    winner: "Gabba",
    insights: "first 'been a while'",
  },
  { track: "London Loop", winner: "Gabba" },
  { track: "Boo Lake", winner: "Sweeney" },
  { track: "Alpine Pass", winner: "Gabe" },
  { track: "Maple Treeway", winner: "Sweeney", insights: "4 wigglers" },
  { track: "Berlin Byways", winner: "Gabba", insights: "69th race" },
  { track: "Peach Gardens", winner: "Gabba" },
  { track: "Merry Mountain", winner: "Sweeney", insights: "Merry Christmas" },
  { track: "Rainbow Road", winner: "Sweeney" },
  { track: "Amsterdam Drift", winner: "Gabba" },
  { track: "Riverside Park", winner: "Benjamin" },
  { track: "DK's Snowboard Cross", winner: "Sweeney" },
  { track: "Yoshi's Island", winner: "Wendy (Mob)", insights: "Huge Swerve" },
  { track: "Bangkok Rush", winner: "Sweeney" },
  { track: "Mario Circuit", winner: "Sweeney" },
  { track: "Waluigi Stadium", winner: "Gabba" },
  { track: "Singapore Speedway", winner: "Sweeney" },
  { track: "Athens Dash", winner: "Gabba" },
  { track: "Daisy Cruiser", winner: "Gabba" },
  { track: "Moonview Highway", winner: "Gabba" },
  { track: "Squeaky Clean Sprint", winner: "Donkey Kong (Mob)" },
  { track: "Los Angeles Laps", winner: "Gabba" },
  { track: "Sunset Wilds", winner: "Gabba" },
  { track: "Koopa Cape", winner: "Gabba" },
  { track: "Vancouver Velocity", winner: "Sweeney", insights: "Gabba 11th" },
  { track: "Rome Avanti", winner: "Gabba" },
  { track: "DK Mountain", winner: "Sweeney" },
  { track: "Daisy Circuit", winner: "Sweeney" },
  { track: "Piranha Plant Cove", winner: "Gabba" },
  { track: "Madrid Drive", winner: "Gabba" },
  { track: "Rosalina's Ice World", winner: "Wendy (Mob)" },
  { track: "Bowser Castle 3", winner: "Gabba" },
  { track: "Rainbow Road", winner: "Gabba", insights: "Last Race Wins" },
];

const ResultsTable = () => (
  <div className="" style={{ width: "90%" }}>
    <table className="text-xs text-left">
      <thead className="uppercase dark:text-darkCream">
        <tr>
          <th scope="col" className="py-3">
            Race
          </th>
          <th scope="col" className="py-3 pl-1">
            Track
          </th>
          <th scope="col" className="py-3 pl-1">
            Winner
          </th>
          <th scope="col" className="py-3">
            Insights
          </th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td className="py-4 text-center">{index + 1}</td>
            <td className="py-4 pl-1">{result.track}</td>
            <td className="py-4 pl-1">{result.winner}</td>
            {result.insights && <td className="py-4">{result.insights}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const markdown = [
  `
  Brisbane, circa 16th December 2023

# The 96er


We raced all 96 races available in Mario Kart 8 - here are the results (they might shock you):

**Race Set Up**: 2 x 48 race multiplayer grand prix with Tracks in order. 200cc, Frantic Items, Hard CPU (the Mob).
`,
  `
## 96er Closing Thoughts


- The last race wins
- It's not about the destination it's about the journey (in this case it was a 96 race sized journey and the destination was purgatory)
- It's getting pretty hot
- Time to take it a bit easier

`,
];

const IndividualRamble = () => {
  return (
    <Layout title={`The 96er | hooper.link`}>
      <Head>
        {/* Title of the page */}
        <title>The 96er</title>

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://hooper.link/ramblings/the-96er"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The 96er" />
        <meta
          property="og:description"
          content="We raced 96 mario cart races"
        />
        <meta property="og:image" content="https://hooper.link/the-96er.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="mysite.com" />
        <meta
          name="twitter:url"
          content="https://hooper.link/ramblings/the-96er"
        />
        <meta name="twitter:title" content="The 96er" />
        <meta
          name="twitter:description"
          content="We raced 96 mario cart races"
        />
        <meta name="twitter:image" content="https://hooper.link/the-96er.png" />
      </Head>
      <div className="flex flex-col w-full">
        <img
          src="/the-96er.png"
          alt="The 96er"
          className="pb-5 w-full xs:w-3/4 md:w-3/4 max-w-lg"
        />
        <div className="max-w-full w-full prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[0]}
          </Markdown>

          <div className="flex flex-col text-black dark:text-darkCream">
            <ResultsTable />
          </div>

          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[1]}
          </Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;
