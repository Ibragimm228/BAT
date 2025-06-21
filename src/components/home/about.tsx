export function AboutSection() {
  return (
    <section className='relative bg-white py-24 lg:py-32 overflow-hidden'>
      {/* Subtle geometric background */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100 to-gray-50'></div>
        <div className='absolute top-20 right-20 w-64 h-64 border border-gray-200 rounded-full'></div>
        <div className='absolute bottom-32 left-32 w-48 h-48 border border-gray-200 rounded-full'></div>
        <div className='absolute top-1/2 left-1/4 w-32 h-32 border border-gray-200 rounded-full'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
          
          {/* Content Section */}
          <div className='space-y-8 lg:pr-8'>
            {/* Premium Badge */}
            <div className='inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-lg px-5 py-2.5'>
              <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
              <span className='text-gray-700 text-sm font-semibold tracking-wide uppercase'>
                Professional Workshop Solutions
              </span>
            </div>

            {/* Main Heading */}
            <div className='space-y-6'>
              <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight'>
                Industry-Leading
                <span className='block text-blue-600 mt-2'>
                  Air Tools & Compressors
                </span>
              </h2>
              
              <p className='text-xl text-gray-600 leading-relaxed max-w-2xl'>
                Discover comprehensive reviews and expert insights on Harbor Freight air tools 
                and California Air Tools compressors. We provide professional analysis to help 
                you make informed decisions for your workshop equipment needs.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className='grid grid-cols-2 gap-6 mt-12'>
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), 
                  title: 'Expert Reviews', 
                  desc: 'In-depth tool analysis' 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ), 
                  title: 'Performance Testing', 
                  desc: 'Real-world benchmarks' 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ), 
                  title: 'Buying Guides', 
                  desc: 'Professional recommendations' 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ), 
                  title: 'Industry Insights', 
                  desc: 'Latest market trends' 
                }
              ].map((feature, index) => (
                <div key={index} className='group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300'>
                  <div className='mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {feature.icon}
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>{feature.title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className='flex flex-col sm:flex-row gap-4 pt-8'>
              <a
                href='/about'
                className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href='/reviews'
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200'
              >
                Browse Reviews
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className='relative lg:pl-8'>
            {/* Main image container */}
            <div className='relative group'>
              {/* Shadow element */}
              <div className='absolute -bottom-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10'></div>
              
              {/* Image wrapper */}
              <div className='relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200'>
                <img
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Professional Air Tools and Compressors Workshop Equipment'
                />
                
                {/* Stats overlay */}
                <div className='absolute bottom-6 left-6 right-6'>
                  <div className='bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20'>
                    <div className='grid grid-cols-3 gap-4 text-center'>
                      <div>
                        <div className='text-2xl font-bold text-gray-900'>150+</div>
                        <div className='text-xs text-gray-600'>Tools Reviewed</div>
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-gray-900'>50K+</div>
                        <div className='text-xs text-gray-600'>Monthly Readers</div>
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-gray-900'>5★</div>
                        <div className='text-xs text-gray-600'>Expert Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating brand badges */}
            <div className='absolute -top-6 -left-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 hidden lg:block'>
              <div className='text-sm font-bold text-gray-900'>Harbor Freight</div>
              <div className='text-xs text-gray-600'>Quality Tools</div>
            </div>
            
            <div className='absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 hidden lg:block'>
              <div className='text-sm font-bold text-gray-900'>California Air Tools</div>
              <div className='text-xs text-gray-600'>Compressors</div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className='mt-20 pt-12 border-t border-gray-200'>
          <div className='text-center mb-8'>
            <p className='text-gray-600 font-medium'>Trusted by Workshop Professionals</p>
          </div>
          <div className='flex justify-center items-center space-x-12 opacity-60'>
            {['Professional Workshop', 'Industry Expert', 'Certified Reviews', 'Quality Assured'].map((badge, index) => (
              <div key={index} className='text-gray-500 font-semibold text-sm'>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}