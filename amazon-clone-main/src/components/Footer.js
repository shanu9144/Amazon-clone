import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-4">
      <div className="max-w-screen-xl mx-auto">
        <p>© {currentYear} Amazon Clone. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="/terms"
            className="text-sm text-gray-400 hover:text-white transition-colors mx-2"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="text-sm text-gray-400 hover:text-white transition-colors mx-2"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="/help"
            className="text-sm text-gray-400 hover:text-white transition-colors mx-2"
            aria-label="Help"
          >
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
