import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-tienda-agregar',
  templateUrl: './tienda-agregar.component.html',
  styleUrls: ['./tienda-agregar.component.css']
})
export class TiendaAgregarComponent implements OnInit {

  @ViewChild("fIngresar") formIngreso:NgForm

  constructor(private router: Router, private ruta:ActivatedRoute,private tiendaservice:TiendaService) { }

  ngOnInit() {
  }

  ingresar(){
    console.log("contenido")
    console.log(this.formIngreso.value)

    if(this.formIngreso.valid){
      this.tiendaservice.agregarFirebase(this.formIngreso.value)
      this.formIngreso.reset()
    }

    this.router.navigate(['tienda'])

  }

}
