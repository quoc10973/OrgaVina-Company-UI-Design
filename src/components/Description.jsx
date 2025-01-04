import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Description = () => {
    const sectionsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in');
                }
            });
        }, options);

        sectionsRef.current.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="m-0 p-0 font-quicksand">
            <Banner />
            <div className="p-4 sm:p-8 bg-slate-200 flex justify-between space-x-3">
                <style>
                    {`
                        .fade-in {
                            opacity: 0;
                            animation: fadeIn 1s forwards;
                        }

                        @keyframes fadeIn {
                            to {
                                opacity: 1;
                            }
                        }
                    `}
                </style>
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center text-justify border border-gray-300 rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Chào mừng đến với OrgaVina </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Giới thiệu chung về công ty:</b> OrgaVina là công ty chuyên nhập khẩu và phân phối các sản phẩm thực phẩm hữu cơ chất lượng cao, đến từ những vùng đất trù phú trên thế giới.
                        Mang đến cho người tiêu dùng và hợp tác với các nhà cung cấp uy tín.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Lĩnh vực hoạt động:</b> Nhập khẩu và phân phối các sản phẩm thực phẩm hữu cơ, bao gồm trái cây, rau củ, ngũ cốc, các sản phẩm chế biến từ nguyên liệu hữu cơ,...
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Khách hàng mục tiêu:</b> Người tiêu dùng quan tâm đến sức khỏe, các gia đình có trẻ nhỏ, các nhà hàng, khách sạn,...
                    </p>
                    <div className="mt-8">
                        <Link to="/about">
                            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
                                Xem thêm
                            </button>
                        </Link>
                    </div>
                </div>
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center border text-justify border-gray-300 rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Tại sao nên chọn OrgaVina ?</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Cam kết chất lượng:</b> Chúng tôi cam kết mang đến sản phẩm hữu cơ tốt nhất, đảm bảo an toàn sức khỏe và phù hợp với tiêu chuẩn quốc tế. Chúng tôi hiểu rõ nhu cầu của khách hàng và luôn cung cấp những giải pháp tốt nhất.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Dịch vụ chuyên nghiệp:</b> Đội ngũ của chúng tôi sẵn sàng cung cấp dịch vụ tận tâm, hỗ trợ nhanh chóng để đảm bảo trải nghiệm mua sắm của bạn hoàn hảo, không ngừng cải tiến và xây dựng tương lai bền vững cho ngành thực phẩm hữu cơ.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Mạng lưới đối tác đa dạng:</b> Với mạng lưới nhà cung cấp đáng tin cậy trên toàn cầu, chúng tôi mang đến danh mục sản phẩm phong phú, đáp ứng mọi nhu cầu của bạn.
                    </p>
                    <div className="mt-8">
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
                            Liên hệ ngay
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:p-8 bg-slate-200 flex justify-between space-x-3">
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center text-justify border border-gray-300 rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Welcome to ABC Import-Export Company</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        At ABC Import-Export Company, we specialize in providing top-quality technology products from around the world. Our mission is to bridge the gap between manufacturers and consumers by offering a wide range of products at competitive prices.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        With years of experience in the industry, we have established strong relationships with suppliers and customers alike. Our dedicated team works tirelessly to ensure that every transaction is smooth and efficient, from order placement to delivery.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        Whether you are looking for the latest gadgets, electronics, or other technology products, ABC Import-Export Company is your trusted partner. Join us on our journey to bring the best products to your doorstep.
                    </p>
                    <div className="mt-8">
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
                            Learn More
                        </button>
                    </div>
                </div>
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center border text-justify border-gray-300 rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Why Choose Us?</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        We pride ourselves on our commitment to quality and customer satisfaction. Our team is dedicated to providing exceptional service and support to ensure that your experience with us is seamless and enjoyable.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        Our extensive network of suppliers allows us to offer a diverse range of products, ensuring that you have access to the latest and greatest in technology. We continuously strive to improve our offerings and stay ahead of industry trends.
                    </p>
                    <div className="mt-8">
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
