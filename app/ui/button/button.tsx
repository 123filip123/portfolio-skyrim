"use client";

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center cursor-pointer group"
    >
      {/* outer border */}
      <svg
        width="251"
        height="44"
        viewBox="0 0 251 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.75 1H233L249.5 22L233 43H16.75L1 22L16.75 1Z"
          stroke="#D9D9D9"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          className="group-hover:fill-white group-hover:stroke-black group-hover:stroke-opacity-100 transition-all duration-200"
        />
      </svg>

      {/* inner border */}
      <svg
        width="243"
        height="38"
        viewBox="0 0 243 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <path
          d="M14.481 1H226.993L241.5 19L226.993 37H14.481L1 19L14.481 1Z"
          fill="#0D0D0D"
          fillOpacity="0.6"
          stroke="#D9D9D9"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          className="group-hover:fill-white group-hover:stroke-black group-hover:stroke-opacity-100 transition-all duration-200"
        />
      </svg>

      {/* text */}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium text-xl group-hover:text-black group-hover:!text-shadow-none transition-colors duration-200">
        {text}
      </span>
    </button>
  );
};
