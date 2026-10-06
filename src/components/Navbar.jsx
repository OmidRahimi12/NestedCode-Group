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
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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

        <div className="pt-3">
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

            <div className="border-t border-gray-100 pt-4">
              <p className="mb-3 text-sm font-medium text-gray-700">Dropdown</p>

              <div className="ml-4 flex flex-col gap-3">
                <Link
                  to="/option1"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-gray-600 hover:text-[#00a19e]"
                >
                  Option 1
                </Link>

                <Link
                  to="/option2"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-gray-600 hover:text-[#00a19e]"
                >
                  Option 2
                </Link>

                <Link
                  to="/option3"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-gray-600 hover:text-[#00a19e]"
                >
                  Option 3
                </Link>
              </div>
            </div>

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
