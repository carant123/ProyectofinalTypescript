import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaTopComponent } from './tienda-top.component';

describe('TiendaTopComponent', () => {
  let component: TiendaTopComponent;
  let fixture: ComponentFixture<TiendaTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
