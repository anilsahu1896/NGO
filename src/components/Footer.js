import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8"> {/* Added styling classes */}
      <div className="container mx-auto px-4 flex justify-between items-center"> {/* Container for better layout */}
        <div className="text-sm"> {/* Smaller text for copyright */}
          &copy; 2024 NGO Name. All rights reserved.
        </div>
        <div className="flex space-x-4"> {/* Space between social links */}
          <a href="#" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer"> {/* Added links and hover effect */}
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;