import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContenedorModule } from './contenedor/contenedor.module';

import { SeguridadService } from './seguridad/seguridad.service';
import { SeguridadGuard } from './seguridad/seguridad.guard'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContenedorModule
  ],
  providers: [SeguridadService, SeguridadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
