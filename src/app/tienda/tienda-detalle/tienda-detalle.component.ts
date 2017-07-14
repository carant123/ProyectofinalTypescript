import { Component, OnInit, ViewChild } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { TiendaModelo } from '../tienda-modelo';
import { ComentarioModelo } from '../comentario-modelo';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Subscription } from "rxjs/Subscription"
import { Observable } from "rxjs/Observable"
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../../seguridad/seguridad.service'

@Component({
  selector: 'app-tienda-detalle',
  templateUrl: './tienda-detalle.component.html',
  styleUrls: ['./tienda-detalle.component.css']
})
export class TiendaDetalleComponent implements OnInit {

  @ViewChild("fIngresarComentario") formIngreso:NgForm
  
  comentarios:Array<ComentarioModelo>
  email:string
  tienda:TiendaModelo
  id:number
  paramsSuscripcion:Subscription
  dateNow:Date = new Date();
  logueado:boolean

  constructor(public tiendaservice:TiendaService, private ruta:ActivatedRoute, 
      private router:Router, public seguridadservice:SeguridadService) { 
    console.log("tienda--id")
    console.log(this.tienda)
    this.email = seguridadservice.obtenerUsuario()
    this.logueado = seguridadservice.estaAutenticado()
    //tiendaservice.listadoComentariosFirebase(this.tienda.id)
    //this.comentarios = tiendaservice.comentarios
  }

  ngOnInit() {
    this.id = +this.ruta.snapshot.params.id

    this.tienda = this.tiendaservice.obtenerTienda(this.id)

    console.log("info-tienda");
    console.log(this.tienda);

    this.paramsSuscripcion = this.ruta.params.subscribe(
      (params:Params) => {
        this.tienda = this.tiendaservice.obtenerTienda(+params["id"])
      }
    )
    console.log("info-tienda-ngOnit1")
    console.log("id: " + this.tienda.id)
    this.tiendaservice.listadoComentariosFirebase(this.tienda.id)
    this.comentarios = this.tiendaservice.comentarios
    console.log("info-tienda-ngOnit2")
    console.log(this.tiendaservice.comentarios)

  }

  ingresarcomentario(){

    this.formIngreso.value.usuario = this.email
    this.formIngreso.value.fecha = this.dateNow.getDay() + "/" + this.dateNow.getMonth() + "/" + this.dateNow.getFullYear()

    if(this.formIngreso.valid){
      this.tiendaservice.ingresar(this.formIngreso.value,this.tienda.id)
      this.formIngreso.reset()
    }

    this.tiendaservice.listadoComentariosFirebase(this.tienda.id)
    this.comentarios = this.tiendaservice.comentarios
  }


  ngOnDestroy() {
    this.paramsSuscripcion.unsubscribe()
  }
  

}
