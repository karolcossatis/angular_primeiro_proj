import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  
  constructor() { }

  estaAutenticado(): boolean {
    //ao fazer login, geralmente é salvo o token de acesso do usuario no localstorage ou sessionstorage
    //no navegador, no f5 , storage, temos as informações de acesso do usuario. no localstorage fica salvo mesmo depois, voltando. 
    // o sessionstorage fica salvo so na sessao
    // o token de acesso = jwt , jason webtoken.
    return !!sessionStorage.getItem("access-token");//"" por a chave que vai utilizar pra acessar o token
    //coloquei o !! pq sem, estaria retornando uma string ou null , usando o !! ele converte a declaração para um booleano
  } 


  login(email: string, senha: string) {
    if (email === "admin@admin.com.br" && senha === "123456") {
      sessionStorage.setItem("access-token", this.accessToken ); 
      //se o if acima for true, vou usar o setitem para salvar o "access-token" no sessionStorage, buscando os dados 
      // da variavel accesstoken com o this. obs: esse token tem q ser gerado pelo JWT.
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.clear(); //no logout, só preciso limpar o sessionStorage.

  }
}
