import { useEffect, useState } from "react";

export function ThemeSwitchButton({ className }: { className?: string }) {
  const [isOn, setIsOn] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isOn);
    localStorage.setItem("theme", isOn ? "dark" : "light");
  }, [isOn]);

  return (
    <div
      onClick={() => setIsOn((prev) => !prev)}
      className={`px-1 py-0.5 border border-border w-fit rounded-full bg-background cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <div
        className={`size-4 rounded-full transition-all duration-300 bg-text ${
          isOn ? "ml-5" : "mr-5"
        }`}
      />
    </div>
  );
}

export function HamburgerButton({
  isOpen,
  onToggle,
  className,
}: {
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`cursor-pointer flex flex-col justify-center items-center gap-y-1 w-fit ${className}`}
      onClick={onToggle}
    >
      <div
        className={`w-6 h-1 bg-text transition-transform duration-300 ${
          isOpen ? "-rotate-45 translate-y-2" : ""
        }`}
      />
      <div
        className={`w-6 h-1 bg-text transition-opacity duration-200 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`w-6 h-1 bg-text transition-transform duration-300 ${
          isOpen ? "rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
  );
}
