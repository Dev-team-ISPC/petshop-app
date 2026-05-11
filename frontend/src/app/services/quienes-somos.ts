import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  profesionalList: any;

  obtenerProfesionales() {
    this.profesionalList = [
      {
        nombre: 'Dr. Martín Sosa',
        rol: 'Veterinario',
        descripcion: 'Especialista en pequeños animales con más de 10 años de experiencia.',
        foto: 'equipo/Martin.jpg'
      },
      {
        nombre: 'Laura Méndez',
        rol: 'Secretaria',
        descripcion: 'Coordinadora de turnos y atención al cliente. La primera sonrisa que vas a ver.',
        foto: 'equipo/Laura.jpg'
      },
      {
        nombre: 'Sofía Ramírez',
        rol: 'Vendedora',
        descripcion: 'Asesora en nutrición y productos para mascotas. Te ayuda a elegir lo mejor.',
        foto: 'equipo/Sofia.jpg'
      },
      {
        nombre: 'Tomi',
        rol: 'Asistente Virtual',
        descripcion: 'Tu ayudante virtual disponible las 24hs para responder dudas sobre productos.',
        foto: 'equipo/Tomi.jpg'
      }
    ];
    return this.profesionalList;
  }
}