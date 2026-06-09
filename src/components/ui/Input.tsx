/**
 * Input
 * Descripción: campo base reutilizable con el estilo Material UI para formularios.
 * Props:
 *  - label: texto visible opcional.
 *  - ...props: atributos estándar de TextField de MUI.
 */

import MuiTextField, { type TextFieldProps } from '@mui/material/TextField';

export type InputProps = Omit<TextFieldProps, 'variant'> & {
  label?: string;
  variant?: 'outlined' | 'filled' | 'standard';
};

export function Input({ label, ...props }: InputProps) {
  return (
    <MuiTextField
      fullWidth
      size="small"
      variant="outlined"
      label={label}
      {...props}
    />
  );
}
