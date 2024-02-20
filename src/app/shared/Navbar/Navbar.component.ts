import { Component, OnInit } from '@angular/core';
import { AuthorizedUserDataService } from 'src/app/Services/AuthorizedUserData.service';
import { CartService } from 'src/app/Services/Cart.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  cartItems!: number;
  constructor(
    private _AuthUser: AuthorizedUserDataService,
    private _cartService: CartService
  ) {
    this._cartService.numCartItems.subscribe({
      next: (response) => {
        console.log(response);
        this.cartItems = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed !');
      },
    });

    _AuthUser.userData.subscribe({
      next: () => {
        if (this._AuthUser.userData.getValue()) {
          // console.log(this._AuthUser.userData);
          this.isLogin = true;
          console.log('there is user data');
        } else {
          console.log('no user data');
          this.isLogin = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {}

  logout() {
    this._AuthUser.removeUserData();
  }
}
