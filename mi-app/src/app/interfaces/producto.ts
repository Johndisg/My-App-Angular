export interface Producto {
    id:number;
    nombre:string;
    descripcion:string;
    precio:string
}

export interface ResponseProductos{
    estado:number;
    productos:Producto[]
}