import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hesap-olusturuldu',
  templateUrl: './hesap-olusturuldu.page.html',
  styleUrls: ['./hesap-olusturuldu.page.scss'],
})
export class HesapOlusturulduPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCard() {
    this.router.navigate(['/yeni-siparis']);
  }
}
