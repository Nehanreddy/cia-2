import React from 'react';
import { TrendingUp, Users, CheckCircle, Clock, Activity } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Team Velocity"
          value="24 pts"
          change="+12%"
          icon={TrendingUp}
          color="text-green-600"
        />
        <MetricCard
          title="Active Members"
          value="16"
          change="+3"
          icon={Users}
          color="text-blue-600"
        />
        <MetricCard
          title="Completion Rate"
          value="92%"
          change="+5%"
          icon={CheckCircle}
          color="text-indigo-600"
        />
        <MetricCard
          title="Avg. Response Time"
          value="2.4h"
          change="-18%"
          icon={Clock}
          color="text-purple-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Sprint Progress</h2>
          <div className="space-y-4">
            <ProgressBar label="Backend API" progress={75} color="bg-blue-600" />
            <ProgressBar label="Frontend UI" progress={60} color="bg-indigo-600" />
            <ProgressBar label="Database Migration" progress={90} color="bg-green-600" />
            <ProgressBar label="Testing" progress={45} color="bg-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Activity Timeline</h2>
          <div className="space-y-6">
            <TimelineItem
              title="New Feature Deployed"
              time="2 hours ago"
              description="Successfully deployed v2.1.0 to production"
              icon={Activity}
              color="bg-green-100 text-green-600"
            />
            <TimelineItem
              title="Sprint Planning"
              time="5 hours ago"
              description="Defined objectives for Sprint 24"
              icon={Users}
              color="bg-blue-100 text-blue-600"
            />
            <TimelineItem
              title="Performance Review"
              time="1 day ago"
              description="Completed quarterly performance analysis"
              icon={TrendingUp}
              color="bg-indigo-100 text-indigo-600"
            />
          </div>
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Weekly Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WeeklyStat
            label="Commits"
            data={[12, 19, 15, 22, 18, 24, 20]}
            color="bg-indigo-600"
          />
          <WeeklyStat
            label="Pull Requests"
            data={[5, 8, 6, 9, 7, 11, 8]}
            color="bg-blue-600"
          />
          <WeeklyStat
            label="Issues Closed"
            data={[8, 12, 9, 15, 11, 14, 13]}
            color="bg-green-600"
          />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
        <Icon className={color} size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center">
      <span className={change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
        {change}
      </span>
      <span className="text-gray-500 text-sm ml-2">vs last week</span>
    </div>
  </div>
);

const ProgressBar = ({ label, progress, color }: any) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-500">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`${color} rounded-full h-2`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const TimelineItem = ({ title, time, description, icon: Icon, color }: any) => (
  <div className="flex gap-4">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon size={20} />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{time}</p>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const WeeklyStat = ({ label, data, color }: any) => (
  <div>
    <h3 className="font-medium mb-2">{label}</h3>
    <div className="flex items-end justify-between h-24">
      {data.map((value: number, index: number) => (
        <div
          key={index}
          className={`w-6 ${color} rounded-t`}
          style={{ height: `${(value / Math.max(...data)) * 100}%` }}
        />
      ))}
    </div>
    <div className="flex justify-between mt-2 text-xs text-gray-500">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  </div>
);

export default Analytics;