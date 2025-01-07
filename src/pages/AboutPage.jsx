import React, { useEffect, useRef, useState } from 'react';
import Stats from '../components/Stats';
import ProductCarousel from '../components/ProductCarousel';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Cuộn lên đầu trang khi vào trang
        window.scrollTo(0, 0);

        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} font-quicksand`}>
            <div className="max-w-[2000px] mx-auto px-8 py-12 bg-brown-50 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-brown-800 mb-12">Giới Thiệu Công Ty</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-md border border-brown-200">
                        <h2 className="text-3xl font-semibold text-brown-800 mb-6">Tầm Nhìn và Sứ Mệnh</h2>
                        <ul className="list-disc list-inside space-y-4 text-lg text-brown-700">
                            <li>
                                <strong>Tầm Nhìn:</strong>  Trở thành thương hiệu cà phê hàng đầu Việt Nam, đại diện cho chất lượng và sự bền vững, chinh phục thị trường châu Âu và nâng tầm vị thế cà phê Việt Nam trên bản đồ thế giới.
                            </li>
                            <li>
                                <strong>Sứ Mệnh:</strong> : Chúng tôi luôn ưu tiên sử dụng những hạt cà phê Arabica và Robusta chất lượng cao, được trồng và chế biến theo quy trình nghiêm ngặt, đảm bảo hương vị thơm ngon và độc đáo. Chúng tôi muốn giới thiệu đến bạn bè quốc tế về văn hóa cà phê đặc trưng của Việt Nam, qua đó góp phần quảng bá hình ảnh đất nước.
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 p-8 bg-white rounded-lg shadow-md border border-brown-200">
                        <h2 className="text-3xl font-semibold text-brown-800 mb-6">Giá Trị Cốt Lõi</h2>
                        <ul className="list-disc list-inside space-y-4 text-lg text-brown-700">
                            <li>
                                <strong>Trung thực:</strong> Minh bạch và chân thành là nền tảng của mọi mối quan hệ với khách hàng, đối tác, và nhân viên.
                            </li>
                            <li>
                                <strong>Đổi mới:</strong> Không ngừng cải tiến sản phẩm và dịch vụ, giúp khách hàng đón đầu xu thế trong ngành cà phê và nông sản.
                            </li>
                            <li>
                                <strong>Hợp tác:</strong> Xây dựng mối quan hệ đối tác lâu dài, dựa trên sự thấu hiểu và hỗ trợ lẫn nhau để cùng phát triển.
                            </li>
                            <li>
                                <strong>Xuất sắc:</strong> Luôn đặt mục tiêu cao và không ngừng nỗ lực để đạt được những thành tựu vượt trội trong mọi lĩnh vực hoạt động.
                            </li>
                            <li>
                                <strong>Trách nhiệm xã hội:</strong> Góp phần xây dựng cộng đồng tốt đẹp hơn thông qua các hoạt động bảo vệ môi trường, hỗ trợ nông dân và phát triển bền vững.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-center text-brown-800 mb-6">Sản Phẩm Của Chúng Tôi</h2>
                    <div className="p-6 bg-brown-100 rounded-lg shadow-md">
                        <ProductCarousel className="rounded-lg border border-brown-300 bg-white shadow-md" />
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-center text-brown-800 mb-6">Liên Hệ Với Chúng Tôi</h2>
                    <p className="text-center text-lg text-brown-700">
                        Nếu bạn muốn biết thêm thông tin hoặc cần hỗ trợ, hãy liên hệ với chúng tôi qua email
                        tại <strong>orgavina@company.com</strong> hoặc gọi ngay số <strong>+1 (234) 567-890</strong>.
                        Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình phát triển.
                    </p>
                </div>
            </div>
            <Stats />
        </div>
    );
};

export default AboutPage;
