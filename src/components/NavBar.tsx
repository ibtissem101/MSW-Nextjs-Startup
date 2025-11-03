/**
 * NavBar Component
 * 
 * Top navigation bar with logo and links.
 * Customize links and styling for your hackathon project.
 */

import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl text-gray-900">HackApp</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/examples" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Examples
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
