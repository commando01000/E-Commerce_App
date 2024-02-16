import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/Home.component';
import { SignInComponent } from './Authentication/Sign-in/Sign-in.component';
import { SignUpComponent } from './Authentication/Sign-up/Sign-up.component';
import { BrandsComponent } from './components/Brands/Brands.component';
import { ProductsComponent } from './components/Products/Products.component';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';
import { CategoryComponent } from './components/Category/Category.component';
import { CartComponent } from './components/Cart/Cart.component';
import { authenticationGuard } from './Guards/Authentication.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authenticationGuard],
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [authenticationGuard],
    component: HomeComponent,
  },
  {
    path: 'brands',
    canActivate: [authenticationGuard],
    component: BrandsComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'cart',
    canActivate: [authenticationGuard],
    component: CartComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'products',
    canActivate: [authenticationGuard],
    component: ProductsComponent,
  },
  {
    path: 'category',
    canActivate: [authenticationGuard],
    component: CategoryComponent,
  },
  {
    path: 'product_details/:productId',
    canActivate: [authenticationGuard],
    component: ProductDetailsComponent,
  },
  {
    path: 'product_details/:id',
    canActivate: [authenticationGuard],
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
