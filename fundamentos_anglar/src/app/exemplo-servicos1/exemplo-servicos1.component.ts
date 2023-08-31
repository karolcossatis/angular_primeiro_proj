import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component {
  nome = "" ;

  constructor(private logger: LoggerService){ //injetando aqui o serviço logger. 
    //como usei o private, eu só posso usar o método aqui , como está abaixo , dentro do adicionarNome
    //caso deixasse como public, poderia declarar em outro lugar como direto no template.

  }

  adicionarNome() {
   // alert(`O nome ${this.nome} foi adicionado`); *Apos fazer o logger vou alterar isto para:

   this.logger.logar(`O nome ${this.nome} foi adicionado`);

  }
}
