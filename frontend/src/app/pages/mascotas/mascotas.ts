import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)], []],
      especie: ['', [Validators.required], []],
      raza: ['', [Validators.required, Validators.minLength(2)], []],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(30)], []],
      peso: ['', [Validators.required, Validators.min(0.1), Validators.max(200)], []]
    });
  }

  get Nombre() { return this.form.get('nombre'); }
  get Especie() { return this.form.get('especie'); }
  get Raza() { return this.form.get('raza'); }
  get Edad() { return this.form.get('edad'); }
  get Peso() { return this.form.get('peso'); }

  onEnviar(event: Event) {
    console.log(this.form.value);
    event.preventDefault();
    if (this.form.valid) {
      alert('Mascota registrada con exito!');
    } else {
      this.form.markAllAsTouched();
    }
  }
}
