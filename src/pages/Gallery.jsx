const Gallery = () => {
    const categories = [
        {
            title: "مشاريعنا العقارية",
            images: [
                { title: "شقة سكنية فاخرة", description: "وحدة سكنية بموقع متميز" },
                { title: "محل تجاري", description: "محل بموقع حيوي" },
                { title: "فيلا للبيع", description: "فيلا راقية بحديقة" },
                { title: "شقة للإيجار", description: "شقة مفروشة للإيجار" },
                { title: "مكتب إداري", description: "مكتب في برج تجاري" },
                { title: "أرض للبيع", description: "أرض في موقع استثماري" }
            ]
        },
        {
            title: "خدمات السيارات",
            images: [
                { title: "سيارات فاخرة", description: "سيارات حديثة للتأجير" },
                { title: "توصيل المطار", description: "خدمة نقل مريحة" },
                { title: "سيارات عائلية", description: "سيارات واسعة ومريحة" }
            ]
        },
        {
            title: "الرحلات والسياحة",
            images: [
                { title: "رحلة الأهرامات", description: "جولة سياحية مميزة" },
                { title: "رحلة الأقصر وأسوان", description: "برنامج سياحي شامل" },
                { title: "رحلة البحر الأحمر", description: "عطلة استجمام" }
            ]
        },
        {
            title: "خدماتنا القانونية",
            images: [
                { title: "توثيق العقود", description: "عقود موثقة قانونياً" },
                { title: "تأسيس الشركات", description: "خدمات تأسيس متكاملة" },
                { title: "استشارات قانونية", description: "استشارات من خبراء" }
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-diwan-navy to-diwan-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">معرض الأعمال</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
                        نماذج من أعمالنا وخدماتنا المتميزة
                    </p>
                </div>
            </section>

            {/* Gallery Sections */}
            {categories.map((category, catIndex) => (
                <section key={catIndex} className={catIndex % 2 === 0 ? "py-20 bg-white" : "py-20 bg-gray-50"}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
                            {category.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="bg-gradient-to-br from-diwan-blue to-diwan-teal aspect-video flex items-center justify-center">
                                        <div className="text-white text-center p-8">
                                            <div className="text-6xl mb-4">
                                                {catIndex === 0 && "🏠"}
                                                {catIndex === 1 && "🚗"}
                                                {catIndex === 2 && "✈️"}
                                                {catIndex === 3 && "📋"}
                                            </div>
                                            <h3 className="text-2xl font-bold">{image.title}</h3>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6 text-white w-full">
                                            <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                                            <p className="text-gray-200">{image.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Success Stories */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
                        قصص نجاح عملائنا
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-diwan-light p-8 rounded-lg shadow-md">
                            <div className="text-5xl mb-4 text-center">⭐</div>
                            <p className="text-gray-700 text-center mb-4 italic">
                                "خدمة ممتازة في شراء شقتي. تعامل راقي وأسعار منافسة."
                            </p>
                            <p className="text-diwan-blue text-center font-bold">- أحمد محمد</p>
                        </div>

                        <div className="bg-diwan-light p-8 rounded-lg shadow-md">
                            <div className="text-5xl mb-4 text-center">⭐</div>
                            <p className="text-gray-700 text-center mb-4 italic">
                                "ساعدوني في استخراج التأشيرة بسرعة وسهولة. شكراً لهم."
                            </p>
                            <p className="text-diwan-blue text-center font-bold">- فاطمة علي</p>
                        </div>

                        <div className="bg-diwan-light p-8 rounded-lg shadow-md">
                            <div className="text-5xl mb-4 text-center">⭐</div>
                            <p className="text-gray-700 text-center mb-4 italic">
                                "خدمة تأجير السيارات ممتازة، سيارات نظيفة وأسعار جيدة."
                            </p>
                            <p className="text-diwan-blue text-center font-bold">- خالد حسن</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Section */}
            <section className="py-20 bg-gradient-to-r from-diwan-navy to-diwan-blue text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">تابعنا على مواقع التواصل</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        لمتابعة آخر العروض والخدمات الجديدة
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="https://www.facebook.com/baraa.wael.3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-diwan-navy font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
                        >
                            تابعنا على فيسبوك
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
