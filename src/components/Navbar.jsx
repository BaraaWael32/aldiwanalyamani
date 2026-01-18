import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Top Bar */}
            {/* <div className="bg-gradient-to-r from-diwan-navy to-diwan-blue text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-6">
                            <a href="tel:+201030437453" className="flex items-center gap-2 hover:text-diwan-teal transition-colors">
                                <FaPhone className="text-xs" />
                                <span dir="ltr">+20 10 30437453</span>
                            </a>
                            <a href="mailto:baraawaelbero2015@gmail.com" className="flex items-center gap-2 hover:text-diwan-teal transition-colors">
                                <FaEnvelope className="text-xs" />
                                <span>baraawaelbero2015@gmail.com</span>
                            </a>
                        </div>
                        <div className="text-sm">
                            فيصل - أول شارع العشرين
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Navbar */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <div className="text-3xl font-bold text-diwan-blue">
                                <img src="/diwan-logo.png" alt="الديوان اليمني" className="max-h-20" />
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/" className={`font-semibold transition-colors text-lg ${location.pathname === '/' ? 'text-diwan-teal' : 'text-gray-700'} hover:text-diwan-teal`}>
                                الرئيسية
                            </Link>
                            <Link to="/about" className={`font-semibold transition-colors text-lg ${location.pathname === '/about' ? 'text-diwan-teal' : 'text-gray-700'} hover:text-diwan-teal`}>
                                من نحن
                            </Link>
                            <Link to="/services" className={`font-semibold transition-colors text-lg ${location.pathname === '/services' ? 'text-diwan-teal' : 'text-gray-700'} hover:text-diwan-teal`}>
                                خدماتنا
                            </Link>
                            <Link to="/gallery" className={`font-semibold transition-colors text-lg ${location.pathname === '/gallery' ? 'text-diwan-teal' : 'text-gray-700'} hover:text-diwan-teal`}>
                                معرض الأعمال
                            </Link>
                            <Link to="/contact" className={`font-semibold transition-colors text-lg ${location.pathname === '/contact' ? 'text-diwan-teal' : 'text-gray-700'} hover:text-diwan-teal`}>
                                تواصل معنا
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-gray-700 hover:text-diwan-teal transition-colors"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu with smooth transition */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}
                    >
                        <div className="pb-4">
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded transition-all text-lg font-semibold hover:text-diwan-teal hover:bg-diwan-light ${location.pathname === '/' ? 'text-diwan-teal' : 'text-gray-700'}`}
                            >
                                الرئيسية
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded transition-all text-lg font-semibold hover:text-diwan-teal hover:bg-diwan-light ${location.pathname === '/about' ? 'text-diwan-teal' : 'text-gray-700'}`}
                            >
                                من نحن
                            </Link>
                            <Link
                                to="/services"
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded transition-all text-lg font-semibold hover:text-diwan-teal hover:bg-diwan-light ${location.pathname === '/services' ? 'text-diwan-teal' : 'text-gray-700'}`}
                            >
                                خدماتنا
                            </Link>
                            <Link
                                to="/gallery"
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded transition-all text-lg font-semibold hover:text-diwan-teal hover:bg-diwan-light ${location.pathname === '/gallery' ? 'text-diwan-teal' : 'text-gray-700'}`}
                            >
                                معرض الأعمال
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded transition-all text-lg font-semibold hover:text-diwan-teal hover:bg-diwan-light ${location.pathname === '/contact' ? 'text-diwan-teal' : 'text-gray-700'}`}
                            >
                                تواصل معنا
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

