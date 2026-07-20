import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Wrench,
  GraduationCap,
  Palette,
  Car,
  Truck,
  Camera,
  HeartPulse,
  Zap,
  Briefcase,
  Filter,
  MapPin,
  Star,
  ChevronRight,
} from 'lucide-react';

const ServiceCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      id: 'home',
      name: 'Home Services',
      icon: Wrench,
      color: '#3B82F6',
      description: 'Professional home maintenance services',
      services: ['Electrician', 'Plumber', 'Cleaner', 'Carpenter', 'Painter', 'AC Repair'],
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      color: '#8B5CF6',
      description: 'Expert tutors and educators',
      services: ['Home Tutor', 'Online Tutor', 'IELTS Teacher', 'PTE Teacher', 'Computer Teacher'],
    },
    {
      id: 'beauty',
      name: 'Beauty & Wellness',
      icon: Palette,
      color: '#EC4899',
      description: 'Beauty and self-care services',
      services: ['Barber', 'Hair Stylist', 'Makeup Artist', 'Nail Artist', 'Massage Therapist'],
    },
    {
      id: 'tech',
      name: 'Technology',
      icon: Zap,
      color: '#06B6D4',
      description: 'Tech professionals at your service',
      services: ['Web Developer', 'App Developer', 'Graphic Designer', 'IT Support'],
    },
    {
      id: 'vehicle',
      name: 'Vehicle Services',
      icon: Car,
      color: '#F59E0B',
      description: 'Vehicle maintenance and care',
      services: ['Driver', 'Bike Mechanic', 'Car Mechanic', 'Car Wash', 'Towing'],
    },
    {
      id: 'delivery',
      name: 'Delivery',
      icon: Truck,
      color: '#10B981',
      description: 'Fast and reliable delivery services',
      services: ['Courier', 'Document Delivery', 'Grocery Delivery', 'Food Delivery'],
    },
    {
      id: 'events',
      name: 'Events',
      icon: Camera,
      color: '#EF4444',
      description: 'Make your events memorable',
      services: ['Photographer', 'Videographer', 'DJ', 'Event Organizer', 'Catering'],
    },
    {
      id: 'health',
      name: 'Health',
      icon: HeartPulse,
      color: '#14B8A6',
      description: 'Healthcare and wellness services',
      services: ['Nurse', 'Caregiver', 'Physiotherapist', 'Fitness Trainer'],
    },
  ];

  const filteredCategories = categories.filter((cat) =>
    selectedCategory === 'all' ? true : cat.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      {/* Hero */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Browse Service Categories
            </h1>
            <p className="text-slate-600 mb-8">
              Find the perfect service for your needs from our wide range of categories
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/search?category=${category.id}`}>
                <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <category.icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#3B82F6] transition-colors" />
                  </div>

                  <h3 className="font-semibold text-xl text-[#0F172A] mb-2">{category.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{category.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {category.services.slice(0, 4).map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {category.services.length > 4 && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        +{category.services.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Popular Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Electrician', 'Home Tutor', 'Plumber', 'Driver', 'Cleaner', 'AC Repair', 'Photographer', 'Mechanic'].map(
              (service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/search?service=${service}`}
                    className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-[#3B82F6] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-[#3B82F6]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">{service}</p>
                        <p className="text-xs text-slate-500">200+ providers</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
