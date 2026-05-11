import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
})
export class IniciarSesion {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event): void {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      alert('Enviar al servidor...');
    } else {
      this.form.markAllAsTouched();
    }
  }
}