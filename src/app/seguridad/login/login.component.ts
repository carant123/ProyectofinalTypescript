import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { SeguridadService } from '../seguridad.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("f") formulario:NgForm;

  constructor(private seguridadservicio:SeguridadService) { }

  ngOnInit() {
  }

  loguear(){
    this.seguridadservicio.login(this.formulario.value)
  }

}
