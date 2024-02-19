import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  header: any = {
    token: localStorage.getItem('token'),
  };

  constructor(private _http: HttpClient) {}

  addToCart(productId: number): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId },
      {headers: this.header}
    );
  }
  getUserCart(): Observable<any> {
    return this._http.get(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {headers: this.header}
    );
  }

  removeItemFromCart(productId:any): Observable<any> {
    return this._http.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {headers: this.header},
    );
  }

  updateCartQuantity(productId: any, count: number): Observable<any> {
    return this._http.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count },
      {headers: this.header}
    );
  }

  clearCart(): Observable<any> {
    return this._http.delete(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {headers: this.header}
    );
  }
}

