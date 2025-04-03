import React from 'react';
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import SarahAvatar from '../assets/1.jpg';
import MichaelAvatar from '../assets/2.jpg';
import EmilyAvatar from '../assets/has.jpg';
import DavidAvatar from '../assets/jai1.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'aleem',
      role: 'Product Manager',
      email: 'aleem.j@company.com',
      phone: '+1 234 567 890',
      location: 'San Francisco, CA',
      avatar: SarahAvatar,
    },
    {
      id: 2,
      name: 'hashish',
      role: 'Senior Developer',
      email: 'has.c@company.com',
      phone: '+1 234 567 891',
      location: 'New York, NY',
      avatar: MichaelAvatar,
    },
    {
      id: 3,
      name: 'sailesh',
      role: 'UI/UX Designer',
      email: 'sailu.d@company.com',
      phone: '+1 234 567 892',
      location: 'London, UK',
      avatar: EmilyAvatar,
    },
    {
      id: 4,
      name: 'hash',
      role: 'Backend Developer',
      email: 'hash.k@company.com',
      phone: '+1 234 567 893',
      location: 'Seoul, SK',
      avatar: DavidAvatar,
    },
  ];
  

  return (
    <div className="space-y-6">
      {/* Team Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
          <p className="text-3xl font-bold text-indigo-600">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
          <p className="text-3xl font-bold text-green-600">156</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Team Efficiency</h3>
          <p className="text-3xl font-bold text-blue-600">94%</p>
        </div>
      </div>
    </div>
  );
};

export default Team;