import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent implements OnInit {
  @Input() public itemName;
  @Input() public itemCost;
  @Input() public itemImage;
  @Input() public itemDeliveryDate;
  @Input() public itemType;

  constructor(private sanitizer: DomSanitizer) {}
  typeNames = { 3: 'premium', 2: 'express', 1: 'standard', 0: 'standard' };

  ngOnInit() {
    let image = this.itemImage;
    this.itemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }
}
