import React, { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow z-50 top-0">
      <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://i.postimg.cc/2yHLyYW4/Glenn-parmar-logo.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl lg:hidden"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/cpprofile", label: "CP Profiles" },
                { path: "/skill", label: "Skills" },
                { path: "/achievement", label: "Achievements" },
                { path: "/github", label: "Github" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-300" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
