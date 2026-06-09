import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchProducts } from '../services/fakeStore';
import type { Product, ProductDraft } from '../types';

const STORAGE_KEY = 'fakestore-learning-products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const remoteProducts = await fetchProducts();
      const storedProducts = localStorage.getItem(STORAGE_KEY);
      const localProducts = storedProducts ? (JSON.parse(storedProducts) as Product[]) : [];
      const merged = [...localProducts, ...remoteProducts.filter((item) => !localProducts.some((local) => local.id === item.id))];
      setProducts(merged);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const storedProducts = localStorage.getItem(STORAGE_KEY);
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts) as Product[]);
      setLoading(false);
    }

    void loadProducts();
  }, [loadProducts]);

  const addProduct = useCallback((draft: ProductDraft) => {
    const nextProduct: Product = {
      id: Date.now(),
      ...draft,
      price: Number(draft.price),
      rating: { rate: 4.5, count: 1 },
    };

    setProducts((current) => {
      const updated = [nextProduct, ...current];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateProduct = useCallback((id: number, draft: ProductDraft) => {
    setProducts((current) => {
      const updated = current.map((item) =>
        item.id === id
          ? { ...item, ...draft, price: Number(draft.price) }
          : item,
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeProduct = useCallback((id: number) => {
    setProducts((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const featured = useMemo(() => products.slice(0, 4), [products]);

  return { products, featured, loading, error, addProduct, updateProduct, removeProduct, refresh: loadProducts };
}
