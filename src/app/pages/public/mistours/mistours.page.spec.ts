import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MistoursPage } from './mistours.page';

describe('MistoursPage', () => {
  let component: MistoursPage;
  let fixture: ComponentFixture<MistoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MistoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
