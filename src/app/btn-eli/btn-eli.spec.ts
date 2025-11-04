import { ComponentFixture, TestBed } from '@angular/core/testing'; 

import { BtnEli } from './btn-eli';

describe('BtnEli', () => {// define las variables para el componente y el fixture
  let component: BtnEli;
  let fixture: ComponentFixture<BtnEli>;

  beforeEach(async () => { // configura el entorno de pruebas para el componente BtnEli
    await TestBed.configureTestingModule({
      imports: [BtnEli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEli);// crea una instancia del componente BtnEli
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {// prueba para verificar que el componente se crea correctamente
    expect(component).toBeTruthy();
  });
});
