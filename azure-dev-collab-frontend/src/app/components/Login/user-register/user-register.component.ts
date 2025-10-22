import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
  standalone: true,
})
export class UserRegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  register() {
    if (!this.username || !this.password || !this.confirmPassword) {
      this.message = 'Please fill in all fields.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match.';
      return;
    }

    // Simulate successful registration
    this.message = 'Registration successful! Redirecting to login...';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
