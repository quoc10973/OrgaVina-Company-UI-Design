import React from 'react';
import Slider from 'react-slick';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const ProductCarousel = () => {
    const images = [product1, product2, product3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Tăng thời gian chuyển ảnh
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Tăng thời gian tự động chuyển ảnh
        arrows: false, // Ẩn mũi tên nếu không cần thiết
    };

    return (
        <div className="w-full h-screen max-w-none mx-auto py-0">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 p-0 rounded-xl shadow-lg"
                    >
                        <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-screen object-cover rounded-lg border-4 border-white shadow-md hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
