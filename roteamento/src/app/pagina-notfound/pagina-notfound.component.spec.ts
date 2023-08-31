import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNotfoundComponent } from './pagina-notfound.component';

describe('PaginaNotfoundComponent', () => {
  let component: PaginaNotfoundComponent;
  let fixture: ComponentFixture<PaginaNotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaNotfoundComponent]
    });
    fixture = TestBed.createComponent(PaginaNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
