import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'log-meal',
    loadComponent: () => import('./pages/log-meal/log-meal.page').then( m => m.LogMealPage)
  },
  {
    path: 'daily-intake',
    loadComponent: () => import('./pages/daily-intake/daily-intake.page').then( m => m.DailyIntakePage)
  },
  {
    path: 'meal-plans',
    loadComponent: () => import('./pages/meal-plans/meal-plans.page').then( m => m.MealPlansPage)
  },
];
