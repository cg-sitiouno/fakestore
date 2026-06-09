/**
 * ProductCard
 * Descripción: tarjeta reutilizable para mostrar un producto del catálogo.
 * Props:
 *  - product: objeto Product con título, imagen, precio y categoría.
 *  - compact?: reduce el tamaño visual para listados pequeños.
 */

import { Link } from 'react-router-dom';
import type { Product } from '../../types/index';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <article className="card">
      <img src={product.image} alt={product.title} />
      <p className="badge">{product.category}</p>
      <h3>{compact ? product.title.slice(0, 40) : product.title}</h3>
      <p className="muted">{product.description.slice(0, 90)}...</p>
      <div className="section-title">
        <strong>${product.price.toFixed(2)}</strong>
        <Link className="primary-button" to={`/product/${product.id}`}>Ver detalle</Link>
      </div>
    </article>
  );
}
