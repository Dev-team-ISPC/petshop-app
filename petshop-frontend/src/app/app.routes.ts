import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Productos } from './page/productos/productos';
import { Servicios } from './page/servicios/servicios';
import { Contacto } from './page/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'productos', component: Productos },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];
