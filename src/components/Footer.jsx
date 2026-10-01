import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";

import { Link } from "react-router-dom";

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

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            NestedCode Group
          </h2>

          <p className="mb-6 leading-7 text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Atque labore quis aliquid autem alias odio explicabo.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-xl transition hover:text-[#00a19e]">
              <FaLinkedin />
            </a>

            <a href="#" className="text-xl transition hover:text-[#00a19e]">
              <FaGithub />
            </a>

            <a href="#" className="text-xl transition hover:text-[#00a19e]">
              <FaFacebook />
            </a>

            <a href="#" className="text-xl transition hover:text-[#00a19e]">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Useful Links
          </h3>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.url}
                className="text-gray-400 transition hover:text-[#00a19e]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Our Services
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <a href="#" className="transition hover:text-[#00a19e]">
              Web Design
            </a>

            <a href="#" className="transition hover:text-[#00a19e]">
              Web Development
            </a>

            <a href="#" className="transition hover:text-[#00a19e]">
              UI/UX Design
            </a>

            <a href="#" className="transition hover:text-[#00a19e]">
              Mobile Development
            </a>

            <a href="#" className="transition hover:text-[#00a19e]">
              SEO Optimization
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>A56 Omid Rahimi</p>
            <p>Afghanistan</p>

            <p>
              <strong className="text-white">Phone:</strong>{" "}
              +93 43333333
            </p>

            <p>
              <strong className="text-white">Email:</strong>{" "}
              email@example.com
            </p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} NestedCode Group
          </p>

          <p>
            All Rights Reserved
          </p>

        </div>
      </div>

    </footer>
  );
}