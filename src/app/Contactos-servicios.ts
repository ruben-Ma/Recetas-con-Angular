  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosServicios {
  
  private recetasOriginales = [
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
      ingredientes: ['Arroz', 'Mariscos', 'Azafrán', 'Pimientos']
    }
  ];

  private recetasEnMemoria: any[] = [];

  constructor() {
    this.inicializarRecetas();
  }

  inicializarRecetas(): void {
    if (this.recetasEnMemoria.length === 0) {
      this.recetasEnMemoria = JSON.parse(JSON.stringify(this.recetasOriginales));
    }
  }

  obtenerRecetas(): any[] {
    return this.recetasEnMemoria;
  }

  crearReceta(nombre: string, imagen: string, ingredientes: string): void {
    if (!nombre.trim() || !imagen.trim() || !ingredientes.trim()) {
      throw new Error('Por favor completa todos los campos');
    }

    const nuevaReceta = {
      id: Date.now(),
      nombre: nombre,
      imagen: imagen,
      ingredientes: ingredientes.split(',').map(ing => ing.trim())
    };

    this.recetasEnMemoria.push(nuevaReceta);
  }

  eliminarReceta(id: number): void {
    this.recetasEnMemoria = this.recetasEnMemoria.filter(receta => receta.id !== id);
  }

  obtenerRecetaPorId(id: number): any {
    return this.recetasEnMemoria.find(receta => receta.id === id);
  }

}
