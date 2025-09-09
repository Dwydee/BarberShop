import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBarbers } from './our-barbers';

describe('OurBarbers', () => {
  let component: OurBarbers;
  let fixture: ComponentFixture<OurBarbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBarbers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBarbers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
