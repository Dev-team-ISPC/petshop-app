import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { RegistroComponent } from './pages/registro/registro';
import { IniciarSesion } from './pages/iniciar-sesion/iniciar-sesion';
import { MascotasComponent } from './pages/mascotas/mascotas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciar-sesion', component: IniciarSesion },
  { path:  'mascotas', component: MascotasComponent },
  { path: '**', redirectTo: '' }
];