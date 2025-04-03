import React from 'react';
import { Bell, MessageSquare, Calendar, Star, MoreVertical } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <NotificationItem 
              key={i}
              type={i % 4 === 0 ? 'message' : i % 3 === 0 ? 'calendar' : i % 2 === 0 ? 'mention' : 'task'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const NotificationItem = ({ type }: { type: 'message' | 'calendar' | 'mention' | 'task' }) => {
  const getIcon = () => {
    switch (type) {
      case 'message':
        return MessageSquare;
      case 'calendar':
        return Calendar;
      case 'mention':
        return Star;
      default:
        return Bell;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'message':
        return 'text-blue-600 bg-blue-100';
      case 'calendar':
        return 'text-purple-600 bg-purple-100';
      case 'mention':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-indigo-600 bg-indigo-100';
    }
  };

  const Icon = getIcon();
  const colorClass = getColor();

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center`}>
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <p className="font-medium">
          {type === 'message' && 'New message from Sarah'}
          {type === 'calendar' && 'Upcoming meeting: Team Sync'}
          {type === 'mention' && 'John mentioned you in a comment'}
          {type === 'task' && 'New task assigned: UI Review'}
        </p>
        <p className="text-sm text-gray-500">2 hours ago</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical size={20} />
      </button>
    </div>
  );
};

export default Notifications;