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

        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} font-quicksand`}>
            <div className="max-w-[2000px] mx-auto px-8 py-12 bg-gray-50 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Giới Thiệu Công Ty</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Tầm Nhìn và Sứ Mệnh</h2>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
                            <li>
                                <strong>Tầm Nhìn:</strong> Trở thành doanh nghiệp dẫn đầu tại Việt Nam trong lĩnh vực nhập khẩu và phân phối thực phẩm hữu cơ, mang đến những sản phẩm chất lượng cao, an toàn và bền vững. Chúng tôi hướng tới việc xây dựng một cộng đồng sống khỏe mạnh, thân thiện với môi trường và tạo ra giá trị bền vững cho các thế hệ tương lai.
                            </li>
                            <li>
                                <strong>Sứ Mệnh:</strong> Cung cấp các sản phẩm thực phẩm hữu cơ từ các nguồn uy tín trên toàn cầu, đảm bảo chất lượng vượt trội và giá cả hợp lý, đáp ứng nhu cầu đa dạng của người tiêu dùng. Góp phần nâng cao nhận thức về lối sống xanh, lành mạnh và bảo vệ môi trường thông qua việc cung cấp các sản phẩm hữu cơ bền vững. Xây dựng mối quan hệ hợp tác tin cậy, lâu dài và đôi bên cùng có lợi, đồng hành cùng các nhà cung cấp uy tín trên thế giới để mang lại giá trị tối ưu. Tạo môi trường làm việc sáng tạo, chuyên nghiệp và tràn đầy cảm hứng, giúp nhân viên phát huy tối đa năng lực và đồng hành cùng sự phát triển của công ty.
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Giá Trị Cốt Lõi</h2>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
                            <li>
                                <strong>Trung thực:</strong> Minh bạch và chân thành là nền tảng của mọi mối quan hệ với khách hàng, đối tác và nhân viên.
                            </li>
                            <li>
                                <strong>Đổi mới:</strong> Không ngừng cải tiến sản phẩm và dịch vụ, giúp khách hàng đón đầu xu thế công nghệ.
                            </li>
                            <li>
                                <strong>Hợp tác:</strong> Xây dựng mối quan hệ đối tác lâu dài, dựa trên sự thấu hiểu và hỗ trợ lẫn nhau.
                            </li>
                            <li>
                                <strong>Xuất sắc:</strong> Luôn đặt mục tiêu cao và không ngừng nỗ lực để đạt được những thành tựu vượt trội trong mọi lĩnh vực.
                            </li>
                            <li>
                                <strong>Trách nhiệm xã hội:</strong> Góp phần vào việc xây dựng một cộng đồng tốt đẹp hơn thông qua các hoạt động từ thiện và phát triển bền vững.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">Sản phẩm của chúng tôi</h2>
                    <ProductCarousel />
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-center   text-blue-900 mb-6">Liên Hệ Với Chúng Tôi</h2>
                    <p className="text-center text-lg text-gray-700">
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
