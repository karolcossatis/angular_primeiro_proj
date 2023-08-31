import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "karol";
  data = "1990-03-29";
  urlImagem = "/assets/IMG_4031.JPG"

  mostrarDataNascimento(){
    alert(`A data de nascimento da ${this.nome} é ${this.data} !`)
  }
}
