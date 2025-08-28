<<<<<<< HEAD
# AI Roast - Modern Landing Page

A comprehensive, modern landing page for an AI roasting service with full-stack integrations including Stripe payments, Twilio voice calls, Supabase authentication, and OpenAI AI functionality.

## 🚀 Features

### Frontend
- **Modern Design**: Duolingo-inspired vibrant color scheme with playful animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Engaging hero section, testimonials carousel, and pricing cards
- **SEO Optimized**: Meta tags, structured data, and analytics integration
- **TypeScript**: Full type safety throughout the application

### Authentication
- **Email OTP**: Secure magic link authentication via Supabase
- **Session Management**: Automatic session persistence and state management
- **Protected Routes**: User authentication required for premium features

### Payment Integration
- **Stripe Checkout**: Secure payment processing with multiple pricing tiers
- **Subscription Management**: Per-minute billing for AI sessions
- **Money-back Guarantee**: Built-in refund policy

### AI & Communication
- **OpenAI Integration**: Advanced AI roasting capabilities
- **Twilio Voice**: Phone call integration for voice roasting sessions
- **Real-time Chat**: Text-based roasting sessions

### Backend Services
- **Supabase**: Database, authentication, and real-time features
- **API Routes**: RESTful endpoints for payments and contact forms
- **Webhook Handling**: Secure payment confirmation

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Payments**: Stripe
- **AI**: OpenAI API
- **Voice**: Twilio
- **Analytics**: Google Analytics, Facebook Pixel

## �� Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   └── create-checkout-session/
│   ├── auth/
│   │   └── callback/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthProvider.tsx
│   ├── ContactForm.tsx
│   ├── FeaturesSection.tsx
│   ├── HeroSection.tsx
│   ├── PricingSection.tsx
│   ├── ServiceOverview.tsx
│   ├── SignIn.tsx
│   └── Testimonials.tsx
└── lib/
    ├── supabaseClient.ts
    └── twilio.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account
- Twilio account
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd roast-line
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```bash
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # Twilio
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Design System

### Color Palette
- **Primary**: Green (#10B981) to Blue (#3B82F6) gradient
- **Secondary**: Purple (#8B5CF6), Yellow (#F59E0B)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good readability

### Components
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gradient backgrounds with scale animations
- **Forms**: Clean inputs with focus states
- **Modals**: Overlay dialogs for authentication

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Enable email authentication
3. Create necessary tables for user data
4. Set up Row Level Security (RLS) policies

### Stripe Setup
1. Create a Stripe account
2. Set up webhook endpoints
3. Configure payment methods
4. Test with test keys first

### Twilio Setup
1. Create a Twilio account
2. Get a phone number
3. Configure webhook URLs
4. Set up voice capabilities

## 📊 Analytics & SEO

### SEO Features
- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

### Analytics Integration
- Google Analytics 4
- Facebook Pixel
- Custom event tracking
- Conversion monitoring

## 🔒 Security

- Environment variables for sensitive data
- Input validation and sanitization
- CSRF protection
- Rate limiting
- Secure authentication flow
- HTTPS enforcement

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Caching**: Static generation where possible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email hello@airoast.com or create an issue in the repository.

## 🎯 Roadmap

- [ ] Multi-language support
- [ ] Advanced AI personalities
- [ ] Group roasting sessions
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations

---

Built with ❤️ by the AI Roast Team
=======
# AI-Roast-Line
Meet Roastline, your witty AI roast host. It’s comedy with consent and control: you select safe topics (procrastination, gym habits, gaming, coffee, meetings, dad jokes, astrology, fashion) and choose a spice level from gentle to spicy.
>>>>>>> d97d88e9e1696cd72fb14499437ddb6da248419e
