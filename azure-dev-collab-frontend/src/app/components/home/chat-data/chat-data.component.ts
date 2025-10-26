import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-data',
  templateUrl: './chat-data.component.html',
  styleUrls: ['./chat-data.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true
})
export class ChatDataComponent implements OnInit {

  chatMessages: { sender: 'user' | 'ai'; text: string }[] = [];
  newMessage: string = '';

  constructor() {}

  ngOnInit() {
    // Simulated hardcoded chat messages
    this.chatMessages = [
      { sender: 'ai', text: 'Hello! I’m your collaborative AI assistant.' },
      { sender: 'user', text: 'Hi! Can you summarize our current project goals?' },
      { sender: 'ai', text: 'Sure! The project is an AI-powered dev collaboration platform built with Angular and C# backend.' }
    ];
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    // Add user's message
    this.chatMessages.push({ sender: 'user', text: this.newMessage });
    
    // Simulate AI reply
    setTimeout(() => {
      this.chatMessages.push({
        sender: 'ai',
        text: 'This is a simulated AI response for now.'
      });
    }, 800);

    this.newMessage = '';
  }
}
