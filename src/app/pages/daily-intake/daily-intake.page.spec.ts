import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyIntakePage } from './daily-intake.page';

describe('DailyIntakePage', () => {
  let component: DailyIntakePage;
  let fixture: ComponentFixture<DailyIntakePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyIntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
