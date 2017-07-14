import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaGaleriaComponent } from './tienda-galeria.component';

describe('TiendaGaleriaComponent', () => {
  let component: TiendaGaleriaComponent;
  let fixture: ComponentFixture<TiendaGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
