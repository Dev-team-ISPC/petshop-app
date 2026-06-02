import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { repetirPasswordValidator } from '../../validators/password.validator';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  form!: FormGroup;
  errorServer: string | null = null;
  exitoMsg: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*')]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*')]],
      direccion: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', [Validators.required]]
    }, { validators: repetirPasswordValidator });
  }

  get Nombre() { return this.form.get('nombre'); }
  get Email() { return this.form.get('email'); }
  get Telefono() { return this.form.get('telefono'); }
  get Direccion() { return this.form.get('direccion'); }
  get Password() { return this.form.get('password'); }
  get ConfirmarPassword() { return this.form.get('confirmarPassword'); }

  onEnviar(event: Event) {
    event.preventDefault();
    this.errorServer = null;
    this.exitoMsg = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const nuevoUsuario: Usuario = {
      name: this.form.value.nombre,
      email: this.form.value.email,
      telefono: this.form.value.telefono,
      direccion: this.form.value.direccion,
      password: this.form.value.password
    };

    console.log('Enviando datos a Django...', nuevoUsuario);

    this.usuarioService.registrarUsuario(nuevoUsuario).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor Django:', res);
        this.exitoMsg = '¡Registro exitoso! Redirigiendo a iniciar sesión...';
        this.form.reset();
        
        setTimeout(() => {
          console.log('Redirigiendo...');
          this.irALogin();
        }, 2500);
      },
      error: (err: any) => {
        console.error('Error capturado en el componente:', err);
        this.errorServer = err.message || 'Error al conectar con el servidor.';
      }
    });
  }

  irALogin() {
    this.router.navigate(['/iniciar-sesion']);
  }
}