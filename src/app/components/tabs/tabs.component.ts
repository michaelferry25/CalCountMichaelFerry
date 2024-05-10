import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherHome, featherZap, featherBook, featherInfo, featherClipboard } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonTabs, NgIconComponent, IonTabBar, IonTabButton, IonIcon],
  providers: [provideIcons({ featherHome, featherZap, featherBook, featherInfo, featherClipboard})],
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
