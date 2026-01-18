import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-diwan-navy to-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-diwan-teal">الديوان اليمني</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            بالخبرة صنعنا الثقة - نقدم كل ما يخدم الجالية اليمنية داخل مصر من خدمات عقارية وسياحية وقانونية واستشارات متكاملة.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/baraa.wael.3" target="_blank" rel="noopener noreferrer"
                                className="bg-diwan-teal hover:bg-diwan-blue p-3 rounded-full transition-all transform hover:scale-110">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="bg-diwan-teal hover:bg-diwan-blue p-3 rounded-full transition-all transform hover:scale-110">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="bg-diwan-teal hover:bg-diwan-blue p-3 rounded-full transition-all transform hover:scale-110">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://wa.me/201030437453" target="_blank" rel="noopener noreferrer"
                                className="bg-diwan-teal hover:bg-diwan-blue p-3 rounded-full transition-all transform hover:scale-110">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-diwan-teal">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-diwan-teal transition-colors flex items-center gap-2">
                                    <span>←</span> الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-diwan-teal transition-colors flex items-center gap-2">
                                    <span>←</span> من نحن
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-diwan-teal transition-colors flex items-center gap-2">
                                    <span>←</span> خدماتنا
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-gray-300 hover:text-diwan-teal transition-colors flex items-center gap-2">
                                    <span>←</span> معرض الأعمال
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-diwan-teal transition-colors flex items-center gap-2">
                                    <span>←</span> تواصل معنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-diwan-teal">خدماتنا</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="text-diwan-teal">✓</span> خدمات عقارية شاملة
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-diwan-teal">✓</span> السياحة والسفر
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-diwan-teal">✓</span> تأجير السيارات
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-diwan-teal">✓</span> الشؤون القانونية
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-diwan-teal">✓</span> الرخص والتصاريح
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-diwan-teal">✓</span> التطوير العقاري
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-diwan-teal">تواصل معنا</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-diwan-teal mt-1 flex-shrink-0" size={20} />
                                <p className="text-gray-300 leading-relaxed">
                                    فيصل - أول شارع العشرين
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-diwan-teal flex-shrink-0" size={18} />
                                <a href="tel:+201030437453" className="text-gray-300 hover:text-diwan-teal transition-colors" dir="ltr">
                                    +20 10 30437453
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-diwan-teal flex-shrink-0" size={18} />
                                <a href="mailto:baraawaelbero2015@gmail.com" className="text-gray-300 hover:text-diwan-teal transition-colors">
                                    baraawaelbero2015@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold mb-2 text-diwan-teal">ساعات العمل</h4>
                            <p className="text-gray-300">السبت - الخميس: 9:00 ص - 6:00 م</p>
                            <p className="text-gray-300">الجمعة: مغلق</p>
                            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                                <p className="text-gray-400">
                                    © {new Date().getFullYear()} الديوان اليمني. جميع الحقوق محفوظة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
