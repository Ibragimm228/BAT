export function NotFoundPage() {
	return (
	  <section className='relative min-h-screen flex items-center justify-center bg-white overflow-hidden' role="main">
		{/* Subtle background pattern */}
		<div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white'>
		  <div className='absolute inset-0 opacity-5'>
			<svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			  <g fill="none" fillRule="evenodd">
				<g fill="#1f2937" fillOpacity="0.1">
				  <circle cx="30" cy="30" r="1.5"/>
				</g>
			  </g>
			</svg>
		  </div>
		</div>
  
		{/* Decorative background elements */}
		<div className='absolute inset-0 pointer-events-none' aria-hidden="true">
		  <div className='absolute top-20 right-20 w-64 h-64 border border-gray-200 rounded-full opacity-30'></div>
		  <div className='absolute bottom-32 left-32 w-48 h-48 border border-gray-200 rounded-full opacity-20'></div>
		  <div className='absolute top-1/2 left-1/4 w-32 h-32 border border-gray-200 rounded-full opacity-25'></div>
		</div>
  
		<div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
		  
		  {/* Premium Badge */}
		  <div className='inline-flex items-center space-x-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8'>
			<div className='w-2 h-2 bg-blue-600 rounded-full'></div>
			<span className='text-blue-800 text-sm font-semibold tracking-wide uppercase'>
			  Les locataires
			</span>
		  </div>
  
		  {/* 404 Display */}
		  <div className='relative mb-8'>
			<h1 className='text-8xl lg:text-9xl font-bold text-gray-900 mb-4 leading-none'>
			  404
			</h1>
			
			{/* Floating decorative elements */}
			<div className='absolute -top-6 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-60 animate-pulse hidden lg:block' aria-hidden="true"></div>
			<div className='absolute -bottom-4 -right-8 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse hidden lg:block' aria-hidden="true"></div>
		  </div>
  
		  {/* Error Message */}
		  <div className='space-y-6 mb-12'>
			<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 leading-tight'>
			  Page Not Found
			</h2>
			
			<p className='text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto'>
			  We're sorry, but the page you're looking for doesn't exist or has been moved. 
			  Let's get you back to exploring rental opportunities.
			</p>
		  </div>
  
		  {/* Quick Navigation Options */}
		  <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto'>
			{[
			  { 
				icon: (
				  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				  </svg>
				), 
				title: 'Browse Properties', 
				desc: 'Explore available rentals',
				href: '/properties'
			  },
			  { 
				icon: (
				  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				  </svg>
				), 
				title: 'Search Rentals', 
				desc: 'Find your perfect home',
				href: '/search'
			  },
			  { 
				icon: (
				  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				  </svg>
				), 
				title: 'Get Help', 
				desc: 'Contact our support team',
				href: '/contact'
			  }
			].map((option, index) => (
			  <a
				key={index}
				href={option.href}
				className='group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 hover:-translate-y-1'
				aria-label={`${option.title} - ${option.desc}`}
			  >
				<div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300'>
				  {option.icon}
				</div>
				<h3 className='text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200'>
				  {option.title}
				</h3>
				<p className='text-gray-600 text-sm leading-relaxed'>
				  {option.desc}
				</p>
			  </a>
			))}
		  </div>
  
		  {/* Primary CTA */}
		  <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
			<a
			  href='/'
			  className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
			  aria-label="Return to home page"
			>
			  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			  </svg>
			  Return to Home
			</a>
			
			<button
			  onClick={() => window.history.back()}
			  className='inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
			  aria-label="Go back to previous page"
			>
			  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			  </svg>
			  Go Back
			</button>
		  </div>
  
		  {/* Trust indicator */}
		  <div className='mt-16 pt-8 border-t border-gray-200'>
			<p className='text-gray-500 text-sm'>
			  Need immediate assistance? Contact our support team 24/7
			</p>
			<div className='flex justify-center items-center mt-4 space-x-6 opacity-60'>
			  <div className='flex items-center space-x-2'>
				<svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
				  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				<span className='text-gray-500 text-sm font-medium'>24/7 Support</span>
			  </div>
			  <div className='flex items-center space-x-2'>
				<svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
				  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
				  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
				</svg>
				<span className='text-gray-500 text-sm font-medium'>Quick Response</span>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	);
  }