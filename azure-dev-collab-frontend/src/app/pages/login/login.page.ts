import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserLogInComponent } from 'src/app/components/Login/user-log-in/user-log-in.component';
import { UserRegisterComponent } from 'src/app/components/Login/user-register/user-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UserLogInComponent, UserRegisterComponent]
})
export class LoginPage implements OnInit {

  activeTab: string = 'login';
  constructor() { }

  ngOnInit() {
  }

}
