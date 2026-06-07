import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class VacunaService {

 api =
 'http://127.0.0.1:8000/vacunas/';

 constructor(
   private http: HttpClient
 ){}

 obtenerVacunas(){
   return this.http.get<any[]>(
     this.api
   );
 }

}
