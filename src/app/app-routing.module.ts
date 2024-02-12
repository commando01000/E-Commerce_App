import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { SignInComponent } from './components/Sign-in/Sign-in.component';
import { SignUpComponent } from './components/Sign-up/Sign-up.component';
import { BrandsComponent } from './components/Brands/Brands.component';
import { ProductsComponent } from './components/Products/Products.component';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';
import { CategoryComponent } from './components/Category/Category.component';
import { CartComponent } from './components/Cart/Cart.component';

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
