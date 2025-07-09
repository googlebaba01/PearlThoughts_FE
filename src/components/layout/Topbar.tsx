import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface TopbarProps {
  onSidebarToggle: () => void;
}

export default function Topbar({ onSidebarToggle }: TopbarProps) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden mr-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={onSidebarToggle}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="h-6 w-6 text-gray-700" />
      </button>
      {/* Location */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-gray-800">Richmond Hill</span>
        <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium">Active</span>
      </div>
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end mr-2">
          <span className="font-medium text-gray-900 text-sm">Alynia Allan</span>
          <span className="text-xs text-gray-500">alyniaallan@example.com</span>
        </div>
        <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User avatar"
            className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
          />
        </button>
      </div>
    </header>
  );
}
