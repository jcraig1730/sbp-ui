"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AccountManager from "./accountManager";

const Navbar = () => {
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <div className="navbar bg-primary relative top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost animate-none text-accent lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-accent rounded-box w-52"
          >
            <li onClick={handleClick}>
              <Link href="/about">About</Link>
            </li>

            <li>
              <a>Portfolio</a>
              <ul className="p-2">
                <li onClick={handleClick}>
                  <Link href={"/portfolio/couples"}>Couples</Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/portfolio/families">Family/Children</Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/portfolio/portraits">Portraits</Link>
                </li>
              </ul>
            </li>
            <li onClick={handleClick}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li onClick={handleClick}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src={"/shelby_boldon_logo.svg"}
            alt={"shelby_bolden_logo"}
            width={64}
            height={64}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-accent focus:text-green-900 z-10">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li className="flex-none">
            <div tabIndex={0} className="dropdown dropdown-bottom">
              <label className="hover:cursor-pointer">Portfolio</label>
              <ul
                tabIndex={0}
                className="p-2 bg-primary dropdown dropdown-content menu menu-sm"
              >
                <li onClick={handleClick}>
                  <Link href="/portfolio/couples">Couples</Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/portfolio/families">Family/Children</Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/portfolio/portraits">Portraits</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <AccountManager />
      </div>
    </div>
  );
};

export default Navbar;
