import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaInfoComponent } from './tienda-info.component';

describe('TiendaInfoComponent', () => {
  let component: TiendaInfoComponent;
  let fixture: ComponentFixture<TiendaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
