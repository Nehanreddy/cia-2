import React, { useState } from "react";

const SettingsPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [name, setName] = useState<string>("John Doe");
  const [email, setEmail] = useState<string>("john.doe@example.com");

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  // Handle profile changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
  };

  // Toggle Notification Settings
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Settings</h2>

      {/* Dark Mode Toggle */}
      <div className="mb-6 flex justify-between items-center">
        <span className="text-gray-800 dark:text-white">Dark Mode</span>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-indigo-600 text-white rounded-full"
        >
          {isDarkMode ? "Disable" : "Enable"} Dark Mode
        </button>
      </div>

      {/* Profile Settings */}
      <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">Profile Settings</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleProfileChange}
            className="w-full p-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleProfileChange}
            className="w-full p-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md"
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">Notification Settings</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Enable Notifications</span>
          <button
            onClick={toggleNotifications}
            className={`px-4 py-2 rounded-full ${
              notificationsEnabled ? "bg-green-600" : "bg-red-600"
            } text-white`}
          >
            {notificationsEnabled ? "Disable" : "Enable"}
          </button>
        </div>
      </div>

      {/* Password Change */}
      <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">Change Password</h3>
        <div className="mb-4">
          <label htmlFor="current-password" className="block text-gray-600 dark:text-gray-300 mb-2">
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            className="w-full p-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block text-gray-600 dark:text-gray-300 mb-2">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full p-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-600 dark:text-gray-300 mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md"
          />
        </div>
      </div>

      {/* Account Deletion */}
      <div className="mb-6 p-4 bg-red-100 dark:bg-red-800 rounded-lg">
        <h3 className="text-xl font-medium text-red-800 dark:text-red-200 mb-4">Delete Account</h3>
        <p className="text-red-700 dark:text-red-300 mb-4">
          Deleting your account will remove all your data permanently. Please proceed with caution.
        </p>
        <button className="px-4 py-2 bg-red-600 text-white rounded-full">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
