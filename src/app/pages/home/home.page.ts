import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButton, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonButton, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})

export class HomePage implements OnInit {

  recentMeal: any;
  dailyMotivation: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //get the first item from 'meals' stored in localStorage.
    this.recentMeal = JSON.parse(localStorage.getItem('meals') || '[]')[0];
      // to check if 'recentMeal' is null (i.e., not found in localStorage).
    if(this.recentMeal == null){
      // make a default meal object when no meals are found in localStorage.
      this.recentMeal = [{
        "name": "wdfefd",  // Default name
        "calories": 0,     // Default calories set to 0
        "protein": 0,      // Default protein set to 0
        "carbs": 0,        // Default carbohydrates set to 0
        "fats": 0,         // Default fats set to 0
        "sugars": 0,       // Default sugars set to 0
        "description": "dsv"  // Default description
    }];
}

// send the current state of 'meals' from localStorage to the console for debugging.
console.log(localStorage.getItem('meals') || '[]');

// HTTP GET request to get an array of motivational quotes from a local JSON file.
this.http.get<any[]>("assets/daily-motivation.json").subscribe(
    (data: any[]) => {
        // Generate a random index based on the length of the received data.
        const randomIndex = Math.floor(Math.random() * data.length);

        // Set 'dailyMotivation' to a random quote along with its author from the array.
        this.dailyMotivation = data[randomIndex].quote + " - " + data[randomIndex].author;

        // send the fetched data to the console for debugging.
        console.log(data);
    },
    (error) => {
        // send any errors that occur during the HTTP request to the console.
        console.error(error);
    }
);
}
}
