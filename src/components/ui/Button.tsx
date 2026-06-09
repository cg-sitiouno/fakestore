/**
 * Button
 * Descripción: botón base reutilizable con la identidad visual de Material UI.
 * Props:
 *  - children: contenido visible.
 *  - variant: estilo visual del botón.
 */

import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = Omit<MuiButtonProps, 'variant'> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'ghost', children, ...props }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <MuiButton
      color={isPrimary ? 'primary' : 'inherit'}
      variant={isPrimary ? 'contained' : 'outlined'}
      size="small"
      {...props}
    >
      {children}
    </MuiButton>
  );
}
