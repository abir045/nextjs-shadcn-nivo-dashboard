import Image from "next/image";
import { Button } from "@/components/ui/button";
import General from "@/components/cards/General";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Calendar from "@/components/Calendar";
import Lines from "@/components/cards/Lines";
import { TableDemo } from "@/components/cards/TableCard";
import { DataTableDemo } from "@/components/DataTable";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid  gap-[32px] ">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3  gap-[32px] h-[300px] overflow-hidden">
        <Lines />
        <Card className="min-h-[300px] p-[32px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <TableDemo />
          </div>
        </Card>
        <Card className="min-h-[300px] p-[32px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableDemo />
          </div>
        </Card>
      </div>
    </div>
  );
}
