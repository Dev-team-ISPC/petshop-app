import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

function passwordsCoinciden(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmar = control.get('confirmarPassword')?.value;
  return password === confirmar ? null : { passwordsMismatch: true };
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
    });
  }

  get Nombre() { return this.form.get('nombre'); }
  get Email() { return this.form.get('email'); }
  get Password() { return this.form.get('password'); }
  get ConfirmarPassword() { return this.form.get('confirmarPassword'); }

  onEnviar(event: Event): void {
    event.preventDefault();
    this.mensajeExito = '';
    this.mensajeError = '';

    if (this.form.valid) {
      const { nombre, email, password } = this.form.value;
      this.userService.register(nombre, email, password).subscribe({
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
