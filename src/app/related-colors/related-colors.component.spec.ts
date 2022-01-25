import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedColorsComponent } from './related-colors.component';

describe('RelatedColorsComponent', () => {
  let component: RelatedColorsComponent;
  let fixture: ComponentFixture<RelatedColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
