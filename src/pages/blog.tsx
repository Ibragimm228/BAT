import React from 'react';
import { Link, useSearchParams } from 'react-router';
import { X, Search, Filter, Grid, List } from 'lucide-react';
import { Container } from '@/components/shared/container';
import ArticleCardMedium from '@/components/shared/article-card/article-card-medium';
import { useGetArticles } from '@/hooks/useArticles';

export function BlogPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || '';
  const { data: articles = [], isLoading, isError } = useGetArticles();
  const [viewMode, setViewMode] = React.useState('grid');
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter articles based on type and search query
  const filteredArticles = React.useMemo(() => {
    let filtered = type 
      ? articles?.filter(article => article.type === type)
      : articles;

    if (searchQuery) {
      filtered = filtered?.filter(article => 
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered || [];
  }, [articles, type, searchQuery]);

  // Get unique categories for filter options
  const categories = React.useMemo(() => {
    return [...new Set(articles?.map(article => article.type))].filter(Boolean);
  }, [articles]);

  if (isLoading) {
    return (
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section Skeleton */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <Container>
            <div className="relative text-center max-w-4xl mx-auto">
              <div className="w-32 h-8 bg-blue-400/30 rounded-lg mx-auto mb-6 animate-pulse"></div>
              <div className="w-96 h-12 bg-blue-400/30 rounded-lg mx-auto mb-6 animate-pulse"></div>
              <div className="w-80 h-6 bg-blue-400/30 rounded-lg mx-auto animate-pulse"></div>
            </div>
          </Container>
        </section>

        {/* Content Skeleton */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="w-3/4 h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="bg-gray-50 min-h-screen">
        <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <Container>
            <div className="relative text-center max-w-4xl mx-auto text-white">
              <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm font-semibold">Error</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Something Went Wrong
              </h1>
              <p className="text-xl text-red-100 mb-8">
                We're having trouble loading our rental guides and articles. Please try again later.
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Return Home
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 lg:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        
        <Container>
          <div className="relative text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8">
              <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-blue-200 text-sm font-semibold">Rental Housing Hub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Rental Guides & Tips
              {type && (
                <span className="block text-blue-200 text-3xl lg:text-4xl font-semibold mt-2">
                  {type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Expert advice and comprehensive guides for tenants and landlords. 
              Navigate the rental market with confidence using our professional insights.
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search rental guides and tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/95 border border-transparent rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{articles?.length || 0}</div>
                <div className="text-sm">Articles</div>
              </div>
              <div className="w-px h-8 bg-blue-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{categories.length}</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="w-px h-8 bg-blue-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Expert Tips</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 bg-white border-b border-gray-200">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-4">
              {type && (
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border border-blue-200">
                  <Filter className="w-4 h-4" />
                  <span className="font-semibold text-sm">
                    {type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <Link to="/blog" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <X className="w-4 h-4" />
                  </Link>
                </div>
              )}
              
              {/* Quick category filters */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category) =>
                  category ? (
                    <Link
                      key={category}
                      to={`/blog?type=${encodeURIComponent(category)}`}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                        type === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.replace(/-/g, ' ').replace(/\b\w/g, l =>
                        l.toUpperCase()
                      )}
                    </Link>
                  ) : null
                )}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm font-medium">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </span>
              
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <Container>
          {filteredArticles.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-8'
            }>
              {filteredArticles.map((article) => (
                <ArticleCardMedium 
                  key={article.id} 
                  article={article}
                  className={viewMode === 'list' ? 'max-w-none' : ''}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Articles Found
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {searchQuery 
                  ? `No articles match your search "${searchQuery}"`
                  : type 
                    ? `No articles found for category "${type}"`
                    : 'No articles available at the moment'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {(searchQuery || type) && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      window.history.pushState({}, '', '/blog');
                    }}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Clear Filters
                    <X className="ml-2 w-4 h-4" />
                  </button>
                )}
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter CTA Section - Only show if articles exist */}
      {filteredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Stay Updated with Rental Market Insights
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the latest rental guides, market trends, and expert tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}