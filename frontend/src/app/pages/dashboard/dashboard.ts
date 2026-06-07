import { Component, OnInit, ChangeDetectorRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { MascotasService } from '../../services/mascota.service';
import { UserService } from '../../services/user.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardComponent implements OnInit {
  role = '';
  totalUsuarios = 0;
  totalMascotas = 0;
  totalProductos = 0;
  productos: any[] = [];

  constructor(
    private router: Router,
    private mascotasService: MascotasService,
    private userService: UserService,
    private productosService: ProductosService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role') ?? 'cliente';
    console.log('role:', this.role);
    console.log('token:', localStorage.getItem('token'));

    if (this.role === 'admin') {
      this.ngZone.run(() => {
        this.userService.obtenerUsuarios().subscribe({
          next: (data) => { this.totalUsuarios = data.length; this.cdr.markForCheck(); },
          error: () => {}
        });

        this.mascotasService.obtenerMascotas().subscribe({
          next: (data) => { this.totalMascotas = data.length; this.cdr.markForCheck(); },
          error: () => {}
        });

        this.productosService.obtenerProductos().subscribe({
          next: (data) => { this.totalProductos = data.length; this.productos = data; this.cdr.markForCheck(); },
          error: () => {}
        });
      });
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/iniciar-sesion']);
  }
}