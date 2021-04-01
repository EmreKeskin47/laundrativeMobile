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

  typeName: string;
  public oldOrder;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.deliveryDate) {
      this.oldOrder = false;
    } else this.oldOrder = true;
    if (this.type == 2) {
      this.typeName = 'express ';
    } else if (this.type == 3) {
      this.typeName = 'premium ';
    } else {
      this.typeName = 'standard ';
    }

    let image = this.itemIcon;
    this.itemIcon = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }
}
