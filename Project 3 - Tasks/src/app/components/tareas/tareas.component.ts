import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = '';


  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listaTareas.push(tarea);
    
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listaTareas.splice(index, 1);

  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listaTareas[index].estado = !tarea.estado
  }
}
