import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegadorComponent } from './navegador/navegador.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],

  declarations: [
    NavegadorComponent],

  exports: [
    NavegadorComponent,
    AppRoutingModule
  ]
})
export class ContenedorModule { }
