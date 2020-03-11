import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunsterCountiesPage } from './munster-counties.page';

describe('MunsterCountiesPage', () => {
  let component: MunsterCountiesPage;
  let fixture: ComponentFixture<MunsterCountiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunsterCountiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunsterCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
