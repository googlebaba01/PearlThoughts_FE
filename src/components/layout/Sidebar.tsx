import React from "react";
import { HomeIcon, UserGroupIcon, CalendarIcon, Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Teachers", icon: UserGroupIcon },
  { name: "Schedule", icon: CalendarIcon },
  { name: "Settings", icon: Cog6ToothIcon },
];
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col p-4 shadow-lg min-h-screen transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:z-30`}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>
        <div className="flex items-center mb-8">
          <span className="text-xl font-bold tracking-tight text-gray-900">Teacher Admin</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  tabIndex={0}
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-8">
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Cog6ToothIcon className="h-5 w-5" aria-hidden="true" />
            <span>Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
} 