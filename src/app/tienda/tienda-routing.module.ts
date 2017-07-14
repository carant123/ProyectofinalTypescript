import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaGaleriaComponent } from './tienda-galeria/tienda-galeria.component';
import { TiendaInfoComponent } from './tienda-galeria/tienda-info/tienda-info.component';
import { TiendaAgregarComponent } from './tienda-agregar/tienda-agregar.component';
import { TiendaDetalleComponent } from './tienda-detalle/tienda-detalle.component';
import { TiendaTopComponent } from './tienda-top/tienda-top.component';

import { SeguridadGuard } from '../seguridad/seguridad.guard'

const routes: Routes = [
  {path: 'locales', component:TiendaGaleriaComponent},
  //{path: 'info', component:TiendaInfoComponent, canActivate: [SeguridadGuard]},
  {path: 'tiendaagregar', component:TiendaAgregarComponent, canActivate:[SeguridadGuard]},
  {path: 'tiendaInfo/:id', component:TiendaDetalleComponent},
  {path: 'top', component:TiendaTopComponent},
  {path: '**', redirectTo: 'locales'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }


