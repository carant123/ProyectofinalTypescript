import { Injectable } from '@angular/core';

import { Http } from '@angular/http'
import { TiendaModelo } from './tienda-modelo'
import { ComentarioModelo } from './comentario-modelo';
import { SeguridadService } from '../seguridad/seguridad.service'

import * as firebase from 'firebase'

@Injectable()
export class TiendaService {
  tiendas:TiendaModelo[] = []
  comentarios:ComentarioModelo[] = []
  rutaBD:string
  tiendasbd:any
  comentariosbd:any
  comentariosbd2:any

  constructor(private http: Http, private seguridadService: SeguridadService) { 
    this.rutaBD = this.seguridadService.obtenerUrlBD()
    this.tiendasbd = this.seguridadService.refeDatabaseTiendas()
    this.comentariosbd = this.seguridadService.refeDatabaseComentarios()

  }


  listado(){
    const token = this.seguridadService.obtenerToken()

    this
      .http
      .get(this.rutaBD + '/tiendas.json?auth=' + token)
      .subscribe(
        datos => {
          this.tiendas = datos.json()

          if(this.tiendas == null){
            this.tiendas = []
          }
          console.log("listado")
          console.log(this.tiendas)
        }
      )
    //this.http.get(this.rutaBD + '/medicos.json?auth=' + token)
  }

  listadoFirebase(){
    //const token = this.seguridadService.obtenerToken()

    this.tiendasbd.on("value", tiendas => {
       console.log("value: " + tiendas)
      const lista = tiendas.val()
      this.tiendas = []

      for(let item in lista){
        const tienda = lista[item]
        tienda.id = item

          this.seguridadService.refeDatabaseComentarios().child(tienda.id).on("value", function(snapshot) {
    
            console.log("La tienda " + tienda.titulo + "-" + tienda.id +" tiene " +snapshot.numChildren()+" comentarios");
            tienda.conteo = snapshot.numChildren()
            console.log("tienda: " + tienda)
            //this.tiendas.push(tienda)

          })

        this.tiendas.push(tienda)

      }

      console.log("info");
      console.log(this.tiendas);

    })


   // this
    //  .http
    //  .get(this.rutaBD + '/tiendas.json?auth=' + token)
     // .subscribe(
    //    datos => {
       //   this.tiendas = datos.json()

      //    if(this.tiendas == null){
        //    this.tiendas = []
        //  }
       //   console.log("listado")
        //  console.log(this.tiendas)
    //    }
     // )
    //this.http.get(this.rutaBD + '/medicos.json?auth=' + token)
  }


  agregarFirebase(tienda: TiendaModelo){
  

    this.tiendasbd.push().set(tienda)

   // return this
    //  .http
     // .put(this.rutaBD + '/tiendas.json?auth=' + token, this.tiendas)
      
  }



  agregar(tienda: TiendaModelo){
  
    if(this.tiendas == null){
      this.tiendas = []
    }
  

    const token = this.seguridadService.obtenerToken()
    console.log("tienda contenido")
    console.log(tienda)
    this.tiendas.push(tienda)
    console.log("detro")
    //this.bd.push().set(tienda)

    return this
      .http
      .put(this.rutaBD + '/tiendas.json?auth=' + token, this.tiendas)

   // return this
    //  .http
     // .put(this.rutaBD + '/tiendas.json?auth=' + token, this.tiendas)
      
  }

  listarTiendas():Array<TiendaModelo> {
    return this.tiendas.slice()
  }


  registrar(datos){
    // funcionan como promesas no como observador por eso utilizamos then cuando la promesa a sido cumplida 
    // se puede tener then por then o varios then
    firebase
      .auth()
      .createUserWithEmailAndPassword(datos.correo, datos.contrasena)
      .then(
        msg => {
          console.log("Usuario creado")
        }
      )
      .catch(
        error => {

          console.log(error)
        }
      )
  }


  obtenerTienda(indice:number):TiendaModelo {
    //return this.bares[indice]
   return this.tiendas.slice(indice, indice+1)[0]

  }

  ingresar(datos, codigo){
    this.comentariosbd2 = this.seguridadService.refeDatabaseComentarios2(codigo)
    this.comentariosbd2.push().set(datos)
    //this.comentariosbd.push().set(datos)
  }




  listadoComentariosFirebase(codigo){

    //const token = this.seguridadService.obtenerToken()
    console.log("listadoComentariosFirebase")
    this.comentariosbd2 = this.seguridadService.refeDatabaseComentarios2(codigo)
    console.log("listadoComentariosFirebase for")
    console.log(this.comentariosbd2)

    this.comentariosbd2.on("value", comentarios_value => {
      console.log("listadoComentariosFirebase - value")
      const lista_comentario = comentarios_value.val()
      this.comentarios = []

      console.log("listadoComentariosFirebase - for")
      for(let item in lista_comentario){
        const comentario = lista_comentario[item]
        comentario.id = item
        this.comentarios.push(comentario)
      }

      console.log("info de comentarios");
      console.log(this.comentarios);

    })

  }


}
