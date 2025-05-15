"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full z-3 flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <Bars3Icon className="w-6 h-6 text-gray-800" />
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
    </nav>
  );
};

export default Navbar;
