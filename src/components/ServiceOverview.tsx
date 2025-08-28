export default function ServiceOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is AI Roasting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Think of it as therapy, but with more laughs and fewer tissues. Our AI agents are trained to deliver 
            witty, personalized roasts that are actually good for your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Roasts</h3>
            <p className="text-gray-600 mb-6">
              Our AI analyzes your personality and creates custom roasts that hit just the right spots. 
              It&apos;s like having a best friend who knows exactly how to tease you.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Tailored to your interests</li>
              <li>• Respectful but hilarious</li>
              <li>• Always in good fun</li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Voice & Text</h3>
            <p className="text-gray-600 mb-6">
              Choose your preferred way to get roasted. Call in for a live voice session or chat via text. 
              Both are equally entertaining!
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Phone call sessions</li>
              <li>• Text chat option</li>
              <li>• High-quality audio</li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Therapeutic Benefits</h3>
            <p className="text-gray-600 mb-6">
              Believe it or not, getting roasted can be therapeutic! It helps build resilience, 
              self-awareness, and a sense of humor about yourself.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Stress relief</li>
              <li>• Confidence building</li>
              <li>• Perspective shift</li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Sign Up</h4>
              <p className="text-gray-600">Create your account with just your email</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Choose Session</h4>
              <p className="text-gray-600">Pick between voice call or text chat</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Get Roasted</h4>
              <p className="text-gray-600">Enjoy your personalized AI roasting session</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-xl font-semibold mb-2">Feel Better</h4>
              <p className="text-gray-600">Walk away laughing and feeling refreshed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
