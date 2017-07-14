import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase'

@Injectable()
export class SeguridadService {

  token:string
  email:string

  config = {
    apiKey: "AIzaSyAQZdDH5qg6YLRjaBvPOe-SCePVkgoaqEY",
    authDomain: "proyectofinal-8a949.firebaseapp.com",
    databaseURL: "https://proyectofinal-8a949.firebaseio.com",
    projectId: "proyectofinal-8a949",
    storageBucket: "proyectofinal-8a949.appspot.com",
    messagingSenderId: "101119184215"
  };

  constructor(private router:Router) { 
    firebase.initializeApp(this.config)
  }

  login(datos:{correo:string,contrasena:string}) {
    firebase
      .auth()
      .signInWithEmailAndPassword(datos.correo,datos.contrasena)
      .then(
        respuesta => {

          this.email = firebase.auth().currentUser.email

          firebase
            .auth()
            .currentUser
            .getToken()
            .then(
              (token:string) => {
                this.token = token
                this.router.navigate(['tienda', 'locales'])
              }
            )
        }
      )
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
          this.router.navigate(['seguridad', 'login'])
        }
      )
      .catch(
        error => {

          console.log(error)
        }
      )


  }

  logout(){
    this.token = null
    firebase.auth().signOut()
    this.router.navigate(['tienda', 'locales'])
  }

  estaAutenticado() {
    return this.token != null
  }

  obtenerToken() {
    return this.token
  }

  obtenerUsuario() {
    return this.email
  }

  obtenerUrlBD() {
    return this.config.databaseURL
  }

  refeDatabaseTiendas() {
    return firebase.database().ref("/tiendas")
  }

  refeDatabaseComentarios() {
    return firebase.database().ref("/comentarios")
  }

  refeDatabaseComentarios2(codigo) {
    return firebase.database().ref("/comentarios/" + codigo)
  }

}
