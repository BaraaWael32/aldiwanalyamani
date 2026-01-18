import { FaHome, FaBuilding, FaPlane, FaCar, FaGavel, FaIdCard, FaHandHoldingUsd, FaFileContract, FaHotel, FaPassport } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaHome className="text-5xl" />,
            title: "العقار",
            description: "خدمات عقارية متكاملة لتلبية جميع احتياجاتكم من بيع وشراء وتأجير وإدارة الأملاك",
            features: [
                "تمليك عقارات سكنية وتجارية",
                "تأجير وحدات بأفضل الأسعار",
                "إدارة أملاك احترافية",
                "استشارات عقارية",
                "تقييم العقارات"
            ],
            color: "diwan-blue"
        },
        {
            icon: <FaBuilding className="text-5xl" />,
            title: "التطوير العقاري",
            description: "مشاريع تطوير عقاري متميزة بتسهيلات في الدفع",
            features: [
                "وحدات سكنية حديثة",
                "وحدات تجارية وإدارية",
                "تسهيلات في الدفع",
                "مواقع استراتيجية",
                "تشطيبات فاخرة"
            ],
            color: "diwan-teal"
        },
        {
            icon: <FaPlane className="text-5xl" />,
            title: "السياحة",
            description: "خدمات سياحية شاملة من حجوزات وتأشيرات ورحلات سياحية",
            features: [
                "موافقات أمنية",
                "استخراج تأشيرات",
                "حجز طيران وفنادق",
                "رحلات سياحية منظمة",
                "برامج سياحية متنوعة"
            ],
            color: "blue-600"
        },
        {
            icon: <FaIdCard className="text-5xl" />,
            title: "الرخص والتصاريح",
            description: "استخراج الرخص والتصاريح اللازمة بسهولة وسرعة",
            features: [
                "رخصة القيادة الدولية",
                "الرخصة الأمريكية",
                "تصاريح العمل",
                "تجديد الرخص",
                "إجراءات سريعة"
            ],
            color: "yellow-500",
            iconBg: "bg-[#7b051e]"
        },
        {
            icon: <FaCar className="text-5xl" />,
            title: "السيارات",
            description: "خدمات تأجير السيارات وتوصيل المطار بأحدث السيارات",
            features: [
                "تأجير سيارات بسائق",
                "تأجير سيارات بدون سائق",
                "توصيل من وإلى المطار",
                "أسعار منافسة",
                "سيارات حديثة ومكيفة"
            ],
            color: "red-500",
            iconBg: "bg-[#0e3c44]"
        },
        {
            icon: <FaGavel className="text-5xl" />,
            title: "الشؤون القانونية",
            description: "استشارات قانونية وخدمات توثيق وتأسيس الشركات",
            features: [
                "استشارات قانونية",
                "توثيق عقود البيع",
                "تأسيس الشركات",
                "صياغة العقود",
                "المتابعة القانونية"
            ],
            color: "gray-700",
            iconBg: "bg-gray-700"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-diwan-navy to-diwan-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
                        خدمات متكاملة تخدم الجالية اليمنية في مصر
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                            >
                                <div className={`p-8 text-white flex flex-col items-center ${service.iconBg ? service.iconBg : `bg-${service.color}`}`}>
                                    <div className="mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${service.iconBg ? service.iconBg : `bg-${service.color}`}`}></div>
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="px-6 pb-6">
                                    <a
                                        href="tel:+201030437453"
                                        className={`block w-full ${service.iconBg ? service.iconBg : `bg-${service.color}`} text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-all text-center`}
                                    >
                                        استفسر الآن
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
                        لماذا تختار الديوان اليمني؟
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">خبرة طويلة</h3>
                            <p className="text-gray-600">أكثر من 15 سنة في خدمة الجالية اليمنية</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">سرعة في الإنجاز</h3>
                            <p className="text-gray-600">نحرص على إنجاز معاملاتكم بأسرع وقت</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">💯</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">مصداقية عالية</h3>
                            <p className="text-gray-600">بالخبرة صنعنا الثقة مع عملائنا</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">💰</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">أسعار منافسة</h3>
                            <p className="text-gray-600">نقدم أفضل الخدمات بأسعار تنافسية</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
                        خدمات إضافية
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all">
                            <div className="text-diwan-blue mb-4">
                                <FaHandHoldingUsd size={40} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">تسهيلات في الدفع</h3>
                            <p className="text-gray-600">نوفر خطط دفع مرنة تناسب جميع العملاء</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all">
                            <div className="text-diwan-blue mb-4">
                                <FaFileContract size={40} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">عقود موثقة</h3>
                            <p className="text-gray-600">جميع التعاملات بعقود موثقة قانونياً</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all">
                            <div className="text-diwan-blue mb-4">
                                <FaPassport size={40} className='mx-auto' />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">إنجاز المعاملات</h3>
                            <p className="text-gray-600">نساعدكم في إنجاز جميع معاملاتكم الحكومية</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-diwan-navy to-diwan-blue text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى أي من خدماتنا؟</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        تواصل معنا الآن وسيسعدنا خدمتكم
                    </p>
                    <a
                        href="tel:+201030437453"
                        className="inline-block bg-white text-diwan-navy font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
                    >
                        اتصل بنا الآن
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
