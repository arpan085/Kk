import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Heart,
  CreditCard,
  Settings,
  Bell,
  Search,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  ChevronRight,
  Plus,
} from 'lucide-react';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'bookings', name: 'My Bookings', icon: Calendar },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'favorites', name: 'Favorites', icon: Heart },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Bookings', value: '24', change: '+12%', color: 'blue' },
    { label: 'Active Bookings', value: '3', change: '+2', color: 'green' },
    { label: 'Completed', value: '21', change: '+5', color: 'purple' },
    { label: 'Wallet Balance', value: 'Rs. 2,500', change: 'Available', color: 'amber' },
  ];

  const recentBookings = [
    {
      id: 1,
      service: 'Plumbing Repair',
      provider: 'Ram Bahadur',
      date: 'Today, 2:00 PM',
      status: 'in-progress',
      price: 'Rs. 1,200',
    },
    {
      id: 2,
      service: 'Home Cleaning',
      provider: 'Sita Devi',
      date: 'Tomorrow, 10:00 AM',
      status: 'confirmed',
      price: 'Rs. 2,000',
    },
    {
      id: 3,
      service: 'AC Repair',
      provider: 'Hari Prasad',
      date: 'Dec 15, 3:00 PM',
      status: 'pending',
      price: 'Rs. 1,500',
    },
  ];

  const recommendedProviders = [
    {
      name: 'Gita Sharma',
      service: 'Home Tutor',
      rating: 4.9,
      reviews: 156,
      price: 'Rs. 500/hr',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gita',
    },
    {
      name: 'Prakash Gurung',
      service: 'Electrician',
      rating: 4.8,
      reviews: 203,
      price: 'Rs. 800/hr',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Prakash',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-600';
      case 'in-progress':
        return 'bg-amber-100 text-amber-600';
      case 'confirmed':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-24">
              <div className="flex items-center gap-3 p-4 border-b border-slate-100 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">John Doe</p>
                  <p className="text-sm text-slate-500">Customer</p>
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
                    <h1 className="text-2xl font-bold text-[#0F172A]">Dashboard</h1>
                    <p className="text-slate-500">Welcome back! Here's what's happening.</p>
                  </div>
                  <Link
                    to="/categories"
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] text-white rounded-xl hover:bg-[#2563EB] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Book a Service
                  </Link>
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
                        {stat.change} {stat.change.includes('+') && 'from last month'}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Bookings */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-semibold text-[#0F172A]">Recent Bookings</h2>
                    <Link to="/dashboard?tab=bookings" className="text-sm text-[#3B82F6] hover:underline">
                      View All
                    </Link>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-[#3B82F6]" />
                          </div>
                          <div>
                            <h3 className="font-medium text-[#0F172A]">{booking.service}</h3>
                            <p className="text-sm text-slate-500">{booking.provider}</p>
                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                              <Clock className="w-3 h-3" />
                              {booking.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#0F172A]">{booking.price}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(booking.status)}`}>
                            {booking.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Providers */}
                <div>
                  <h2 className="font-semibold text-[#0F172A] mb-4">Recommended for You</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {recommendedProviders.map((provider, index) => (
                      <motion.div
                        key={provider.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4"
                      >
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#0F172A]">{provider.name}</h3>
                          <p className="text-sm text-[#3B82F6]">{provider.service}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="w-4 h-4 text-amber-500 fill-current" />
                            <span className="text-sm font-medium">{provider.rating}</span>
                            <span className="text-sm text-slate-400">({provider.reviews} reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#0F172A]">{provider.price}</p>
                          <Link
                            to={`/provider/${index + 1}`}
                            className="text-sm text-[#3B82F6] hover:underline"
                          >
                            Book Now
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">My Bookings</h2>
                <p className="text-slate-500">Your booking history will appear here.</p>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Messages</h2>
                <p className="text-slate-500">Your conversations will appear here.</p>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Favorite Providers</h2>
                <p className="text-slate-500">Your favorite providers will appear here.</p>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Payment History</h2>
                <p className="text-slate-500">Your payment history will appear here.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="font-semibold text-[#0F172A] mb-6">Account Settings</h2>
                <p className="text-slate-500">Manage your account settings here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
