import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  Building,
  Briefcase,
  Upload,
} from 'lucide-react';

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<'customer' | 'provider'>(
    (searchParams.get('type') as 'customer' | 'provider') || 'customer'
  );
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  const steps = [
    { number: 1, title: 'Account Type' },
    { number: 2, title: 'Personal Info' },
    { number: 3, title: userType === 'provider' ? 'Verification' : 'Complete' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="text-left">
              <span className="font-bold text-2xl text-[#0F172A]">Cheapflix</span>
              <span className="text-sm block -mt-1 text-[#3B82F6]">Nepal</span>
            </div>
          </Link>
        </motion.div>

        {/* Registration Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Create Account</h1>
            <p className="text-slate-500">Join Nepal's largest service marketplace</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s.number
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      step > s.number ? 'bg-[#3B82F6]' : 'bg-slate-100'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <p className="text-center text-slate-600 mb-6">I want to join as:</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setUserType('customer')}
                    className={`p-6 rounded-2xl border-2 transition-all text-center ${
                      userType === 'customer'
                        ? 'border-[#3B82F6] bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                      userType === 'customer' ? 'bg-[#3B82F6]' : 'bg-slate-100'
                    }`}>
                      <User className={`w-7 h-7 ${userType === 'customer' ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">Customer</h3>
                    <p className="text-xs text-slate-500">Book services</p>
                  </button>

                  <button
                    onClick={() => setUserType('provider')}
                    className={`p-6 rounded-2xl border-2 transition-all text-center ${
                      userType === 'provider'
                        ? 'border-[#3B82F6] bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                      userType === 'provider' ? 'bg-[#3B82F6]' : 'bg-slate-100'
                    }`}>
                      <Briefcase className={`w-7 h-7 ${userType === 'provider' ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">Provider</h3>
                    <p className="text-xs text-slate-500">Offer services</p>
                  </button>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="98XXXXXXXX"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create password"
                      className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#3B82F6]" required />
                  <span className="text-sm text-slate-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#3B82F6] hover:underline">Terms</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && userType === 'provider' && (
              <motion.form
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Category</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all">
                    <option>Select a category</option>
                    <option>Home Services</option>
                    <option>Education</option>
                    <option>Beauty & Wellness</option>
                    <option>Technology</option>
                    <option>Vehicle Services</option>
                    <option>Health Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                  <input
                    type="number"
                    placeholder="e.g., 5"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Citizenship Document</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-[#3B82F6] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Complete Registration
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && userType === 'customer' && (
              <motion.div
                key="step3customer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Registration Complete!</h3>
                <p className="text-slate-600 mb-6">Your account has been created successfully.</p>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Sign In Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-6 text-slate-600"
        >
          Already have an account?{' '}
          <Link to="/login" className="text-[#3B82F6] font-medium hover:underline">
            Sign in
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default RegisterPage;
