import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  eseguiLogin(username:string, password: string, tipoUtente: string) {
    if (username != null && username != '' && password != null && password != '' && tipoUtente != null && tipoUtente != '') {
      sessionStorage.setItem("user", username);
      sessionStorage.setItem('tipoUtente', tipoUtente)
      this.router.navigateByUrl('/home');
    } else {
      alert('Login errata.');
    }
  }

}
