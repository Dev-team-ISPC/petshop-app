import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

function contrasenaCoincide(control: AbstractControl): ValidationErrors | null {
  const contrasena = control.get('contrasena')?.value;
  const confirmar = control.get('confirmarContrasena')?.value;
  return contrasena === confirmar ? null : { passwordsMismatch: true };
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  form!: FormGroup;
  mensajeExito = '';
  mensajeError = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', [Validators.required]]
    }, { validators: contrasenaCoincide });
  }

  get Nombre() { return this.form.get('nombre'); }
  get Email() { return this.form.get('email'); }
  get Contrasena() { return this.form.get('contrasena'); }
  get ConfirmarContrasena() { return this.form.get('confirmarContrasena'); }

  onEnviar(event: Event): void {
    event.preventDefault();
    this.mensajeExito = '';
    this.mensajeError = '';

    if (this.form.valid) {
      const { nombre, email, contrasena } = this.form.value;
      this.userService.register(nombre, email, contrasena).subscribe({
        next: () => {
          this.mensajeExito = 'Registro exitoso. Redirigiendo...';
          setTimeout(() => this.router.navigate(['/iniciar-sesion']), 1500);
        },
        error: (err: { error?: { email?: string[] } }) => {
          this.mensajeError = err.error?.email?.[0] ?? 'Error al registrarse. Intentá de nuevo.';
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  irALogin(): void {
    this.router.navigate(['/iniciar-sesion']);
  }
}
