'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Authenticating...');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the current session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          setStatus('error');
          setMessage('Authentication failed. Please try again.');
          setTimeout(() => router.push('/'), 3000);
          return;
        }

        if (session?.user) {
          setStatus('success');
          setMessage('Successfully authenticated! Redirecting...');
          setTimeout(() => router.push('/'), 1500);
        } else {
          setStatus('error');
          setMessage('No session found. Please try signing in again.');
          setTimeout(() => router.push('/'), 3000);
        }
      } catch (error) {
        console.error('Unexpected error during auth callback:', error);
        setStatus('error');
        setMessage('An unexpected error occurred. Please try again.');
        setTimeout(() => router.push('/'), 3000);
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-4">
            {status === 'loading' && (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            )}
            {status === 'success' && (
              <div className="text-green-600 text-4xl mb-2">✓</div>
            )}
            {status === 'error' && (
              <div className="text-red-600 text-4xl mb-2">✗</div>
            )}
          </div>
          
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            {status === 'loading' && 'Authenticating...'}
            {status === 'success' && 'Success!'}
            {status === 'error' && 'Authentication Failed'}
          </h1>
          
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
