/**
 * CheckoutPage
 * Descripción: vista de checkout para revisar el carrito, completar datos de entrega y confirmar un pedido.
 */

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useCart } from '../providers/CartProvider';

export function CheckoutPage() {
  const { items, subtotal, shipping, total, updateQuantity, removeItem, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
  const [confirmed, setConfirmed] = useState(false);

  const canSubmit = useMemo(
    () => customer.name.trim().length > 0 && customer.email.includes('@') && customer.address.trim().length > 0,
    [customer],
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!canSubmit || items.length === 0) {
      return;
    }

    setConfirmed(true);
    clearCart();
  };

  return (
    <section className="page grid grid-2">
      <article className="card">
        <p className="badge">Checkout</p>
        <h1>Finaliza tu pedido</h1>
        <p className="muted">Revisa los productos del carrito, ajusta cantidades y confirma el envío.</p>

        {items.length === 0 ? (
          <div className="empty-state">
            <p>Tu carrito está vacío.</p>
            <Link className="primary-button" to="/">Volver al catálogo</Link>
          </div>
        ) : (
          <div className="form-grid">
            {items.map((item) => (
              <article key={item.product.id} className="card" style={{ padding: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <img src={item.product.image} alt={item.product.title} style={{ width: 56, height: 56, objectFit: 'contain' }} />
                  <div style={{ flex: 1 }}>
                    <strong>{item.product.title}</strong>
                    <p className="muted">${item.product.price.toFixed(2)} cada uno</p>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.product.id, Number(event.target.value))}
                    style={{ width: 70 }}
                  />
                  <button className="ghost-button" type="button" onClick={() => removeItem(item.product.id)}>Quitar</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </article>

      <article className="card">
        {confirmed ? (
          <div className="empty-state">
            <h2>Pedido confirmado</h2>
            <p>Gracias por tu compra. Hemos enviado una confirmación a {customer.email}.</p>
            <Link className="primary-button" to="/">Continuar comprando</Link>
          </div>
        ) : (
          <form className="form-grid" onSubmit={handleSubmit}>
            <Input
              label="Nombre completo"
              value={customer.name}
              onChange={(event) => setCustomer((current) => ({ ...current, name: event.target.value }))}
              required
            />
            <Input
              label="Email"
              type="email"
              value={customer.email}
              onChange={(event) => setCustomer((current) => ({ ...current, email: event.target.value }))}
              required
            />
            <Input
              label="Dirección de entrega"
              value={customer.address}
              onChange={(event) => setCustomer((current) => ({ ...current, address: event.target.value }))}
              required
            />

            <div className="card" style={{ padding: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Envío</span>
                <strong>${shipping.toFixed(2)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <Button variant="primary" type="submit" disabled={!canSubmit || items.length === 0}>Confirmar pedido</Button>
          </form>
        )}
      </article>
    </section>
  );
}
