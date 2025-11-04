import { Component, input, output } from '@angular/core'; 

@Component({ // define el componente BtnEli
  selector: 'app-btn-eli',
  imports: [],
  templateUrl: './btn-eli.html',
  styleUrl: './btn-eli.scss',
})
export class BtnEli {// clase del componente BtnEli
  recetaNombre = input('receta');
  eliminar = output<void>();

  onEliminar() { // metodo que se ejecuta al hacer clic 
    if (confirm(`¿Eliminar "${this.recetaNombre()}"?`)) {
      this.eliminar.emit(); //emit emite la receta 
    }
  }
}
