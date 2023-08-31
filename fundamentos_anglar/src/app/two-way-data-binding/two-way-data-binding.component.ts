import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  nome = "" //aqui fica com string vazia pq estou usando o two-way datab biding.
          // sera preenchido valor qd o cliente server digitar
}
