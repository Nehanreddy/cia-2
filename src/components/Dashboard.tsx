import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BarChart3,
  PieChart,
  Activity,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const taskDistribution = [
    { label: "Frontend", value: 35, color: "bg-blue-500" },
    { label: "Backend", value: 25, color: "bg-indigo-500" },
    { label: "Design", value: 20, color: "bg-purple-500" },
    { label: "Testing", value: 20, color: "bg-pink-500" },
  ];

  const performanceData = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 75 },
    { day: "Thu", value: 55 },
    { day: "Fri", value: 85 },
    { day: "Sat", value: 70 },
    { day: "Sun", value: 60 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Tasks Pending"
          value="24"
          change="+12%"
          icon={Clock}
          color="text-blue-600"
        />
        <StatCard
          title="Completed Today"
          value="16"
          change="-8%"
          icon={Activity}
          color="text-green-600"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Team Performance"
          value="92%"
          change="+5%"
          icon={TrendingUp}
          color="text-purple-600"
        />
        <StatCard
          title="Active Members"
          value="28"
          change="+2"
          icon={Users}
          color="text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Task Distribution</h2>
          <div className="space-y-4">
            {taskDistribution.map((task, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{task.label}</span>
                  <span className="text-gray-500">{task.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${task.color} h-2 rounded-full`}
                    style={{ width: `${task.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Performance Trends</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-800">
            View All
          </button>
        </div>
        <div className="space-y-6">
          <ActivityItem
            icon={<BarChart3 className="text-blue-600" />}
            title="Project milestone achieved"
            description="Frontend development phase completed"
            time="2h ago"
          />
          <ActivityItem
            icon={<Users className="text-green-600" />}
            title="New team member added"
            description="Sarah Johnson joined the design team"
            time="4h ago"
          />
          <ActivityItem
            icon={<Activity className="text-purple-600" />}
            title="Performance review completed"
            description="Q1 performance metrics analyzed"
            time="6h ago"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon: Icon, color }) => (
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
      <span
        className={change.startsWith("+") ? "text-green-500" : "text-red-500"}
      >
        {change}
      </span>
      <span className="text-gray-500 text-sm ml-2">vs last week</span>
    </div>
  </div>
);

const ActivityItem = ({ icon, title, description, time }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
    <div className="flex-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <span className="text-sm text-gray-500">{time}</span>
  </div>
);

export default Dashboard;