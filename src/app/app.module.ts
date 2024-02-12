import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { FooterComponent } from './Footer/Footer.component';
import { NotFoundPageComponent } from './components/notFoundPage/notFoundPage.component';
import { CartComponent } from './components/Cart/Cart.component';
import { BrandsComponent } from './components/Brands/Brands.component';
import { WishlistComponent } from './components/Wishlist/Wishlist.component';
import { ProfileComponent } from './components/Profile/Profile.component';
import { SignInComponent } from './Authentication/Sign-in/Sign-in.component';
import { SignUpComponent } from './Authentication/Sign-up/Sign-up.component';
import { HomeComponent } from './Home/Home.component';
import { ProductsComponent } from './components/Products/Products.component';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';
import { CategoryComponent } from './components/Category/Category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    SignUpComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
