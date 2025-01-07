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
            <div className="hidden md:block">
                <Banner />
            </div>
            <div className="p-4 sm:p-8 bg-slate-200 flex flex-col md:flex-row justify-between space-x-0 md:space-x-3">
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
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center text-justify border border-gray-300 rounded-lg p-4 sm:p-8 w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-brown-800">Chào mừng đến với OrgaVina </h2>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Giới thiệu chung về công ty:</b> OrgaVina là doanh nghiệp xuất khẩu cà phê hàng đầu tại Việt Nam, chuyên cung cấp cà phê thô chất lượng cao từ các vùng trồng cà phê nổi tiếng như Đắk Lắk, Gia Lai, Lâm Đồng. Chúng tôi cam kết tuân thủ nghiêm ngặt các quy chuẩn quốc tế như EU Organic và Rainforest Alliance.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Lĩnh vực hoạt động:</b> Các loại hạt cà phê thô đầy chất lượng cho người tiêu dùng.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Thị trường xuất khẩu chính:</b> Chiến lược kinh doanh xuất khẩu cà phê thô sang thị trường Liên minh Châu Âu (EU).
                    </p>
                    <div className="mt-8">
                        <Link to="/about">
                            <button className="px-4 py-2 sm:px-6 sm:py-2  bg-slate-700 text-white rounded-full hover:bg-slate-900 transition duration-300">
                                Xem thêm
                            </button>
                        </Link>
                    </div>
                </div>
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center border text-justify border-gray-300 rounded-lg p-4 sm:p-8 w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-brown-800">Tại sao nên chọn OrgaVina ?</h2>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Cam kết chất lượng:</b> Chúng tôi cam kết mang đến sản phẩm cà phê tốt nhất, đảm bảo an toàn sức khỏe và phù hợp với tiêu chuẩn quốc tế. Chúng tôi hiểu rõ nhu cầu của khách hàng và luôn cung cấp những giải pháp tốt nhất.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Dịch vụ chuyên nghiệp:</b> Đội ngũ của chúng tôi sẵn sàng cung cấp dịch vụ tận tâm, hỗ trợ nhanh chóng để đảm bảo trải nghiệm mua sắm của bạn hoàn hảo, không ngừng cải tiến và xây dựng tương lai bền vững cho ngành xuất khẩu cà phê.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Mạng lưới đối tác đa dạng:</b> Với mạng lưới nhà cung cấp đáng tin cậy trên toàn cầu, chúng tôi mang đến danh mục sản phẩm phong phú, đáp ứng mọi nhu cầu của bạn.
                    </p>
                    <div className="mt-8">
                        <Link to="/contact">
                            <button className="px-4 py-2 sm:px-6 sm:py-2  bg-slate-700 text-white rounded-full hover:bg-slate-900">
                                Liên hệ ngay
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:p-8 bg-slate-200 flex flex-col md:flex-row justify-between space-x-0 md:space-x-3">
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center text-justify border border-gray-300 rounded-lg p-4 sm:p-8 w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-brown-800">Sản phẩm hữu cơ chất lượng cao</h2>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        Tại OrgaVina, chúng tôi cung cấp các sản phẩm cà phê chất lượng cao, đạt chuẩn quốc tế. Cà phê của chúng tôi được thu hoạch trực tiếp từ các vùng trồng cà phê nổi tiếng tại Việt Nam như Đắk Lắk, Gia Lai, và Lâm Đồng. Chúng tôi luôn cam kết mang đến cho khách hàng những hạt cà phê tốt nhất, từ cà phê Robusta mạnh mẽ đến cà phê Arabica thơm ngon.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Lý do nên chọn OrgaVina cho sản phẩm cà phê:</b>
                    </p>
                    <ul className="mt-4 text-base sm:text-lg text-brown-800 list-disc pl-6">
                        <li>Chất lượng vượt trội: Mỗi hạt cà phê đều trải qua quá trình kiểm tra nghiêm ngặt từ khâu trồng trọt, thu hoạch đến chế biến.</li>
                        <li>Hương vị tự nhiên: Sản phẩm của chúng tôi không sử dụng chất phụ gia, mang đến hương vị nguyên bản và đặc trưng.</li>
                        <li>Nguồn gốc rõ ràng:  Chúng tôi hợp tác trực tiếp với các nông trại cà phê uy tín để đảm bảo chất lượng và truy xuất nguồn gốc của từng lô hàng.</li>
                    </ul>
                    <div className="mt-8">
                        <Link to="/about">
                            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-slate-700 text-white rounded-full hover:bg-slate-900">
                                Xem các sản phẩm hữu cơ
                            </button>
                        </Link>
                    </div>
                </div>
                <div ref={addToRefs} className="mt-8 text-center flex flex-col items-center border text-justify border-gray-300 rounded-lg p-4 sm:p-8 w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-brown-800">Cam kết bảo vệ môi trường cùng OrgaVina</h2>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        OrgaVina không chỉ mang đến sản phẩm cà phê chất lượng cao mà còn cam kết bảo vệ môi trường trong suốt quá trình sản xuất và vận chuyển. Chúng tôi làm việc với các đối tác có chung tầm nhìn, nhằm giảm thiểu tác động tiêu cực đến môi trường. Từ việc sử dụng bao bì sinh học phân hủy được cho đến việc áp dụng các phương pháp canh tác bền vững, OrgaVina luôn nỗ lực vì một hành tinh xanh và khỏe mạnh.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-brown-800">
                        <b>Các cam kết của chúng tôi:</b>
                    </p>
                    <ul className="mt-4 text-base sm:text-lg text-brown-800 list-disc pl-6">
                        <li>Bao bì thân thiện với môi trường: Chúng tôi sử dụng bao bì có thể tái chế hoặc phân hủy tự nhiên, hạn chế sử dụng nhựa.</li>
                        <li>Canh tác bền vững: Các nông trại đối tác của chúng tôi áp dụng các phương pháp canh tác thân thiện với môi trường, giảm thiểu việc sử dụng hóa chất độc hại.</li>
                        <li>Hỗ trợ cộng đồng: Chúng tôi hợp tác với các tổ chức địa phương để hỗ trợ các sáng kiến bảo vệ môi trường và cải thiện sinh kế cho người dân tại vùng trồng cà phê.</li>
                    </ul>
                    <div className="mt-8">
                        <a href="https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Luat-so-72-2020-QH14-Bao-ve-moi-truong-2020-431147.aspx">
                            <button className="px-4 py-2 sm:px-6 sm:py-2  bg-slate-700 text-white rounded-full hover:bg-slate-900">
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
