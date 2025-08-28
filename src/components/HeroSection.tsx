'use client';

import { useState } from 'react';
import { useAuth } from './AuthProvider';
import SignIn from './SignIn';

export default function HeroSection() {
  const { user } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-yellow-900 font-semibold text-sm mb-6 animate-bounce">
            🔥 Hot New: AI Roasting Service Now Live!
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mx-4">
              Roasted
            </span>
            by AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the most hilarious, witty, and surprisingly therapeutic AI roasting sessions. 
            Our AI agents will roast you so good, you&apos;ll actually thank them!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {user ? (
              <button
                onClick={() => window.location.href = '/roast'}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🎤 Start Roasting Now
              </button>
            ) : (
              <button
                onClick={() => setShowSignIn(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🚀 Get Started Free
              </button>
            )}
            
            <button className="px-8 py-4 bg-white text-gray-800 font-semibold text-lg rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-gray-200">
              🎬 Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Roastees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Available</div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">🔥</div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl">😄</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-xl">🎭</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-lg">💬</div>
        </div>
      </div>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Sign In to Start Roasting</h3>
              <button
                onClick={() => setShowSignIn(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <SignIn />
          </div>
        </div>
      )}
    </section>
  );
}
