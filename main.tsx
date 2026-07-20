import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  User,
  Briefcase,
  MessageSquare,
  Bell,
  Wallet,
  Settings,
  LogOut,
  MapPin,
  ChevronDown,
  Star,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isLoggedIn = false; // This would come from auth context

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/categories' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'About', href: '/#about' },
  ];

  const profileMenuItems = [
    { name: 'Dashboard', icon: User, href: '/dashboard' },
    { name: 'My Bookings', icon: Briefcase, href: '/dashboard?tab=bookings' },
    { name: 'Messages', icon: MessageSquare, href: '/chat' },
    { name: 'Wallet', icon: Wallet, href: '/wallet' },
    { name: 'Reviews', icon: Star, href: '/reviews' },
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Logout', icon: LogOut, href: '/' },
  ];

  if (isAuthPage) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-xl transition-colors ${
                  isScrolled ? 'text-[#0F172A]' : 'text-[#0F172A]'
                }`}>
                  Cheapflix
                </span>
                <span className={`text-sm block -mt-1 transition-colors ${
                  isScrolled ? 'text-[#3B82F6]' : 'text-[#3B82F6]'
                }`}>
                  Nepal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                    isScrolled ? 'text-slate-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services near you..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {isLoggedIn ? (
                <>
                  {/* Notifications */}
                  <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>

                  {/* Profile Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </button>

                    <AnimatePresence>
                      {showProfileMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
                        >
                          <div className="p-4 border-b border-slate-100">
                            <p className="font-semibold text-slate-900">Ram Bahadur</p>
                            <p className="text-sm text-slate-500">ram@email.com</p>
                          </div>
                          {profileMenuItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setShowProfileMenu(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                            >
                              <item.icon className="w-4 h-4" />
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="hidden sm:block px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#3B82F6] transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-slate-100 bg-white"
            >
              <div className="p-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-center rounded-xl font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
