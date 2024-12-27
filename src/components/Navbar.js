import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    programs: false,
    donate: false,
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search box visibility
  const dropdownRefs = {
    about: useRef(null),
    programs: useRef(null),
    donate: useRef(null),
  };
  const buttonRefs = {
    about: useRef(null),
    programs: useRef(null),
    donate: useRef(null),
  };
  const searchRef = useRef(null)
  const searchButtonRef = useRef(null)

  const toggleDropdown = (dropdownName) => {
    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleClick = (event) => {
      for (const dropdownName in dropdownRefs) {
        if (
          dropdownRefs[dropdownName].current &&
          !dropdownRefs[dropdownName].current.contains(event.target) && buttonRefs[dropdownName].current && !buttonRefs[dropdownName].current.contains(event.target)
        ) {
          setDropdownStates(prevState => ({
            ...prevState,
            [dropdownName]: false,
          }));
        }
      }
      if (searchRef.current && !searchRef.current.contains(event.target) && searchButtonRef.current && !searchButtonRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav className="bg-green-700 text-white shadow-lg relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          <Link to="/">Gitalife</Link>
        </h1>
        <div className="flex items-center"> {/* Container for nav items, search, and auth */}
          <ul className="hidden md:flex space-x-8 font-medium mr-4"> {/* Added margin-right */}
            <li><Link to="/" className="hover:text-green-300 transition duration-200">Home</Link></li>
            <li> {/* Added Our Team link */}
              <Link
                to="/our-team" // Corrected path
                className="text-white hover:text-green-300 transition duration-200 hover:text-shadow-md"
                style={{ textShadow: '0 0 5px #00FF00' }}
              >
                Our Team
              </Link>
            </li>
            <li className="relative">
              <button ref={buttonRefs.about} onClick={() => toggleDropdown('about')} className="hover:text-green-300 transition duration-200 focus:outline-none flex items-center">About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <ul ref={dropdownRefs.about} className={`dropdown-menu absolute right-0 bg-green-600 text-white z-10 top-full w-48 ${dropdownStates.about ? 'block' : 'hidden'}`}>
                <li><Link to="/contact" className="hover:text-green-400 transition duration-200 block px-4 py-2 whitespace-nowrap">Contact Us</Link></li>
                <li><Link to="/legal" className="hover:text-green-400 transition duration-200 block px-4 py-2 whitespace-nowrap">Legal</Link></li>
                <li><Link to="/transparency" className="hover:text-green-400 transition duration-200 block px-4 py-2 whitespace-nowrap">Transparency</Link></li>
              </ul>
            </li>
            <li className="relative">
              <button ref={buttonRefs.programs} onClick={() => toggleDropdown('programs')} className="hover:text-green-300 transition duration-200 focus:outline-none flex items-center">Programs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <ul ref={dropdownRefs.programs} className={`dropdown-menu absolute right-0 bg-green-600 text-white z-10 top-full w-48 ${dropdownStates.programs ? 'block' : 'hidden'}`}>
                <li><Link to="/gallery" className="hover:text-green-400 transition duration-200 block px-4 py-2 whitespace-nowrap">Gallery</Link></li>
                <li><Link to="/news" className="hover:text-green-400 transition duration-200 block px-4 py-2 whitespace-nowrap">News & Updates</Link></li>
                <li><Link to="/community" className="hover:text-green-400 transition duration-200 block px-4 py-2 whitespace-nowrap">Community</Link></li>
              </ul>
            </li>
            <li><Link to="/donate" className="hover:text-green-300 transition duration-200">Donate</Link></li>
          </ul>

          {/* Search Box */}
          <div className="relative mr-4">
            <button ref={searchButtonRef} onClick={toggleSearch} className="focus:outline-none hover:text-green-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div ref={searchRef} className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg p-2 z-20 ${isSearchOpen ? 'block' : 'hidden'}`}>
              <input type="text" placeholder="Search..." className="w-full border rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-green-300" />
            </div>
          </div>

          {/* Login/Signup Buttons */}
          <div className="flex space-x-4">
            <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">Login</Link>
            <Link to="/signup" className="bg-white hover:bg-gray-100 text-green-700 font-medium py-2 px-4 rounded-md border border-green-700 transition duration-200">Signup</Link>
          </div>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;