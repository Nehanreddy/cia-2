import React, { useState } from 'react';
import { Send, Search, MoreVertical, Users } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('private');

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm flex">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Tabs */}
        <div className="p-4 flex justify-around border-b border-gray-200">
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'private' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('private')}
          >
            Private
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'group' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('group')}
          >
            Group
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto flex-1">
          {activeTab === 'private'
            ? ["Alice", "Bob", "Charlie"].map((name, i) => <ChatListItem key={i} name={name} active={i === 0} />)
            : ["Team Alpha", "Project X", "Developers"].map((name, i) => <ChatListItem key={i} name={name} active={i === 0} group />)
          }
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="font-medium text-indigo-600">{activeTab === 'private' ? 'Alice' : 'Team Alpha'}</span>
            </div>
            <div>
              <h3 className="font-medium">{activeTab === 'private' ? 'Alice Johnson' : 'Team Alpha'}</h3>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {["Hey, how are you?", "I'm good, what about you?", "Just working on a project."].map((msg, i) => (
            <Message key={i} text={msg} sent={i % 2 === 0} />
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatListItem = ({ name, active, group }: { name: string, active?: boolean, group?: boolean }) => (
  <div className={`p-4 cursor-pointer flex items-center gap-3 ${active ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}>
    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
      {group ? <Users className="text-indigo-600" size={20} /> : <span className="font-medium text-indigo-600">{name[0]}</span>}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{name}</h4>
        <span className="text-xs text-gray-500">10:30 AM</span>
      </div>
      <p className="text-sm text-gray-500 truncate">Hey, let's catch up later.</p>
    </div>
  </div>
);

const Message = ({ text, sent }: { text: string, sent: boolean }) => (
  <div className={`flex ${sent ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[70%] ${sent ? 'bg-indigo-600 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
      <p>{text}</p>
      <span className={`text-xs ${sent ? 'text-indigo-200' : 'text-gray-500'} mt-1 block`}>10:30 AM</span>
    </div>
  </div>
);

export default Chat;
