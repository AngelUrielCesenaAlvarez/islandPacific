// src/components/Post.js
const Post = ({ product, addToCart }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden border m-4">
      <div style={{ height: '300px', width: '100%' }}>
        <img src={product.imgUrl} alt={product.productName} className="w-full h-full object-contain" />
      </div>
      <div className="p-4">
        <p className="text-lg font-bold text-gray-900">{product.productName}</p>
        <p className="text-gray-600">${product.productPrice}</p>
        <button 
          onClick={() => addToCart(product)} 
          className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Post;
