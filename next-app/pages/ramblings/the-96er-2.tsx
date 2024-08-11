"use client";

import "katex/dist/katex.min.css";
import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Layout from "../../components/Layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../@/components/ui/table";
import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../@/components/ui/chart";

const chartData = [
  { racer: "Gabba", wins: 52, fill: "green" },
  { racer: "Sweeney", wins: 28, fill: "orange" },
  { racer: "Noah", wins: 2, fill: "purple" },
  { racer: "Ben", wins: 8, fill: "blue" },
  { racer: "The Mob (CPU)", wins: 6, fill: "red" },
];

const chartConfig = {
  wins: {
    label: "Total Wins",
  },
  Gabba: { label: "Gabba", color: "#fff" },
  Sweeney: { label: "Sweeney" },
  Noah: { label: "Noah" },
  Ben: { label: "Ben" },
  "The Mob (CPU)": { label: "The Mob", color: "black" },
  other: { label: "Other" },
} satisfies ChartConfig;

const results = [
  {
    track: "Mario Kart Stadium",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Water Park",
    winner: "Gabba",
    insights: "So many narnies",
  },
  {
    track: "Sweet Sweet Canyon",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Thomp Ruins",
    winner: "Ben",
    insights: "",
  },
  {
    track: "Mario Circuit",
    winner: "Sweeney",
    insights: "First consistent",
  },
  {
    track: "Toad Harbour",
    winner: "Noah",
    insights: "",
  },
  {
    track: "Twisted Mansion",
    winner: "Ben",
    insights: "2 twisted",
  },
  {
    track: "Shy Guy Falls",
    winner: "Gabba",
    insights: "First hundy",
  },
  {
    track: "Sunshine Airport",
    winner: "Sweeney",
    insights: "First podium",
  },
  {
    track: "Dolphin Shoals",
    winner: "Gabba",
    insights: "Ben 10th and Sweeney 11th",
  },
  {
    track: "Electrodome",
    winner: "Sweeney",
    insights: "First outside - 'I live outside'",
  },
  {
    track: "Mount Wario",
    winner: "Gabba",
    insights: "Sweeney pool time",
  },
  {
    track: "Cloudtop Cruise",
    winner: "Sweeney",
    insights: "KC",
  },
  {
    track: "Bone Dry dunes",
    winner: "Gabba",
    insights: "Podium",
  },
  {
    track: "Bowsers Castle",
    winner: "Gabba",
    insights: "First 200ie",
  },
  {
    track: "Rainbow Road",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Moo Moo Meadows",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Mario Circuit",
    winner: "Gabba",
    insights: "Stupid narnie on the sean",
  },
  {
    track: "Cheep Cheep Beach",
    winner: "Sweeney",
    insights: "Best map in the game",
  },
  {
    track: "Toads Turnpike",
    winner: "Gabba",
    insights: "2 200s - podium",
  },
  {
    track: "Dry Dry desert",
    winner: "Link (First Mob)",
    insights: "",
  },
  {
    track: "Donut Planes",
    winner: "Gabba",
    insights: "Mob",
  },
  {
    track: "Royal Raceway",
    winner: "Gabba",
    insights: "The mob is awake",
  },
  {
    track: "DK Jungle",
    winner: "Sweeney",
    insights: "Podium",
  },
  {
    track: "Wario Stadium",
    winner: "Gabba",
    insights: "Podium",
  },
  {
    track: "Sherbet Land",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Melody Motorway",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Yoshi Valley",
    winner: "Ben",
    insights: "* as didn't hit the cannon on the first lap",
  },
  {
    track: "Tick Tock Clock",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Pirahna Plant Pipeway",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Grumble Volcano",
    winner: "Sweeney",
    insights: "Link is on one",
  },
  {
    track: "Rainbow Road",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Yoshi Circuit",
    winner: "Sweeney",
    insights: "First narnie snipe by Gabba",
  },
  {
    track: "Excitebike arena",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Dragon Driftway",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Mute City",
    winner: "Gabba",
    insights: "Link Widening the gap",
  },
  {
    track: "Warios Gold Mine",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Rainbow Road",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Ice Ice Outpost",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Hyrule Circuit",
    winner: "Link (Still First Mob)",
    insights: "All 4 players hit with single bomb",
  },
  {
    track: "Baby Park",
    winner: "Noah",
    insights: "",
  },
  {
    track: "Cheese Land",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Wild Woods",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Animal Crossing (Summer)",
    winner: "Gabba",
    insights: "summer days",
  },
  {
    track: "Koopa City",
    winner: "Gabba",
    insights: "shit map",
  },
  {
    track: "Ribbon Road",
    winner: "Gabba",
    insights: "this map is inside",
  },
  {
    track: "Super bell Subway",
    winner: "Gabba",
    insights: "Link with the steal from Noah",
  },
  {
    track: "Big Blue",
    winner: "Ben",
    insights: "Last Race wins (first half)",
  },
  {
    track: "Paris Promenade",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Toad Circuit",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Choco Mountain",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Coconut Mall",
    winner: "Sweeney",
    insights: "Fendin off petey",
  },
  {
    track: "Tokyo Blur",
    winner: "Sweeney",
    insights: "Noah Donut",
  },
  {
    track: "Shroom Ridge",
    winner: "Gabba",
    insights: "Car got in the way of the sean",
  },
  {
    track: "Sky Garden",
    winner: "Tanooki Mario (Mob)",
    insights: "First mob win of second half",
  },
  {
    track: "Ninja Hideaway",
    winner: "Gabba",
    insights: "can a blue be sent backwards?",
  },
  {
    track: "New York Minute",
    winner: "Petey Piranha (Mob)",
    insights: "sweeney though he had it",
  },
  {
    track: "Mario Circuit 3",
    winner: "Gabba",
    insights: "Podium",
  },
  {
    track: "Kalamari Desert",
    winner: "Gabba",
    insights: "Sweeney 11th",
  },
  {
    track: "Waluigi Pinball",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Sydney Sprint",
    winner: "Tanooki Mario (Mob)",
    insights: "",
  },
  {
    track: "Snowland",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Mushroom Gorge",
    winner: "Petey Piranha (Mob)",
    insights: "",
  },
  {
    track: "Sky-High Sundae",
    winner: "Gabba",
    insights: "Ben hit my the mob",
  },
  {
    track: "London Loop",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Boo Lake",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Alpine Pass",
    winner: "Sweeney",
    insights: "Petey still hitting",
  },
  {
    track: "Maple Treeway",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Berlin Byways",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Peach Gardens",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Merry Mountain",
    winner: "Sweeney",
    insights: "The mob in force",
  },
  {
    track: "Rainbow Road",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Amsterdam Drift",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Riverside Park",
    winner: "Ben",
    insights: "Great map",
  },
  {
    track: "DK's Snowboard Cross",
    winner: "Gabba",
    insights: "touche",
  },
  {
    track: "Yoshi's Island",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Bangkok Rush",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Mario Circuit",
    winner: "Sweeney",
    insights: "not many lightenings on the seans",
  },
  {
    track: "Waluigi Stadium",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Singapore Speedway",
    winner: "Sweeney",
    insights: "Bowser Junior with the 2nd swoop",
  },
  {
    track: "Athens Dash",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Daisy Cruiser",
    winner: "Gabba",
    insights: "Sweeney hit",
  },
  {
    track: "Moonview Highway",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Squeaky Clean Sprint",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Los Angeles Laps",
    winner: "Gabba",
    insights: "he hate that",
  },
  {
    track: "Sunset Wilds",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Koopa Cape",
    winner: "Gabba",
    insights: "sweeney unfortunate red",
  },
  {
    track: "Vancouver Velocity",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Rome Avanti",
    winner: "Ben",
    insights: "",
  },
  {
    track: "DK Mountain",
    winner: "Sweeney",
    insights: "",
  },
  {
    track: "Daisy Circuit",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Piranha Plant Cove",
    winner: "Gabba",
    insights: "",
  },
  {
    track: "Madrid Drive",
    winner: "Ben",
    insights: "",
  },
  {
    track: "Rosalina's Ice World",
    winner: "Gabba",
    insights: "Podium",
  },
  {
    track: "Bowser Castle 3",
    winner: "Ben",
    insights: "and thats how it can happen",
  },
  {
    track: "Rainbow Road",
    winner: "Sweeney",
    insights: "Last race wins",
  },
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
  ## The 96er part 2
  
  If you're reading this, it means that we've successfully completed a 96er,
  an event where we race all 96 maps available in mario kart 8 (48 standard + 48 DLC tracks).

  This year we had 4 participants, Gabba, Sweeney, Noah and myself.
  
  The results were as follows:
  `,
  `
  Next, we can see the points distribution over the races.
  `,
  `
  I recorded these data points by taking a photo of the scoreboard after every race (except the 2 I forgot,
  Cheep Cheep beach and Daisy Cruiser)
  `,
];

const IndividualRamble = () => {
  return (
    <Layout title={`The 2nd 96er | hooper.link`}>
      <Head>
        {/* Title of the page */}
        <title>The 2nd 96er</title>

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://hooper.link/ramblings/the-96er-2"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The 2nd 96er" />
        <meta
          property="og:description"
          content="We raced 96 mario cart races"
        />
        <meta
          property="og:image"
          content="https://hooper.link/the-96er-2.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="mysite.com" />
        <meta
          name="twitter:url"
          content="https://hooper.link/ramblings/the-96er-2"
        />
        <meta name="twitter:title" content="The 96er" />
        <meta
          name="twitter:description"
          content="We raced 96 mario cart races"
        />
        <meta
          name="twitter:image"
          content="https://hooper.link/the-96er-2.png"
        />
      </Head>
      <div className="flex flex-col w-full">
        <div className="max-w-full w-full prose-p:text-[14px] prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <Markdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            className="mb-[-30px]"
          >
            {markdown[0]}
          </Markdown>

          <div className="flex flex-col text-black dark:text-darkCream">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20px] font-bold text-center">
                    #
                  </TableHead>
                  <TableHead className="w-[50px] font-bold">Track</TableHead>
                  <TableHead className="w-[50px] font-bold">Winner</TableHead>
                  <TableHead className="w-[200px] font-bold">
                    Insights
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, i) => (
                  <TableRow className="text-md" key={i}>
                    <TableCell className="text-center font-bold">
                      {i + 1}
                    </TableCell>
                    <TableCell>{result.track}</TableCell>
                    <TableCell>{result.winner}</TableCell>
                    <TableCell>{result.insights}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Card className="flex flex-col">
            <CardHeader className="items-center py-4">
              <CardTitle>Win Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[400px]"
              >
                <PieChart>
                  {/* <ChartTooltip
                    content={<ChartTooltipContent nameKey="wins" hideLabel />}
                  /> */}
                  <Pie data={chartData} dataKey="wins">
                    <LabelList
                      dataKey="racer"
                      className="fill-background"
                      stroke="black"
                      fontSize={14}
                      formatter={(value: keyof typeof chartConfig) => {
                        const winsAmount = results.filter(
                          (result) =>
                            result.winner === chartConfig[value]?.label,
                        ).length;
                        return `${chartConfig[value]?.label} - ${
                          winsAmount === 0 ? 6 : winsAmount
                        }`;
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[1]}
          </Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;
