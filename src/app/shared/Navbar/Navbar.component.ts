import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('navBar') navBar!: ElementRef;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (scrollY > 500) {
      this._Renderer.addClass(this.navBar.nativeElement, 'px-5');
      this._Renderer.setStyle(this.navBar.nativeElement, 'transition', '0.5s ease');
    }
    else
    {
      this._Renderer.removeClass(this.navBar.nativeElement, 'px-5');
    }
  }

  constructor(
    private _AuthUser: AuthorizedUserDataService,
    private _cartService: CartService,
    private _Renderer: Renderer2
  ) {
    _AuthUser.userData.subscribe({
      next: () => {
        if (this._AuthUser.userData.getValue()) {
          // console.log(this._AuthUser.userData);
          this.isLogin = true;
          console.log('there is user data');
          let token: any = localStorage.getItem('token');
          this._AuthUser.freshToken.next(token);
          console.log(this._AuthUser.freshToken.getValue());
          this.getTheUserCart();
        } else {
          console.log('no user data');
          this.isLogin = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

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
  }
  getTheUserCart() {
    this._cartService.getUserCart().subscribe({
      next: (response) => {
        this._cartService.numCartItems.next(response.numOfCartItems);
        this.cartItems = this._cartService.numCartItems.getValue();
        console.log(this._cartService.numCartItems.getValue());
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

  logout() {
    this._AuthUser.removeUserData();
    this._cartService.numCartItems.next(0);
    this.isLogin = false;
  }
}
