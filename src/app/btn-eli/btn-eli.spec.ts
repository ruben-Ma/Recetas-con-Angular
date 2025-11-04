import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEli } from './btn-eli';

describe('BtnEli', () => {
  let component: BtnEli;
  let fixture: ComponentFixture<BtnEli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnEli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
