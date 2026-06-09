/**
 * ProductCard
 * Descripción: tarjeta reutilizable para mostrar un producto del catálogo.
 * Props:
 *  - product: objeto Product con título, imagen, precio y categoría.
 *  - compact?: reduce el tamaño visual para listados pequeños.
 */

import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useCart } from '../../providers/CartProvider';
import type { Product } from '../../types/index';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="card product-card">
      <div className="product-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-body">
        <p className="badge">{product.category}</p>
        <h3>{compact ? product.title.slice(0, 40) : product.title}</h3>
        <p className="muted">{product.description.slice(0, 90)}...</p>
      </div>
      <div className="product-footer">
        <strong className="price-tag">${product.price.toFixed(2)}</strong>
        <div className="form-actions">
          <Button variant="ghost" onClick={() => addItem(product)}>Añadir</Button>
          <Link className="primary-button" to={`/product/${product.id}`}>Ver detalle</Link>
        </div>
      </div>
    </article>
  );
}
