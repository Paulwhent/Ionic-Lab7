import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UlsterCountiesPage } from './ulster-counties.page';

describe('UlsterCountiesPage', () => {
  let component: UlsterCountiesPage;
  let fixture: ComponentFixture<UlsterCountiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlsterCountiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UlsterCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
