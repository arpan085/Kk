import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Star,
  Filter,
  ChevronDown,
  Heart,
  SlidersHorizontal,
  X,
} from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  const providers = [
    {
      id: 1,
      name: 'Hari Prasad',
      service: 'Electrician',
      rating: 4.9,
      reviews: 328,
      price: 'Rs. 500/hr',
      distance: '2.5 km',
      experience: '8 years',
      verified: true,
      available: true,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hari',
    },
    {
      id: 2,
      name: 'Gita Sharma',
      service: 'Home Tutor',
      rating: 4.8,
      reviews: 156,
      price: 'Rs. 800/hr',
      distance: '3.2 km',
      experience: '5 years',
      verified: true,
      available: true,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gita',
    },
    {
      id: 3,
      name: 'Ram Bahadur',
      service: 'Plumber',
      rating: 4.7,
      reviews: 203,
      price: 'Rs. 600/hr',
      distance: '1.8 km',
      experience: '12 years',
      verified: true,
      available: false,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ram',
    },
    {
      id: 4,
      name: 'Sita Devi',
      service: 'Beautician',
      rating: 4.9,
      reviews: 189,
      price: 'Rs. 1,200/session',
      distance: '4.1 km',
      experience: '6 years',
      verified: true,
      available: true,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sita',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services or providers..."
                defaultValue={searchParams.get('service') || ''}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full sm:w-64 pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-xl hover:bg-slate-50"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-6 pt-6 border-t border-slate-100"
            >
              <div className="grid sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Price Range</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl">
                    <option>Any Price</option>
                    <option>Under Rs. 500</option>
                    <option>Rs. 500 - 1000</option>
                    <option>Rs. 1000 - 2000</option>
                    <option>Above Rs. 2000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl">
                    <option>Any Rating</option>
                    <option>4.5 & up</option>
                    <option>4.0 & up</option>
                    <option>3.5 & up</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Distance</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl">
                    <option>Any Distance</option>
                    <option>Under 2 km</option>
                    <option>Under 5 km</option>
                    <option>Under 10 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl">
                    <option>Any Time</option>
                    <option>Available Now</option>
                    <option>Today</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            <span className="font-semibold text-[#0F172A]">{providers.length}</span> providers found
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-xl text-sm"
            >
              <option value="recommended">Recommended</option>
              <option value="rating">Highest Rated</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="distance">Nearest</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="space-y-4">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/provider/${provider.id}`}>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-24 h-24 rounded-2xl"
                        />
                        <button className="absolute -top-2 -right-2 p-1.5 bg-white rounded-full shadow-md text-slate-400 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-[#0F172A]">{provider.name}</h3>
                          <p className="text-[#3B82F6]">{provider.service}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#0F172A]">{provider.price}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            provider.available ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {provider.available ? 'Available' : 'Busy'}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="font-medium">{provider.rating}</span>
                          <span className="text-slate-500">({provider.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-4 h-4" />
                          <span>{provider.distance}</span>
                        </div>
                        <span className="text-slate-500">{provider.experience} experience</span>
                        {provider.verified && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
