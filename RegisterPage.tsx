import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CreditCard,
  Wallet,
  CheckCircle,
  Clock,
  Download,
} from 'lucide-react';

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState('methods');

  const paymentMethods = [
    { id: 1, type: 'esewa', name: 'eSewa', number: '98XXXXXXXX', default: true },
    { id: 2, type: 'khalti', name: 'Khalti', number: '98XXXXXXXX', default: false },
  ];

  const transactions = [
    { id: 1, service: 'Plumbing Repair', provider: 'Ram Bahadur', amount: -1200, date: 'Today', status: 'completed' },
    { id: 2, service: 'Wallet Top-up', provider: 'eSewa', amount: 5000, date: 'Yesterday', status: 'completed' },
    { id: 3, service: 'Home Cleaning', provider: 'Sita Devi', amount: -2000, date: 'Dec 10', status: 'completed' },
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
            <h1 className="text-2xl font-bold text-[#0F172A]">Payments</h1>
            <p className="text-slate-500">Manage your payment methods and transactions</p>
          </div>
        </div>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-2xl p-8 text-white mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/80">Wallet Balance</p>
                <p className="text-3xl font-bold">Rs. 2,500</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-white text-[#3B82F6] font-medium rounded-xl hover:bg-white/90 transition-colors">
              Add Money
            </button>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              eSewa Connected
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Khalti Connected
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-100">
            {['methods', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab === 'methods' ? 'Payment Methods' : 'Transaction History'}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'methods' && (
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-xl font-bold text-[#3B82F6]">{method.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">{method.name}</p>
                        <p className="text-sm text-slate-500">{method.number}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {method.default && (
                        <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                          Default
                        </span>
                      )}
                      <button className="text-slate-400 hover:text-slate-600">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors">
                  + Add New Payment Method
                </button>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {transaction.amount > 0 ? '+' : '-'}
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">{transaction.service}</p>
                        <p className="text-sm text-slate-500">{transaction.provider}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-[#0F172A]'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}Rs. {Math.abs(transaction.amount)}
                      </p>
                      <p className="text-xs text-slate-400">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
