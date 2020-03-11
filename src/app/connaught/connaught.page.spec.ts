import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnaughtPage } from './connaught.page';

describe('ConnaughtPage', () => {
  let component: ConnaughtPage;
  let fixture: ComponentFixture<ConnaughtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaughtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnaughtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
