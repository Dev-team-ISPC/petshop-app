import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiUrl = 'http://localhost:8000/mascotas/';

  constructor(private http: HttpClient) {}

  // Obtener todas las mascotas
  obtenerMascotas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Crear una mascota
  crearMascota(mascota: any): Observable<any> {
    return this.http.post(this.apiUrl, mascota);
  }

  // Actualizar una mascota
  actualizarMascota(id: number, mascota: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, mascota);
  }

  // Eliminar una mascota
  eliminarMascota(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}