import { useEffect, useState } from "react";

export function ThemeSwitchButton() {
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
      className="px-1 py-0.5 border border-border w-fit rounded-full bg-background cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <div
        className={`size-4 rounded-full transition-all duration-300 bg-text ${
          isOn ? "ml-5" : "mr-5"
        }`}
      />
    </div>
  );
}

export function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="cursor-pointer flex flex-col justify-center items-center gap-y-1 w-fit"
      onClick={onClick}
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
