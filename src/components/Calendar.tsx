"use client";

import React from "react";

type Props = {};

import { ResponsiveTimeRange } from "@nivo/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const MyResponsiveTimeRange = ({ data }: any) => (
  <ResponsiveTimeRange
    data={data}
    from="2018-04-01"
    to="2018-08-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        justify: false,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
        translateX: -60,
        translateY: -60,
        symbolSize: 20,
      },
    ]}
  />
);

export default function Calendar({}: Props) {
  const data = [
    {
      value: 266,
      day: "2018-05-09",
    },
    {
      value: 190,
      day: "2018-07-16",
    },
    {
      value: 327,
      day: "2018-04-11",
    },
    {
      value: 330,
      day: "2018-07-23",
    },
    {
      value: 130,
      day: "2018-07-15",
    },
    {
      value: 376,
      day: "2018-07-21",
    },
    {
      value: 360,
      day: "2018-04-21",
    },
    {
      value: 62,
      day: "2018-06-06",
    },
    {
      value: 72,
      day: "2018-04-16",
    },
    {
      value: 89,
      day: "2018-05-21",
    },
    {
      value: 256,
      day: "2018-05-28",
    },
    {
      value: 159,
      day: "2018-04-09",
    },
    {
      value: 115,
      day: "2018-07-22",
    },
    {
      value: 11,
      day: "2018-04-18",
    },
    {
      value: 314,
      day: "2018-07-18",
    },
    {
      value: 345,
      day: "2018-07-12",
    },
    {
      value: 27,
      day: "2018-05-05",
    },
    {
      value: 285,
      day: "2018-07-24",
    },
    {
      value: 293,
      day: "2018-06-10",
    },
    {
      value: 96,
      day: "2018-04-04",
    },
    {
      value: 366,
      day: "2018-06-29",
    },
    {
      value: 163,
      day: "2018-04-26",
    },
    {
      value: 130,
      day: "2018-08-08",
    },
    {
      value: 358,
      day: "2018-07-20",
    },
    {
      value: 343,
      day: "2018-07-07",
    },
    {
      value: 168,
      day: "2018-04-03",
    },
    {
      value: 21,
      day: "2018-05-31",
    },
    {
      value: 172,
      day: "2018-06-13",
    },
    {
      value: 208,
      day: "2018-04-19",
    },
    {
      value: 23,
      day: "2018-06-22",
    },
    {
      value: 54,
      day: "2018-07-14",
    },
    {
      value: 250,
      day: "2018-05-24",
    },
    {
      value: 37,
      day: "2018-08-03",
    },
    {
      value: 189,
      day: "2018-08-05",
    },
    {
      value: 127,
      day: "2018-05-23",
    },
    {
      value: 276,
      day: "2018-05-16",
    },
    {
      value: 53,
      day: "2018-07-17",
    },
    {
      value: 187,
      day: "2018-06-23",
    },
    {
      value: 377,
      day: "2018-04-24",
    },
    {
      value: 330,
      day: "2018-06-12",
    },
    {
      value: 190,
      day: "2018-05-06",
    },
    {
      value: 32,
      day: "2018-05-14",
    },
    {
      value: 245,
      day: "2018-07-09",
    },
    {
      value: 355,
      day: "2018-05-04",
    },
    {
      value: 65,
      day: "2018-05-13",
    },
    {
      value: 171,
      day: "2018-05-22",
    },
    {
      value: 95,
      day: "2018-07-01",
    },
    {
      value: 105,
      day: "2018-06-02",
    },
    {
      value: 303,
      day: "2018-06-08",
    },
    {
      value: 287,
      day: "2018-06-24",
    },
    {
      value: 64,
      day: "2018-04-13",
    },
    {
      value: 302,
      day: "2018-05-01",
    },
    {
      value: 193,
      day: "2018-05-29",
    },
    {
      value: 297,
      day: "2018-07-28",
    },
    {
      value: 32,
      day: "2018-04-12",
    },
    {
      value: 137,
      day: "2018-06-20",
    },
    {
      value: 34,
      day: "2018-07-13",
    },
    {
      value: 342,
      day: "2018-07-29",
    },
    {
      value: 266,
      day: "2018-04-29",
    },
    {
      value: 101,
      day: "2018-05-18",
    },
    {
      value: 202,
      day: "2018-07-02",
    },
    {
      value: 371,
      day: "2018-06-07",
    },
    {
      value: 76,
      day: "2018-04-27",
    },
    {
      value: 107,
      day: "2018-06-03",
    },
    {
      value: 233,
      day: "2018-05-07",
    },
    {
      value: 178,
      day: "2018-05-03",
    },
    {
      value: 38,
      day: "2018-04-25",
    },
    {
      value: 62,
      day: "2018-07-06",
    },
    {
      value: 381,
      day: "2018-05-10",
    },
    {
      value: 88,
      day: "2018-08-06",
    },
    {
      value: 355,
      day: "2018-06-15",
    },
    {
      value: 370,
      day: "2018-04-10",
    },
    {
      value: 75,
      day: "2018-05-30",
    },
    {
      value: 76,
      day: "2018-06-25",
    },
    {
      value: 140,
      day: "2018-05-12",
    },
    {
      value: 238,
      day: "2018-04-07",
    },
    {
      value: 283,
      day: "2018-08-01",
    },
    {
      value: 306,
      day: "2018-04-15",
    },
    {
      value: 257,
      day: "2018-07-05",
    },
    {
      value: 56,
      day: "2018-06-09",
    },
    {
      value: 235,
      day: "2018-06-16",
    },
    {
      value: 352,
      day: "2018-07-31",
    },
    {
      value: 366,
      day: "2018-05-19",
    },
    {
      value: 121,
      day: "2018-05-27",
    },
    {
      value: 395,
      day: "2018-06-05",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the numbers of this year</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] flex items-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
}
