import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // CHANGE 1: Initialize theme from localStorage (not just "light")
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // CHANGE 2: Always update html attribute and localStorage when theme changes
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // No change needed here
  const handleToggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // CHANGE 3: Make the input a controlled component (checked={theme === "dark"})
  const ThemeToggle = () => (
    <label className="flex items-center gap-2 px-2 py-1 cursor-pointer">
      <svg width="20" height="20" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        onChange={handleToggleTheme}
        type="checkbox"
        className="toggle theme-controller"
        checked={theme === "dark"} // <-- controlled input
      />
      <svg width="20" height="20" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10 w-full">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost text-2xl gap-0 normal-case bg-gradient-to-r from-[#2a6e64] via-[#043b3466] to-[#488076a1] text-transparent bg-clip-text bg-300% animate-gradient"
        >
          DevCrafted
        </Link>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-accent" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-accent" : "")}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks" className={({ isActive }) => (isActive ? "text-accent" : "")}>Bookmarks</NavLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex gap-4 items-center">
        <ul className="menu menu-horizontal px-1 font-bold gap-2">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-accent" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-accent" : "")}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks" className={({ isActive }) => (isActive ? "text-accent" : "")}>Bookmarks</NavLink>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;