import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link
              key={link.name}
              to={link.url}
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#00a19e]"
            >
              {link.name}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#00a19e]"
            >
              Dropdown
              <span className="inline-block text-base transition-transform duration-300 group-hover:rotate-90">
                &gt;
              </span>
            </button>

            <div
              className="
                invisible absolute left-0 top-full z-50 mt-3 w-48
                translate-y-2 rounded-lg bg-white p-2
                opacity-0 shadow-lg
                transition-all duration-300
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <Link
                to="/option1"
                className="block rounded-md px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#00a19e]"
              >
                Option 1
              </Link>

              <Link
                to="/option2"
                className="block rounded-md px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#00a19e]"
              >
                Option 2
              </Link>

              <Link
                to="/option3"
                className="block rounded-md px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#00a19e]"
              >
                Option 3
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-3">
           <Link to="/contact" >
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
              <Link
                key={link.name}
                to={link.url}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#00a19e]"
              >
                {link.name}
              </Link>
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
