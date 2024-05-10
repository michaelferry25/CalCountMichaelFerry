import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealPlansPage } from './meal-plans.page';

describe('MealPlansPage', () => {
  let component: MealPlansPage;
  let fixture: ComponentFixture<MealPlansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
