import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonBackButton, IonText, IonList, IonPopover, IonItem, IonButton, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-meal-modal',
  templateUrl: './meal-modal.page.html',
  styleUrls: ['./meal-modal.page.scss'],
  standalone: true,
  imports: [IonHeader, IonPopover,IonBackButton, IonButton, IonText, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class MealModalPage {
  @Input() meal: any;

  constructor(private modalController: ModalController) {}

  // Closes the currently open modal dialog.
 //This method calls the `dismiss` method on the modal controller instance,
 //effectively closing the modal and removing it from the view.
 
  dismissModal() {
    this.modalController.dismiss();
  }
}
