import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tipoUtente: string;
  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginAdmin() {
    this.tipoUtente = 'admin';
  }

  loginUser() {
    this.tipoUtente = 'user';
  }

  login(tipoUtente: string) {
    this.loginService.eseguiLogin(this.username, this.password, this.tipoUtente);
  }

}
