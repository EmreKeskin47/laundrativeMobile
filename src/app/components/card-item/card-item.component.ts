import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() public itemCost;
  @Input() public deliveryDate;
  @Input() public itemName;
  @Input() public type;
  @Input() public itemIcon;
  @Input() public amount;

  typeName: string;
  typeNames = { 3: 'premium', 2: 'express', 1: 'standard', 0: 'standard' };

  public oldOrder;
  priceWithType = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.deliveryDate) {
      this.oldOrder = false;
    } else this.oldOrder = true;

    let image = this.itemIcon;
    this.itemIcon = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
    this.calculatePriceWithType();
  }

  calculatePriceWithType() {
    this.priceWithType =
      parseInt(this.amount) *
      (this.type > 1 ? this.itemCost + this.type - 1 * 5 : this.itemCost);
  }

  ionViewDidEnter() {}
}
