import { Component } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tarea1: Tarea = {
    prioridad: "Alta",
    texto: "Hacer la compra"
  };

  tarea2: Tarea = {
    prioridad: "Baja",
    texto: "Hacer la colada"
  };

  listaTareas: Tarea[] = [this.tarea1, this.tarea2];
}
