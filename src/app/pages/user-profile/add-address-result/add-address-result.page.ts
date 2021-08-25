import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address-result',
  templateUrl: './add-address-result.page.html',
  styleUrls: ['./add-address-result.page.scss'],
})
export class AddAddressResultPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToCard() {
    this.router.navigate(['/yeni-siparis']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
