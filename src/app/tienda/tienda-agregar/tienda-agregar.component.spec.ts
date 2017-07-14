import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaAgregarComponent } from './tienda-agregar.component';

describe('TiendaAgregarComponent', () => {
  let component: TiendaAgregarComponent;
  let fixture: ComponentFixture<TiendaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
