import { Component } from '@angular/core';
import { SeguridadService } from './seguridad/seguridad.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private seguridadService: SeguridadService){}
}
