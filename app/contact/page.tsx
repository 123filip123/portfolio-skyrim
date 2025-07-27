"use client";

import Image from "next/image";
import { MY_EMAIL } from "../utils/strings";
import { Button } from "../ui/button/button";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 items-start">
      <h2 className="text-3xl font-bold">Contact</h2>

      <div className="flex items-center gap-2">
        <Image
          src="/paper-icon.png"
          alt="paper email icon"
          width={28}
          height={24}
        />

        <p className="text-lg">{MY_EMAIL}</p>
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
