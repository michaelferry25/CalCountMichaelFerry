import { Component, OnInit } from '@angular/core';
import { IonHeader, IonText, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonHeader, IonText, IonList, IonItem, IonLabel, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class AboutPage implements OnInit {

  calCount: boolean = false;
    freeToUse: boolean = false;
    futurePlans: boolean = false;

  constructor() { }

  toggleItem(item: string) {
    
  }

  ngOnInit() {
  }

}