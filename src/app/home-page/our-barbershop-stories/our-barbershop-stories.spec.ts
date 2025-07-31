import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBarbershopStories } from './our-barbershop-stories';

describe('OurBarbershopStories', () => {
  let component: OurBarbershopStories;
  let fixture: ComponentFixture<OurBarbershopStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBarbershopStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBarbershopStories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
