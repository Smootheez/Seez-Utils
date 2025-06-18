import { Link } from "react-router-dom";
import { HamburgerButton } from "./button";

export function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto rounded-full backdrop-blur-xs mt-4 drop-shadow-xl bg-surface/80 px-5 py-2 flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold">
            Seez Tools
          </Link>
          <nav className="hidden items-center gap-x-3 md:flex">
            {[
              { href: "#", label: "Home" },
              { href: "#", label: "Contact" },
              { href: "#", label: "About" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative before:content-[''] before:absolute before:-bottom-0 before:w-full before:h-0.5 before:bg-text before:origin-left before:transition-all before:duration-400 before:-translate-x-100 hover:before:translate-x-0 overflow-hidden"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <HamburgerButton />
          </div>
        </div>
      </header>
    );
}