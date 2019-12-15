import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatetourPage } from './createtour.page';

describe('CreatetourPage', () => {
  let component: CreatetourPage;
  let fixture: ComponentFixture<CreatetourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatetourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
