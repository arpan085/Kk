import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  Share2,
  Heart,
  Shield,
  Award,
  ChevronRight,
} from 'lucide-react';

const ProviderProfile = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  const provider = {
    name: 'Hari Prasad',
    service: 'Professional Electrician',
    rating: 4.9,
    reviews: 328,
    experience: '8 years',
    location: 'Kathmandu, Baneshwor',
    distance: '2.5 km',
    about: 'Professional electrician with 8+ years of experience in residential and commercial electrical work. Licensed and certified. Specializing in wiring, installations, repairs, and safety inspections.',
    languages: ['Nepali', 'Hindi', 'English'],
    services: [
      { name: 'Wiring Installation', price: 'Rs. 500/hr', duration: '1-3 hours' },
      { name: 'Switch/Outlet Repair', price: 'Rs. 400/hr', duration: '30 min - 1 hour' },
      { name: 'Circuit Breaker Fix', price: 'Rs. 600/hr', duration: '1-2 hours' },
      { name: 'Fan Installation', price: 'Rs. 450/fix', duration: '30 min' },
    ],
    reviewList: [
      {
        user: 'Ram Bahadur',
        rating: 5,
        comment: 'Excellent service! Fixed my electrical issue quickly and professionally.',
        date: '2 days ago',
      },
      {
        user: 'Sita Sharma',
        rating: 5,
        comment: 'Very punctual and knowledgeable. Would definitely recommend.',
        date: '1 week ago',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-[#3B82F6]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/categories" className="hover:text-[#3B82F6]">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-700">{provider.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{provider.name[0]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-2xl font-bold text-[#0F172A]">{provider.name}</h1>
                      <p className="text-[#3B82F6] font-medium">{provider.service}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`p-2 rounded-xl transition-colors ${
                          isFavorite ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 bg-slate-100 text-slate-400 rounded-xl hover:bg-slate-200">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="font-semibold">{provider.rating}</span>
                      <span className="text-slate-500">({provider.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-4 h-4" />
                      <span>{provider.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{provider.experience} experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      <Shield className="w-3 h-3" />
                      Background Checked
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                      <Award className="w-3 h-3" />
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-100">
                {['services', 'about', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'services' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#0F172A]">Services Offered</h3>
                    {provider.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-[#0F172A]">{service.name}</p>
                          <p className="text-sm text-slate-500">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#0F172A]">{service.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-2">About</h3>
                      <p className="text-slate-600 leading-relaxed">{provider.about}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {provider.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    {provider.reviewList.map((review: { user: string; rating: number; comment: string; date: string }, index: number) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{review.user[0]}</span>
                            </div>
                            <span className="font-medium text-[#0F172A]">{review.user}</span>
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
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
              >
                <h3 className="font-semibold text-[#0F172A] mb-4">Book Service</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Service
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]">
                      {provider.services.map((service) => (
                        <option key={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Time
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                    </select>
                  </div>
                </div>

                <Link
                  to={`/booking/${id}`}
                  className="block w-full py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-center font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all mb-3"
                >
                  Book Now
                </Link>

                <Link
                  to="/chat"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Message Provider
                </Link>

                <p className="text-xs text-slate-400 text-center mt-4">
                  You won't be charged yet
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
