import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you shortly.",
        "That's a great question! I'll connect you with our AI experts.",
        "I've noted your inquiry. We specialize in AI coaching and automation services.",
        "Our team can help you with that. Would you like to schedule a free consultation?"
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const newBotMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot'
      };

      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Chatbot styling from JSON
  const chatbotStyle = {
    background: "linear-gradient(145deg, #0b0f22 0%, #121b3a 100%)",
    borderRadius: "1rem",
    boxShadow: "0 0 15px rgba(79,156,255,0.15)"
  };

  // Message bubble styling
  const getMessageBubbleStyle = (sender) => {
    if (sender === 'user') {
      return {
        background: "linear-gradient(135deg, rgba(79,156,255,0.9), rgba(157,108,255,0.9))",
        borderRadius: "1rem",
        maxWidth: "80%",
        padding: "0.75rem 1rem",
        color: "#ffffff"
      };
    } else {
      return {
        background: "linear-gradient(135deg, rgba(22,30,60,0.9), rgba(35,45,90,0.9))",
        borderRadius: "1rem",
        maxWidth: "80%",
        padding: "0.75rem 1rem",
        color: "#ffffff"
      };
    }
  };

  // Message animation variants
  const messageVariants = {
    enter: {
      opacity:1,
      y: [15, 0],
      transition: { duration: 0.35, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 15px rgba(79,156,255,0.25)",
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  // Typing indicator animation
  const typingIndicatorVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            style={chatbotStyle}
            className="mb-4 w-80 h-96 flex flex-col"
          >
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-semibold flex items-center">
                <Bot className="w-5 h-5 mr-2 text-primary" />
                AI Assistant
              </h3>
              <button 
                onClick={toggleChat}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={messageVariants}
                  initial="enter"
                  whileHover="hover"
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div style={getMessageBubbleStyle(message.sender)}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-800">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button 
                  onClick={handleSend}
                  className="rounded-l-none"
                  icon={<Send className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg hover:shadow-primary/30 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default ChatBot;