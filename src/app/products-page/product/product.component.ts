import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./product.service";
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductsService],
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  isMarked = false;
  searchType = '';
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onClick() {
    this.isMarked = true;
  }

}
