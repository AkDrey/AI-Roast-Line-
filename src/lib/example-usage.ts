// Example usage of the Supabase client
import { supabase, sendMagicLink, getCurrentUser } from './supabaseClient';

// Example: Send magic link for authentication
export const handleLogin = async (email: string) => {
  try {
    await sendMagicLink(email);
    console.log('Magic link sent successfully!');
  } catch (error) {
    console.error('Error sending magic link:', error);
  }
};

// Example: Get current user
export const checkUser = async () => {
  const user = await getCurrentUser();
  if (user) {
    console.log('User is logged in:', user.email);
  } else {
    console.log('No user logged in');
  }
  return user;
};

// Example: Sign out
export const handleLogout = async () => {
  try {
    await supabase.auth.signOut();
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

// Example: Listen to auth state changes
export const setupAuthListener = () => {
  return supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth state changed:', event, session?.user?.email);
  });
};
