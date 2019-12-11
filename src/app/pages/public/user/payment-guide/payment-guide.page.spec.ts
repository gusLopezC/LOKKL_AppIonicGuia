import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentGuidePage } from './payment-guide.page';

describe('PaymentGuidePage', () => {
  let component: PaymentGuidePage;
  let fixture: ComponentFixture<PaymentGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
