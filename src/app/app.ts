import { Component, signal } from '@angular/core';
import { Recetas } from './recetas/recetas';

@Component({
  selector: 'app-root',
  imports: [Recetas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Recetas-con-Angular');
}
