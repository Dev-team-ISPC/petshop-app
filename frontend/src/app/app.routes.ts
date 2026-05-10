import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: '**', redirectTo: '' }
];