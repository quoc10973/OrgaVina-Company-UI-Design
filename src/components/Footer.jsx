import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white font-quicksand">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Cột 1: Về Chúng Tôi */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Về Chúng Tôi</h2>
                        <p className="text-gray-400">
                            Chúng tôi cam kết mang đến dịch vụ tốt nhất, kết nối giữa con người và hàng hóa. Uy tín và chất lượng là tiêu chí hàng đầu của chúng tôi.
                        </p>
                    </div>

                    {/* Cột 2: Dịch Vụ */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Dịch Vụ</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    Tra cứu thông tin
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    Hỗ trợ khách hàng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3: Theo Dõi Chúng Tôi */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Theo Dõi Chúng Tôi</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-gray-400">
                                    <i className="fab fa-linkedin-in"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 4: Đăng Ký Nhận Tin */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Đăng Ký Nhận Tin</h2>
                        <form>
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full p-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                            >
                                Đăng Ký
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
                    © {new Date().getFullYear()} -  Bản quyền thuộc về OrgaVina Company .
                </div>
            </div>
        </footer>
    );
};

export default Footer;
