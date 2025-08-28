'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      avatar: '👩‍💼',
      content: 'I was skeptical at first, but this AI roasting session was absolutely hilarious! It knew exactly how to poke fun at my workaholic tendencies. I actually felt more relaxed afterward.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Software Developer',
      avatar: '👨‍💻',
      content: 'As a developer, I thought I was immune to roasts. Boy, was I wrong! The AI went straight for my coffee addiction and debugging skills. Pure comedy gold!',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Fitness Trainer',
      avatar: '🏃‍♀️',
      content: 'This is the best stress relief I\'ve found! The AI roasted my gym selfies and protein shake obsession. I was crying with laughter. Highly recommend!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Teacher',
      avatar: '👨‍🏫',
      content: 'After a long day of teaching, this was exactly what I needed. The AI perfectly roasted my dad jokes and grading habits. My students would approve!',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Designer',
      avatar: '🎨',
      content: 'I was having a creative block, and this roasting session actually helped! The AI made fun of my color choices and design trends. It was oddly inspiring!',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Roastees Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what people are saying about their 
            AI roasting experiences.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Avatar */}
              <div className="text-6xl mb-6">{testimonials[activeIndex].avatar}</div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-900">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Sessions Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
