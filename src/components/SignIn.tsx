'use client';

import { useState, useEffect } from 'react';
import { supabase, sendMagicLink } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export default function SignIn() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  // Check for existing session on component mount
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };

    checkUser();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          setMessage('Successfully signed in!');
          setMessageType('success');
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setMessage('Successfully signed out!');
          setMessageType('success');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await sendMagicLink(email);
      setMessage('Check your email for a login link!');
      setMessageType('success');
      setEmail('');
    } catch (error) {
      console.error('Sign in error:', error);
      setMessage(error instanceof Error ? error.message : 'Failed to send login email.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      setMessage('Failed to sign out.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  // Clear message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        {user ? 'Welcome Back!' : 'Sign In'}
      </h2>

      {/* Message Display */}
      {message && (
        <div className={`mb-4 p-3 rounded-md text-sm ${
          messageType === 'success' 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      {user ? (
        /* Signed In State */
        <div className="text-center">
          <div className="mb-4">
            <p className="text-gray-600 mb-2">Signed in as:</p>
            <p className="font-semibold text-gray-800">{user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Signing out...' : 'Sign Out'}
          </button>
        </div>
      ) : (
        /* Sign In Form */
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={loading}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Sending...' : 'Send Magic Link'}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            We&apos;ll send you a secure login link via email
          </p>
        </form>
      )}
    </div>
  );
}
