"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { ChartConfig, ChartContainer } from "../../@/components/ui/chart";

const firstHalfChartData = [
  {
    track: 1,
    "Donkey Kong": 15,
    "Black Shy Guy": 12,
    Bowser: 10,
    Toadette: 9,
    "Baby Daisy": 8,
    Waluigi: 7,
    Luigi: 6,
    "Pink Gold Peach": 5,
    "Tanooki Mario": 4,
    "King Boo": 3,
    Link: 2,
    Kamek: 1,
  },
  {
    track: 2,
    "Donkey Kong": 30,
    "Black Shy Guy": 21,
    Waluigi: 19,
    Toadette: 19,
    Bowser: 17,
    "Pink Gold Peach": 13,
    "Baby Daisy": 13,
    Luigi: 12,
    "King Boo": 7,
    Link: 5,
    "Tanooki Mario": 5,
    Kamek: 3,
  },
  {
    track: 3,
    "Donkey Kong": 45,
    Waluigi: 31,
    "Black Shy Guy": 31,
    Toadette: 27,
    Bowser: 23,
    "Pink Gold Peach": 20,
    Luigi: 17,
    "Baby Daisy": 17,
    Link: 14,
    "King Boo": 10,
    "Tanooki Mario": 7,
    Kamek: 4,
  },
  {
    track: 4,
    "Donkey Kong": 57,
    Waluigi: 46,
    "Black Shy Guy": 39,
    Toadette: 36,
    Bowser: 30,
    Link: 24,
    Luigi: 23,
    "Pink Gold Peach": 23,
    "Baby Daisy": 18,
    "King Boo": 14,
    "Tanooki Mario": 12,
    Kamek: 6,
  },
  {
    track: 5,
    "Donkey Kong": 69,
    Waluigi: 55,
    "Black Shy Guy": 54,
    Toadette: 44,
    Bowser: 36,
    Luigi: 33,
    Link: 29,
    "Pink Gold Peach": 26,
    "Baby Daisy": 20,
    "Tanooki Mario": 19,
    "King Boo": 18,
    Kamek: 7,
  },
  {
    track: 6,
    "Donkey Kong": 81,
    Waluigi: 64,
    "Black Shy Guy": 61,
    Toadette: 50,
    Luigi: 48,
    Bowser: 40,
    Link: 39,
    "Tanooki Mario": 27,
    "Pink Gold Peach": 27,
    "Baby Daisy": 25,
    "King Boo": 20,
    Kamek: 10,
  },
  {
    track: 7,
    "Donkey Kong": 91,
    Waluigi: 79,
    "Black Shy Guy": 66,
    Toadette: 58,
    Link: 51,
    Luigi: 51,
    Bowser: 49,
    "Tanooki Mario": 34,
    "Baby Daisy": 29,
    "Pink Gold Peach": 28,
    "King Boo": 26,
    Kamek: 12,
  },
  {
    track: 8,
    "Donkey Kong": 106,
    Waluigi: 86,
    "Black Shy Guy": 78,
    Toadette: 66,
    Link: 60,
    Bowser: 59,
    Luigi: 57,
    "Tanooki Mario": 39,
    "Pink Gold Peach": 32,
    "Baby Daisy": 30,
    "King Boo": 29,
    Kamek: 14,
  },
  {
    track: 9,
    "Donkey Kong": 118,
    Waluigi: 96,
    "Black Shy Guy": 93,
    Toadette: 74,
    Link: 67,
    Luigi: 66,
    Bowser: 63,
    "Tanooki Mario": 42,
    "Pink Gold Peach": 37,
    "Baby Daisy": 36,
    "King Boo": 30,
    Kamek: 16,
  },
  {
    track: 10,
    "Donkey Kong": 133,
    Waluigi: 98,
    "Black Shy Guy": 96,
    Toadette: 82,
    Luigi: 78,
    Link: 74,
    Bowser: 68,
    "Pink Gold Peach": 46,
    "Tanooki Mario": 43,
    "Baby Daisy": 40,
    "King Boo": 36,
    Kamek: 26,
  },
  {
    track: 11,
    "Donkey Kong": 145,
    "Black Shy Guy": 111,
    Waluigi: 105,
    Toadette: 92,
    Luigi: 86,
    Link: 83,
    Bowser: 74,
    "Pink Gold Peach": 50,
    "Tanooki Mario": 46,
    "Baby Daisy": 41,
    "King Boo": 38,
    Kamek: 31,
  },
  {
    track: 12,
    "Donkey Kong": 160,
    "Black Shy Guy": 120,
    Waluigi: 115,
    Toadette: 98,
    Link: 91,
    Luigi: 91,
    Bowser: 86,
    "Pink Gold Peach": 54,
    "Tanooki Mario": 49,
    "Baby Daisy": 42,
    "King Boo": 40,
    Kamek: 38,
  },
  {
    track: 13,
    "Donkey Kong": 170,
    "Black Shy Guy": 135,
    Waluigi: 122,
    Toadette: 110,
    Luigi: 99,
    Link: 96,
    Bowser: 95,
    "Pink Gold Peach": 55,
    "Tanooki Mario": 52,
    "Baby Daisy": 48,
    "King Boo": 44,
    Kamek: 30,
  },
  {
    track: 14,
    "Donkey Kong": 185,
    "Black Shy Guy": 147,
    Waluigi: 132,
    Toadette: 114,
    Luigi: 108,
    Bowser: 103,
    Link: 101,
    "Pink Gold Peach": 61,
    "Tanooki Mario": 54,
    "Baby Daisy": 51,
    Kamek: 47,
    "King Boo": 45,
  },
  {
    track: 15,
    "Donkey Kong": 200,
    "Black Shy Guy": 156,
    Waluigi: 144,
    Toadette: 119,
    Luigi: 114,
    Bowser: 113,
    Link: 108,
    "Pink Gold Peach": 65,
    "Baby Daisy": 59,
    "Tanooki Mario": 57,
    Kamek: 48,
    "King Boo": 47,
  },
  {
    track: 16,
    "Donkey Kong": 215,
    "Black Shy Guy": 168,
    Waluigi: 151,
    Toadette: 127,
    Bowser: 122,
    Link: 118,
    Luigi: 117,
    "Pink Gold Peach": 69,
    "Baby Daisy": 65,
    "Tanooki Mario": 59,
    "King Boo": 52,
    Kamek: 43,
  },
  {
    track: 17,
    "Donkey Kong": 227,
    "Black Shy Guy": 183,
    Waluigi: 159,
    Toadette: 134,
    Bowser: 131,
    Luigi: 127,
    Link: 124,
    "Pink Gold Peach": 72,
    "Baby Daisy": 70,
    "Tanooki Mario": 60,
    "King Boo": 54,
    Kamek: 53,
  },
  {
    track: 18,
    "Donkey Kong": 242,
    "Black Shy Guy": 191,
    Waluigi: 171,
    Toadette: 144,
    Bowser: 138,
    Luigi: 136,
    Link: 130,
    "Baby Daisy": 75,
    "Pink Gold Peach": 74,
    "Tanooki Mario": 61,
    "King Boo": 58,
    Kamek: 56,
  },
  {
    track: 20,
    "Donkey Kong": 269,
    "Black Shy Guy": 215,
    Waluigi: 193,
    Toadette: 158,
    Luigi: 155,
    Bowser: 147,
    Link: 146,
    "Baby Daisy": 80,
    "Pink Gold Peach": 76,
    "Tanooki Mario": 73,
    "King Boo": 65,
    Kamek: 63,
  },
  {
    track: 21,
    "Donkey Kong": 279,
    "Black Shy Guy": 227,
    Waluigi: 200,
    Luigi: 163,
    Toadette: 163,
    Link: 161,
    Bowser: 156,
    "Baby Daisy": 81,
    "Pink Gold Peach": 78,
    "Tanooki Mario": 76,
    "King Boo": 71,
    Kamek: 67,
  },
  {
    track: 22,
    "Donkey Kong": 294,
    "Black Shy Guy": 234,
    Waluigi: 204,
    Link: 173,
    Toadette: 173,
    Luigi: 169,
    Bowser: 165,
    "Tanooki Mario": 84,
    "Baby Daisy": 82,
    "Pink Gold Peach": 81,
    "King Boo": 76,
    Kamek: 69,
  },
  {
    track: 23,
    "Donkey Kong": 309,
    "Black Shy Guy": 242,
    Waluigi: 209,
    Link: 185,
    Toadette: 180,
    Luigi: 179,
    Bowser: 174,
    "Tanooki Mario": 90,
    "Pink Gold Peach": 83,
    "Baby Daisy": 83,
    "King Boo": 80,
    Kamek: 72,
  },
  {
    track: 24,
    "Donkey Kong": 319,
    "Black Shy Guy": 257,
    Waluigi: 221,
    Link: 192,
    Luigi: 188,
    Toadette: 186,
    Bowser: 178,
    "Tanooki Mario": 93,
    "King Boo": 85,
    "Baby Daisy": 85,
    "Pink Gold Peach": 84,
    Kamek: 80,
  },
  {
    track: 25,
    "Donkey Kong": 334,
    Waluigi: 233,
    "Black Shy Guy": 267,
    Luigi: 197,
    Link: 200,
    Toadette: 193,
    "King Boo": 91,
    "Pink Gold Peach": 89,
    "Tanooki Mario": 97,
    Bowser: 181,
    "Baby Daisy": 87,
    Kamek: 81,
  },
  {
    track: 26,
    "Donkey Kong": 349,
    "Black Shy Guy": 279,
    Waluigi: 241,
    Link: 210,
    Luigi: 206,
    Toadette: 200,
    Bowser: 187,
    "Tanooki Mario": 101,
    "Pink Gold Peach": 94,
    "King Boo": 93,
    "Baby Daisy": 90,
    Kamek: 82,
  },
  {
    track: 27,
    "Donkey Kong": 364,
    "Black Shy Guy": 291,
    Waluigi: 250,
    Link: 220,
    Luigi: 212,
    Toadette: 208,
    Bowser: 192,
    "Tanooki Mario": 105,
    "Pink Gold Peach": 101,
    "King Boo": 96,
    "Baby Daisy": 92,
    Kamek: 83,
  },
  {
    track: 28,
    "Donkey Kong": 376,
    "Black Shy Guy": 301,
    Waluigi: 265,
    Link: 229,
    Luigi: 218,
    Toadette: 215,
    Bowser: 200,
    "Tanooki Mario": 109,
    "Pink Gold Peach": 106,
    "King Boo": 99,
    "Baby Daisy": 93,
    Kamek: 85,
  },
  {
    track: 29,
    "Donkey Kong": 388,
    "Black Shy Guy": 316,
    Waluigi: 274,
    Link: 239,
    Luigi: 226,
    Toadette: 218,
    Bowser: 205,
    "Tanooki Mario": 113,
    "Pink Gold Peach": 107,
    "King Boo": 106,
    "Baby Daisy": 99,
    Kamek: 87,
  },
  {
    track: 30,
    "Donkey Kong": 403,
    "Black Shy Guy": 328,
    Waluigi: 283,
    Link: 249,
    Luigi: 233,
    Toadette: 222,
    Bowser: 210,
    "King Boo": 114,
    "Tanooki Mario": 114,
    "Pink Gold Peach": 109,
    "Baby Daisy": 105,
    Kamek: 90,
  },
  {
    track: 31,
    "Donkey Kong": 415,
    "Black Shy Guy": 343,
    Waluigi: 292,
    Link: 259,
    Luigi: 241,
    Toadette: 228,
    Bowser: 215,
    "King Boo": 121,
    "Tanooki Mario": 116,
    "Pink Gold Peach": 113,
    "Baby Daisy": 108,
    Kamek: 91,
  },
  {
    track: 32,
    "Donkey Kong": 427,
    "Black Shy Guy": 358,
    Waluigi: 299,
    Link: 269,
    Luigi: 247,
    Toadette: 232,
    Bowser: 223,
    "King Boo": 126,
    "Tanooki Mario": 119,
    "Baby Daisy": 117,
    "Pink Gold Peach": 114,
    Kamek: 93,
  },
  {
    track: 33,
    "Donkey Kong": 439,
    "Black Shy Guy": 373,
    Waluigi: 309,
    Link: 276,
    Luigi: 256,
    Toadette: 238,
    Bowser: 231,
    "King Boo": 129,
    "Baby Daisy": 121,
    "Tanooki Mario": 120,
    "Pink Gold Peach": 116,
    Kamek: 98,
  },
  {
    track: 34,
    "Donkey Kong": 449,
    "Black Shy Guy": 388,
    Waluigi: 318,
    Link: 283,
    Luigi: 268,
    Toadette: 244,
    Bowser: 239,
    "King Boo": 130,
    "Tanooki Mario": 124,
    "Baby Daisy": 124,
    "Pink Gold Peach": 121,
    Kamek: 100,
  },
  {
    track: 35,
    "Donkey Kong": 464,
    "Black Shy Guy": 400,
    Waluigi: 328,
    Link: 291,
    Luigi: 272,
    Bowser: 248,
    Toadette: 247,
    "King Boo": 131,
    "Baby Daisy": 130,
    "Tanooki Mario": 129,
    "Pink Gold Peach": 128,
    Kamek: 102,
  },
  {
    track: 36,
    "Donkey Kong": 479,
    "Black Shy Guy": 409,
    Waluigi: 340,
    Link: 296,
    Luigi: 279,
    Toadette: 251,
    Bowser: 251,
    "King Boo": 139,
    "Pink Gold Peach": 138,
    "Tanooki Mario": 131,
    "Baby Daisy": 131,
    Kamek: 108,
  },
  {
    track: 37,
    "Donkey Kong": 494,
    "Black Shy Guy": 417,
    Waluigi: 345,
    Link: 308,
    Luigi: 288,
    Bowser: 261,
    Toadette: 252,
    "Pink Gold Peach": 142,
    "King Boo": 142,
    "Baby Daisy": 138,
    "Tanooki Mario": 137,
    Kamek: 110,
  },
  {
    track: 38,
    "Donkey Kong": 509,
    "Black Shy Guy": 422,
    Waluigi: 355,
    Link: 315,
    Luigi: 300,
    Bowser: 263,
    Toadette: 260,
    "King Boo": 151,
    "Pink Gold Peach": 145,
    "Baby Daisy": 142,
    "Tanooki Mario": 138,
    Kamek: 116,
  },
  {
    track: 39,
    "Donkey Kong": 524,
    "Black Shy Guy": 428,
    Waluigi: 365,
    Link: 320,
    Luigi: 303,
    Toadette: 269,
    Bowser: 267,
    "King Boo": 163,
    "Pink Gold Peach": 153,
    "Baby Daisy": 143,
    "Tanooki Mario": 140,
    Kamek: 123,
  },
  {
    track: 40,
    "Donkey Kong": 536,
    "Black Shy Guy": 434,
    Waluigi: 373,
    Link: 335,
    Luigi: 310,
    Toadette: 278,
    Bowser: 277,
    "King Boo": 167,
    "Pink Gold Peach": 156,
    "Baby Daisy": 148,
    "Tanooki Mario": 141,
    Kamek: 125,
  },
  {
    track: 41,
    "Donkey Kong": 543,
    "Black Shy Guy": 444,
    Waluigi: 379,
    Link: 343,
    Luigi: 325,
    Toadette: 287,
    Bowser: 282,
    "King Boo": 170,
    "Pink Gold Peach": 168,
    "Baby Daisy": 150,
    "Tanooki Mario": 142,
    Kamek: 129,
  },
  {
    track: 42,
    "Donkey Kong": 558,
    "Black Shy Guy": 456,
    Waluigi: 386,
    Link: 351,
    Luigi: 335,
    Toadette: 293,
    Bowser: 291,
    "King Boo": 173,
    "Pink Gold Peach": 172,
    "Baby Daisy": 156,
    "Tanooki Mario": 143,
    Kamek: 131,
  },
  {
    track: 43,
    "Donkey Kong": 570,
    "Black Shy Guy": 471,
    Waluigi: 396,
    Link: 357,
    Luigi: 342,
    Toadette: 302,
    Bowser: 299,
    "King Boo": 178,
    "Pink Gold Peach": 175,
    "Baby Daisy": 156,
    "Tanooki Mario": 145,
    Kamek: 135,
  },
  {
    track: 44,
    "Donkey Kong": 585,
    "Black Shy Guy": 480,
    Waluigi: 404,
    Link: 369,
    Luigi: 347,
    Bowser: 309,
    Toadette: 303,
    "King Boo": 185,
    "Pink Gold Peach": 179,
    "Baby Daisy": 158,
    "Tanooki Mario": 148,
    Kamek: 141,
  },
  {
    track: 45,
    "Donkey Kong": 600,
    "Black Shy Guy": 489,
    Waluigi: 410,
    Link: 381,
    Luigi: 352,
    Bowser: 319,
    Toadette: 311,
    "King Boo": 188,
    "Pink Gold Peach": 186,
    "Baby Daisy": 160,
    "Tanooki Mario": 152,
    Kamek: 142,
  },
  {
    track: 46,
    "Donkey Kong": 615,
    "Black Shy Guy": 499,
    Waluigi: 422,
    Link: 384,
    Luigi: 359,
    Bowser: 323,
    Toadette: 320,
    "Pink Gold Peach": 194,
    "King Boo": 193,
    "Baby Daisy": 161,
    "Tanooki Mario": 154,
    Kamek: 148,
  },
  {
    track: 47,
    "Donkey Kong": 630,
    "Black Shy Guy": 511,
    Waluigi: 432,
    Link: 393,
    Luigi: 367,
    Bowser: 328,
    Toadette: 326,
    "Pink Gold Peach": 198,
    "King Boo": 194,
    "Baby Daisy": 168,
    "Tanooki Mario": 156,
    Kamek: 151,
  },
  {
    track: 48,
    "Donkey Kong": 636,
    "Black Shy Guy": 520,
    Waluigi: 447,
    Link: 405,
    Luigi: 377,
    Bowser: 335,
    Toadette: 334,
    "Pink Gold Peach": 198,
    "King Boo": 198,
    "Baby Daisy": 168,
    "Tanooki Mario": 168,
    Kamek: 154,
  },
];
const firstHalfChartConfig = {
  "Donkey Kong": { label: "Donkey Kong", color: "green" },
  "Black Shy Guy": { label: "Black Shy Guy", color: "orange" },
  Waluigi: { label: "Waluigi", color: "blue" },
  Link: { label: "Link", color: "grey" },
  Luigi: { label: "Luigi", color: "purple" },
  Bowser: { label: "Bowser", color: "rgb(127, 112, 112)" },
  Toadette: { label: "Toadette", color: "pink" },
  "Pink Gold Peach": { label: "Pink Gold Peach", color: "rgb(218, 196, 58)" },
  "King Boo": { label: "King Boo", color: "white" },
  "Baby Daisy": { label: "Baby Daisy", color: "rgb(236, 88, 199)" },
  "Tanooki Mario": { label: "Tanooki Mario", color: "brown" },
  Kamek: { label: "Kamek", color: "#000" },
} satisfies ChartConfig;

const FirstHalfChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Points Distribution - First Half</CardTitle>
        <CardDescription>Races 1 - 48</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={firstHalfChartConfig}
          className="mx-auto aspect-square max-h-[500px]"
        >
          <LineChart accessibilityLayer data={firstHalfChartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="track"
              tickLine={false}
              axisLine={false}
              tickMargin={2}
            />

            {firstHalfChartData.flatMap((chartItem) =>
              Object.keys(chartItem).map((key) => {
                if (key === "track") return null;
                return (
                  <Line
                    key={key}
                    dataKey={key}
                    type="monotone"
                    stroke={firstHalfChartConfig[key].color}
                    strokeWidth={2}
                    dot={false}
                  />
                );
              }),
            )}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default FirstHalfChart;