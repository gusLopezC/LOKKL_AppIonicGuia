import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelReservationPage } from './cancel-reservation.page';

describe('CancelReservationPage', () => {
  let component: CancelReservationPage;
  let fixture: ComponentFixture<CancelReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
