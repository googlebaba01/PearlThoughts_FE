'use client';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import AvailabilityCalendar from "./AvailabilityCalendar";

const tabs = [
  { label: "Availability" },
  { label: "Unavailabilities" },
  { label: "Students" },
  { label: "Schedule" },
  { label: "Invoiced Lessons" },
  { label: "Unscheduled Lessons" },
  { label: "Time Voucher" },
  { label: "Comments" },
  { label: "History" },
];

const TabbedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl p-8 w-full min-h-[340px] flex flex-col">
      <div className="flex flex-wrap gap-2 bg-white/70 rounded-full px-2 py-2 shadow-inner mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold text-sm outline-none
              ${activeTab === idx
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700"}
            `}
            onClick={() => setActiveTab(idx)}
            aria-selected={activeTab === idx}
            aria-controls={`tabpanel-${idx}`}
            role="tab"
            tabIndex={0}
            style={{
              boxShadow: activeTab === idx ? "0 4px 16px 0 rgba(80, 80, 200, 0.10)" : undefined,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1 w-full">
        {tabs.map((tab, idx) => (
          <Transition
            key={tab.label}
            show={activeTab === idx}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount
          >
            <div
              id={`tabpanel-${idx}`}
              role="tabpanel"
              aria-labelledby={tab.label}
              className="w-full h-full"
            >
              {activeTab === 0 && (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <AvailabilityCalendar />
                </div>
              )}
              {activeTab !== 0 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-gray-400 text-lg">{tab.label} content coming soon</span>
                </div>
              )}
            </div>
          </Transition>
        ))}
      </div>
    </section>
  );
};

export default TabbedSection;