export function CallToActionSection() {
  return (
    <section className='relative bg-white py-20 lg:py-28 overflow-hidden'>
      {/* Subtle background pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white'>
        <div className='absolute inset-0 opacity-5'>
          <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g fill="#1f2937" fillOpacity="0.1">
                <circle cx="30" cy="30" r="1.5"/>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Main CTA Container */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden'>
          
          {/* Background decorative elements */}
          <div className='absolute inset-0'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-y-32 translate-x-32'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full translate-y-24 -translate-x-24'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full'></div>
          </div>

          <div className='relative px-8 py-16 lg:px-16 lg:py-20'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
              
              {/* Content Side */}
              <div className='text-center lg:text-left'>
                
                {/* Badge */}
                <div className='inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8'>
                  <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className='text-blue-200 text-sm font-semibold'>Stay Informed</span>
                </div>

                {/* Main Heading */}
                <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                  Get Expert Tool Reviews
                  <span className='block text-blue-200 text-3xl lg:text-4xl font-semibold mt-2'>
                    Delivered to Your Inbox
                  </span>
                </h2>

                {/* Description */}
                <p className='text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl lg:max-w-none'>
                  Join thousands of professionals who rely on our in-depth reviews of Harbor Freight 
                  air tools and California Air Tools compressors. Get the latest insights, buying guides, 
                  and exclusive deals delivered straight to your inbox.
                </p>

                {/* Benefits List */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>
                  {[
                    { icon: '📊', text: 'Expert Reviews & Analysis' },
                    { icon: '💰', text: 'Exclusive Deal Alerts' },
                    { icon: '🔧', text: 'Professional Buying Guides' },
                    { icon: '⚡', text: 'Weekly Industry Updates' }
                  ].map((benefit, index) => (
                    <div key={index} className='flex items-center space-x-3 text-blue-100'>
                      <span className='text-lg'>{benefit.icon}</span>
                      <span className='font-medium'>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Side */}
              <div className='mt-12 lg:mt-0'>
                
                {/* Newsletter Signup Form */}
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
                  <div className='text-center mb-6'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      Join 15,000+ Professionals
                    </h3>
                    <p className='text-blue-200'>
                      Subscribe for expert tool reviews and insights
                    </p>
                  </div>

                  {/* Email Input */}
                  <div className='space-y-4'>
                    <div>
                      <input
                        type='email'
                        placeholder='Enter your email address'
                        className='w-full px-4 py-4 bg-white/95 border border-transparent rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200'
                      />
                    </div>
                    
                    <button className='w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2'>
                      <span>Get Expert Reviews</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Trust indicators */}
                  <div className='mt-6 flex items-center justify-center space-x-4 text-blue-200 text-sm'>
                    <div className='flex items-center space-x-1'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Secure</span>
                    </div>
                    <span>•</span>
                    <div className='flex items-center space-x-1'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>No Spam</span>
                    </div>
                    <span>•</span>
                    <div className='flex items-center space-x-1'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Free</span>
                    </div>
                  </div>
                </div>

                {/* Alternative CTA */}
                <div className='mt-6 text-center'>
                  <a
                    href='/contacts'
                    className='inline-flex items-center text-blue-200 hover:text-white font-semibold transition-colors duration-200'
                  >
                    <span>Or contact us directly</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className='mt-16 text-center'>
          <p className='text-gray-600 mb-8 font-medium'>
            Trusted by Workshop Professionals Worldwide
          </p>
          <div className='flex justify-center items-center space-x-12 opacity-60'>
            <div className='flex items-center space-x-2'>
              <div className='flex -space-x-2'>
                {[1,2,3,4].map(i => (
                  <div key={i} className='w-8 h-8 bg-blue-100 rounded-full border-2 border-white'></div>
                ))}
              </div>
              <span className='text-gray-500 font-semibold text-sm'>15,000+ Subscribers</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='flex'>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className='text-gray-500 font-semibold text-sm'>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}