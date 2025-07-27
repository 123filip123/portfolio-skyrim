"use client";

import Image from "next/image";

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center cursor-pointer"
    >
      {/* outer border */}
      <Image
        src="/button/outer-border.png"
        alt="Button outer border"
        width={250}
        height={42}
      />

      {/* inner border */}
      <Image
        src="/button/inner-border.png"
        alt="Button inner border"
        width={240}
        height={36}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* text */}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium text-xl">
        {text}
      </span>
    </button>
  );
};
