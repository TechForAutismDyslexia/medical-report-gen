import { ReactNode } from "react";

export default function StyledButton({
  color = "#007bff",
  children,
  onClick = () => {},
}: {
  color: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "#fff",
      }}
      className="justify-center items-center px-5 py-2.5 border-none rounded-md cursor-pointer  "
    >
      {children}
    </button>
  );
}
