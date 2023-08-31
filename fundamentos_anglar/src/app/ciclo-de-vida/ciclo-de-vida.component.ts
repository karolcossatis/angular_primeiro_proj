import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date(); // o horario vai começar com a data atual
  timer: any = null!;  

  @Input() texto = "";
  
  ngOnInit(): void {
    console.log("o evento onInit disparou")
    this.timer = setInterval(() => this.horario = new Date(), 1000); 
    // setInterval = dispara uma função de tempos em tempos 
    // o horario vai receber a data atual , o 2º parametro é o timeout, no caso de 1 em 1 seg. a função é disparada

    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log( changes)
    }

    ngOnDestroy(): void {
      clearInterval(this.timer); // i´ra fazer a limpeza do timer 
    }
}
