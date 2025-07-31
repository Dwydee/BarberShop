import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBarbersComponent } from './our-barbers.component';

describe('OurBarbersComponent', () => {
  let component: OurBarbersComponent;
  let fixture: ComponentFixture<OurBarbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurBarbersComponent]
    });
    fixture = TestBed.createComponent(OurBarbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
