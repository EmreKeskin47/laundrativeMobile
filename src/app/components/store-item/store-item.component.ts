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
  @Input() public itemCategory;
  @Input() public itemImage;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let image = this.itemImage;
    this.itemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }
}
