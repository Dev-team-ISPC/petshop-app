import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const repetirPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmarPassword = control.get('confirmarPassword');

  if (!password || !confirmarPassword) return null;

  return password.value === confirmarPassword.value ? null : { noCoincide: true };
};
