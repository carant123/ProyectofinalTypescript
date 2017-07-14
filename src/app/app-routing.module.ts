import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

const rutas: Routes = [
    {path: 'seguridad', loadChildren: './seguridad/seguridad.module#SeguridadModule'},
    {path: 'tienda', loadChildren: './tienda/tienda.module#TiendaModule'},
    //{path: '', loadChildren: './tienda/tienda.module#TiendaModule'},
    {path: '**', redirectTo: 'tienda', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}