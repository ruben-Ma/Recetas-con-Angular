import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-eli',
  imports: [],
  templateUrl: './btn-eli.html',
  styleUrl: './btn-eli.scss',
})
export class BtnEli {
  @Input() recetaNombre: string = 'receta';
  @Output() eliminar = new EventEmitter<void>();

  onEliminar() {
    if (confirm(`¿Eliminar "${this.recetaNombre}"?`)) {
      this.eliminar.emit();
    }
  }
}
