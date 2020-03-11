import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeinsterCountiesPage } from './leinster-counties.page';

describe('LeinsterCountiesPage', () => {
  let component: LeinsterCountiesPage;
  let fixture: ComponentFixture<LeinsterCountiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeinsterCountiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeinsterCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
