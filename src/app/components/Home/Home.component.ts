import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/Products.service';
import { Product } from '../../interfaces/Product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/Services/Categories.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  categories: any[] = [];
  isLoading: boolean = true;
  constructor(private _productsService: ProductsService, private _CategoryService: CategoriesService) {}

  ngOnInit() {
    this.getCategories();
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

  getCategories() {
    this._CategoryService.getCategories().subscribe({
      next: (results) => {
        this.categories = results.data;
        console.log(this.categories);
        
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed !');
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  }

}
