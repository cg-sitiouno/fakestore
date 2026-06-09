import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/fakeStore';
import type { Product } from '../types/index';

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setProduct(await fetchProductById(Number(id)));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error inesperado');
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, [id]);

  if (loading) return <div className="card">Cargando detalle…</div>;
  if (error) return <div className="card">{error}</div>;
  if (!product) return <div className="card">Producto no encontrado.</div>;

  return (
    <section className="page grid grid-2">
      <article className="card"><img src={product.image} alt={product.title} /></article>
      <article className="card">
        <p className="badge">{product.category}</p>
        <h1>{product.title}</h1>
        <p className="muted">{product.description}</p>
        <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Valoración:</strong> {product.rating?.rate ?? 'N/A'} / 5</p>
      </article>
    </section>
  );
}
