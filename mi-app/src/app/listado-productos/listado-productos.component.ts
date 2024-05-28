import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ProductosService } from '../servicios/productos.service';
import { Producto } from '../interfaces/producto';


@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio'];
  dataSource: Producto[] =[]

  constructor(private productosService: ProductosService  ){}

  ngOnInit(): void {
    this.obtenerListadoProductos()
  }

  obtenerListadoProductos(){
    this.productosService.obtenerListadoProductos()
    .subscribe({
      next:(value)=>{
        if(value.estado == 201){
          this.dataSource = value.productos
        }
      }
    })
  }
}
