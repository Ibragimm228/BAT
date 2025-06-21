import { useGetArticles } from '@/hooks/useArticles';
import ArticleCardSmall from '../shared/article-card/article-card-small';
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton';

export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles();

  return (
    <section className='relative bg-white py-20 lg:py-28 overflow-hidden' aria-labelledby="featured-articles-heading">
      {/* Subtle geometric background pattern */}
      <div className='absolute inset-0 opacity-3' aria-hidden="true">
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-50'></div>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#1e293b" fillOpacity="0.05"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-20 right-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl' aria-hidden="true"></div>
      <div className='absolute bottom-20 left-10 w-48 h-48 bg-indigo-100/20 rounded-full blur-2xl' aria-hidden="true"></div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <header className='text-center max-w-4xl mx-auto mb-16'>
          {/* Premium Badge */}
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full px-5 py-2.5 mb-8'>
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className='text-blue-700 text-sm font-semibold tracking-wide'>Featured Content</span>
          </div>

          {/* Main Heading */}
          <h2 id="featured-articles-heading" className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6'>
            Top Reviews & Guides for
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2'>
              Your Workshop
            </span>
          </h2>

          {/* Description */}
          <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8'>
            Hand-picked reviews and in-depth guides on the best air tools from
            Harbor Freight and California Air Tools to upgrade your workshop.
          </p>

          {/* Trust Indicators */}
          <div className='flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500'>
            <div className='flex items-center space-x-2'>
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expert Verified</span>
            </div>
            <div className='flex items-center space-x-2'>
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Updated Weekly</span>
            </div>
            <div className='flex items-center space-x-2'>
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Community Approved</span>
            </div>
          </div>
        </header>

        {/* Articles Grid */}
        <div className='grid gap-8 lg:grid-cols-3 mb-16'>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='bg-white rounded-lg shadow-sm border border-gray-200'>
                <ArticleCardSmallSkeleton />
              </div>
            ))
          ) : (
            articles?.slice(0, 3).map((article, index) => (
              <article key={article.id} className='group bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200'>
                
                {/* Featured badge for first article */}
                {index === 0 && (
                  <div className='absolute top-3 left-3 z-10'>
                    <span className='inline-flex items-center space-x-1 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md'>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span>Featured</span>
                    </span>
                  </div>
                )}

                <ArticleCardSmall article={article} />
              </article>
            ))
          )}
        </div>

        {/* Bottom CTA Section */}
        <div className='bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-sm'>
          <div className='text-center max-w-3xl mx-auto'>
            
            {/* CTA Badge */}
            <div className='inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6'>
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className='text-gray-700 text-sm font-semibold'>Explore More</span>
            </div>

            {/* CTA Heading */}
            <h3 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Ready to Upgrade
              <span className='text-blue-600'> Your Workshop?</span>
            </h3>

            {/* CTA Description */}
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Explore our complete library of tool reviews, buying guides, and
              maintenance tips to make your next project a success.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                href='/articles'
                className='group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                aria-label='View all tool reviews and articles'
              >
                <span>View All Reviews</span>
                <svg
                  className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
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
                href='/newsletter'
                className='group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                aria-label='Subscribe to newsletter for workshop tips'
              >
                <svg
                  className='mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span>Get Workshop Tips</span>
              </a>
            </div>

            {/* Social proof */}
            <div className='mt-8 flex justify-center items-center space-x-8 text-sm text-gray-500'>
              <div className='flex items-center space-x-2'>
                <div className='flex -space-x-1'>
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className='w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-2 border-white'
                      aria-hidden='true'
                    ></div>
                  ))}
                </div>
                <span className='font-medium'>50,000+ Readers Monthly</span>
              </div>
              <div className='hidden sm:flex items-center space-x-1'>
                <div className='flex'>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className='font-medium ml-1'>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}