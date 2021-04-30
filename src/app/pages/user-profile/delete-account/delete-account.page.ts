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
  other: string = '';
  select: boolean = true;
  otherSelected: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  deleteButton() {
    this.authService.deleteUserAccount(
      this.otherSelected ? this.other : this.deleteReason
    );
    this.router.navigate(['/login']);
  }

  selectReason(reason: any) {
    this.select = !this.select;
    this.deleteReason = reason;
  }

  editCustomReason(event: any) {
    this.other = event.detail.value;
  }

  customReason() {
    this.select = !this.select;
    this.otherSelected = !this.otherSelected;
  }
}
