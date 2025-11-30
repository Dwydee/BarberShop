import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePremiumServices } from './the-premium-services';

describe('ThePremiumServices', () => {
  let component: ThePremiumServices;
  let fixture: ComponentFixture<ThePremiumServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePremiumServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThePremiumServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
