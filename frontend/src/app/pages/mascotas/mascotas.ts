import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css'
})
export class MascotasComponent {

  form!: FormGroup;

  especies = ['Perro', 'Gato', 'Ave', 'Conejo', 'Reptil', 'Otro'];

  constructor(
    private formBuilder: FormBuilder,
    private mascotaService: MascotaService
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      especie: ['', [Validators.required]],
      raza: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(30)]],
      peso: ['', [Validators.required, Validators.min(0.1), Validators.max(200)]]
    });
  }

  get Nombre() { return this.form.get('nombre'); }
  get Especie() { return this.form.get('especie'); }
  get Raza() { return this.form.get('raza'); }
  get Edad() { return this.form.get('edad'); }
  get Peso() { return this.form.get('peso'); }

  onEnviar(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.mascotaService.crearMascota(this.form.value)
      .subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          alert('Mascota registrada con éxito');
          this.form.reset();
        },
        error: (error) => {
          console.error(error);
          alert('Error al registrar mascota');
        }
      });
  }
}