import React from 'react'

// Container component simulation
const Container = ({
	children,
	className = '',
}: {
	children: import('react').ReactNode
	className?: string
}) => (
	<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
		{children}
	</div>
)

export function AboutPage() {
	return (
		<div className='bg-white'>
			{/* Hero Section */}
			<section className='relative bg-white py-24 lg:py-32 overflow-hidden'>
				{/* Subtle geometric background */}
				<div className='absolute inset-0 opacity-5'>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100 to-gray-50'></div>
					<div className='absolute top-20 right-20 w-64 h-64 border border-gray-200 rounded-full'></div>
					<div className='absolute bottom-32 left-32 w-48 h-48 border border-gray-200 rounded-full'></div>
					<div className='absolute top-1/2 left-1/4 w-32 h-32 border border-gray-200 rounded-full'></div>
				</div>

				<Container>
					<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
						{/* Content Section */}
						<div className='space-y-8 lg:pr-8'>
							{/* Premium Badge */}
							<div className='inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-lg px-5 py-2.5'>
								<div className='w-2 h-2 bg-blue-600 rounded-full'></div>
								<span className='text-gray-700 text-sm font-semibold tracking-wide uppercase'>
									Your Trusted Workshop Partner
								</span>
							</div>

							{/* Main Heading */}
							<div className='space-y-6'>
								<h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight'>
									Welcome to
									<span className='block text-blue-600 mt-2'>BAT</span>
								</h1>

								<p className='text-xl text-gray-600 leading-relaxed max-w-2xl'>
									Your premier destination for air tool reviews, workshop
									guides, and everything you need to build your perfect
									workshop with confidence. We empower makers with knowledge
									and trusted guidance.
								</p>
							</div>

							{/* Key Features Grid */}
							<div className='grid grid-cols-2 gap-6 mt-12'>
								{[
									{
										icon: (
											<svg
												className='w-8 h-8 text-blue-600'
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
										title: 'Expert Reviews',
										desc: 'In-depth tool analysis',
									},
									{
										icon: (
											<svg
												className='w-8 h-8 text-blue-600'
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
												className='w-8 h-8 text-blue-600'
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
										desc: 'Professional recommendations',
									},
									{
										icon: (
											<svg
												className='w-8 h-8 text-blue-600'
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
										),
										title: 'Industry Insights',
										desc: 'Latest market trends',
									},
								].map((feature, index) => (
									<div
										key={index}
										className='group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300'
									>
										<div className='mb-4 group-hover:scale-110 transition-transform duration-300'>
											{feature.icon}
										</div>
										<h3 className='text-lg font-bold text-gray-900 mb-2'>
											{feature.title}
										</h3>
										<p className='text-gray-600 text-sm leading-relaxed'>
											{feature.desc}
										</p>
									</div>
								))}
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
										alt='Professional workshop with various air tools'
										loading='lazy'
									/>

									{/* Stats overlay */}
									<div className='absolute bottom-6 left-6 right-6'>
										<div className='bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20'>
											<div className='grid grid-cols-3 gap-4 text-center'>
												<div>
													<div className='text-2xl font-bold text-gray-900'>
														150+
													</div>
													<div className='text-xs text-gray-600'>
														Tools Reviewed
													</div>
												</div>
												<div>
													<div className='text-2xl font-bold text-gray-900'>
														50K+
													</div>
													<div className='text-xs text-gray-600'>
														Monthly Readers
													</div>
												</div>
												<div>
													<div className='text-2xl font-bold text-gray-900'>
														5★
													</div>
													<div className='text-xs text-gray-600'>
														Expert Rating
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating badges */}
							<div className='absolute -top-6 -left-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 hidden lg:block'>
								<div className='text-sm font-bold text-gray-900'>
									Since 2023
								</div>
								<div className='text-xs text-gray-600'>Trusted Source</div>
							</div>

							<div className='absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 hidden lg:block'>
								<div className='text-sm font-bold text-gray-900'>
									Expert Team
								</div>
								<div className='text-xs text-gray-600'>
									Professional Advice
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Mission Section */}
			<section className='bg-gray-50 py-20 lg:py-28'>
				<Container>
					<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
						{/* Image Section - Left */}
						<div className='relative'>
							<div className='relative group'>
								<div className='absolute -bottom-4 -left-4 w-full h-full bg-blue-100 rounded-2xl -z-10'></div>
								<div className='relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200'>
									<img
										className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
										src='https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt='Team of experts collaborating on tool reviews'
										loading='lazy'
									/>
								</div>
							</div>
						</div>

						{/* Content Section - Right */}
						<div className='space-y-8 lg:pl-8'>
							<div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
								<svg
									className='w-4 h-4'
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
								<span>Our Mission</span>
							</div>

							<h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
								Empowering Workshop
								<span className='block text-blue-600 mt-2'>
									Enthusiasts
								</span>
							</h2>

							<p className='text-xl text-gray-600 leading-relaxed mb-6'>
								At BAT, we believe every maker, from DIY hobbyist to
								seasoned professional, deserves access to reliable and honest
								tool reviews. Our mission is to provide clear, in-depth
								analysis to help you build your ideal workshop.
							</p>

							<p className='text-lg text-gray-600 leading-relaxed mb-8'>
								We aim to bridge the information gap in the tool market by
								providing comprehensive resources on Harbor Freight and
								California Air Tools, ensuring our community is well-informed
								and confident in their equipment purchases.
							</p>

							<div className='flex flex-col sm:flex-row gap-4'>
								<a
									href='/blog'
									className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
								>
									Explore Reviews
									<svg
										className='ml-2 w-5 h-5'
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
									href='/contacts'
									className='inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200'
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Team Section */}
			<section className='bg-white py-20 lg:py-28'>
				<Container>
					{/* Header */}
					<div className='text-center max-w-3xl mx-auto mb-16'>
						<div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
								/>
							</svg>
							<span>Meet Our Team</span>
						</div>

						<h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
							Expert Reviewers & Mechanics
						</h2>
						<p className='text-xl text-gray-600 leading-relaxed'>
							Our dedicated team brings years of experience in mechanical
							engineering, professional workshops, and tool analysis to
							provide you with trustworthy, actionable advice.
						</p>
					</div>

					{/* Team Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								name: 'John "Sarge" Riley',
								role: 'Lead Tool Reviewer',
								image: '/authors/1.avif',
								description:
									'With 20+ years as a master mechanic, Sarge provides no-nonsense reviews you can trust. He specializes in Harbor Freight tools.',
							},
							{
								name: 'Maria Garcia',
								role: 'Pneumatics Specialist',
								image: '/authors/2.avif',
								description:
									'Maria is an engineer who specializes in pneumatic systems. She provides in-depth analysis of California Air Tools compressors.',
							},
							{
								name: 'David Chen',
								role: 'DIY Project Pro',
								image: '/authors/3.avif',
								description:
									'David is a passionate DIYer who tests tools in real-world projects, providing a practical perspective for home workshop enthusiasts.',
							},
						].map((author, index) => (
							<div
								key={index}
								className='group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1'
							>
								<div className='text-center'>
									<div className='relative inline-block mb-6'>
										<img
											src={author.image}
											alt={`${author.name} - ${author.role}`}
											className='w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300'
											loading='lazy'
										/>
										<div className='absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white'></div>
									</div>

									<h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200'>
										{author.name}
									</h3>

									<p className='text-blue-600 font-semibold mb-4'>
										{author.role}
									</p>

									<p className='text-gray-600 text-sm leading-relaxed'>
										{author.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* CTA Section */}
			<section className='relative bg-white py-20 lg:py-28 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white'>
					<div className='absolute inset-0 opacity-5'>
						<svg
							className='w-full h-full'
							viewBox='0 0 60 60'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g fill='none' fillRule='evenodd'>
								<g fill='#1f2937' fillOpacity='0.1'>
									<circle cx='30' cy='30' r='1.5' />
								</g>
							</g>
						</svg>
					</div>
				</div>

				<Container>
					<div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden relative'>
						{/* Background decorative elements */}
						<div className='absolute inset-0'>
							<div className='absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-y-32 translate-x-32'></div>
							<div className='absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full translate-y-24 -translate-x-24'></div>
						</div>

						<div className='relative px-8 py-16 lg:px-16 lg:py-20 text-center'>
							<h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
								Ready to Build Your
								<span className='block text-blue-200 text-3xl lg:text-4xl font-semibold mt-2'>
									Dream Workshop?
								</span>
							</h2>

							<p className='text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto'>
								Join thousands of makers who trust BAT for expert tool
								reviews, project ideas, and comprehensive guides to build the
								ultimate workshop.
							</p>

							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<a
									href='/blog'
									className='inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105'
								>
									<span>Browse Reviews</span>
									<svg
										className='ml-2 w-5 h-5'
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
									href='/contacts'
									className='inline-flex items-center justify-center px-8 py-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-white font-semibold rounded-xl hover:bg-blue-400/30 transition-all duration-200'
								>
									Get Expert Help
								</a>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	)
}