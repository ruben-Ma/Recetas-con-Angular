import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../navbar/navbar';
import { Recetas } from '../recetas/recetas';

@Component({
  selector: 'app-formulario',
  imports: [Navbar, CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {
  nombre: string = '';
  ingredientes: string = '';
  imagen: string = '';
  previewImage: string = '';

  onImageChange(event: any) {
    const input = event.target as HTMLInputElement;
    this.imagen = input.value;
    this.previewImage = this.imagen;
  }

  crearReceta() {
    // Validar que los campos no estén vacíos
    if (!this.nombre.trim() || !this.ingredientes.trim() || !this.imagen.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Crear nueva receta
    const nuevaReceta = {
      id: Date.now(), // Usar timestamp como ID único
      nombre: this.nombre,
      imagen: this.imagen,
      ingredientes: this.ingredientes.split(',').map(ing => ing.trim())
    };

    // Acceder a la variable estática de Recetas y agregar la nueva receta
    Recetas.recetasEnMemoria.push(nuevaReceta);

    // Limpiar formulario
    this.nombre = '';
    this.ingredientes = '';
    this.imagen = '';
    this.previewImage = '';

    alert('¡Receta creada exitosamente!');
  }
}
