import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-diwan-navy to-diwan-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
                        نحن هنا للإجابة على استفساراتكم وخدمتكم
                    </p>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-gray-800">معلومات الاتصال</h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                                    <div className="bg-diwan-light p-4 rounded-full flex-shrink-0">
                                        <FaMapMarkerAlt className="text-diwan-blue text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">العنوان</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            فيصل - أول شارع العشرين
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                                    <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                                        <FaPhone className="text-blue-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">الهاتف</h3>
                                        <a href="tel:+201030437453" className="text-gray-600 hover:text-diwan-teal transition-colors text-lg" dir="ltr">
                                            +20 10 30437453
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                                    <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                                        <FaWhatsapp className="text-green-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">واتساب</h3>
                                        <a
                                            href="https://wa.me/201030437453"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-diwan-teal transition-colors text-lg"
                                            dir="ltr"
                                        >
                                            +20 10 30437453
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                                    <div className="bg-red-100 p-4 rounded-full flex-shrink-0">
                                        <FaEnvelope className="text-red-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">البريد الإلكتروني</h3>
                                        <a
                                            href="mailto:baraawaelbero2015@gmail.com"
                                            className="text-gray-600 hover:text-diwan-teal transition-colors"
                                        >
                                            baraawaelbero2015@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                                    <div className="bg-yellow-100 p-4 rounded-full flex-shrink-0">
                                        <FaClock className="text-yellow-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">ساعات العمل</h3>
                                        <p className="text-gray-600">السبت - الخميس: 9:00 ص - 6:00 م</p>
                                        <p className="text-gray-600">الجمعة: مغلق</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">تابعنا</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.facebook.com/baraa.wael.3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110"
                                    >
                                        <FaFacebook size={24} />
                                    </a>
                                    <a
                                        href="https://wa.me/201030437453"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-all transform hover:scale-110"
                                    >
                                        <FaWhatsapp size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                            الاسم الكامل *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-diwan-blue transition-all"
                                            placeholder="أدخل اسمك الكامل"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                            البريد الإلكتروني *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-diwan-blue transition-all"
                                            placeholder="example@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                                            رقم الهاتف *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-diwan-blue transition-all"
                                            placeholder="+20 xxx xxx xxxx"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                                            الموضوع *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-diwan-blue transition-all"
                                        >
                                            <option value="">اختر الخدمة</option>
                                            <option value="real-estate">العقارات</option>
                                            <option value="development">التطوير العقاري</option>
                                            <option value="tourism">السياحة</option>
                                            <option value="cars">تأجير السيارات</option>
                                            <option value="legal">الشؤون القانونية</option>
                                            <option value="licenses">الرخص والتصاريح</option>
                                            <option value="other">استفسار عام</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                                            الرسالة *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-diwan-blue transition-all resize-none"
                                            placeholder="اكتب رسالتك هنا..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-diwan-blue to-diwan-navy hover:from-diwan-navy hover:to-black text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        إرسال الرسالة
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">موقعنا</h2>
                    <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg" style={{ height: '450px' }}>
                        <iframe
                            title="موقع الديوان اليمني على خرائط جوجل"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.217964813624!2d31.1805194!3d30.0091791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847f4e75bd7c5%3A0xe65af0dbeabbc428!2z2KfZhNmF2YbYp9mKINin2YTYqtmK2KfYsdmK2Kkg2KfZhNmF2YbYp9mK!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%AF%D9%8A%D9%88%D8%A7%D9%86+%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%E2%80%AD/@30.0091791,31.1805194,17z/data=!4m8!3m7!1s0x145847f4e75bd7c5:0xe65af0dbeabbc428!8m2!3d30.0091745!4d31.1853903!9m1!1b1!16s%2Fg%2F11t791gsqn?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-diwan-blue text-white font-bold py-3 px-8 rounded-full hover:bg-diwan-navy transition-all mt-4 shadow-lg"
                        >
                            عرض الموقع على خرائط جوجل
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="py-16 bg-gradient-to-r from-diwan-navy to-diwan-blue text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">هل لديك استفسار؟</h2>
                            <p className="text-xl text-gray-100">نحن في خدمتك دائماً</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <a
                                href="tel:+201030437453"
                                className="bg-white text-diwan-navy font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                <FaPhone /> اتصل الآن
                            </a>
                            <a
                                href="https://wa.me/201030437453"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                <FaWhatsapp /> واتساب
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
