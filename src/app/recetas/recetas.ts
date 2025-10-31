import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Receta } from "../receta/receta";

@Component({
  selector: 'app-recetas',
  imports: [Navbar, Receta],
  templateUrl: './recetas.html',
  styleUrl: './recetas.scss'
})
export class Recetas {

}
