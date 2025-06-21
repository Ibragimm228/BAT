// Professional logo component for rental/tenant services
function BatLogo({ variant = 'light' }) {
	const isDark = variant === 'dark'

	return (
		<div className='flex items-center space-x-3'>
			<div
				className={`w-10 h-10 ${
					isDark ? 'bg-blue-600' : 'bg-white'
				} rounded-lg flex items-center justify-center shadow-lg`}
			>
				<svg
					className={`w-6 h-6 ${isDark ? 'text-white' : 'text-blue-600'}`}
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
						isDark ? 'text-gray-900' : 'text-white'
					}`}
				>
					BAT
				</span>
				<span
					className={`text-xs ${
						isDark ? 'text-gray-600' : 'text-gray-400'
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
	children: import('react').ReactNode
	className?: string
}) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contacts', href: '/contacts' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
    services: [
      { name: 'Tool Reviews', href: '/reviews' },
      { name: 'Buying Guides', href: '/guides' },
      { name: 'Brand Comparisons', href: '/comparisons' },
      { name: 'Maintenance Tips', href: '/tips' },
    ],
    resources: [
      { name: 'FAQ', href: '/faq' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contacts' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.64 13.559 3.64 12.017s.558-2.877 1.486-3.694C5.951 7.516 7.152 7.029 8.449 7.029s2.497.487 3.422 1.294c.925.817 1.486 2.153 1.486 3.694s-.561 2.878-1.486 3.695c-.925.806-2.125 1.294-3.422 1.294zm7.138 0c-1.297 0-2.497-.488-3.422-1.295-.925-.817-1.486-2.153-1.486-3.695s.561-2.877 1.486-3.694c.925-.807 2.125-1.294 3.422-1.294s2.448.487 3.323 1.294c.928.817 1.486 2.153 1.486 3.694s-.558 2.878-1.486 3.695c-.875.807-2.026 1.295-3.323 1.295z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <BatLogo variant="light" />
              <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                Your ultimate guide to air tools. We provide expert reviews,
                comparisons, and guides for Harbor Freight and California Air Tools.
              </p>
              
              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                      aria-label={`Follow us on ${item.name}`}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm leading-6"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm leading-6"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm leading-6"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Workshop Insights
            </h3>
            <p className="text-gray-400 mb-8">
              Subscribe to get the latest tool reviews, deals, and maintenance
              tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="email-newsletter" className="sr-only">
                Email address for newsletter
              </label>
              <input
                id="email-newsletter"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-describedby="newsletter-description"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-describedby="newsletter-description"
              >
                Subscribe
              </button>
            </div>
            <p id="newsletter-description" className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} BAT. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-center md:justify-end space-x-6">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}