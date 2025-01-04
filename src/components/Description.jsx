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
                        <Link to="/contact">
                            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
                                Liên hệ ngay
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:p-8 bg-slate-200 flex justify-between space-x-3">
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center text-justify border border-gray-300 rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Sản phẩm hữu cơ chất lượng cao</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        Tại OrgaVina, chúng tôi cung cấp các sản phẩm thực phẩm hữu cơ chất lượng cao, đạt chuẩn quốc tế. Chúng tôi nhập khẩu trực tiếp từ các trang trại hữu cơ uy tín ở các khu vực nông thôn với khí hậu và đất đai tốt, đảm bảo sản phẩm luôn tươi mới và an toàn. Chúng tôi luôn cam kết mang đến cho khách hàng những sản phẩm hữu cơ tốt nhất, từ rau củ quả cho đến các sản phẩm chế biến sẵn.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Lý do nên chọn OrgaVina cho sản phẩm hữu cơ:</b>
                    </p>
                    <ul className="mt-4 text-base sm:text-lg text-gray-700 list-disc pl-6">
                        <li>Chất lượng vượt trội: Mỗi sản phẩm đều trải qua quá trình kiểm tra nghiêm ngặt từ khâu sản xuất đến khi nhập khẩu.</li>
                        <li>Đảm bảo an toàn sức khỏe: Sản phẩm của chúng tôi không chứa hóa chất độc hại, giúp bảo vệ sức khỏe của bạn và gia đình.</li>
                        <li>Nguồn gốc rõ ràng: Chúng tôi hợp tác với các nhà cung cấp uy tín trên toàn cầu để đảm bảo sản phẩm luôn đạt chất lượng cao nhất.</li>
                    </ul>
                    <div className="mt-8">
                        <Link to="/about">
                            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
                                Xem các sản phẩm hữu cơ
                            </button>
                        </Link>
                    </div>
                </div>
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center border text-justify border-gray-300 rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Cam kết bảo vệ môi trường cùng OrgaVina</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        OrgaVina không chỉ mang đến sản phẩm hữu cơ chất lượng mà còn cam kết bảo vệ môi trường trong suốt quá trình sản xuất và vận chuyển. Chúng tôi làm việc với các đối tác có cùng tầm nhìn, nhằm giảm thiểu tác động xấu đến môi trường. Từ việc sử dụng bao bì sinh học phân hủy được cho đến việc sử dụng các phương pháp sản xuất bền vững, OrgaVina luôn nỗ lực vì một hành tinh xanh và khỏe mạnh.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-700">
                        <b>Các cam kết của chúng tôi:</b>
                    </p>
                    <ul className="mt-4 text-base sm:text-lg text-gray-700 list-disc pl-6">
                        <li>Bao bì thân thiện với môi trường: Chúng tôi sử dụng bao bì có thể tái chế hoặc phân hủy tự nhiên, hạn chế sử dụng nhựa.</li>
                        <li>Sản xuất bền vững: Các nhà cung cấp của chúng tôi áp dụng các phương pháp sản xuất thân thiện với môi trường, giảm thiểu chất thải.</li>
                        <li>Hỗ trợ cộng đồng: Chúng tôi hợp tác với các tổ chức địa phương để hỗ trợ các sáng kiến bảo vệ môi trường và phát triển bền vững.</li>
                    </ul>
                    <div className="mt-8">
                        <a href="https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Luat-so-72-2020-QH14-Bao-ve-moi-truong-2020-431147.aspx">
                            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
                                Khám phá cam kết bảo vệ môi trường
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
