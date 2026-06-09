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
      <nav className="navbar container">
        <div className="nav-links">
          <NavLink to="/">{t('catalog')}</NavLink>
          <NavLink to="/dashboard">{t('dashboard')}</NavLink>
        </div>
        <div className="nav-actions">
          <select value={theme} onChange={(event) => setTheme(event.target.value as 'light' | 'dark' | 'system')}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
          </select>
          <select value={t('language').toLowerCase().includes('idioma') ? 'es' : 'en'} onChange={(event) => setLanguage(event.target.value as 'es' | 'en')}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          {isAuthenticated ? <button className="ghost-button" onClick={logout}>{t('logout')}</button> : <NavLink className="primary-button" to="/login">{t('login')}</NavLink>}
        </div>
      </nav>
      <main className="container"><Outlet /></main>
    </div>
  );
}
