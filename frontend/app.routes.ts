import { Routes } from '@angular/router';
import { Home } from './src/app/pages/home/home';
import { Productos } from './page/productos/productos';
import { Servicios } from './page/servicios/servicios';
import { Contacto } from './page/contacto/contacto';
import { QuienesSomos } from './page/quienes-somos/quienes-somos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'productos', component: Productos },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: '**', redirectTo: '' }
];
