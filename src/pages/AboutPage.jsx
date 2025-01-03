import React, { useEffect, useState } from 'react';
import Stats from '../components/Stats';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Độ trễ để tạo hiệu ứng mờ dần
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-[2000px] mx-auto px-8 py-12 bg-gray-50 rounded-lg shadow-lg">
                {/* Tiêu đề */}
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Giới Thiệu Công Ty</h1>

                {/* Nội dung */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Section 1 */}
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Tầm Nhìn và Sứ Mệnh</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Chúng tôi cam kết xây dựng một môi trường kinh doanh sáng tạo và đầy cảm hứng, nơi khách hàng luôn là trọng tâm trong mọi hoạt động của chúng tôi.
                            Với sứ mệnh giúp khách hàng đạt được thành công thông qua các giải pháp công nghệ tiên tiến, chúng tôi đặt mục tiêu không chỉ trở thành đối tác tin cậy
                            mà còn là một nguồn động lực giúp họ phát triển bền vững. Tầm nhìn của chúng tôi là dẫn đầu ngành công nghệ và dịch vụ, mang lại giá trị vượt trội
                            cho khách hàng và cộng đồng. Chúng tôi tin rằng sự đổi mới và cam kết không ngừng nghỉ là chìa khóa mở ra những thành công lớn hơn.
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            Chúng tôi cũng luôn hướng tới việc xây dựng một xã hội bền vững hơn, nơi mỗi sản phẩm và dịch vụ chúng tôi cung cấp đều có tác động tích cực đến môi trường
                            và cộng đồng. Qua các dự án, chúng tôi không chỉ mang lại giá trị kinh tế mà còn tạo dựng niềm tin, uy tín với các đối tác chiến lược trên toàn cầu.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Giá Trị Cốt Lõi</h2>
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

                {/* Thông tin liên hệ */}
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Liên Hệ Với Chúng Tôi</h2>
                    <p className="text-center text-lg text-gray-700">
                        Nếu bạn muốn biết thêm thông tin hoặc cần hỗ trợ, hãy liên hệ với chúng tôi qua email
                        tại <strong>info@yourcompany.com</strong> hoặc gọi ngay số <strong>+1 (234) 567-890</strong>.
                        Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình phát triển.
                    </p>
                </div>
            </div>
            <Stats />
        </div>
    );
};

export default AboutPage;
