import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Features",
    url: "/features",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 md:px-6">
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-900">
            NestedCode Group
          </Link>
        </div>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.url}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-[#00a19e] text-white"
                    : "text-gray-700 hover:text-[#00a19e]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button style="rounded">
              <span className="flex items-center gap-2">Get Started</span>
            </Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl text-gray-800 md:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.url}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-[#00a19e] text-white"
                      : "text-gray-700 hover:text-[#00a19e]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}



            <div className="pt-3">
              <Button style="rounded">
                <span className="flex items-center gap-2">Get Started</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
