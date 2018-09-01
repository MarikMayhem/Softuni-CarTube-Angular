import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDeletedComponent } from './listing-deleted.component';

describe('ListingDeletedComponent', () => {
  let component: ListingDeletedComponent;
  let fixture: ComponentFixture<ListingDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
