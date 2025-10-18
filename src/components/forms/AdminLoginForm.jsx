import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { User, Lock } from 'lucide-react';

const AdminLoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would authenticate with a backend
    if (credentials.username === 'admin' && credentials.password === 'password') {
      onLogin(credentials);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full"
    >
      <Card className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">AI</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
          <p className="text-gray-400">Sign in to access the admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-300 mb-2 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2 flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <Button type="submit" className="w-full py-3">
            Sign In
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default AdminLoginForm;