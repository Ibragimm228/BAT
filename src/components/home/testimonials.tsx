const TESTIMONIALS = [
	{
	  quote: "Les Locataires made finding the perfect apartment incredibly easy. The platform's intuitive search and detailed property listings saved me weeks of searching.",
	  author: 'Sophie Martinez',
	  title: 'Marketing Manager',
	  location: 'Paris, France',
	  rating: 5,
	  image: 'https://images.squarespace-cdn.com/content/v1/5be898eea2772c09d1bf0cbc/63ed5a64-bdf6-4b77-a100-28b29301249b/1-1.jpg',
	},
	{
	  quote: "As a landlord, I've never had such professional tenant screening and property management support. The quality of tenants has been exceptional.",
	  author: 'James Richardson',
	  title: 'Property Owner',
	  location: 'Lyon, France',
	  rating: 5,
	  image: 'https://d1hge53o4owvlf.cloudfront.net/prod/uploads/2015/10/fp.jpeg',
	},
	{
	  quote: "The customer service team went above and beyond to help me navigate the rental process as an international student. Truly outstanding support.",
	  author: 'Maria Gonzalez',
	  title: 'Graduate Student',
	  location: 'Marseille, France',
	  rating: 5,
	  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak0hxwvsHfbk_Wch2GFm0tR8Kppweao6CEQ&s',
	},
	{
	  quote: "Finally, a rental platform that understands both landlords and tenants. The verification process gives me complete confidence in every transaction.",
	  author: 'Thomas Dubois',
	  title: 'Real Estate Investor',
	  location: 'Nice, France',
	  rating: 5,
	  image: 'https://www.lefilmfrancais.com/images/com_papyrus/contenus/0a829025f37e5a6a4dca6b81458359c2.jpg',
	},
  ];
  
  export function TestimonialsSection() {
	return (
	  <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
		{/* Background Elements */}
		<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
		  <div className="absolute inset-0 opacity-5">
			<svg className="w-full h-full" viewBox="0 0 60 60">
			  <g fill="none">
				<g fill="#1f2937" fillOpacity="0.1">
				  <circle cx="30" cy="30" r="1.5"/>
				</g>
			  </g>
			</svg>
		  </div>
		</div>
  
		{/* Decorative elements */}
		<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-32 translate-x-32"></div>
		<div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400/5 rounded-full translate-y-24 -translate-x-24"></div>
  
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  
		  {/* Header Section */}
		  <div className="text-center max-w-3xl mx-auto mb-16">
			<div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
			  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
			  </svg>
			  <span>Testimonials</span>
			</div>
  
			<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
			  Trusted by Thousands
			  <span className="block text-blue-600 text-3xl lg:text-4xl font-semibold mt-2">
				Across France
			  </span>
			</h2>
			<p className="text-xl text-gray-600 leading-relaxed">
			  Discover why property owners and tenants choose Les Locataires for their rental needs. 
			  Real stories from our satisfied community members.
			</p>
		  </div>
  
		  {/* Testimonials Grid */}
		  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
			{TESTIMONIALS.map(testimonial => (
			  <div
				key={testimonial.author}
				className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
			  >
				{/* Quote */}
				<div className="mb-6">
				  <svg className="w-8 h-8 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
					<path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z"/>
				  </svg>
				  <blockquote className="text-lg text-gray-700 leading-relaxed">
					"{testimonial.quote}"
				  </blockquote>
				</div>
  
				{/* Rating */}
				<div className="flex items-center mb-6">
				  {Array.from({ length: testimonial.rating }, (_, i) => (
					<svg
					  key={i}
					  className="w-5 h-5 text-yellow-400"
					  fill="currentColor"
					  viewBox="0 0 20 20"
					>
					  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
					</svg>
				  ))}
				</div>
  
				{/* Author Info */}
				<div className="flex items-center justify-between">
				  <div className="flex items-center space-x-4">
					{/* Avatar - Image or Initials fallback */}
					{testimonial.image ? (
					  <img
						className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:scale-110 transition-transform duration-300"
						src={testimonial.image}
						alt={testimonial.author}
						loading="lazy"
					  />
					) : (
					  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
						{testimonial.author.split(' ').map(n => n[0]).join('')}
					  </div>
					)}
					<div>
					  <h4 className="text-base font-bold text-gray-900">
						{testimonial.author}
					  </h4>
					  <p className="text-sm text-gray-600">{testimonial.title}</p>
					</div>
				  </div>
				  
				  {/* Location Badge */}
				  <div className="flex items-center space-x-1 text-gray-500 text-sm">
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
					  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
					</svg>
					<span>{testimonial.location}</span>
				  </div>
				</div>
			  </div>
			))}
		  </div>
  
		  {/* Stats Section */}
		  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 shadow-2xl">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
			  <div>
				<div className="text-4xl lg:text-5xl font-bold text-white mb-2">25K+</div>
				<div className="text-blue-200 font-medium">Happy Tenants</div>
			  </div>
			  <div>
				<div className="text-4xl lg:text-5xl font-bold text-white mb-2">8K+</div>
				<div className="text-blue-200 font-medium">Property Owners</div>
			  </div>
			  <div>
				<div className="text-4xl lg:text-5xl font-bold text-white mb-2">4.9</div>
				<div className="text-blue-200 font-medium">Average Rating</div>
			  </div>
			  <div>
				<div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
				<div className="text-blue-200 font-medium">Success Rate</div>
			  </div>
			</div>
		  </div>
  
		  {/* Bottom CTA */}
		  <div className="mt-16 text-center">
			<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
			  <h3 className="text-2xl font-bold text-gray-900 mb-4">
				Join Our Community
			  </h3>
			  <p className="text-gray-600 mb-6">
				Experience the difference with France's most trusted rental platform
			  </p>
			  <div className="flex flex-col sm:flex-row gap-4 justify-center">
				<a
				  href="/register"
				  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
				>
				  Get Started Today
				  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
				  </svg>
				</a>
				<a
				  href="/testimonials"
				  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
				>
				  Read More Reviews
				</a>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	);
  }