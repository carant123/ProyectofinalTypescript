export class TiendaModelo {
    titulo:string
    descripcion:string
    direccion:string
    horario:string
    comentarios:Array<string>
    imagen:string
    id:string

    constructor(titulo:string, descripcion:string, direccion:string, 
            horario:string,
             comentarios:Array<string>,
             imagen:string,
             id:string)
            {
                this.titulo = titulo
                this.descripcion = descripcion
                this.direccion = direccion
                this.horario = horario

                console.log("comentarios contenido")
                console.log(comentarios)

                if(comentarios != null){
                    this.comentarios = comentarios
                }

                this.imagen = imagen
                this.id = id
            }


}
