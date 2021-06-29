import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HesapOlusturulduPage } from './hesap-olusturuldu.page';

describe('HesapOlusturulduPage', () => {
  let component: HesapOlusturulduPage;
  let fixture: ComponentFixture<HesapOlusturulduPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapOlusturulduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HesapOlusturulduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
