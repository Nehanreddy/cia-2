import React from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  Users, 
  Layout,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  sidebarOpen,
  setSidebarOpen 
}) => {
  const menuItems = [
    { id: 'dashboard', icon: Layout, label: 'Dashboard' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' }
  ];

  return (
    <div className={`h-screen flex flex-col bg-indigo-700 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4 flex items-center justify-between">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center gap-3">
          {sidebarOpen && (
            <span className="text-xl font-bold">ProcessPro</span>
          )}
        </div>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-lg bg-indigo-800 hover:bg-indigo-900"
        >
          {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2 py-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1
              ${activeTab === item.id 
                ? 'bg-indigo-800 text-white' 
                : 'text-indigo-100 hover:bg-indigo-800'}`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
