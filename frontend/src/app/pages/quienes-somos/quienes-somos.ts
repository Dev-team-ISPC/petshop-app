import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosService } from '../../services/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css',
})
export class QuienesSomosComponent {

  equipo: any;

  constructor(private quienesSomosService: QuienesSomosService) {
    this.equipo = this.quienesSomosService.obtenerProfesionales();
  }
}
