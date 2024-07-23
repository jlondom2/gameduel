import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  bg: "bg-pink-100" | "bg-blue-100" | "bg-purple-100";
  size?: "big" | "small" | "tiny";
}
export const Button = ({ children, color, bg, size }: Props) => {
  return (
    <button
      className={`button ${size} ${color} ${bg} flex items-center justify-between gap-2 transition-colors duration-150 ${bg === "bg-pink-100" ? "hover:bg-pink-200" : ""} ${bg === "bg-blue-100" ? "hover:bg-blue-200" : ""} ${bg === "bg-purple-100" ? "hover:bg-purple-200" : ""} `}
    >
      {children}

      <div
        className={`button-ornament ${bg === "bg-pink-100" ? "bg-pink-200" : ""} ${bg === "bg-blue-100" ? "bg-blue-200" : ""} ${bg === "bg-purple-100" ? "bg-purple-200" : ""}`}
      >
        <svg
          className={`arrow-icon ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0-0.002v3h3v-3H0z M3,2.998v3h3v-3H3z M6,5.998v3h3v-3H6zM3,11.998h3V8.997H3V11.998z M0,14.998h3v-3H0V14.998z" />
        </svg>
      </div>
    </button>
  );
};
