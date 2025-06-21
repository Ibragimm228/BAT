import React from 'react';

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: 'We collect personal information that you voluntarily provide when you register for our rental services, express interest in our properties, participate in tenant activities, or contact us. The information collected depends on your interactions with our services, your choices, and the rental features you use.'
    },
    {
      id: 'information-usage',
      title: 'How We Use Your Information',
      content: 'We use personal information for various rental business purposes including property matching, lease management, tenant communication, and service improvement. We process your information based on legitimate business interests, contractual obligations, consent, and legal compliance.'
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: 'We only share information with your consent, to comply with laws, to provide rental services, protect rights, or fulfill business obligations. Sharing is based on consent, legitimate interests, contract performance, legal obligations, and vital interests.'
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.'
    },
    {
      id: 'tenant-rights',
      title: 'Your Rights as a Tenant',
      content: 'You have rights regarding your personal information including access, correction, deletion, portability, and objection to processing. Contact us to exercise these rights or if you have privacy concerns about our rental services.'
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      content: 'We may update this privacy policy periodically. Updates will be indicated by a revised date and become effective immediately upon posting. We encourage regular review to stay informed about our privacy practices.'
    }
  ];

  const quickLinks = [
    { href: '#information-collection', text: 'Information Collection' },
    { href: '#information-usage', text: 'Information Usage' },
    { href: '#information-sharing', text: 'Information Sharing' },
    { href: '#data-security', text: 'Data Security' },
    { href: '#tenant-rights', text: 'Your Rights' },
    { href: '#policy-updates', text: 'Policy Updates' }
  ];

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g fill="#1e40af" fillOpacity="0.1">
                <circle cx="30" cy="30" r="1.5"/>
              </g>
            </g>
          </svg>
        </div>

        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Legal Information</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Privacy Policy
              <span className="block text-blue-600 mt-2">
                Les locataires
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We are committed to protecting your personal information and privacy rights. 
              Learn how we collect, use, and safeguard your data when you use our rental services.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Last updated: June 22, 2025</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
                  aria-label={`Jump to ${link.text} section`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Welcome to Les locataires. We respect your privacy and are committed to protecting 
                  your personal information. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you use our rental platform services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By using our services, you agree to the collection and use of information in 
                  accordance with this policy. We encourage you to read this policy carefully 
                  to understand our practices regarding your personal information.
                </p>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="scroll-mt-8">
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-start space-x-4">
                        {/* Section Number */}
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                            {section.title}
                          </h2>
                          <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Questions About This Policy?
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  If you have questions or concerns about this Privacy Policy or our data practices, 
                  we're here to help. Contact our privacy team for assistance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    aria-label="Contact us about privacy policy"
                  >
                    Contact Us
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  
                  <a
                    href="/terms"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                    aria-label="View terms of service"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Related Information
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { href: '/terms', text: 'Terms of Service' },
                  { href: '/cookies', text: 'Cookie Policy' },
                  { href: '/security', text: 'Security Practices' },
                  { href: '/data-protection', text: 'Data Protection' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group"
                    aria-label={`Learn more about ${link.text}`}
                  >
                    <span>{link.text}</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}