import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import { useLanguage } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeProvider';

export function PublicLayout() {
  const { isAuthenticated, logout } = useAuth();
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
              <button className="ghost-button" onClick={logout}>{t('logout')}</button>
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
