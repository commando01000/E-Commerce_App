import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/Products.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true;
  constructor(private _productsService: ProductsService) {
    this._productsService.getAllProducts().subscribe({
      next: (results) => {
        console.log(results.data);
        this.products = results.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed !');
      },
    });
  }

  ngOnInit() {}
}
