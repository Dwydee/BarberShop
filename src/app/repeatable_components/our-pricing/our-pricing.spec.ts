import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPricing } from './our-pricing';

describe('OurPricing', () => {
  let component: OurPricing;
  let fixture: ComponentFixture<OurPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
