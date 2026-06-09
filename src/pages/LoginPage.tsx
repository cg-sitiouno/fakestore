import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../providers/AuthProvider';

export function LoginPage() {
  const [email, setEmail] = useState('student@fakestore.dev');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const ok = login(email, password);
    if (!ok) {
      setError('Introduce un email válido y una contraseña de al menos 4 caracteres.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <section className="page grid grid-2">
      <article className="card">
        <h1>Acceso privado</h1>
        <p className="muted">Usa cualquier email con @ para entrar como estudiante y ver el panel privado.</p>
      </article>
      <article className="card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <Input label="Correo" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Correo" />
          <Input label="Contraseña" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Contraseña" />
          {error && <p className="muted">{error}</p>}
          <Button variant="primary" type="submit">Entrar</Button>
        </form>
      </article>
    </section>
  );
}
