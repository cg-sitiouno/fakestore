import { useLanguage } from '../providers/LanguageProvider';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/features/ProductCard';

export function HomePage() {
  const { t } = useLanguage();
  const { products, loading, error } = useProducts();

  return (
    <section className="page grid">
      <article className="hero">
        <div className="card">
          <p className="badge">{t('learn')}</p>
          <h1>{t('title')}</h1>
          <p className="muted">{t('subtitle')}</p>
          <p className="muted">Esta base incluye rutas, provider de autenticación, tema, idioma y un CRUD de ejemplo para estudiar React con buenas prácticas.</p>
        </div>
        <div className="card">
          <h2>Estado actual</h2>
          <div className="stats">
            <div className="stat"><strong>{products.length}</strong><p>Productos cargados</p></div>
            <div className="stat"><strong>2</strong><p>Vistas principales</p></div>
            <div className="stat"><strong>3</strong><p>Providers base</p></div>
          </div>
        </div>
      </article>

      <article className="card">
        <div className="section-title">
          <h2>{t('catalog')}</h2>
          <span className="badge">API: FakeStore</span>
        </div>
        {loading && <p>Cargando productos…</p>}
        {error && <p className="muted">{error}</p>}
        {!loading && products.length === 0 && <div className="empty-state">No hay productos disponibles en este momento.</div>}
        <div className="grid grid-3">
          {products.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </article>
    </section>
  );
}
