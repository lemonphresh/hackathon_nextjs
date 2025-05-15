"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full relative z-30 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-800"
          aria-label="Toggle menu"
          style={{ cursor: "pointer" }}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        <div className="text-[28px] font-serif text-[#006699] tracking-tight select-none">
          Legacy<sup className="text-[10px] ml-0.5">®</sup>
        </div>

        <div>
          <Button
            icon={UserIcon}
            variant="secondary"
            circular
            className="border-gray-300 text-gray-800 hover:bg-gray-100 px-4 py-2"
          >
            Sign In
          </Button>
        </div>
      </div>

      {/* Floating Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-md z-20">
          <div className="flex flex-col px-4 py-3 gap-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-[#006699] font-medium"
            >
              Home
            </Link>
            <Link
              href="/obitwriter/obituary"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-[#006699] font-medium"
            >
              ObitWriter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
