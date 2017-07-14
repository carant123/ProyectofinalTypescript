import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../seguridad/seguridad.service'

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  constructor(public seguridadService: SeguridadService) { }

  ngOnInit() {
  }

}
