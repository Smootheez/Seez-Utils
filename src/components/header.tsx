import { Link } from "react-router-dom";
import { useState } from "react";
import { HamburgerButton, ThemeSwitchButton } from "./button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    document.body.classList.toggle("overflow-hidden", !isOpen);
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#about", label: "About" },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto rounded-full backdrop-blur-xs mt-4 drop-shadow-xl bg-surface/80 px-5 py-2 flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold">
            Seez Tools
          </Link>
          <nav className="hidden items-center gap-x-3 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative before:content-[''] before:absolute before:-bottom-0 before:w-full before:h-0.5 before:bg-text before:origin-left before:transition-all before:duration-400 before:-translate-x-100 hover:before:translate-x-0 overflow-hidden"
              >
                {link.label}
              </a>
            ))}
            <ThemeSwitchButton />
          </nav>
          <div className="flex items-center gap-x-3 md:hidden">
            <ThemeSwitchButton />
            <HamburgerButton
              isOpen={isOpen}
              onToggle={onClick}
            />
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-background/20 backdrop-blur-xs transition-all duration-300 md:hidden ease-in-out z-30 ${
          isOpen ? "opacity-100" : "opacity-0 translate-x-full"
        }`}
        onClick={onClick}
      >
        <nav className="w-full h-full flex justify-center items-center flex-col gap-y-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="backdrop-blur-xs drop-shadow-xl bg-surface/80 hover:bg-surface/60 rounded-xl w-34 py-1 text-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
