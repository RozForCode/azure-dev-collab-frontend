import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ChatDataComponent } from '../components/home/chat-data/chat-data.component';
import { TeamMembersComponent } from '../components/home/team-members/team-members.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ChatDataComponent, TeamMembersComponent],
})
export class HomePage {
  constructor() {}
}
