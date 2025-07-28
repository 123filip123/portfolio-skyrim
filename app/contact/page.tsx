"use client";

import { useState } from "react";
import { MY_EMAIL } from "../utils/strings";
import { Button } from "../ui/button/button";
import { toast } from "sonner";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    toast.success("Email copied to clipboard", {
      position: "top-center",
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col gap-10 items-start">
      <h2 className="text-3xl font-bold">Contact</h2>

      <div className="flex items-center gap-2">
        <p className="text-lg">{MY_EMAIL}</p>

        <p className="text-sm italic text-gray-300">* Click icon to copy *</p>

        <button
          className="cursor-pointer"
          onClick={handleCopyEmail}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            width="28"
            height="24"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6 21.1V3.82164C24.6 3.82164 24.6 2.92164 23.7 2.02164C22.9538 1.27544 21.9 1.12164 21.9 1.12164H3C3 1.12164 4.02925 1.85089 4.8 2.62164C5.57075 3.39239 5.7 4.59997 5.7 4.59997V22C5.7 22 5.7 23.2 6.6 24.1C7.5 25 8.7 25 8.7 25M8.7 25H27.6C27.6 25 29.1 24.7951 30 23.5C30.36 22.9819 30.6 22 30.6 22H11.4C11.4 22 11.2052 22.9598 10.8 23.5C9.9 24.7 8.7 25 8.7 25Z"
              stroke="#FFFFFF"
              strokeOpacity={isHovered ? 1.0 : 0.5}
              strokeWidth="1.5"
              style={{ transition: "stroke-opacity 0.2s ease" }}
            />
          </svg>
        </button>
      </div>

      <Button
        text="LinkedIn"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/filip-popovski-188773215/",
            "_blank"
          )
        }
      />

      <Button
        text="GitHub"
        onClick={() => window.open("https://github.com/123filip123", "_blank")}
      />
    </div>
  );
}
