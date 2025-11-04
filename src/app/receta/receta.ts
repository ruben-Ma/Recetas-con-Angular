import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnEli } from '../btn-eli/btn-eli';

@Component({
  selector: 'app-receta',
  imports: [CommonModule, BtnEli],
  templateUrl: './receta.html',
  styleUrl: './receta.scss',
})
export class Receta {
  @Input() receta: any = {
    id: 0,
    nombre: 'Receta por defecto',
    imagen: 'https://via.placeholder.com/200x200',
    ingredientes: ['Ingrediente 1', 'Ingrediente 2']
  };

  @Output() recetaEliminada = new EventEmitter<number>();

  eliminarReceta() {
    this.recetaEliminada.emit(this.receta.id);
  }
}
