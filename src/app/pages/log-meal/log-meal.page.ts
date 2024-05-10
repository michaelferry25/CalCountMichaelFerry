import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonText, IonButton, IonTextarea, IonBackButton, IonInput, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-log-meal',
  templateUrl: './log-meal.page.html',
  styleUrls: ['./log-meal.page.scss'],
  standalone: true,
  imports: [IonHeader, FormsModule, CommonModule, IonButton, IonTextarea, IonText, IonBackButton, IonInput, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class LogMealPage implements OnInit {
  meal = { name: '', calories: 0, protein: 0, carbs: 0, fats: 0, sugars: 0, description: '' };
  recentMeals: any[] = [];
  favoriteMeals: any[] = [];  // Array to hold favorite meals

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.loadMeals();   //load recent meals
    this.loadFavorites();  // Load favorite meals from local storage
  }
//function to submiut meal to recenrs
  submitMeal() {
    this.recentMeals.unshift({...this.meal});
    if (this.recentMeals.length > 5) {
      this.recentMeals.pop();
    }
    localStorage.setItem('meals', JSON.stringify(this.recentMeals));
    this.meal = { name: '', calories: 0, protein: 0, carbs: 0, fats: 0, sugars: 0, description: '' };
  }
//function to add to favourites
  addToFavorites(meal: any) {
    this.favoriteMeals.unshift({...meal});
    localStorage.setItem('favorites', JSON.stringify(this.favoriteMeals));
  }
//load recent meals funtion
  loadMeals() {
    this.recentMeals = JSON.parse(localStorage.getItem('meals') || '[]');
  }
//to load favourites function
  loadFavorites() {
    this.favoriteMeals = JSON.parse(localStorage.getItem('favorites') || '[]');
  }
  //function to confirm deletion  from recent meals
  async confirmDelete(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this meal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes, Delete It',
          handler: () => {
            this.deleteMeal(index);
          }
        }
      ]
    });

    await alert.present();
  }
//function to delte meal
  deleteMeal(index: number) {
    this.recentMeals.splice(index, 1);
    localStorage.setItem('meals', JSON.stringify(this.recentMeals));
  }

}

