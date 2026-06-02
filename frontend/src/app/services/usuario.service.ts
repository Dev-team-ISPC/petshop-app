import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://127.0.0.1:8000/usuarios/'; 

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error inesperado.';
    if (error.status === 0) {
      errorMessage = 'Error de conexión: El servidor no responde.';
    } else if (error.status === 400) {
      if (error.error && error.error.email) {
        errorMessage = 'Email ya registrado. Intenta con otro.';
      } else {
        errorMessage = 'Datos inválidos en el formulario.';
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
