
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestData } from './rest.datas';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];
  private categories: string[] = [];

constructor(private dataSource: RestData){
  this.dataSource.getProducts().subscribe((data) => {
    this.products = data;
    this.categories = data.map((p) => p.category)
    .filter((c, index, array )=> array.indexOf(c) === index).sort()
  });
}
   getProducts(category:string = null) :Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category )
   }
   getCategories(): string[] {
     return this.categories; 
   }
}


// CRUD = Create Read Update Delete 
// RESTful = respresentational state transfer