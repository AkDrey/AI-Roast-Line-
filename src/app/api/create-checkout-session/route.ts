import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { planId, userId, userEmail } = await request.json();

    // Define pricing based on plan
    const pricing = {
      basic: { amount: 299, name: 'Quick Roast - 5 minutes' },
      premium: { amount: 499, name: 'Deep Roast - 10 minutes' },
      ultimate: { amount: 999, name: 'Epic Roast - 20 minutes' }
    };

    const plan = pricing[planId as keyof typeof pricing];
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: plan.name,
              description: 'AI Roasting Session',
              images: ['https://your-domain.com/roast-ai-logo.png'],
            },
            unit_amount: plan.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      customer_email: userEmail,
      metadata: {
        userId,
        planId,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
