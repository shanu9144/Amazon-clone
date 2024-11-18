import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { productData } from "../data/productData";
import { cartItem } from "../data/cartItem";

function ProductSection() {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null); // For modal
  const [visibleItems, setVisibleItems] = useState(8); // For pagination

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const showProductDetails = (item) => {
    setSelectedProduct(item);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 8); // Load 8 more items
  };

  return (
    <div className="relative -mt-[200px] sm:-mt-[250px] md:-mt-[300px] lg:-mt-[350px] z-10">
      <div className="max-w-screen-2xl mx-auto">
        {/* Product Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-8">
          {productData.map((section, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              <div className="grid grid-cols-2 gap-3">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer group"
                    onClick={() => showProductDetails(item)}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[120px] object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <p className="text-xs mt-2 text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
              <button className="text-[13px] text-[#007185] mt-4 block hover:text-[#C7511F] hover:underline">
                See more
              </button>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItem.slice(0, visibleItems).map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="overflow-hidden aspect-square mb-4">
                  <img
                    src={item.img_link}
                    alt={item.product_name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <h3
                    className="text-sm line-clamp-2 hover:text-[#C7511F] cursor-pointer"
                    onClick={() => showProductDetails(item)}
                  >
                    {item.product_name}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-sm text-yellow-500">★</span>
                    <span className="text-sm ml-1">{item.rating}</span>
                    <span className="text-xs text-gray-500 ml-2">
                      ({item.rating_count})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">
                      {item.discounted_price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {item.actual_price}
                    </span>
                    <span className="text-sm text-red-700">
                      {Math.round(
                        ((item.actual_price - item.discounted_price) /
                          item.actual_price) *
                          100
                      )}
                      % off
                    </span>
                  </div>
                  <button
                    className="w-full mt-2 bg-[#FFD814] hover:bg-[#F7CA00] text-black py-1 px-4 rounded-full 
                               font-medium text-sm transition-colors duration-200 border border-[#FCD200]
                               active:bg-[#F2C200] active:border-[#F0B800]"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < cartItem.length && (
            <button
              onClick={loadMoreItems}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image || selectedProduct.img_link}
              alt={selectedProduct.name || selectedProduct.product_name}
              className="w-full mb-4"
            />
            <p className="text-gray-700">
              Detailed description goes here...
            </p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={closeProductDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
