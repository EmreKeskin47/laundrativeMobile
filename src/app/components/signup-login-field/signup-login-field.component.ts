import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup-login-field',
  templateUrl: './signup-login-field.component.html',
  styleUrls: ['./signup-login-field.component.scss'],
})
export class SignupLoginFieldComponent implements OnInit {
  @Input() public header;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }
}
