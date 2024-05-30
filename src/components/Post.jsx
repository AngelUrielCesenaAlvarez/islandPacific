// src/components/Post.js
const Post = ({ product, addToCart }) => {
  return (
    <div className="flex flex-col items-center border-2 p-5 m-8">
      <p>{product.productName}</p>
      <p>{product.productPrice}</p>
      <img src={product.imgUrl} width={100} alt={product.productName} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Post;
