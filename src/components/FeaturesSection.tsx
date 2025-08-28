export default function FeaturesSection() {
  const features = [
    {
      icon: '🤖',
      title: 'Advanced AI',
      description: 'Powered by cutting-edge language models for the wittiest roasts',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🎯',
      title: 'Personalized',
      description: 'Each roast is tailored to your unique personality and interests',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your conversations are encrypted and never shared',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Instant Access',
      description: 'Start roasting immediately, no waiting or scheduling needed',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: '📱',
      title: 'Multi-Platform',
      description: 'Works on phone, tablet, or computer - anywhere you are',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'Professional-grade roasting that&apos;s worth every penny',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our AI Roasting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve combined the best of AI technology with the art of comedy to create 
            the most entertaining and therapeutic roasting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Roasted?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of people who have discovered the joy of AI roasting
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Your Session Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
