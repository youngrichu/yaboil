import { useParams, Navigate } from 'react-router-dom';
import ProductDetailLayout from '../components/ProductDetailLayout';
import { getProduct } from '../data/products';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : undefined;

  if (!product) {
    return <Navigate to="/lineup" replace />;
  }

  return <ProductDetailLayout product={product} />;
}
