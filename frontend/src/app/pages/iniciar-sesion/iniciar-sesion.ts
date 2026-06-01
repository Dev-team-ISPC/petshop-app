import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
})
export class IniciarSesion {
  form!: FormGroup;
  mensajeError = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get Email() { return this.form.get('email'); }
  get Password() { return this.form.get('password'); }

  onEnviar(event: Event): void {
    event.preventDefault();
    this.mensajeError = '';

    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.userService.login(email, password).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.user.role ?? 'cliente');
          this.router.navigate(['/']);
        },
        error: () => {
          this.mensajeError = 'Email o contraseña incorrectos.';
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
