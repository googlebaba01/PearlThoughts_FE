import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <main className="flex-1 p-4 sm:p-8 md:p-10 max-w-7xl mx-auto w-full bg-gray-50 min-h-[calc(100vh-64px)]">
    {children}
  </main>
);

export default MainContainer;