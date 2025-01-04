import React, { useState, useEffect } from 'react';

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);  // Hiển thị sau 0.3 giây

        // Cuộn trang lên đầu khi component được render
        window.scrollTo(0, 0);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        attachment: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            attachment: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đã gửi form:', formData);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', attachment: null });
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 font-quicksand ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">Liên Hệ Với Chúng Tôi</h1>

            <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-12">
                <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2" htmlFor="name">
                                Họ và Tên
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2" htmlFor="email">
                                Địa Chỉ Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2" htmlFor="phone">
                                Số Điện Thoại
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2" htmlFor="subject">
                                Chủ Đề
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2" htmlFor="message">
                                Nội Dung Tin Nhắn
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm lg:text-base font-medium mb-2" htmlFor="attachment">
                                Đính Kèm Tệp (Tùy Chọn)
                            </label>
                            <input
                                type="file"
                                id="attachment"
                                name="attachment"
                                onChange={handleFileChange}
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Gửi Tin Nhắn
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Thông Tin Liên Hệ</h2>
                    <p className="text-gray-700 text-sm lg:text-base">Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm thông tin, vui lòng liên hệ với chúng tôi!</p>
                    <div className="space-y-4">
                        <div>
                            <strong className="text-gray-800 text-sm lg:text-base">Email:</strong>
                            <p className="text-gray-700 text-sm lg:text-base">orgavina@company.com</p>
                        </div>
                        <div>
                            <strong className="text-gray-800 text-sm lg:text-base">Số Điện Thoại:</strong>
                            <p className="text-gray-700 text-sm lg:text-base">+1 (234) 567-890</p>
                        </div>
                        <div>
                            <strong className="text-gray-800 text-sm lg:text-base">Địa Chỉ:</strong>
                            <p className="text-gray-700 text-sm lg:text-base">123 Organic Ave, Thành phố, Quốc gia</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm lg:text-base font-semibold text-gray-800">Theo Dõi Chúng Tôi</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600">Facebook</a>
                            <a href="#" className="text-blue-400">Twitter</a>
                            <a href="#" className="text-gray-700">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
