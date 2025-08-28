# Authentication Setup

This project includes a complete email OTP (magic link) authentication system using Supabase.

## Components

### SignIn Component (`src/components/SignIn.tsx`)
A complete sign-in/sign-out component that handles:
- Email OTP authentication
- Session management
- Loading states
- Error handling
- Success messages

### AuthProvider Component (`src/components/AuthProvider.tsx`)
A context provider for managing authentication state across your app.

### Auth Callback (`src/app/auth/callback/page.tsx`)
Handles the redirect after clicking the magic link in your email.

## Usage

### Basic Usage
```tsx
import SignIn from '@/components/SignIn';

export default function MyPage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <SignIn />
    </div>
  );
}
```

### Using AuthProvider (Recommended)
```tsx
// In your layout.tsx
import { AuthProvider } from '@/components/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

// In any component
import { useAuth } from '@/components/AuthProvider';

export default function MyComponent() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

## Environment Variables

Make sure your `.env.local` file contains:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Features

✅ **Email OTP Authentication** - Secure magic link login
✅ **Session Management** - Automatic session persistence
✅ **Loading States** - Proper loading indicators
✅ **Error Handling** - User-friendly error messages
✅ **TypeScript Support** - Full type safety
✅ **Responsive Design** - Works on all devices
✅ **Accessibility** - Proper ARIA labels and keyboard navigation

## How It Works

1. User enters their email address
2. System sends a magic link to their email
3. User clicks the link in their email
4. They're redirected to `/auth/callback`
5. Session is established and user is signed in
6. User is redirected back to the main page

## Security Features

- Environment variables for sensitive data
- Proper session management
- Automatic token refresh
- Secure redirect handling
- Input validation and sanitization
