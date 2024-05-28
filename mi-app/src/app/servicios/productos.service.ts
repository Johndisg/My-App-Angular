import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseProductos } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly endpoint = environment.api_url

  constructor(private http: HttpClient) { }

  obtenerListadoProductos():Observable<ResponseProductos>{
    return this.http.get<ResponseProductos>(this.endpoint+'productos/listar')
  }
}
