import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSale } from './first-sale';

describe('FirstSale', () => {
  let component: FirstSale;
  let fixture: ComponentFixture<FirstSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
