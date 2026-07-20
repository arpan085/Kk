import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  CreditCard,
  MessageSquare,
  Settings,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  MoreVertical,
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'providers', name: 'Providers', icon: Briefcase },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Users', value: '12,450', change: '+15%', color: 'blue' },
    { label: 'Active Providers', value: '1,230', change: '+8%', color: 'green' },
    { label: 'Total Bookings', value: '45,678', change: '+22%', color: 'purple' },
    { label: 'Revenue', value: 'Rs. 2.5M', change: '+18%', color: 'amber' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', type: 'Customer', status: 'active', joined: '2 min ago' },
    { id: 2, name: 'Ram Bahadur', email: 'ram@example.com', type: 'Provider', status: 'pending', joined: '15 min ago' },
    { id: 3, name: 'Sita Devi', email: 'sita@example.com', type: 'Provider', status: 'active', joined: '1 hour ago' },
  ];

  const pendingVerifications = [
    { id: 1, name: 'Hari Prasad', service: 'Electrician', documents: 3, submitted: '2 hours ago' },
    { id: 2, name: 'Gita Sharma', service: 'Home Tutor', documents: 2, submitted: '5 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-[#0F172A] rounded-2xl shadow-lg p-4 sticky top-24">
              <div className="flex items-center gap-3 p-4 border-b border-slate-700 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Admin Panel</p>
                  <p className="text-xs text-slate-400">Cheapflix Nepal</p>
                </div>
              </div>

              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#3B82F6] text-white'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-[#0F172A]">Admin Dashboard</h1>
                    <p className="text-slate-500">Platform overview and analytics</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    System Online
                  </div>
                </div>

                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
                    >
                      <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-[#0F172A]">{stat.value}</p>
                      <p className="text-xs text-green-500 mt-1">{stat.change} from last month</p>
                    </motion.div>
                  ))}
                </div>

                {/* Pending Verifications */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      <h2 className="font-semibold text-[#0F172A]">Pending Verifications</h2>
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">
                      {pendingVerifications.length} Pending
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {pendingVerifications.map((provider) => (
                      <div key={provider.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                            <span className="text-lg font-bold text-slate-600">{provider.name[0]}</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-[#0F172A]">{provider.name}</h3>
                            <p className="text-sm text-slate-500">{provider.service}</p>
                            <p className="text-xs text-slate-400">{provider.submitted}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-500">{provider.documents} documents</span>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <XCircle className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Users */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-semibold text-[#0F172A]">Recent Users</h2>
                    <button className="text-sm text-[#3B82F6] hover:underline">View All</button>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                            <span className="text-white font-bold">{user.name[0]}</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-[#0F172A]">{user.name}</h3>
                            <p className="text-sm text-slate-500">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            user.type === 'Provider' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {user.type}
                          </span>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            user.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                          }`}>
                            {user.status}
                          </span>
                          <span className="text-sm text-slate-400">{user.joined}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-[#0F172A]">User Management</h2>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search users..."
                        className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm hover:bg-slate-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>
                <p className="text-slate-500">User management interface will be implemented here.</p>
              </div>
            )}

            {activeTab === 'providers' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Provider Management</h2>
                <p className="text-slate-500">Provider management interface will be implemented here.</p>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Payment Monitoring</h2>
                <p className="text-slate-500">Payment monitoring interface will be implemented here.</p>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Support Tickets</h2>
                <p className="text-slate-500">Support ticket management will be implemented here.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Platform Settings</h2>
                <p className="text-slate-500">Platform settings will be implemented here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
