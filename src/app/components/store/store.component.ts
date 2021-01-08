import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/products/product.model';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {}
    get products():Product[] {
      return this.productsService.getProducts(this.selectedCategory);
    }
    get categories(): string[] {
      return this.productsService.getCategories()
    }
  

}
