import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonText, IonSelect, IonSelectOption, IonButton, IonSegment, IonSegmentButton, IonInput, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-daily-intake',
  templateUrl: './daily-intake.page.html',
  styleUrls: ['./daily-intake.page.scss'],
  standalone: true,
  imports: [IonHeader, CommonModule, FormsModule, IonText, IonList, IonSelect, IonButton, IonSelectOption, IonSegment, IonSegmentButton, IonInput, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class DailyIntakePage implements OnInit {
  age: number = 0;  // Default value as 0
  sex: string = 'male';  // default to 'male'
  weight: number = 0;  // Default value as 0
  height: number = 0;  // Default value as 0
  activityLevel: number = 1.2;  // Default to some meaningful default
  goal: number = 0;  // Default value as 0
  results: string = '';
  mResults: string = '';
  carbs: number = 0;
  protein: number = 0;
  fat: number = 0;

  constructor() { }

  ngOnInit() {}

  calcDailyCals(): void {
    const weightKg = this.weight * 0.453592;
    const heightCm = this.height * 2.54;
    let calories: number;

    if (this.sex === 'male') {
      calories = (88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * this.age)) * this.activityLevel;
    } else {
      calories = (447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.33 * this.age)) * this.activityLevel;
    }

    calories = Math.round(calories + this.goal);
    this.results = `Estimated Daily Calories: ${calories}`;
    this.calcDailyMacros(calories);
  }

  calcDailyMacros(calories: number): void {
    this.carbs = Math.round((calories * 0.4) / 4);
    this.protein = Math.round((calories * 0.3) / 4);
    this.fat = Math.round((calories * 0.3) / 9);
    this.mResults = `Macros - Carbs: ${this.carbs}g, Protein: ${this.protein}g, Fat: ${this.fat}g`;
  }

  calcCalsFromMacros(): void {
    const carbsCalories = this.carbs * 4;
    const proteinCalories = this.protein * 4;
    const fatCalories = this.fat * 9;
    const totalCalories = carbsCalories + proteinCalories + fatCalories;

    this.mResults = `Estimated Daily Calories from Macros: ${totalCalories}`;
  }

  resetResults(): void {
    this.results = '';
    this.mResults = '';
  }
}
