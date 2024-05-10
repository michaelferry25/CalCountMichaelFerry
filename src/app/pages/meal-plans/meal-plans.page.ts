import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonText, IonList, IonPopover, IonItem, IonButton, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MealModalPage } from 'src/app/components/meal-modal/meal-modal.page';
@Component({
  selector: 'app-meal-plans',
  templateUrl: './meal-plans.page.html',
  styleUrls: ['./meal-plans.page.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [IonHeader, IonPopover, IonButton, CommonModule, FormsModule, IonText, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],

})
export class MealPlansPage implements OnInit {

  mealPlans: any;
  
  constructor(private http: HttpClient, private modalController: ModalController) { }

  ngOnInit() {
      // Defines the URL of the API 
  const url = `https://jsonblob.com/api/jsonBlob/1238272161176477696`;

  //HTTP request to the URL
  this.http.get<any>(url).subscribe(
    (data: any) => {
      // then assigns the data received from the API to the 'mealPlans
      this.mealPlans = data;
    },
    (error) => {
      // Logs any errors 
      console.error(error);
    }
  );
}


async viewMeal(meal: any) {
  const modal = await this.modalController.create({
    component: MealModalPage,
    componentProps: { meal }
  });

  // Present the modal.
  return await modal.present();
}
}
  


