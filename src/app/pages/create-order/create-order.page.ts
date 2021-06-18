import { MusteriAdres } from './../../models/MusteriAdres';
import { AuthService } from './../../services/auth.service';
import { Isletme } from './../../models/İsletme';
import { SemtListe } from './../../models/ui/SemtListe';
import { InstitutionService } from './../../services/institution.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  insList: Isletme[];
  selectedDistrict: SemtListe;

  selectedDate: Date;
  selectedTime: Date;
  selectedAddress: MusteriAdres;
  isLogged = this.authService.getCredentials().token;

  //Find a better way
  selectedServices: number[] = [];
  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected5 = false;
  isSelected6 = false;
  isSelected7 = false;

  constructor(
    private router: Router,
    private institutionService: InstitutionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  adjustSelectedDistrict(event: SemtListe) {
    this.selectedDistrict = event;
    console.log(event);
  }

  navigateToStoreList() {
    this.institutionService
      .getInstitutionsInNeighborhood(
        3,
        this.selectedServices,
        this.selectedDate,
        this.selectedTime
      )
      .subscribe((inst) => {
        this.insList = inst;
        this.institutionService.currentInstitutionList = inst;
      });
    if (!this.isLogged) {
      this.router.navigate([
        '/create-order/available-stores-list',
        { mahalleAdi: this.selectedDistrict.listeAdi },
      ]);
    } else {
      this.router.navigate(['/create-order/available-stores-list']);
    }
  }

  navigateToDetailedSearch() {
    this.router.navigate(['/create-order/detailed-search']);
  }
  navigateToDiscount() {
    this.router.navigate(['/profile/discount-list']);
  }

  laundry() {
    if (this.isSelected1) {
      this.removeFromSelected(1);
    } else {
      this.selectedServices.push(1);
    }
    this.isSelected1 = !this.isSelected1;
  }
  iron() {
    if (this.isSelected2) {
      this.removeFromSelected(2);
    } else {
      this.selectedServices.push(2);
    }
    this.isSelected2 = !this.isSelected2;
  }
  dryClean() {
    if (this.isSelected3) {
      this.removeFromSelected(3);
    } else {
      this.selectedServices.push(3);
    }
    this.isSelected3 = !this.isSelected3;
  }
  terziTadilat() {
    if (this.isSelected6) {
      this.removeFromSelected(6);
    } else {
      this.selectedServices.push(6);
    }
    this.isSelected6 = !this.isSelected6;
  }
  lostra() {
    if (this.isSelected7) {
      this.removeFromSelected(7);
    } else {
      this.selectedServices.push(7);
    }
    this.isSelected7 = !this.isSelected7;
  }
  haliYikama() {
    if (this.isSelected5) {
      this.removeFromSelected(5);
    } else {
      this.selectedServices.push(5);
    }
    this.isSelected5 = !this.isSelected5;
  }

  removeFromSelected(remove: number) {
    for (var i = 0; i < this.selectedServices.length; i++) {
      if (this.selectedServices[i] === remove) {
        this.selectedServices.splice(i, 1);
      }
    }
  }

  timeChange(event: any) {
    this.selectedTime = new Date(event);
  }

  dateChange(event: any) {
    this.selectedDate = new Date(event);
  }
  addressChange(event: MusteriAdres) {
    this.selectedAddress = event;
    this.institutionService.setSelectedDeliveryAddress(event);
  }

  ionViewDidEnter() {
    this.selectedDistrict = null;
  }
}
