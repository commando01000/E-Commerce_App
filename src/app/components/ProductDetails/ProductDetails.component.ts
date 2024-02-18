import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/Products.service';
import { Product } from 'src/app/interfaces/Product';
@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productID?: any;
  myProduct?: Product;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit() {
    // console.log(this._ActivatedRoute);

    // this._ActivatedRoute.snapshot.params['productId'];
    this.productID = this._ActivatedRoute.snapshot.paramMap.get('id');
    // console.log(this._ActivatedRoute.snapshot.paramMap.get('productId'));
    this._ProductsService.getProductDetails(this.productID).subscribe({
      next: (results) => {
        console.log(results.data);
        this.myProduct = results.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed !');
      },
    });
  }
}
