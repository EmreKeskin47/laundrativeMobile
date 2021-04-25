import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {
  pageTitle = 'hesap sil';
  deleteReason: string = '';
  customReason: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  deleteButton() {
    this.authService.deleteUserAccount(this.deleteReason, this.customReason);
    this.router.navigate(['/login']);
  }

  selectReason(reason: number) {
    this.deleteReason.concat(reason.toString());
  }

  editCustomReason(event: any) {
    this.customReason = event.detail.value;
  }
}
