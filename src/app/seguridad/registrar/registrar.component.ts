import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { SeguridadService } from '../seguridad.service'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @ViewChild("f") formulario:NgForm;

  constructor(private seguridadservicio:SeguridadService) { }

  ngOnInit() {
  }

  registrar(){
    this.seguridadservicio.registrar(this.formulario.value)
  }

}
