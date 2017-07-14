import { Component, OnInit } from '@angular/core';
import { TiendaModelo } from '../tienda-modelo';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-tienda-top',
  templateUrl: './tienda-top.component.html',
  styleUrls: ['./tienda-top.component.css']
})
export class TiendaTopComponent implements OnInit {

  tiendas:Array<TiendaModelo>

  ngOnInit() {
    this.tiendaservice.listadoFirebase()
  }

  constructor(public tiendaservice:TiendaService) { 

  }



}
