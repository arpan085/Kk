import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-20 pb-12">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
              404
            </div>
            <div className="absolute inset-0 blur-3xl opacity-30">
              <div className="w-full h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-600 mb-8 text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Search Box */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3 bg-[#3B82F6] text-white font-medium rounded-xl hover:bg-[#2563EB] transition-colors w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-white transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Help Links */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-4">Looking for something else?</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/categories" className="text-[#3B82F6] hover:underline">
                Browse Services
              </Link>
              <span className="text-slate-300">•</span>
              <Link to="/search" className="text-[#3B82F6] hover:underline">
                Find Providers
              </Link>
              <span className="text-slate-300">•</span>
              <Link to="/help" className="text-[#3B82F6] hover:underline">
                Help Center
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
