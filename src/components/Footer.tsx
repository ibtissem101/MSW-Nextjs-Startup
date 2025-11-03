/**
 * Footer Component
 * 
 * Simple footer with links and copyright.
 * Easy to customize for your hackathon project.
 */

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl text-gray-900">HackApp</span>
            </div>
            <p className="text-gray-600 text-sm">
              Built for hackathons. Fast, simple, ready to ship.
            </p>
          </div>

          {/* Links - Customize these */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-blue-600 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-blue-600 text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-600 hover:text-blue-600 text-sm">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} HackApp. Built with ❤️ at a hackathon.</p>
        </div>
      </div>
    </footer>
  );
}
