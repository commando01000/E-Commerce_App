import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/Services/Wishlist.service';

@Component({
  selector: 'app-Wishlist',
  templateUrl: './Wishlist.component.html',
  styleUrls: ['./Wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishList: any[] = [];
  constructor(
    private _wishListService: WishlistService,
    private _cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProductsFromWishList();
  }

  getProductsFromWishList() {
    this._wishListService.getProductsFromWishlist().subscribe({
      next: (response) => {
        this._wishListService.wishListItems.next(response.data);
        this.wishList = this._wishListService.wishListItems.getValue();
        console.log('WishList Items ', this.wishList);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // console.log('completed !');
      },
    });
  }

  removeProductFromWishList(productID: any) {
    return this._wishListService
      .removeProductFromWishList(productID)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.getProductsFromWishList();
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          // console.log('completed !');
        },
      });
  }

  addProductToCart(productID: any) {
    return this._cartService.addToCart(productID).subscribe({
      next: (response) => {
        console.log(response);
        this._cartService.numCartItems.next(response.numOfCartItems);
        this.toastr.success(response.message, response.status, {
          closeButton:true,
          progressBar:true,
        });
        this._cartService.getUserCart();
        this.removeProductFromWishList(productID);
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.message, 'Error', {
          timeOut: 2000,
          closeButton:true,
          progressBar:true,
        });
      },
      complete: () => {
        // console.log('completed !');
      },
    });
  }
}
