"use client";

import { menuOptions } from "./utils";
import { MenuItem } from "./menu-item";
import { MusicControl } from "./music-control";

export const SideMenu = () => {
  return (
    <nav className="relative w-56">
      <div className="flex flex-col gap-1 pb-6">
        <h1 className="font-bold text-4xl">Filip Popovski</h1>
        <h2 className="font-medium text-2xl">Software Engineer</h2>
        <span className="absolute -right-3 top-0 h-[100px] w-[2px] bg-white opacity-30 z-20" />
      </div>

      <ul className="m-0 list-none p-0">
        {menuOptions.map((option, i) => {
          const isLastItem = i === menuOptions.length - 1;

          return (
            <MenuItem
              key={option.label}
              option={option}
              isLastItem={isLastItem}
            />
          );
        })}
      </ul>

      <div className="absolute bottom-20 left-0 right-10 flex justify-center">
        <MusicControl />
      </div>
    </nav>
  );
};
