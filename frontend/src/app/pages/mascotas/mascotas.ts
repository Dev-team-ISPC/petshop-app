import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MascotasService } from '../../services/mascotas.service';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css'
})
export class MascotasComponent implements OnInit {

  form!: FormGroup;
  mascotas: any[] = [];
  editandoId: number | null = null;
  cargando = false;
  mensaje = '';

  especies = ['Perro', 'Gato', 'Ave', 'Conejo', 'Reptil', 'Otro'];

  constructor(
    private fb: FormBuilder,
    private mascotasService: MascotasService
  ) {
    this.form = this.fb.group({
      nombre:           ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      especie:          ['', [Validators.required]],
      raza:             ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      peso:             ['', [Validators.required, Validators.min(0.1), Validators.max(200)]],
      fecha_nacimiento: ['', [Validators.required]],
      id_dueno:         ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.mascotasService.obtenerMascotas().subscribe({
      next: (data) => this.mascotas = data,
      error: () => this.mensaje = 'Error al cargar mascotas.'
    });
  }

  onEnviar(event: Event): void {
    event.preventDefault();
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.cargando = true;
    const operacion = this.editandoId
      ? this.mascotasService.actualizarMascota(this.editandoId, this.form.value)
      : this.mascotasService.crearMascota(this.form.value);

    operacion.subscribe({
      next: () => {
        this.mensaje = this.editandoId ? 'Mascota actualizada.' : 'Mascota registrada.';
        this.resetForm();
        this.cargarMascotas();
      },
      error: () => this.mensaje = 'Error al guardar.',
      complete: () => this.cargando = false
    });
  }

  editarMascota(mascota: any): void {
    this.editandoId = mascota.id;
    this.form.patchValue({
      nombre:           mascota.nombre,
      especie:          mascota.especie,
      raza:             mascota.raza,
      peso:             mascota.peso,
      fecha_nacimiento: mascota.fecha_nacimiento,
      id_dueno:         mascota.id_dueno
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  eliminarMascota(id: number): void {
    if (!confirm('¿Eliminar esta mascota?')) return;
    this.mascotasService.eliminarMascota(id).subscribe({
      next: () => this.cargarMascotas(),
      error: () => this.mensaje = 'Error al eliminar.'
    });
  }

  cancelarEdicion(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.form.reset();
    this.editandoId = null;
    this.mensaje = '';
  }

  get Nombre()          { return this.form.get('nombre'); }
  get Especie()         { return this.form.get('especie'); }
  get Raza()            { return this.form.get('raza'); }
  get Peso()            { return this.form.get('peso'); }
  get FechaNacimiento() { return this.form.get('fecha_nacimiento'); }
  get Dueno()           { return this.form.get('id_dueno'); }
}