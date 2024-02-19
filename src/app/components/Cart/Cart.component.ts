import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/Services/Cart.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css'],
})
export class CartComponent implements OnInit {
  userCart!: any[];
  totalCartPrice: number = 0;
  constructor(private _cartService: CartService) {}

  ngOnInit() {
    this.getUserCart();
  }

  getUserCart() {
    return this._cartService.getUserCart().subscribe({
      next: (response) => {
        console.log(response);
        this.userCart = response.data.products;
        this.totalCartPrice = response.data.totalCartPrice;
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
