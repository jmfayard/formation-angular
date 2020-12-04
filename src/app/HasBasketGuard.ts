import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Product} from './model/product';
import {CustomerService} from './services/customer.service';

@Injectable({
  providedIn: 'root'
})
export class HasBasketGuard implements CanActivate {

  constructor(private customerService: CustomerService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('%O', {route});
    if (route.url[0].path === 'basket') {
      const basket = this.customerService.basket
      return basket.length != 0;
    } else {
      return true;
    }
  }


}
