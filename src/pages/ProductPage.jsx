import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'

const ProductPage = () => {
    const productImages = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        // Add more image URLs as needed
    ];

    return (
        <div className="product-page">
            <h1 className="text-3xl font-bold mb-4">Product Images</h1>
            <ProductCarousel images={productImages} />
        </div>
    );
};

export default ProductPage;