import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({ // define el componente BtnEli
  selector: 'app-btn-eli',
  imports: [],
  templateUrl: './btn-eli.html',
  styleUrl: './btn-eli.scss',
})
export class BtnEli {// clase del componente BtnEli
  @Input() recetaNombre: string = 'receta';
  @Output() eliminar = new EventEmitter<void>();

  onEliminar() { // metodo que se ejecuta al hacer clic 
    if (confirm(`¿Eliminar "${this.recetaNombre}"?`)) {
      this.eliminar.emit(); //emit emite la receta 
    }
  }
}
