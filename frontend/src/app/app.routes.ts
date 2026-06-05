import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { RegistroComponent } from './pages/registro/registro';
import { IniciarSesion } from './pages/iniciar-sesion/iniciar-sesion';
import { MascotasComponent } from './pages/mascotas/mascotas';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth.guard';
import { ProductosComponent } from './pages/productos/productos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [authGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciar-sesion', component: IniciarSesion },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'mascotas', component: MascotasComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];