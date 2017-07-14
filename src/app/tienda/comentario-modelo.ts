export class ComentarioModelo {

    comentario:string
    usuario:string
    fecha:string
    id:string

    constructor(comentario:string, usuario:string, fecha:string, id:string)
            {
                this.comentario = comentario
                this.usuario = usuario
                this.fecha = fecha
                this.id = id
            }


}
