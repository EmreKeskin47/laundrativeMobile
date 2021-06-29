import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odeme-onay',
  templateUrl: './odeme-onay.page.html',
  styleUrls: ['./odeme-onay.page.scss'],
})
export class OdemeOnayPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backToCard() {
    this.router.navigate(['/create-order']);
  }
}
