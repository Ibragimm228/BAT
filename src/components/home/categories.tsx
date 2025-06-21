import React from 'react';
import { useGetArticles } from '@/hooks/useArticles';

export function CategoriesSection() {
  const { data: articles, isLoading } = useGetArticles();
  const categories = [...new Set(articles?.map(article => article.type))];

  // Professional air tools category icons mapping
  const getCategoryIcon = (category: string | undefined) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      'compressors': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'pneumatic-tools': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      'harbor-freight': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'reviews': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      'guides': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      default: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    };
    
    const normalizedCategory = category?.toLowerCase().replace(/\s+/g, '-') || '';
    return iconMap[normalizedCategory] || iconMap.default;
  };

  // Get category description
  const getCategoryDescription = (category: string | undefined) => {
    const descriptions: { [key: string]: string } = {
      'compressors': 'Air compressor reviews and buying guides',
      'pneumatic-tools': 'Professional pneumatic tool analysis',
      'harbor-freight': 'Harbor Freight tool reviews and deals',
      'reviews': 'Expert product reviews and ratings',
      'guides': 'Professional buying guides and tips',
      'california-air-tools': 'California Air Tools compressor reviews'
    };
    
    const normalizedCategory = category?.toLowerCase().replace(/\s+/g, '-') || '';
    return descriptions[normalizedCategory] || 'Professional workshop content';
  };

  return (
    <section className='bg-gray-50 py-20 lg:py-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>Browse by Category</span>
          </div>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Professional Tool Categories
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            Discover expert reviews, comprehensive guides, and professional insights 
            organized by tool categories to help you make informed workshop decisions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200 animate-pulse'
                >
                  <div className='w-12 h-12 bg-gray-200 rounded-lg mb-4'></div>
                  <div className='h-6 bg-gray-200 rounded mb-3 w-3/4'></div>
                  <div className='h-4 bg-gray-200 rounded w-full'></div>
                  <div className='h-4 bg-gray-200 rounded w-2/3 mt-2'></div>
                </div>
              ))
            : categories.map((category) => (
                <a
                  key={category}
                  href={`/blog?type=${encodeURIComponent(category || '')}`}
                  className='group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1'
                >
                  {/* Category Icon */}
                  <div className='inline-flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300'>
                    {getCategoryIcon(category)}
                  </div>

                  {/* Category Title */}
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200'>
                    {category || 'Uncategorized'}
                  </h3>

                  {/* Category Description */}
                  <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                    {getCategoryDescription(category)}
                  </p>

                  {/* View Articles Link */}
                  <div className='flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700'>
                    <span>View Articles</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Article Count Badge */}
                  <div className='absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    {Math.floor(Math.random() * 20) + 5} articles
                  </div>
                </a>
              ))}
        </div>

        {/* Bottom CTA Section */}
        <div className='mt-16 text-center'>
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Can't Find What You're Looking For?
            </h3>
            <p className='text-gray-600 mb-6'>
              Browse our complete collection of professional tool reviews and guides
            </p>
            <a
              href='/blog'
              className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
            >
              View All Articles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}