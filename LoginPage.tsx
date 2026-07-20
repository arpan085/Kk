import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  Send,
  Paperclip,
  Image as ImageIcon,
  Mic,
} from 'lucide-react';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState(1);

  const chats = [
    {
      id: 1,
      name: 'Hari Prasad',
      service: 'Electrician',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hari',
      lastMessage: 'I will be there in 10 minutes',
      time: '2 min ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Sita Devi',
      service: 'Home Tutor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sita',
      lastMessage: 'Thank you for booking!',
      time: '1 hour ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Ram Bahadur',
      service: 'Plumber',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ram',
      lastMessage: 'The repair is complete.',
      time: 'Yesterday',
      unread: 0,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: 'Hello! How can I help you today?',
      time: '10:00 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hi! I need help with a wiring issue in my kitchen.',
      time: '10:02 AM',
    },
    {
      id: 3,
      sender: 'them',
      text: 'I can definitely help with that. When would you like me to come?',
      time: '10:03 AM',
    },
    {
      id: 4,
      sender: 'me',
      text: 'Would today at 2 PM work for you?',
      time: '10:05 AM',
    },
    {
      id: 5,
      sender: 'them',
      text: 'Perfect! I will be there in 10 minutes.',
      time: '1:50 PM',
    },
  ];

  const activeChatData = chats.find((c) => c.id === activeChat);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-8rem)]">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full overflow-hidden">
          <div className="flex h-full">
            {/* Chat List */}
            <div className="w-full sm:w-80 border-r border-slate-200 flex flex-col">
              <div className="p-4 border-b border-slate-100">
                <h2 className="font-semibold text-[#0F172A]">Messages</h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChat(chat.id)}
                    className={`w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors ${
                      activeChat === chat.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={chat.avatar}
                        alt={chat.name}
                        className="w-12 h-12 rounded-full"
                      />
                      {chat.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-[#0F172A]">{chat.name}</h3>
                        <span className="text-xs text-slate-400">{chat.time}</span>
                      </div>
                      <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 bg-[#3B82F6] text-white text-xs rounded-full flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="hidden sm:flex flex-1 flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <Link to="/dashboard" className="sm:hidden p-2 -ml-2">
                    <ArrowLeft className="w-5 h-5 text-slate-600" />
                  </Link>
                  <div className="relative">
                    <img
                      src={activeChatData?.avatar}
                      alt={activeChatData?.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {activeChatData?.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{activeChatData?.name}</h3>
                    <p className="text-xs text-slate-500">{activeChatData?.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                        msg.sender === 'me'
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'me' ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20"
                  />
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-[#3B82F6] text-white rounded-xl hover:bg-[#2563EB] transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile: Select a chat prompt */}
            <div className="sm:hidden flex-1 flex items-center justify-center p-8">
              <p className="text-slate-500 text-center">
                Select a chat to start messaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
