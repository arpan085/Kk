import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Wallet,
  Star,
  Settings,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  MapPin,
  ChevronRight,
  Plus,
} from 'lucide-react';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'jobs', name: 'Job Requests', icon: Calendar },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'earnings', name: 'Earnings', icon: Wallet },
    { id: 'reviews', name: 'Reviews', icon: Star },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Earnings', value: 'Rs. 45,000', change: '+23%', color: 'green' },
    { label: 'Active Jobs', value: '5', change: '+2', color: 'blue' },
    { label: 'Completed Jobs', value: '128', change: '+12', color: 'purple' },
    { label: 'Rating', value: '4.8', change: 'Top Rated', color: 'amber' },
  ];

  const jobRequests = [
    {
      id: 1,
      customer: 'John Doe',
      service: 'Plumbing Repair',
      location: 'Kathmandu, Baneshwor',
      date: 'Today, 2:00 PM',
      price: 'Rs. 1,200',
      status: 'pending',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      service: 'Pipe Installation',
      location: 'Lalitpur, Patan',
      date: 'Tomorrow, 10:00 AM',
      price: 'Rs. 3,500',
      status: 'pending',
    },
  ];

  const recentReviews = [
    {
      customer: 'Ram Bahadur',
      rating: 5,
      comment: 'Excellent service! Very professional and punctual.',
      date: '2 days ago',
    },
    {
      customer: 'Sita Devi',
      rating: 5,
      comment: 'Fixed my plumbing issue quickly. Highly recommended!',
      date: '5 days ago',
    },
  ];

  const earningsData = [
    { month: 'Jan', amount: 25000 },
    { month: 'Feb', amount: 32000 },
    { month: 'Mar', amount: 28000 },
    { month: 'Apr', amount: 35000 },
    { month: 'May', amount: 42000 },
    { month: 'Jun', amount: 45000 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-24">
              <div className="flex items-center gap-3 p-4 border-b border-slate-100 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                  <span className="text-white font-bold">RB</span>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Ram Bahadur</p>
                  <p className="text-sm text-slate-500">Plumber</p>
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
                        : 'text-slate-600 hover:bg-slate-50'
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#0F172A]">Provider Dashboard</h1>
                    <p className="text-slate-500">Welcome back! Here's your performance.</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-600">Online</span>
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
                      <p className={`text-xs mt-1 ${
                        stat.change.includes('+') ? 'text-green-500' : 'text-slate-400'
                      }`}>
                        {stat.change}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Job Requests */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-semibold text-[#0F172A]">New Job Requests</h2>
                    <Link to="/provider-dashboard?tab=jobs" className="text-sm text-[#3B82F6] hover:underline">
                      View All
                    </Link>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {jobRequests.map((job) => (
                      <div key={job.id} className="p-6 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-medium text-[#0F172A]">{job.service}</h3>
                            <p className="text-sm text-slate-500">{job.customer}</p>
                          </div>
                          <p className="font-semibold text-[#0F172A]">{job.price}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.date}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors">
                            Accept
                          </button>
                          <button className="flex-1 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">
                            Decline
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h2 className="font-semibold text-[#0F172A] mb-6">Recent Reviews</h2>
                  <div className="space-y-4">
                    {recentReviews.map((review, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{review.customer[0]}</span>
                            </div>
                            <span className="font-medium text-[#0F172A]">{review.customer}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm">{review.comment}</p>
                        <p className="text-xs text-slate-400 mt-2">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Job Requests</h2>
                <p className="text-slate-500">Manage your job requests here.</p>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Messages</h2>
                <p className="text-slate-500">Your conversations will appear here.</p>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h2 className="font-semibold text-[#0F172A] mb-6">Earnings Overview</h2>
                  <div className="h-64 flex items-end justify-between gap-4">
                    {earningsData.map((data, index) => (
                      <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-gradient-to-t from-[#3B82F6] to-[#06B6D4] rounded-t-lg transition-all duration-500"
                          style={{ height: `${(data.amount / 50000) * 200}px` }}
                        />
                        <span className="text-xs text-slate-500">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-sm text-slate-500">This Month</p>
                    <p className="text-2xl font-bold text-[#0F172A]">Rs. 45,000</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-sm text-slate-500">Pending</p>
                    <p className="text-2xl font-bold text-[#0F172A]">Rs. 8,500</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-sm text-slate-500">Available to Withdraw</p>
                    <p className="text-2xl font-bold text-[#0F172A]">Rs. 36,500</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Customer Reviews</h2>
                <p className="text-slate-500">All your reviews will appear here.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Account Settings</h2>
                <p className="text-slate-500">Manage your provider profile here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
