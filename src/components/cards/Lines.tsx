"use client";
import React from "react";

import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const MyResponsiveLine = ({ data }: any) => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );
};

type Props = {};

export default function Lines({}: Props) {
  const data = [
    {
      id: "japan",
      color: "hsl(97, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 25,
        },
        {
          x: "helicopter",
          y: 121,
        },
        {
          x: "boat",
          y: 108,
        },
        {
          x: "train",
          y: 143,
        },
        {
          x: "subway",
          y: 240,
        },
        {
          x: "bus",
          y: 29,
        },
        {
          x: "car",
          y: 4,
        },
        {
          x: "moto",
          y: 159,
        },
        {
          x: "bicycle",
          y: 167,
        },
        {
          x: "horse",
          y: 161,
        },
        {
          x: "skateboard",
          y: 165,
        },
        {
          x: "others",
          y: 117,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(345, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 25,
        },
        {
          x: "helicopter",
          y: 124,
        },
        {
          x: "boat",
          y: 55,
        },
        {
          x: "train",
          y: 197,
        },
        {
          x: "subway",
          y: 253,
        },
        {
          x: "bus",
          y: 88,
        },
        {
          x: "car",
          y: 149,
        },
        {
          x: "moto",
          y: 238,
        },
        {
          x: "bicycle",
          y: 104,
        },
        {
          x: "horse",
          y: 146,
        },
        {
          x: "skateboard",
          y: 149,
        },
        {
          x: "others",
          y: 166,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(17, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 132,
        },
        {
          x: "helicopter",
          y: 55,
        },
        {
          x: "boat",
          y: 50,
        },
        {
          x: "train",
          y: 4,
        },
        {
          x: "subway",
          y: 73,
        },
        {
          x: "bus",
          y: 140,
        },
        {
          x: "car",
          y: 102,
        },
        {
          x: "moto",
          y: 157,
        },
        {
          x: "bicycle",
          y: 277,
        },
        {
          x: "horse",
          y: 189,
        },
        {
          x: "skateboard",
          y: 141,
        },
        {
          x: "others",
          y: 229,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(291, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 8,
        },
        {
          x: "helicopter",
          y: 126,
        },
        {
          x: "boat",
          y: 147,
        },
        {
          x: "train",
          y: 183,
        },
        {
          x: "subway",
          y: 78,
        },
        {
          x: "bus",
          y: 221,
        },
        {
          x: "car",
          y: 20,
        },
        {
          x: "moto",
          y: 25,
        },
        {
          x: "bicycle",
          y: 30,
        },
        {
          x: "horse",
          y: 119,
        },
        {
          x: "skateboard",
          y: 135,
        },
        {
          x: "others",
          y: 78,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(321, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 1,
        },
        {
          x: "helicopter",
          y: 32,
        },
        {
          x: "boat",
          y: 293,
        },
        {
          x: "train",
          y: 172,
        },
        {
          x: "subway",
          y: 180,
        },
        {
          x: "bus",
          y: 258,
        },
        {
          x: "car",
          y: 121,
        },
        {
          x: "moto",
          y: 4,
        },
        {
          x: "bicycle",
          y: 234,
        },
        {
          x: "horse",
          y: 191,
        },
        {
          x: "skateboard",
          y: 121,
        },
        {
          x: "others",
          y: 40,
        },
      ],
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats of this year</CardDescription>
      </CardHeader>
      <CardContent className="h-[264px] flex items-center w-full">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
