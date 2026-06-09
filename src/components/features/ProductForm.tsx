/**
 * ProductForm
 * Descripción: formulario reutilizable para crear y editar productos dentro del panel privado.
 * Props:
 *  - initialValue: datos actuales del producto a editar (opcional).
 *  - onSubmit: callback para guardar el formulario.
 *  - submitLabel: texto del botón principal.
 */

import { useEffect, useState, type FormEvent } from 'react';
import type { ProductDraft } from '../../types/index';

interface ProductFormProps {
  initialValue?: ProductDraft;
  onSubmit: (draft: ProductDraft) => void;
  submitLabel?: string;
}

const EMPTY_VALUE: ProductDraft = {
  title: '',
  price: 0,
  description: '',
  category: 'general',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
};

export function ProductForm({ initialValue, onSubmit, submitLabel = 'Guardar producto' }: ProductFormProps) {
  const [form, setForm] = useState<ProductDraft>(EMPTY_VALUE);

  useEffect(() => {
    setForm(initialValue ?? EMPTY_VALUE);
  }, [initialValue]);

  const handleChange = (field: keyof ProductDraft, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: field === 'price' ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="card form-grid" onSubmit={handleSubmit}>
      <h3>Formulario de producto</h3>
      <input value={form.title} onChange={(event) => handleChange('title', event.target.value)} placeholder="Título" required />
      <input type="number" value={form.price} onChange={(event) => handleChange('price', event.target.value)} placeholder="Precio" required />
      <input value={form.category} onChange={(event) => handleChange('category', event.target.value)} placeholder="Categoría" required />
      <textarea value={form.description} onChange={(event) => handleChange('description', event.target.value)} placeholder="Descripción" rows={4} required />
      <input value={form.image} onChange={(event) => handleChange('image', event.target.value)} placeholder="URL de imagen" />
      <div className="form-actions">
        <button className="primary-button" type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}
