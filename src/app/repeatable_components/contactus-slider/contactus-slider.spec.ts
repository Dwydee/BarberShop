import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusSlider } from './contactus-slider';

describe('ContactusSlider', () => {
  let component: ContactusSlider;
  let fixture: ComponentFixture<ContactusSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactusSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
