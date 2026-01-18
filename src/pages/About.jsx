import { FaCheckCircle, FaHeart, FaAward, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-diwan-navy to-diwan-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
                        بالخبرة .. صنعنا الثقة
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                            قصة <span className="text-diwan-blue">الديوان اليمني</span>
                        </h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                الديوان اليمني هو أكثر من مجرد مؤسسة خدمية - إنه شريككم الموثوق في كل ما يخص احتياجاتكم في مصر. منذ تأسيسنا، كان هدفنا الأساسي هو خدمة الجالية اليمنية بكل احترافية ومصداقية.
                            </p>
                            <p>
                                نؤمن بأن الثقة تُبنى بالخبرة والمصداقية. لذلك، نحرص على تقديم خدمات متكاملة في مجال العقارات والسياحة والشؤون القانونية وتأجير السيارات، كل ذلك بأعلى معايير الجودة والاحترافية.
                            </p>
                            <p>
                                فريقنا المتخصص يتمتع بخبرة واسعة في السوق المصري واليمني، مما يمكننا من تقديم أفضل الحلول والخدمات التي تلبي احتياجاتكم الفعلية. نحن هنا لنوفر عليكم الوقت والجهد ونضمن لكم أفضل الصفقات.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">قيمنا ومبادئنا</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-diwan-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-diwan-blue text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">المصداقية</h3>
                            <p className="text-gray-600">
                                نلتزم بالشفافية والمصداقية في كل تعاملاتنا مع عملائنا
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaHeart className="text-blue-600 text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">الخدمة المتميزة</h3>
                            <p className="text-gray-600">
                                نسعى دائماً لتقديم أفضل خدمة تفوق توقعات عملائنا
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaAward className="text-yellow-600 text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">الخبرة</h3>
                            <p className="text-gray-600">
                                سنوات طويلة من الخبرة في خدمة الجالية اليمنية
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
                            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaUsers className="text-red-600 text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">رضا العملاء</h3>
                            <p className="text-gray-600">
                                رضاكم هو أولويتنا وهدفنا الأساسي في كل خدمة
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">لماذا نحن؟</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start bg-diwan-light p-6 rounded-lg">
                                <div className="bg-diwan-blue text-white p-3 rounded-full flex-shrink-0">
                                    <FaCheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">تنوع الخدمات</h3>
                                    <p className="text-gray-600">نقدم خدمات متكاملة تغطي جميع احتياجاتكم في مكان واحد</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-diwan-light p-6 rounded-lg">
                                <div className="bg-diwan-blue text-white p-3 rounded-full flex-shrink-0">
                                    <FaCheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">فريق محترف</h3>
                                    <p className="text-gray-600">فريق عمل مدرب ومتخصص في كل مجال من مجالات عملنا</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-diwan-light p-6 rounded-lg">
                                <div className="bg-diwan-blue text-white p-3 rounded-full flex-shrink-0">
                                    <FaCheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">أسعار تنافسية</h3>
                                    <p className="text-gray-600">نقدم أفضل الأسعار في السوق مع الحفاظ على جودة الخدمة</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-diwan-light p-6 rounded-lg">
                                <div className="bg-diwan-blue text-white p-3 rounded-full flex-shrink-0">
                                    <FaCheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">سرعة في الإنجاز</h3>
                                    <p className="text-gray-600">نحرص على إتمام معاملاتكم في أسرع وقت ممكن</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-diwan-light p-6 rounded-lg">
                                <div className="bg-diwan-blue text-white p-3 rounded-full flex-shrink-0">
                                    <FaCheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">متابعة مستمرة</h3>
                                    <p className="text-gray-600">نبقى معكم خطوة بخطوة حتى إتمام الخدمة بنجاح</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-diwan-navy to-diwan-blue text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                            <div className="text-xl text-gray-100">سنة خبرة</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                            <div className="text-xl text-gray-100">عقار متاح</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">5k+</div>
                            <div className="text-xl text-gray-100">عميل راضٍ</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
                            <div className="text-xl text-gray-100">خدمات متكاملة</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">رسالتنا</h2>
                        <p className="text-gray-700 text-xl leading-relaxed mb-6">
                            نسعى لأن نكون الشريك الأول والموثوق لكل يمني في مصر، من خلال تقديم خدمات متكاملة وعالية الجودة تسهل حياتهم وتحقق طموحاتهم.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            نعمل على بناء جسور الثقة بين الجالية اليمنية والمجتمع المصري من خلال خدماتنا الاحترافية والملتزمة بأعلى معايير الجودة والمصداقية.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
