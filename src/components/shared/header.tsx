import React, { useState } from 'react'

// Professional logo component for rental/tenant services
function BatLogo({ variant = 'dark' }) {
	const isLight = variant === 'light'

	return (
		<div className='flex items-center space-x-3'>
			<div
				className={`w-10 h-10 ${
					isLight ? 'bg-white' : 'bg-blue-600'
				} rounded-lg flex items-center justify-center shadow-lg`}
			>
				<svg
					className={`w-6 h-6 ${isLight ? 'text-blue-600' : 'text-white'}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
					/>
				</svg>
			</div>
			<div className='flex flex-col'>
				<span
					className={`text-xl font-bold ${
						isLight ? 'text-white' : 'text-gray-900'
					}`}
				>
					BAT
				</span>
				<span
					className={`text-xs ${
						isLight ? 'text-gray-300' : 'text-gray-600'
					} uppercase tracking-wide`}
				>
					Air Tool Reviews
				</span>
			</div>
		</div>
	)
}

// Container component for consistent layout
function Container({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Mock hook for demonstration - replace with your actual hook
function useGetArticles() {
	// Mock data for demonstration
	const mockArticles = [
		{ type: 'Air Compressors' },
		{ type: 'Impact Wrenches' },
		{ type: 'Nail Guns' },
		{ type: 'Sanders' },
		{ type: 'Grinders' },
	]

	return {
		data: mockArticles,
		isLoading: false,
	}
}

const LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contacts',
    href: '/contacts',
  },
];

export function Header() {
  const { data: articles, isLoading } = useGetArticles();
  const types = [...new Set(articles?.map(article => article.type))];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative bg-white shadow-sm border-b border-gray-200" role="banner">
      {/* Top notification bar */}
      <div className="bg-blue-600 text-white py-2 text-center text-sm">
        <Container>
          <div className="flex items-center justify-center space-x-2">
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>🔧 Check out our latest review on Harbor Freight air tools!</span>
            <a
              href='/blog'
              className='underline hover:no-underline ml-2'
              aria-label='Learn more about our rental market analysis tool'
            >
              Learn More
            </a>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <Container>
        <div className="flex items-center justify-between py-6 lg:py-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="BAT - Air Tool Reviews Homepage">
              <BatLogo variant="dark" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {LINKS.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="hidden lg:block border-t border-gray-100 py-4">
          <nav role="navigation" aria-label="Category navigation">
            {isLoading ? (
              <div className="flex justify-center space-x-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-4 w-20 bg-gray-200 rounded animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center space-x-8 flex-wrap">
                {types.map(item => (
                  <a
                    key={item}
                    href={`/blog?type=${encodeURIComponent(item || '')}`}
                    className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </nav>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <Container>
          <div className="py-6 border-t border-gray-200">
            {/* Main Navigation */}
            <nav className="space-y-4 mb-6" role="navigation" aria-label="Mobile main navigation">
              {LINKS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Category Navigation */}
            <div className="border-t border-gray-100 pt-4 mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 px-4">Categories</h3>
              <nav className="space-y-2" role="navigation" aria-label="Mobile category navigation">
                {isLoading ? (
                  <div className="space-y-2 px-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-4 w-32 bg-gray-200 rounded animate-pulse"
                      />
                    ))}
                  </div>
                ) : (
                  types.map(item => (
                    <a
                      key={item}
                      href={`/blog?type=${encodeURIComponent(item || '')}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))
                )}
              </nav>
            </div>

            {/* Mobile CTA */}
            <div className="px-4">

            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}