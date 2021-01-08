import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

const PORT = 3500;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl: string;
// auth_token: string;

  // private products: Product[] = [];
  // private categories: string[] = [];

  constructor(private http: HttpClient) {
    this.baseUrl = `${location.hostname}:${PORT}/`;
   }

   getProducts():Observable<Product[]> {
     return this.http.get<Product[]>(this.baseUrl+ 'products');  // http://localhost:3500/products
   }
}
