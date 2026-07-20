import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Star,
  Clock,
  ChevronRight,
  CheckCircle,
  Users,
  Zap,
  Heart,
  Wrench,
  GraduationCap,
  Palette,
  Car,
  Truck,
  Camera,
  HeartPulse,
  ArrowRight,
  Bell,
} from 'lucide-react';

const LandingPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const categories = [
    { id: 'home', name: 'Home Services', icon: Wrench, color: '#3B82F6' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: '#8B5CF6' },
    { id: 'beauty', name: 'Beauty', icon: Palette, color: '#EC4899' },
    { id: 'tech', name: 'Technology', icon: Zap, color: '#06B6D4' },
    { id: 'vehicle', name: 'Vehicle', icon: Car, color: '#F59E0B' },
    { id: 'delivery', name: 'Delivery', icon: Truck, color: '#10B981' },
    { id: 'events', name: 'Events', icon: Camera, color: '#EF4444' },
    { id: 'health', name: 'Health', icon: HeartPulse, color: '#14B8A6' },
  ];

  const services = [
    { name: 'Electrician', icon: Zap, bookings: '2.5k+' },
    { name: 'Plumber', icon: Wrench, bookings: '1.8k+' },
    { name: 'Tutor', icon: GraduationCap, bookings: '3.2k+' },
    { name: 'Cleaner', icon: Heart, bookings: '4.1k+' },
    { name: 'Driver', icon: Car, bookings: '1.5k+' },
    { name: 'Photographer', icon: Camera, bookings: '980+' },
    { name: 'Mechanic', icon: Wrench, bookings: '2.1k+' },
    { name: 'Web Developer', icon: Zap, bookings: '850+' },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Search',
      description: 'Browse through our wide range of services or search for what you need',
      icon: Search,
    },
    {
      step: '02',
      title: 'Book',
      description: 'Select your preferred provider, choose date & time, and book instantly',
      icon: Clock,
    },
    {
      step: '03',
      title: 'Connect',
      description: 'Chat with your provider, share details, and track their arrival',
      icon: Users,
    },
    {
      step: '04',
      title: 'Complete',
      description: 'Get your service done and pay securely through our platform',
      icon: CheckCircle,
    },
    {
      step: '05',
      title: 'Review',
      description: 'Rate your experience and help others find the best providers',
      icon: Star,
    },
  ];

  const topProviders = [
    {
      name: 'Hari Prasad',
      service: 'Electrician',
      rating: 4.9,
      reviews: 328,
      experience: '8 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hari',
    },
    {
      name: 'Sita Sharma',
      service: 'Home Tutor',
      rating: 4.8,
      reviews: 256,
      experience: '5 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sita',
    },
    {
      name: 'Ram Bahadur',
      service: 'Plumber',
      rating: 4.9,
      reviews: 412,
      experience: '12 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ram',
    },
    {
      name: 'Gita Devi',
      service: 'Beautician',
      rating: 4.7,
      reviews: 189,
      experience: '6 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gita',
    },
  ];

  const testimonials = [
    {
      name: 'Prakash Gurung',
      role: 'Homeowner',
      content: 'Found an amazing electrician within 10 minutes! The booking process was seamless and the service was top-notch.',
      rating: 5,
    },
    {
      name: 'Anita K.C.',
      role: 'Business Owner',
      content: 'Cheapflix has transformed how I manage my property maintenance. All my service needs in one place!',
      rating: 5,
    },
    {
      name: 'Rajesh Shrestha',
      role: 'Student',
      content: 'Got a fantastic math tutor for my entrance exam prep. Professional, punctual, and very knowledgeable.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '10K+', label: 'Service Providers' },
    { value: '100+', label: 'Service Categories' },
    { value: '4.8', label: 'Average Rating' },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#3B82F6]">
                  Now serving all 77 districts of Nepal
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6"
              >
                Find Trusted{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  Professionals
                </span>{' '}
                Near You
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Book services instantly with verified local professionals. From home repairs to tutors, 
                find everything you need in one place.
              </motion.p>

              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-8"
              >
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl">
                    <Search className="w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="What service do you need?"
                      className="flex-1 bg-transparent outline-none text-slate-700 placeholder-slate-400"
                    />
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl sm:border-l border-slate-200">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="flex-1 bg-transparent outline-none text-slate-700 placeholder-slate-400"
                    />
                  </div>
                  <button className="px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                    Search
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#0F172A]">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">Electrician Service</h3>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="w-3 h-3" />
                        <span>2.5 km away</span>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold text-sm">4.9</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=electrician"
                      alt="Provider"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-sm text-[#0F172A]">Hari Prasad</p>
                      <p className="text-xs text-slate-500">Professional Electrician</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      Verified
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                      Available Now
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500">Starting from</p>
                      <p className="text-xl font-bold text-[#0F172A]">Rs. 500</p>
                    </div>
                    <button className="px-6 py-2.5 bg-[#0F172A] text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-[#0F172A]">Booking Confirmed</p>
                      <p className="text-xs text-slate-500">Just now</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-[#0F172A]">5 Star Review</p>
                      <p className="text-xs text-slate-500">Excellent service!</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Browse by Category
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our wide range of services across different categories
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/categories?type=${category.id}`}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon className="w-7 h-7" style={{ color: category.color }} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 text-center">
                    {category.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Popular Services */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-[#0F172A] mb-6">Popular Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/search?service=${service.name}`}
                    className="group flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <service.icon className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-[#0F172A]">{service.name}</p>
                      <p className="text-xs text-slate-500">{service.bookings} bookings</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              How Cheapflix Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Book your service in 5 simple steps. It's quick, easy, and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20" />
                )}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] p-0.5">
                    <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#3B82F6] mb-1" />
                      <span className="text-xs font-bold text-[#3B82F6]">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-2">
                Top Rated Providers
              </h2>
              <p className="text-slate-600">Highly rated professionals in your area</p>
            </div>
            <Link
              to="/search"
              className="hidden sm:flex items-center gap-2 text-[#3B82F6] font-medium hover:gap-3 transition-all"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/provider/${index + 1}`}>
                  <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                        />
                        <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-full">
                          <Star className="w-3 h-3 text-amber-500 fill-current" />
                          <span className="text-xs font-semibold text-amber-700">
                            {provider.rating}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-[#0F172A] mb-1">{provider.name}</h3>
                      <p className="text-sm text-[#3B82F6] mb-3">{provider.service}</p>

                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{provider.reviews} reviews</span>
                        <span>{provider.experience} exp</span>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 flex items-center justify-between group-hover:bg-blue-50 transition-colors">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-[#3B82F6]">
                        View Profile
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#3B82F6] transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/search"
              className="inline-flex items-center gap-2 text-[#3B82F6] font-medium"
            >
              View All Providers
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#0F172A] to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Cheapflix for their service needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6">
                Download Our Mobile App
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Get the full Cheapflix experience on your phone. Book services, chat with providers, 
                track arrivals, and manage everything on the go.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Book services instantly with a few taps',
                  'Real-time chat with service providers',
                  'Track provider location on map',
                  'Secure payments with multiple options',
                  'Get notified when provider arrives',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-[#0F172A] text-white rounded-xl hover:bg-slate-800 transition-colors">
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Download on</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-[#0F172A] text-white rounded-xl hover:bg-slate-800 transition-colors">
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">Recent Bookings</h3>
                      <p className="text-sm text-slate-500">Track your services</p>
                    </div>
                    <button className="p-2 bg-slate-50 rounded-xl">
                      <Bell className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>

                  {[
                    { name: 'Plumbing Service', status: 'In Progress', time: 'Today, 2:00 PM' },
                    { name: 'Home Cleaning', status: 'Completed', time: 'Yesterday' },
                    { name: 'AC Repair', status: 'Scheduled', time: 'Tomorrow, 10:00 AM' },
                  ].map((booking, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-[#0F172A]">{booking.name}</h4>
                        <p className="text-xs text-slate-500">{booking.time}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'Completed'
                            ? 'bg-green-100 text-green-600'
                            : booking.status === 'In Progress'
                            ? 'bg-amber-100 text-amber-600'
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join Nepal's largest service marketplace. Whether you need a service or want to offer one, 
            Cheapflix is your go-to platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-[#3B82F6] font-semibold rounded-xl hover:shadow-xl transition-all"
            >
              Find a Service
            </Link>
            <Link
              to="/register?type=provider"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
