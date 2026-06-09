/**
 * Input
 * Descripción: campo base reutilizable para formularios de estudio.
 * Props:
 *  - label: texto visible opcional.
 *  - ...props: atributos estándar de input.
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <label className="form-grid">
      {label && <span>{label}</span>}
      <input {...props} />
    </label>
  );
}
