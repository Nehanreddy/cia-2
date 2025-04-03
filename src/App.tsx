import React, { useState, useEffect } from "react";
import { Menu, Bell, Settings, Moon, Sun, Bot } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import Team from "./components/Team";
import Analytics from "./components/Analytics";
import Calendar from "./components/Calendar";
import Notifications from "./components/Notifications";
import SettingsPage from "./components/Settings";
import Chatbot from "./components/Chatbot"; // New Chatbot Component

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-900 flex transition-colors duration-300">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-blue-800 dark:bg-gray-800 transition-all duration-300`}
      >
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-16 bg-blue-700 dark:bg-gray-700 shadow-md flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white dark:text-gray-300 hover:text-gray-100 transition"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-white dark:text-gray-100">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>

          {/* Top Bar Buttons: Dark Mode, Notifications, AI Chatbot, Settings */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-blue-600 dark:hover:bg-gray-600 rounded-full transition"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-300" />
              )}
            </button>

            {/* Notifications Button */}
            <button
              onClick={() => setActiveTab("notifications")}
              className="p-2 hover:bg-blue-600 dark:hover:bg-gray-600 rounded-full transition"
            >
              <Bell size={20} className="text-white dark:text-gray-300" />
            </button>

            {/* AI Chatbot Button */}
            <button
              onClick={() => setActiveTab("chatbot")}
              className="p-2 hover:bg-blue-600 dark:hover:bg-gray-600 rounded-full transition"
            >
              <Bot size={20} className="text-green-400" />
            </button>

            {/* Settings Button */}
            <button
              onClick={() => setActiveTab("settings")}
              className="p-2 hover:bg-blue-600 dark:hover:bg-gray-600 rounded-full transition"
            >
              <Settings size={20} className="text-white dark:text-gray-300" />
            </button>

            <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-gray-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 overflow-auto h-[calc(100vh-4rem)]">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "chat" && <Chat />}
          {activeTab === "calendar" && <Calendar />}
          {activeTab === "team" && <Team />}
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "settings" && <SettingsPage />}
          {activeTab === "chatbot" && <Chatbot />} {/* AI Chatbot Page */}
        </div>
      </div>
    </div>
  );
};

export default App;
