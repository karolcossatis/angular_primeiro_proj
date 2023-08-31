import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-presonalizado',
  templateUrl: './componente-presonalizado.component.html',
  styleUrls: ['./componente-presonalizado.component.css']
})
export class ComponentePresonalizadoComponent {
  @Input() nome = ""
  @Input() sobrenome = "";
}
