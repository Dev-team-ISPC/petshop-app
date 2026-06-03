import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  role = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role') ?? 'cliente';
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/iniciar-sesion']);
  }
}
