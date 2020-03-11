import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeinsterPage } from './leinster.page';

describe('LeinsterPage', () => {
  let component: LeinsterPage;
  let fixture: ComponentFixture<LeinsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeinsterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeinsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
