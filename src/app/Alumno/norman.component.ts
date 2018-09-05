import { Component } from '@angular/core';

@Component({
  selector: 'Alumno',
  template: 
    '<h4 style = "text-align:center"> {{ mensaje }} </h4>'
})
export class AlumnoComponent {
 public mensaje = 'Gracias por tu Visita';
}