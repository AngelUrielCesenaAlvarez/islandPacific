const Post = ({ product }) => {
  return (
    <div className="flex flex-col items-center border-2 p-5 m-2">
      <p> {product.productName}</p>
      <p>{product.productPrice}</p>
      <img src={product.imgUrl} width={100} />
    </div>
  );
};

export default Post;
