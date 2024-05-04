"use client";
import React, { useState } from "react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

export default function Header({}: Props) {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "this is a notification",
      date: " 02-01-2015",
      read: true,
    },
    {
      text: "this is another notification",
      date: " 02-01-2015",
      read: false,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={`absolute -right-1 -top-2 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <Bell className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
                key={key}
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div className="flex-col">
                  <p>{item.text}</p>
                  <p>{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
