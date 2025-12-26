import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadAutomation } from './lead-automation';

describe('LeadAutomation', () => {
  let component: LeadAutomation;
  let fixture: ComponentFixture<LeadAutomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadAutomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadAutomation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
