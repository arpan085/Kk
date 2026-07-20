import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  MapPin,
  Calendar,
  Clock,
  CreditCard,
  CheckCircle,
  Info,
} from 'lucide-react';

const BookingPage = () => {
  const { providerId } = useParams();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('esewa');

  const services = [
    { id: 1, name: 'Wiring Installation', price: 500, duration: '1-3 hours' },
    { id: 2, name: 'Switch/Outlet Repair', price: 400, duration: '30 min - 1 hour' },
    { id: 3, name: 'Circuit Breaker Fix', price: 600, duration: '1-2 hours' },
    { id: 4, name: 'Fan Installation', price: 450, duration: '30 min' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectedServiceData = services.find((s) => s.id.toString() === selectedService);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to={`/provider/${providerId}`} className="p-2 bg-white rounded-xl hover:bg-slate-100">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Book Service</h1>
            <p className="text-slate-500">Complete your booking in 3 simple steps</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                  step >= s ? 'bg-[#3B82F6] text-white' : 'bg-slate-200 text-slate-500'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-1 rounded ${step > s ? 'bg-[#3B82F6]' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#0F172A]">Select Service</h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedService === service.id.toString()
                        ? 'border-[#3B82F6] bg-blue-50'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id.toString()}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-4 h-4 text-[#3B82F6]"
                      />
                      <div>
                        <p className="font-medium text-[#0F172A]">{service.name}</p>
                        <p className="text-sm text-slate-500">{service.duration}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-[#0F172A]">Rs. {service.price}</p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#0F172A]">Select Date & Time</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Time
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#0F172A]">Payment</h2>

              {/* Order Summary */}
              <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                <h3 className="font-medium text-[#0F172A]">Order Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{selectedServiceData?.name}</span>
                  <span className="font-medium">Rs. {selectedServiceData?.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Service Fee</span>
                  <span className="font-medium">Rs. 50</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="font-medium text-[#0F172A]">Total</span>
                  <span className="font-bold text-[#0F172A]">
                    Rs. {(selectedServiceData?.price || 0) + 50}
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  {[
                    { id: 'esewa', name: 'eSewa', color: '#60BB46' },
                    { id: 'khalti', name: 'Khalti', color: '#5C2D91' },
                    { id: 'ime', name: 'IME Pay', color: '#FF6B00' },
                    { id: 'cash', name: 'Cash on Service', color: '#0F172A' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-[#3B82F6] bg-blue-50'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#3B82F6]"
                      />
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: method.color }}
                      >
                        {method.name[0]}
                      </div>
                      <span className="font-medium text-[#0F172A]">{method.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={step === 3 ? () => {} : handleNext}
              disabled={
                (step === 1 && !selectedService) ||
                (step === 2 && (!selectedDate || !selectedTime))
              }
              className="flex-1 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 3 ? 'Confirm Booking' : 'Continue'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;
