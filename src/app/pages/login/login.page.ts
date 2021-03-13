import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public pageTitle = 'kullanıcı girişi';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }
}
