import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Product not found");
        }
        setProduct(data);
      } catch (error) {
        setError("Error fetching product");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    console.log("Product ID from route:", id); // DEBUG
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <div className="product-card">
        <p>{product.description}</p>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
