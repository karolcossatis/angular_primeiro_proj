import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  senha = "";

  constructor( 
  private  auth: AuthService,
  private router: Router
    ) {}

  login() {
    if (this.auth.login(this.email, this.senha)) {
      this.router.navigate(["pagina-protegida"]); 
      //após injetar aqui o router, vou usar para navegar á pagina desejada = "pagina-protegida" 
      return;
    }
    alert("Login está inválida");
    this.email = "";
    this.senha = "";
    //além do alert , vai limpar os campos 
  }
}
