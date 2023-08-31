import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  produto = "";

  constructor(public logger: LoggerService) { 
    //como aqui usei o public, consigo acessar em outra area,por exemplo, declarei TB no template, no botao exbie todos

  }

  adicionarProduto() {
    this.logger.logar(`O produto  ${this.produto} foi adicionado`);
  }
}
