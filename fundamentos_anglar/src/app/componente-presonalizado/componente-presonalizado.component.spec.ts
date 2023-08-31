import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePresonalizadoComponent } from './componente-presonalizado.component';

describe('ComponentePresonalizadoComponent', () => {
  let component: ComponentePresonalizadoComponent;
  let fixture: ComponentFixture<ComponentePresonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePresonalizadoComponent]
    });
    fixture = TestBed.createComponent(ComponentePresonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
