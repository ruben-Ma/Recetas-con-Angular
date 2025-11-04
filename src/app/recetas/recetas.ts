import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Receta } from "../receta/receta";

@Component({
  selector: 'app-recetas',
  imports: [CommonModule, Navbar, Receta],
  templateUrl: './recetas.html',
  styleUrl: './recetas.scss'
})
export class Recetas {
  // Array de recetas completas
  recetas = [
    {
      id: 1,
      nombre: 'Pasta Italiana',
      imagen: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
      ingredientes: ['Pasta', 'Salsa de tomate', 'Queso parmesano', 'Albahaca']
    },
    {
      id: 2,
      nombre: 'Ensalada César',
      imagen: 'https://cdn7.kiwilimon.com/ss_secreto/4532/640x640/4532.jpg.webp',
      ingredientes: ['Lechuga romana', 'Pollo a la parrilla', 'Crutones', 'Aderezo César']
    },
    {
      id: 3,
      nombre: 'Pizza Margherita',
      imagen: 'https://okdiario.com/img/2024/10/06/comidas-rapidas-y-balanceadas_-resuelvelas-en-menos-de-20-minutos.jpg',
      ingredientes: ['Masa de pizza', 'Salsa de tomate', 'Mozzarella fresca', 'Albahaca']
    },
    {
      id: 4,
      nombre: 'Paella Española',
      imagen: 'https://gourmetsabor.es/wp-content/uploads/2025/03/close-up-delicious-spanish-food-scaled-1.jpg',
      ingredientes: ['Arroz', 'Mariscos', 'Azafrán', 'Pimientos', 'Guisantes']
    }
  ];

  eliminarReceta(id: number) {
    this.recetas = this.recetas.filter(receta => receta.id !== id);
  }
}
