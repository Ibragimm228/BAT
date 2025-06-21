import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className='relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden min-h-screen flex items-center'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 translate-x-48 animate-pulse'></div>
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full translate-y-40 -translate-x-40 animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse delay-500'></div>
      </div>

      {/* Background image with optimized loading */}
      <div className='absolute inset-0 opacity-20'>
        <div
          className={`absolute inset-0 bg-slate-800 transition-opacity duration-500 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ zIndex: 1 }}
        />
        <img
          src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop'
          alt='Professional workshop with air tools'
          decoding='async'
          loading='eager'
          fetchPriority='high'
          className='w-full h-full object-cover'
          srcSet='https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop 400w,
                   https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop 800w,
                   https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop 1200w,
                   https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop 1600w'
          sizes='100vw'
          onLoad={() => setLoaded(true)}
          style={{ zIndex: 2, position: 'relative' }}
        />
      </div>

      {/* Hero content */}
      <Container className='relative z-10 py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            
            {/* Content Side */}
            <div className='text-center lg:text-left space-y-8'>
              
              {/* Premium Badge */}
              <div className='inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3'>
                <div className='flex -space-x-1'>
                  <img
                    className='w-6 h-6 rounded-full border-2 border-white object-cover'
                    src='/authors/1.avif'
                    alt='Reviewer 1'
                  />
                  <img
                    className='w-6 h-6 rounded-full border-2 border-white object-cover'
                    src='/authors/2.avif'
                    alt='Reviewer 2'
                  />
                  <img
                    className='w-6 h-6 rounded-full border-2 border-white object-cover'
                    src='/authors/3.avif'
                    alt='Reviewer 3'
                  />
                </div>
                <span className='text-white text-sm font-semibold'>
                  Expert Reviews You Can Trust
                </span>
              </div>

              {/* Main Heading */}
              <div className='space-y-6'>
                <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight'>
                  Revolutionize Your
                  <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2'>
                    Workshop
                  </span>
                </h1>
                
                <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl lg:max-w-none'>
                  In-depth reviews and guides for Harbor Freight & California Air
                  Tools. Equip your workshop with the best pneumatic tools.
                </p>
              </div>

              {/* Key Benefits */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 py-8'>
                {[
                  {
                    icon: (
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    ),
                    title: 'Honest Reviews',
                    desc: 'Unbiased tool analysis',
                  },
                  {
                    icon: (
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 10V3L4 14h7v7l9-11h-7z'
                        />
                      </svg>
                    ),
                    title: 'Performance Tests',
                    desc: 'Real-world benchmarks',
                  },
                  {
                    icon: (
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                        />
                      </svg>
                    ),
                    title: 'Buying Guides',
                    desc: 'Make informed decisions',
                  },
                ].map((benefit, index) => (
                  <div key={index} className='group text-center lg:text-left'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm text-blue-300 rounded-xl mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300'>
                      {benefit.icon}
                    </div>
                    <h3 className='text-lg font-bold text-white mb-2'>{benefit.title}</h3>
                    <p className='text-blue-200 text-sm'>{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <a
                  href='/blog'
                  className='group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-blue-500/25 hover:scale-105'
                  aria-label='Explore tool reviews and guides'
                >
                  <span>Explore Reviews</span>
                  <svg
                    className='ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </a>
                
                <a
                  href='/about'
                  className='group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200'
                  aria-label='Learn more about BAT'
                >
                  <span>About Us</span>
                  <svg
                    className='ml-3 w-5 h-5 group-hover:rotate-45 transition-transform duration-200'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual Side */}
            <div className='relative lg:pl-8 hidden lg:block'>
              {/* Feature Cards */}
              <div className='relative space-y-6'>
                
                {/* Card 1 - Top */}
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 10V3L4 14h7v7l9-11h-7z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-white font-bold'>Air Compressors</h3>
                      <p className='text-blue-200 text-sm'>
                        California Air Tools
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Middle */}
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-white font-bold'>Pneumatic Tools</h3>
                      <p className='text-blue-200 text-sm'>Harbor Freight</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Bottom */}
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-white font-bold'>In-depth Guides</h3>
                      <p className='text-blue-200 text-sm'>
                        From beginners to pros
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className='absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-white/20'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-slate-900'>150+</div>
                  <div className='text-xs text-slate-600'>Tools Reviewed</div>
                </div>
              </div>

              <div className='absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-white/20'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-slate-900'>50K+</div>
                  <div className='text-xs text-slate-600'>Monthly Readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}