import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * A toggle button for switching the theme between light and dark mode.
 *
 * The component is a rounded rectangle with a toggle button inside. When the
 * button is clicked, the component will toggle the theme and update the
 * `theme` in localStorage.
 *
 * @param {{ className?: string }} props
 * @param {string} [props.className] An optional class name to be applied to the
 * component.
 * @returns {ReactElement} A React element representing the theme switch button.
 */
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


/**
 * A hamburger button that can be toggled.
 *
 * @param {{isOpen?: boolean, onToggle?: () => void, className?: string}} props
 * @param {boolean} [props.isOpen=false] Whether the button is open. If true, the button will be rendered as an "X".
 * @param {() => void} [props.onToggle] A callback that will be called when the button is clicked.
 * @param {string} [props.className] An optional class name to be applied to the button.
 * @returns {ReactElement} A React element representing the hamburger button.
 */
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

/**
 * A button component that redirects to the home page.
 *
 * @param className - An optional string of class names to apply additional styling.
 */

export function BackToHomeButton({ className }: { className?: string }) {
  return (
    <Link
      className={`px-3 py-1 rounded-full bg-primary/70 hover:bg-primary/90 transition-colors duration-300 shadow-md shadow-black/50 ${className}`}
      to={"/"}
    >
      Back To Home
    </Link>
  );
}
