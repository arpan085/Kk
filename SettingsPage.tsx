import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Star,
  ThumbsUp,
  MessageSquare,
  Filter,
} from 'lucide-react';

const ReviewsPage = () => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      service: 'Plumbing Repair',
      provider: 'Ram Bahadur',
      rating: 5,
      comment: 'Excellent service! Fixed my leaking pipe quickly and professionally. Very polite and cleaned up after the work.',
      date: '2 days ago',
      helpful: 12,
      images: [],
    },
    {
      id: 2,
      service: 'Home Cleaning',
      provider: 'Sita Devi',
      rating: 5,
      comment: 'My house has never been cleaner! Very thorough and attention to detail. Will definitely book again.',
      date: '1 week ago',
      helpful: 8,
      images: [],
    },
    {
      id: 3,
      service: 'Electrical Work',
      provider: 'Hari Prasad',
      rating: 4,
      comment: 'Good service overall. Took a bit longer than expected but the work was done well.',
      date: '2 weeks ago',
      helpful: 5,
      images: [],
    },
  ];

  const stats = [
    { stars: 5, count: 18, percentage: 75 },
    { stars: 4, count: 4, percentage: 17 },
    { stars: 3, count: 1, percentage: 4 },
    { stars: 2, count: 1, percentage: 4 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard" className="p-2 bg-white rounded-xl hover:bg-slate-100">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">My Reviews</h1>
            <p className="text-slate-500">Manage your reviews and ratings</p>
          </div>
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0F172A]">4.8</div>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-500">Based on 24 reviews</p>
            </div>
            <div className="flex-1 w-full space-y-2">
              {stats.map((stat) => (
                <div key={stat.stars} className="flex items-center gap-3">
                  <span className="text-sm text-slate-600 w-8">{stat.stars} ★</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-500 w-8">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[#0F172A]">Your Reviews</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl text-sm"
            >
              <option value="all">All Reviews</option>
              <option value="recent">Most Recent</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
            </select>
          </div>

          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-[#0F172A]">{review.service}</h3>
                  <p className="text-sm text-[#3B82F6]">{review.provider}</p>
                </div>
                <span className="text-sm text-slate-400">{review.date}</span>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-amber-500 fill-current' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-600 mb-4">{review.comment}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpful})
                </button>
                <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
                  <MessageSquare className="w-4 h-4" />
                  Reply
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
