import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private api =
  'http://127.0.0.1:8000/turnos/';

  constructor(
    private http: HttpClient
  ){}

  obtenerTurnos(){
    return this.http.get<any[]>(
      this.api
    );
  }

  crearTurno(data:any){
    return this.http.post(
      this.api,
      data
    );
  }

}
