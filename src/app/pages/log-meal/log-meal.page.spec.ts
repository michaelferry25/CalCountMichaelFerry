import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogMealPage } from './log-meal.page';

describe('LogMealPage', () => {
  let component: LogMealPage;
  let fixture: ComponentFixture<LogMealPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
