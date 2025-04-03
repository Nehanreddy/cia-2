import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, Plus } from 'lucide-react';

const Calendar = () => {
  const events = [
    { id: 1, title: 'Team Meeting', time: '09:00 AM', attendees: 5, type: 'meeting' },
    { id: 2, title: 'Project Review', time: '11:30 AM', attendees: 3, type: 'review' },
    { id: 3, title: 'Client Call', time: '02:00 PM', attendees: 2, type: 'call' },
    { id: 4, title: 'Sprint Planning', time: '04:00 PM', attendees: 8, type: 'planning' },
  ];

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Calendar</h2>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Plus size={20} />
            <span>New Event</span>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-gray-500 font-medium py-1">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-lg p-2 hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-sm">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Events */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Today's Events</h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <CalendarIcon className="text-indigo-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{event.title}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
