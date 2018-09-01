import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingEditedComponent } from './listing-edited.component';

describe('ListingEditedComponent', () => {
  let component: ListingEditedComponent;
  let fixture: ComponentFixture<ListingEditedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingEditedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingEditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
