import { Routes } from '@angular/router';
import { Recetas } from './recetas/recetas';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
  { path: '', redirectTo: '/recetas', pathMatch: 'full' },
  { path: 'recetas', component: Recetas },
  { path: 'formulario', component: Formulario }
];
