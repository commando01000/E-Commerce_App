import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { FooterComponent } from './Footer/Footer.component';
import { NotFoundPageComponent } from './notFoundPage/notFoundPage.component';
import { CartComponent } from './Cart/Cart.component';
import { BrandsComponent } from './Brands/Brands.component';
import { WishlistComponent } from './Wishlist/Wishlist.component';
import { ProfileComponent } from './Profile/Profile.component';
import { SignInComponent } from './Sign-in/Sign-in.component';
import { SignUpComponent } from './Sign-up/Sign-up.component';

@NgModule({
  declarations: [									
    AppComponent,
      NavbarComponent,
      FooterComponent,
      NotFoundPageComponent,
      CartComponent,
      BrandsComponent,
      WishlistComponent,
      ProfileComponent,
      SignInComponent,
      SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
