import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaGaleriaComponent } from './tienda-galeria/tienda-galeria.component';
import { TiendaInfoComponent } from './tienda-galeria/tienda-info/tienda-info.component';
import { TiendaAgregarComponent } from './tienda-agregar/tienda-agregar.component'
import { TiendaService } from './tienda.service';
import { TiendaDetalleComponent } from './tienda-detalle/tienda-detalle.component';
import { TiendaTopComponent } from './tienda-top/tienda-top.component';


@NgModule({
  imports: [
    CommonModule,
    TiendaRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [TiendaGaleriaComponent, TiendaInfoComponent, TiendaAgregarComponent, TiendaDetalleComponent, TiendaTopComponent],
  providers: [TiendaService]
})
export class TiendaModule { }
