import { useMemo, useState } from 'react';
import { ProductForm } from '../components/features/ProductForm';
import { ProductCard } from '../components/features/ProductCard';
import { useProducts } from '../hooks/useProducts';
import type { ProductDraft } from '../types';

export function DashboardPage() {
  const { products, addProduct, updateProduct, removeProduct } = useProducts();
  const [editingId, setEditingId] = useState<number | null>(null);

  const editingProduct = useMemo(() => products.find((item) => item.id === editingId), [editingId, products]);

  const handleSubmit = (draft: ProductDraft) => {
    if (editingId) {
      updateProduct(editingId, draft);
      setEditingId(null);
      return;
    }

    addProduct(draft);
  };

  return (
    <section className="page grid">
      <article className="card">
        <h1>Panel privado</h1>
        <p className="muted">Aquí puedes crear, actualizar o eliminar productos como parte del CRUD de estudio.</p>
      </article>

      <article className="grid grid-2">
        <ProductForm initialValue={editingProduct ? { title: editingProduct.title, price: editingProduct.price, description: editingProduct.description, category: editingProduct.category, image: editingProduct.image } : undefined} onSubmit={handleSubmit} submitLabel={editingId ? 'Actualizar producto' : 'Crear producto'} />

        <article className="card">
          <h2>Resumen</h2>
          <div className="stats">
            <div className="stat"><strong>{products.length}</strong><p>Productos gestionables</p></div>
            <div className="stat"><strong>CRUD</strong><p>Crear, editar, borrar</p></div>
            <div className="stat"><strong>Hooks</strong><p>Lógica reutilizable</p></div>
          </div>
        </article>
      </article>

      <article className="card">
        <div className="section-title">
          <h2>Gestión de productos</h2>
          <button className="ghost-button" onClick={() => setEditingId(null)}>Nuevo</button>
        </div>
        <div className="grid grid-3">
          {products.map((product) => (
            <div key={product.id} className="card">
              <ProductCard product={product} compact />
              <div className="form-actions">
                <button className="ghost-button" onClick={() => setEditingId(product.id)}>Editar</button>
                <button className="ghost-button" onClick={() => removeProduct(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
