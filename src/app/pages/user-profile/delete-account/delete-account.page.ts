import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {
  pageTitle = 'hesap sil';

  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
