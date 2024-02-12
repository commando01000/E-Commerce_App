import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { SignInComponent } from './Sign-in/Sign-in.component';
import { SignUpComponent } from './Sign-up/Sign-up.component';
import { BrandsComponent } from './Brands/Brands.component';
import { ProductsComponent } from './Products/Products.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { CategoryComponent } from './Category/Category.component';
import { CartComponent } from './Cart/Cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'brands',
    component: BrandsComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'product_details/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
