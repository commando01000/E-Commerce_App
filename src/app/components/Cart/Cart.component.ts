import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
        // console.log(response);
        this._cartService.numCartItems.next(response.numOfCartItems);
        this.userCart = response.data.products;
        // console.log(this.userCart);

        this.totalCartPrice = response.data.totalCartPrice;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // console.log('completed !');
      },
    });
  }

  updateCartQuantity(productID: any, quantity: number) {
    if (quantity == 0) {
      this.removeFromCart(productID);
    }
    return this._cartService.updateCartQuantity(productID, quantity).subscribe({
      next: (response) => {
        // console.log(response);
        this.getUserCart();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // console.log('completed !');
      },
    });
  }

  removeFromCart(productID: any) {
    this._cartService.removeItemFromCart(productID).subscribe({
      next: (response) => {
        console.log(response);
        this.getUserCart();
        this._cartService.numCartItems.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // console.log('completed !');
      },
    });
  }
}
