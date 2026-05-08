import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  contactForm: FormGroup;
  mensajeEnviado = signal(false);
  cargando = signal(false);

  features = [
    {
      icono: '🐶',
      titulo: 'Mascotas',
      descripcion: 'Registro y gestión de mascotas (próximamente)',
    },
    {
      icono: '📦',
      titulo: 'Productos',
      descripcion: 'Consulta de productos desde la API',
    },
    {
      icono: '👤',
      titulo: 'Usuarios',
      descripcion: 'Registro de clientes y control de datos',
    },
  ];

  constructor(private router: Router, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

   verProductos(): void {
    this.router.navigate(['/products']);
  }

    enviarContacto(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.cargando.set(true);

    setTimeout(() => {
      console.log('Formulario enviado:', this.contactForm.value);
      this.mensajeEnviado.set(true);
      this.cargando.set(false);
      this.contactForm.reset();
    }, 1500);
  }

  // --- validación en el template ---
  get emailInvalido(): boolean {
    const ctrl = this.contactForm.get('email');
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  get mensajeInvalido(): boolean {
    const ctrl = this.contactForm.get('mensaje');
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}