import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', [Validators.required]]
    });
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Email() {
    return this.form.get('email');
  }

  get Contrasena() {
    return this.form.get('contrasena');
  }

  get ConfirmarContrasena() {
    return this.form.get('confirmarContrasena');
  }

  onEnviar(event: Event) {
    console.log(this.form.value);
    event.preventDefault();
    if (this.form.valid) {
      alert('Registro exitoso!');
    } else {
      this.form.markAllAsTouched();
    }
  }

  irALogin() {
    this.router.navigate(['/iniciar-sesion']);
  }
}
