import { kategoriAdi, SiparisService } from './../../services/siparis.service';
import { IsletmeService } from './../../services/isletme.service';
import { KategoriCins } from './../../models/KategoriCins';
import { Hizmet } from '../../models/Hizmet';
import { Isletme } from './../../models/İsletme';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IonContent, IonList, IonSlides } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hizmet-ekle',
  templateUrl: './hizmet-ekle.page.html',
  styleUrls: ['./hizmet-ekle.page.scss'],
})
export class HizmetEklePage implements OnInit {
  selectedIns: Isletme;
  storeItemList: KategoriCins[] = [];
  storeMenu: Hizmet[] = [];
  listToDisplay: Hizmet[];
  itemCategoryName = kategoriAdi;

  activeCategory = 0;
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  listElements = [];
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  searchName: string;
  selectedCategoryOptions: number[] = [];
  seciliUrunler: Hizmet[] = [];
  categoriClick: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private isletmeSrv: IsletmeService,
    private siparisSrv: SiparisService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectedCategoryOptions = this.isletmeSrv.getSelected();
    this.activeCategory = this.selectedCategoryOptions[0];
    this.route.params.subscribe((params) => {
      if (params['kategoriler']) {
        this.isletmeSrv.getItemsInInstitution(1).subscribe(async (item) => {
          console.log(item);

          this.storeItemList = item;
          for (let i = 0; i < this.storeItemList.length; i++) {
            for (let j = 0; j < this.storeItemList[i].hizmetler.length; j++) {
              let cins = new Hizmet(
                1,
                this.storeItemList[i].kategoriId,
                this.setImage(this.storeItemList[i].hizmetler[j].hizmet_resmi),
                this.storeItemList[i].hizmetler[j].hizmet_id,
                this.storeItemList[i].hizmetler[j].hizmet_adi,
                this.storeItemList[i].hizmetler[j].fiyatlar,
                null
              );
              if (this.selectedCategoryOptions.includes(cins.kategori_id)) {
                this.storeMenu.push(cins);
              }
            }
          }
        });
        this.storeMenu.sort((a, b) => (a.kategori_id > b.kategori_id ? 1 : -1));
      }
      this.listToDisplay = this.storeMenu;
    });
  }

  // Get all list viewchildren when ready
  ngAfterViewInit() {
    this.updateList();
  }

  updateList() {
    this.lists.changes.subscribe((_) => {
      this.listElements = this.lists.toArray();
    });
  }

  // Handle click on a button within slides
  // Automatically scroll to viewchild

  selectCategory(index) {
    this.categoriClick++;
    if (index != 0) {
      for (let i = 0; i < this.storeMenu.length; i++) {
        if (this.storeMenu[i].kategori_id == index) {
          index = i;
          break;
        }
      }
      index = index + this.seciliUrunler.length;
      this.activeCategory = this.listToDisplay[index].kategori_id;
    } else {
      this.activeCategory = 0;
    }
    const child = this.listElements[index].nativeElement;
    this.content.scrollToPoint(0, child.offsetTop - 40, 1000).then(() => {
      this.categoriClick--;
    });
  }

  // Listen to ion-content scroll output
  // Set currently visible active section
  onScroll() {
    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        this.slides.slideTo(i);
        console.log(i);
        if (this.categoriClick === 0) {
          if (i <= this.seciliUrunler.length) {
            this.activeCategory = 0;
          } else {
            this.activeCategory =
              this.storeMenu[i - this.seciliUrunler.length - 1].kategori_id;
          }
        }
        break;
      }
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 250 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  setImage(image) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }

  //SEARCHBAR
  onInput(event) {
    this.searchName = event.detail.value;
  }

  onCancel() {
    this.searchName = '';
  }

  ionViewWillLeave() {
    this.storeMenu = [];
    this.seciliUrunler = [];
  }

  urunSecim(item: Hizmet) {
    let index = this.seciliUrunler.indexOf(item);
    if (index >= 0) {
      this.seciliUrunler[index].adet++;
    } else {
      item.adet = 1;
      this.seciliUrunler.push(item);
    }
    this.listToDisplay = this.seciliUrunler.concat(this.storeMenu);
  }

  adetEksi(item: Hizmet) {
    let index = this.seciliUrunler.indexOf(item);
    if (index >= 0) {
      if (this.seciliUrunler[index].adet > 1) this.seciliUrunler[index].adet--;
      else {
        this.seciliUrunler.splice(index, 1);
      }
    }
  }

  navigateToMagazaSecim() {
    this.siparisSrv.setSepeteEklenenler(this.seciliUrunler);
    this.router.navigate(['yeni-siparis/magaza-secim']);
  }
}
