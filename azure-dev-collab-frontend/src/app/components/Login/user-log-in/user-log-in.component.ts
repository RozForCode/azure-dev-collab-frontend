import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
  standalone: true,
})
export class UserLogInComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    // Hardcoded credentials
    const hardcodedUser = { username: 'admin', password: '1234' };

    if (this.username === hardcodedUser.username && this.password === hardcodedUser.password) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
