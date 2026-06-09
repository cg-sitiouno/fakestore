import { NavLink, Outlet } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../providers/AuthProvider';
import { useCart } from '../../providers/CartProvider';
import { useLanguage } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeProvider';

export function PublicLayout() {
  const { isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const { t, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div className="app-shell">
      <header className="topbar-shell">
        <nav className="topbar container" aria-label="Navegación principal">
          <div className="brand-group">
            <span className="brand-mark">FS</span>
            <div>
              <p className="brand-label">Fakestore Learning</p>
              <p className="brand-subtitle">React • Hooks • CRUD</p>
            </div>
          </div>

          <div className="nav-links">
            <NavLink to="/">{t('catalog')}</NavLink>
            <NavLink to="/checkout">Checkout ({totalItems})</NavLink>
          </div>

          <div className="nav-actions">
            <label className="control-chip">
              <span>{t('theme')}</span>
              <select value={theme} onChange={(event) => setTheme(event.target.value as 'light' | 'dark' | 'system' | 'aurora' | 'sunset' | 'forest')}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
                <option value="aurora">Aurora</option>
                <option value="sunset">Sunset</option>
                <option value="forest">Forest</option>
              </select>
            </label>

            <label className="control-chip">
              <span>{t('language')}</span>
              <select value={t('language').toLowerCase().includes('idioma') ? 'es' : 'en'} onChange={(event) => setLanguage(event.target.value as 'es' | 'en')}>
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </label>

            {isAuthenticated ? (
              <Button variant="ghost" onClick={logout}>{t('logout')}</Button>
            ) : (
              <NavLink className="primary-button" to="/login">{t('login')}</NavLink>
            )}
          </div>
        </nav>
      </header>
      <main className="container"><Outlet /></main>
    </div>
  );
}
