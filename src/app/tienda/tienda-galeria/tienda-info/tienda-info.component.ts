import { Component, OnInit, Input } from '@angular/core';
import { TiendaModelo } from '../../tienda-modelo';

@Component({
  selector: 'app-tienda-info',
  templateUrl: './tienda-info.component.html',
  styleUrls: ['./tienda-info.component.css']
})
export class TiendaInfoComponent implements OnInit {

  @Input() item:TiendaModelo
  @Input() indice:number

  constructor() { 
    console.log("info")
    console.log(this.item)
  }

  ngOnInit() {
  }

}
