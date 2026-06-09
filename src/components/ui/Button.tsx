/**
 * Button
 * Descripción: botón reutilizable con variantes simples para el panel y la navegación.
 * Props:
 *  - children: contenido visible.
 *  - variant: estilo visual del botón.
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({ variant = 'ghost', children, ...props }: ButtonProps) {
  return (
    <button className={variant === 'primary' ? 'primary-button' : 'ghost-button'} {...props}>
      {children}
    </button>
  );
}
