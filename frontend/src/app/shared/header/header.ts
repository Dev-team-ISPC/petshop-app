import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit {
  estaLogueado = false;
  rol = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.estaLogueado = !!localStorage.getItem('token');
    this.rol = localStorage.getItem('role') ?? '';
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('usuario');
    this.estaLogueado = false;
    this.router.navigate(['/iniciar-sesion']);
  }
}