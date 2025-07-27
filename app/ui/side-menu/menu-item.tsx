"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ArrowImg from "@/public/side-menu-arrow.svg";
import { MenuOptions } from "./utils";
import Link from "next/link";
import { useWindowHeight } from "./useWindowHeight";

interface IMenuItemProps {
  option: {
    label: MenuOptions;
    href: string;
  };
  isLastItem: boolean;
}

export const MenuItem = ({ option, isLastItem }: IMenuItemProps) => {
  const pathname = usePathname();
  const active = pathname === option.href;
  const { windowHeight } = useWindowHeight();

  return (
    <li
      className={`relative select-none py-2  text-xl
                  "}`}
    >
      <Link
        href={option.href}
        className={`transition-colors hover:text-white cursor-pointer 
                  ${active ? "text-white" : "opacity-50 hover:opacity-100"}`}
      >
        {option.label}
      </Link>

      {/* ——— short divider ——— */}
      {active ? (
        <>
          {/* Top part of divider */}
          <span className="absolute -right-3 top-0 h-[calc(50%-16px)] w-[2px] bg-white opacity-30 z-20" />
          {/* Top V cut - angled down */}
          <span className="absolute -right-3 top-[calc(50%-16px)] h-6 w-[2px] bg-white opacity-30 z-20 origin-top-left -rotate-45" />
          {/* Bottom V cut - angled up */}
          <span className="absolute -right-3 top-[calc(50%-8px)] h-6 w-[2px] bg-white opacity-30 z-20 origin-bottom-left rotate-45" />
          {/* Bottom part of divider */}
          <span
            className={`absolute -right-3 w-[2px] bg-white opacity-30 z-20 ${
              isLastItem
                ? "top-[calc(50%+16px)]"
                : "bottom-0 h-[calc(50%-16px)]"
            }`}
            style={isLastItem ? { height: `${windowHeight - 294}px` } : {}}
          />
        </>
      ) : (
        <>
          <span className="absolute -right-3 top-0 h-full w-[2px] bg-white opacity-30 z-20" />
          {isLastItem && (
            <span
              className={`absolute -right-3 w-[2px] bg-white opacity-30 z-20 ${
                isLastItem
                  ? "top-[calc(50%+22px)]"
                  : "bottom-0 h-[calc(50%-16px)]"
              }`}
              style={isLastItem ? { height: `${windowHeight - 300}px` } : {}}
            />
          )}
        </>
      )}

      {/* ——— arrow, only on active row ——— */}
      {active && true && (
        <Image
          src={ArrowImg}
          alt=""
          width={28}
          height={28}
          className="pointer-events-none absolute -right-[22px] top-1/2
                     -translate-y-1/2 z-10" /* lower z‑index → behind bar */
        />
      )}
    </li>
  );
};
