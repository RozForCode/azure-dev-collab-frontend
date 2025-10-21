import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-history-chat',
  templateUrl: './history-chat.page.html',
  styleUrls: ['./history-chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoryChatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
