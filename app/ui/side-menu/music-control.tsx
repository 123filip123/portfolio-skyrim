"use client";

import { useState, useRef, useEffect } from "react";

export const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.3;
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <div className="relative select-none py-2 text-xl">
        <button
          onClick={togglePlayPause}
          className="transition-colors hover:text-white cursor-pointer hover:opacity-100"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="60"
              height="60"
              className="fill-white"
            >
              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 256L288 384C288 401.7 273.7 416 256 416C238.3 416 224 401.7 224 384L224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM416 256L416 384C416 401.7 401.7 416 384 416C366.3 416 352 401.7 352 384L352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="60"
              height="60"
              className="fill-white"
            >
              <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z" />
            </svg>
          )}
        </button>
      </div>
      <audio ref={audioRef} src="/secunda.mp3" preload="auto" />
    </>
  );
};
