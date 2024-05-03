import React from "react";
import UserItem from "./UserItem";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "./ui/command";

type Props = {};

const Sidebar = (props: Props) => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
        },
        {
          link: "/",
          text: "Inbox",
        },
        {
          link: "/",
          text: "Billing",
        },
        {
          link: "/",
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
        },
        {
          link: "/",
          text: "Privacy",
        },

        {
          link: "/",
          text: "Logs",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-2 w-[300px] min-w-[300px] min-h-screen border-r p-4">
      <div>
        {" "}
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem key={optionKey}>{option.text}</CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;
