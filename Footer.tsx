import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerDashboard from './pages/CustomerDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ServiceCategories from './pages/ServiceCategories';
import ProviderProfile from './pages/ProviderProfile';
import BookingPage from './pages/BookingPage';
import ChatPage from './pages/ChatPage';
import SearchResults from './pages/SearchResults';
import PaymentPage from './pages/PaymentPage';
import ReviewsPage from './pages/ReviewsPage';
import WalletPage from './pages/WalletPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/categories" element={<ServiceCategories />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
          <Route path="/booking/:providerId" element={<BookingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
