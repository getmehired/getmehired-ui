import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTalentComponent } from './save-talent.component';

describe('SaveTalentComponent', () => {
  let component: SaveTalentComponent;
  let fixture: ComponentFixture<SaveTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
