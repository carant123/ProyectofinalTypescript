import { Component, OnInit } from '@angular/core';
import { TiendaModelo } from '../tienda-modelo';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-tienda-galeria',
  templateUrl: './tienda-galeria.component.html',
  styleUrls: ['./tienda-galeria.component.css']
})
export class TiendaGaleriaComponent implements OnInit {

  ngOnInit() {
    console.log("ngOnInit1");
    
    console.log("ngOnInit2");
  }

  constructor(public tiendaservice:TiendaService) { 
    this.tiendaservice.listadoFirebase()
    console.log("constructor1");
    //this.tiendaservice.listadoFirebase()
    console.log("constructor2");
    //this.tiendas = this.tiendaservice.listarTiendas()
    console.log("tiendas2: ")
    console.log(this.tiendaservice.tiendas)
    console.log("tiendas2: ")
  }


}
