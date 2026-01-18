import { Link } from 'react-router-dom';
import { FaHome, FaClock, FaStar, FaPhone, FaWhatsapp, FaCar, FaGavel, FaPlane, FaBuilding } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-l from-diwan-navy via-diwan-blue to-diwan-navy text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            مرحباً بكم في
                            <br />
                            <span className="text-diwan-teal mt-2 block ">الديوان اليمني</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 leading-relaxed text-gray-100 font-bold">
                            بالخبرة .. صنعنا الثقة
                        </p>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
                            بيع . شراء . تأجير . إدارة أملاك . إنجاز معاملات
                            <br />
                            كل ما يخدم الجالية اليمنية داخل مصر
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link
                                to="/contact"
                                className="bg-diwan-teal hover:bg-diwan-blue text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
                            >
                                تواصل معنا الآن
                            </Link>
                            <a
                                href="tel:+201030437453"
                                className="bg-white hover:bg-gray-100 text-diwan-navy font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg flex items-center gap-2"
                            >
                                <FaPhone /> اتصل بنا
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaHome className="text-diwan-blue text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">خدمات عقارية</h3>
                            <p className="text-gray-600 leading-relaxed">
                                بيع وشراء وتأجير العقارات بأفضل الأسعار مع إدارة احترافية للأملاك
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaClock className="text-diwan-blue text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">خدمة سريعة</h3>
                            <p className="text-gray-600 leading-relaxed">
                                نقدم خدمات احترافية وسريعة لإنجاز معاملاتكم في أقصر وقت ممكن
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaStar className="text-diwan-blue text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">خبرة وثقة</h3>
                            <p className="text-gray-600 leading-relaxed">
                                سنوات من الخبرة في خدمة الجالية اليمنية بكل احترافية ومصداقية
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                عن <span className="text-diwan-blue">الديوان اليمني</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                الديوان اليمني هو وجهتكم المثالية لكل ما يخدم الجالية اليمنية في مصر. نقدم خدمات متكاملة في مجال العقارات والسياحة والشؤون القانونية والسيارات.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                بخبرتنا الطويلة وفريقنا المحترف، نضمن لكم أفضل الخدمات بأسعار منافسة ومصداقية عالية. نحن هنا لنسهل عليكم جميع معاملاتكم ونوفر لكم الوقت والجهد.
                            </p>
                            <Link
                                to="/about"
                                className="inline-block bg-diwan-blue hover:bg-diwan-navy text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                            >
                                اعرف المزيد عنا
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-diwan-blue to-diwan-navy p-8 rounded-xl text-white text-center transform hover:scale-105 transition-all">
                                <div className="text-4xl font-bold mb-2">15+</div>
                                <div className="text-lg">سنة خبرة</div>
                            </div>
                            <div className="bg-gradient-to-br from-diwan-teal to-diwan-blue p-8 rounded-xl text-white text-center transform hover:scale-105 transition-all">
                                <div className="text-4xl font-bold mb-2">100+</div>
                                <div className="text-lg">عقار متاح</div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-500 to-diwan-blue p-8 rounded-xl text-white text-center transform hover:scale-105 transition-all">
                                <div className="text-4xl font-bold mb-2">5k+</div>
                                <div className="text-lg">عميل راضٍ</div>
                            </div>
                            <div className="bg-gradient-to-br from-diwan-navy to-black p-8 rounded-xl text-white text-center transform hover:scale-105 transition-all">
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-lg">خدمة مستمرة</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">خدماتنا المتكاملة</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            نقدم مجموعة شاملة من الخدمات التي تلبي جميع احتياجات الجالية اليمنية
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-diwan-blue hover:shadow-2xl transition-all">
                            <div className="text-diwan-blue mb-4">
                                <FaBuilding size={48} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">العقارات</h3>
                            <p className="text-gray-600 mb-4">بيع وشراء وتأجير وإدارة الأملاك والتطوير العقاري</p>
                            <Link to="/services" className="text-diwan-teal font-semibold hover:text-diwan-blue">
                                اعرف المزيد ←
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-diwan-teal hover:shadow-2xl transition-all">
                            <div className="text-diwan-teal mb-4">
                                <FaPlane size={48} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">السياحة</h3>
                            <p className="text-gray-600 mb-4">تأشيرات، حجز طيران وفنادق، رحلات سياحية</p>
                            <Link to="/services" className="text-diwan-teal font-semibold hover:text-diwan-blue">
                                اعرف المزيد ←
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition-all">
                            <div className="text-blue-600 mb-4">
                                <FaCar size={48} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">السيارات</h3>
                            <p className="text-gray-600 mb-4">تأجير سيارات بسائق أو بدون، خدمة المطار</p>
                            <Link to="/services" className="text-diwan-teal font-semibold hover:text-diwan-blue">
                                اعرف المزيد ←
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-700 hover:shadow-2xl transition-all">
                            <div className="text-gray-700 mb-4">
                                <FaGavel size={48} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">الشؤون القانونية</h3>
                            <p className="text-gray-600 mb-4">استشارات قانونية، توثيق عقود، تأسيس شركات</p>
                            <Link to="/services" className="text-diwan-teal font-semibold hover:text-diwan-blue">
                                اعرف المزيد ←
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-diwan-navy to-diwan-blue text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهزون لخدمتكم</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                        تواصل معنا الآن للاستفسار عن خدماتنا أو لحجز موعد
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href="tel:+201030437453"
                            className="bg-white hover:bg-gray-100 text-diwan-navy font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg flex items-center gap-2"
                        >
                            <FaPhone />30437453 10 20+
                        </a>
                        <a
                            href="https://wa.me/201030437453"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg flex items-center gap-2"
                        >
                            <FaWhatsapp /> واتساب
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
